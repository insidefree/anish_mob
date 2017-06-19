import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


// components
import { Categories } from '../components/Categories/Categories'


export default class CategoriesScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('AnimalListScreen')}
                >
                    <Text>PRESS ME!!!</Text>
                </TouchableOpacity>
                <Categories />
            </View>
        )
    }
}
