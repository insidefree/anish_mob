import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class LoginScreen extends Component {
    componentDidMount() {
        console.log('componentDidMount', this.props)
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: 'red' }}>Login Screen</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps', state)
    return {
        logged: state.auth.loggedIn,
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(LoginScreen)