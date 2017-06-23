import React from 'react'
import { StackNavigator, Button, Text } from 'react-navigation'

// screens
import CategoriesScreen from '../screens/CategoriesScreen'
import AnimalListScreen from '../screens/AnimalListScreen'
import CorkScreen from '../screens/CorkScreen'

// components
import CategoryListItem from '../components/Categories/CategoryListItem'


export const RootNav = StackNavigator({
    CategoriesScreen: {
        screen: CategoriesScreen,
    },
    AnimalListScreen: {
        screen: AnimalListScreen,
        navigationOptions: ({ navigation }) => ({
            title: `Animals List`,
            headerStyle: {
                backgroundColor: '#EE5350'
            },
            headerTintColor: '#FFF',
        })
    },
    CorkScreen: {
        screen: CorkScreen,
        navigationOptions: ({ navigation }) => ({
            title: `Cork Screen`,
            headerStyle: {
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
    }
})