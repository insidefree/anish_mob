import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native'
import Expo from 'expo'

// components
import { AnimalList } from '../components/AnimalList/AnimalList'
import Header from '../components/common/Header'
import TestComp from '../components/TestComp/TestComp'


export default class AnimalListScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        console.log('!!!! Expo.Constants.statusBarHeight', Expo.Constants.statusBarHeight)
        return {
            title: 'Animals List',
            headerStyle: {
                height: 60,
                paddingTop: (Platform.OS === 'android') ? 25 : 16,
                backgroundColor: '#EE5350'
            },
            headerTintColor: '#FFF',
            headerRight: <TouchableOpacity onPress={() => { navigation.navigate('CategoriesScreen') }}>
                <Image source={require('../assets/menuButton.png')} style={{
                    height: 25.5,
                    width: 31,
                    marginRight: 20
                }} />
            </TouchableOpacity>,
            // header: <Header title={'AnimalList'} />
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