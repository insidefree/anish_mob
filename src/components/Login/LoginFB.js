import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { firebaseApp } from '../../config/firebase'
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk'
import firebase from 'firebase'

export default class LoginFB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logged: false
        }
    }

    handleLoggin = () => {
        if (!this.state.logged) {
            LoginManager.logInWithPublishPermissions(['publish_actions'])
                .then(result => {
                    if (result.isCanceled) {
                        alert('Cancel login')
                    }
                    this.setState({ logged: true })
                    AccessToken.getCurrentAccessToken()
                        .then(data => alert(data.accessToken.toString()))
                        .catch(error => console.log('getCurrentAccessToken error:', error))
                })
                .catch(error => console.log('logInWithPublishPermissions error:', error))
        } else {
            this.setState({ logged: flase })
            LoginManager.logOut()
        }
    }

    onLogin = async () => {
        try {
            const result = await LoginManager.logInWithPublishPermissions(['publish_actions'])
            const tokenData = await AccessToken.getCurrentAccessToken()
            const token = tokenData.accessToken.toString()
            const credential = await firebase.auth().signInWithCredential(token)
            console.log('credential: ', credential)
        } catch (error) {
            console.log('onLogin error: ', error.message)
            // do some here
        }
    }

    _fbAuth() {
        LoginManager.logInWithReadPermissions(['public_profile', 'email'])
            .then(result => {
                if (result.isCancelled) {
                    alert('Login cancelled')
                } else {
                    AccessToken.getCurrentAccessToken()
                        .then(accessTokenData => {
                            const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken)
                            firebase.auth().signInWithCredential(credential)
                            .then(result => {
                                // Promise was succesful
                            }, error => {
                                // Promise was reject
                            })
                        })
                        .catch(error => console.log('getCurrentAccessToken error:', error))
                }
            })
    }

    render() {
        return (
            <View>
                <Text>Welcome</Text>
                <Text>Instraction</Text>
                <LoginButton
                    publishPermissions={['publish_actions']}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                alert('login error: ', result.error)
                            } else if (result.isCanceled) {
                                alert('login canceled')
                            } else {
                                AccessToken.getCurrentAccessToken()
                                    .then(data => alert(data.accessToken.toString()))
                            }
                        }
                    }
                    onLogoutFinished={() => alert('logout')}
                />
                <TouchableOpacity
                    onPress={this._fbAuth}
                    style={{
                        marginTop: 10,
                        padding: 10,
                        backgroundColor: 'green',
                        borderRadius: 5,
                    }}
                >
                    <Text style={{ color: '#fff' }}>
                        {this.state.logged ? 'da' : 'net'}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}