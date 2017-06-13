import React, { Component } from 'react'
import { FormLabel, FormInput } from 'react-native-elements'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'

import { firebaseApp } from '../config/firebase'


class LoginForm extends Component {
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
        this.setState({error: {message: ""}})
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => this.setState({ error }))
    };

    render() {
        const { textStyle, inputStyle, viewStyle, textStyleBtn, buttonStyle } = styles;
        return (
            <View style={{ marginVertical: 8 }}>
              <Text style={{ fontSize: 18, padding: 16, alignSelf: 'center' }}>
                {this.props.title}
              </Text>
                <View style={viewStyle}>
                    <Text style={textStyle}>Email</Text>
                    <TextInput
                        autoCorrect={false}
                        style={inputStyle}
                        keyboardType="email-address"
                        placeholder="Email"
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
                        onChangeText={password => { this.setState({ password }) }}
                        value={this.state.password}
                    />
                </View>
                <TouchableOpacity
                    onPress={this.handleSubmit}
                    style={buttonStyle}
                >
                    <Text style={textStyleBtn}>SingUP</Text>
                </TouchableOpacity>
                {
                    this.state.error.message.length > 0 &&
                    <Text style={{ backgroundColor: 'red', padding: 16, color: '#fff' }}>
                        {this.state.error.message}
                    </Text>
                }
            </View>
        )
    }
}

const styles = {
    textStyle: {
        fontSize: 18,
        paddingLeft: 5,
        flex: 1,
        color: '#000'
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    viewStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonStyle: {
        flex: 1,
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

export default LoginForm
