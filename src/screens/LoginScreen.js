import React, { Component } from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import firebaseApp from '../config/firebase'
import { AccessToken, LoginManager } from 'react-native-fbsdk'
import { loginSuccess } from '../actions/authenticate'


class LoginScreen extends Component {
    constructor(props){
        super(props)
        this.state={
            error : null
        }
    }
    onLogin = async () => {
        try {
         
            const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
            if (result.isCancelled) {
                throw new Error('Please sign in before continue');
            }
            const tokenData = await AccessToken.getCurrentAccessToken();
            const token = tokenData.accessToken.toString();
            const credential = firebaseApp.auth.FacebookAuthProvider.credential(token);
            const user = await firebaseApp.auth().signInWithCredential(credential);
           
            this.props.loginSuccess(user);
        } catch (error) {
            console.log('LOGIN ERROR: ', error)
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: 'red' }}>Login Screen</Text>
                <ActivityIndicator
                    animating={true}
                    color="#444"
                    size="large"
                />
                {
                    this.state.error ? (
                        <Text style={styles.error}>{this.state.error}</Text>
                    ) : null
                }
                <TouchableOpacity
                    onPress={this.onLogin}
                    style={{
                        marginTop: 10,
                        padding: 10,
                        backgroundColor: '#3b5998',
                        borderRadius: 5,
                    }}
                >
                    <Text style={{ color: '#fff' }}>
                        Login with Facebook
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps', state)
    return {
        logged: state.auth.loggedIn,
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { loginSuccess })(LoginScreen)