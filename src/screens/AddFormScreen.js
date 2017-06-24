import React, { Component } from 'react'
import { View, Text } from 'react-native'


import AddForm from '../components/AddAnimal/AddForm'


export default class AddFormScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <AddForm />
            </View>
        )
    }
}