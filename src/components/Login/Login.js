import React, { Component } from 'react'
import { FormLabel, FormInput } from 'react-native-elements'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { Button } from 'react-native-elements'

import { firebaseApp } from '../../config/firebase'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            error: {
                message: ""
            }
        }
    }

    handleSubmit = () => {
        const { email, password } = this.state
        this.setState({ error: { message: "" } })
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => this.setState({ error }))
        console.log(this.state.error)
    };

    render() {
        const { textStyle, inputStyle, viewStyle, textStyleBtn, buttonStyle } = styles;
        return (
            <View>
                <Image source={require('../../assets/menu/loginScreen.jpeg')} style={{height: 200, width: null}}>
                    <View style={viewStyle}>
                        <Text style={textStyle}>Email</Text>
                        <TextInput
                            autoCorrect={false}
                            style={inputStyle}
                            keyboardType="email-address"
                            placeholder="Email"
                            underlineColorAndroid='transparent'
                            onChangeText={email => { this.setState({ email }) }}
                            value={this.state.email}
                        />
                    </View>
                    <View style={viewStyle}>
                        <Text style={textStyle}>Password</Text>
                        <TextInput
                            autoCorrect={false}
                            style={inputStyle}
                            secureTextEntry
                            placeholder="Password"
                            underlineColorAndroid='transparent'
                            onChangeText={password => { this.setState({ password }) }}
                            value={this.state.password}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={this.handleSubmit}
                        style={buttonStyle}
                    >
                        <Text style={textStyleBtn}>Sing Up</Text>
                    </TouchableOpacity>
                    {this.state.error.message.length > 0 && <Text>{this.state.error.message}</Text>}
                </Image>
            </View>
        )
    }
}

const styles = {
    textStyle: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 5,
        color: '#000'
    },
    inputStyle: {
        flex: 2,
        color: '#000',
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
    },
    viewStyle: {
        // flex: 1,
        height: 75,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonStyle: {
        // flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#ffb94d',
        marginRight: 5,
        marginLeft: 5,
        backgroundColor: '#fff'
    },
    textStyleBtn: {
        alignSelf: 'center',
        color: '#ffb94d',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export default Login