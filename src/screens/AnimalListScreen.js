import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'


// components
import { AnimalList } from '../components/AnimalList/AnimalList'
import TestComp from '../components/TestComp/TestComp'


export default class AnimalListScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: `Animals List`,
            headerStyle: {
                backgroundColor: '#EE5350'
            },
            headerTintColor: '#FFF',
            headerRight: <TouchableOpacity onPress={() => { navigation.navigate('CategoriesScreen') }}>
                <Image source={require('../assets/menuButton.png')} style={{
                    height: 25.5,
                    width: 31,
                    marginRight: 20
                }} />
            </TouchableOpacity>
        }

    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <AnimalList />
            </View>
        )
    }
}