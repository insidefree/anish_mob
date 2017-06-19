import React, { Component } from 'react'
import { View, Text } from 'react-native'


// components
import { AnimalList } from '../components/AnimalList/AnimalList'

export default class AnimalListScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <AnimalList />
            </View>
        )
    }
}