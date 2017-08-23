import React, { Component } from 'react'
import { View, Test, TouchableOpacity } from 'react-native'
import { LoginButton } from 'react-native-fbsdk'

export default class Loginfbtest extends Component {
    render() {
        return (
            <View>
                <LoginButton
                    publishPermissions={["publish_actions"]}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                alert("Login failed with error: " + result.error);
                            } else if (result.isCancelled) {
                                alert("Login was cancelled");
                            } else {
                                alert("Login was successful with permissions: " + result.grantedPermissions)
                            }
                        }
                    }
                    onLogoutFinished={() => alert("User logged out")} />
            </View>
        )
    }
}