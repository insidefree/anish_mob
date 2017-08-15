import React from 'react'
import { StackNavigator, Button, Text } from 'react-navigation'
import { Platform } from 'react-native'

// screens
import CategoriesScreen from '../screens/CategoriesScreen'
import AnimalListScreen from '../screens/AnimalListScreen'
import CorkScreen from '../screens/CorkScreen'
import AddFormScreen from '../screens/AddFormScreen'
import StuffScreen from '../screens/StuffScreen'

// components
import CategoryListItem from '../components/Categories/CategoryListItem'


export const RootNav = StackNavigator({
    AnimalListScreen: {
        screen: AnimalListScreen
    },
    CategoriesScreen: {
        screen: CategoriesScreen
    },
    CorkScreen: {
        screen: CorkScreen,
        navigationOptions: ({ navigation }) => ({
            title: `Cork Screen`,
            headerStyle: {
                height: (Platform.OS === 'android') ? 64 : 55,
                paddingTop: (Platform.OS === 'android') ? 20 : 15,
                backgroundColor: '#EE5350'

            },
            headerTintColor: '#FFF',
        })
    },
    CategoryListItem: {
        screen: AnimalListScreen,
        navigationOptions: ({ navigation }) => ({
            title: `Animals List`,
            headerStyle: {
                backgroundColor: '#EE5350'
            },
            headerTintColor: '#FFF',
        })
    },
    AddFormScreen: {
        screen: AddFormScreen
    },
    StuffScreen: {
        screen: StuffScreen
    }
})