import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


export default class Categories extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>categories</Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('AnimalList')}
                >
                    <Text>PRESS ME!!!</Text>
                </TouchableOpacity>
            </View>
        )
    }
}