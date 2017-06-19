import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


// components
import CategoryList from '../components/Categories/CategoryList'


export default class CategoriesScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('AnimalListScreen')}
                >
                    <Text>PRESS ME!!!</Text>
                </TouchableOpacity>
                <CategoryList />
            </View>
        )
    }
}
