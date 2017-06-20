import React from 'react'
import { StackNavigator } from 'react-navigation'


// screens
import CategoriesScreen from '../screens/CategoriesScreen'
import AnimalListScreen from '../screens/AnimalListScreen'
import CorkScreen from '../screens/CorkScreen'

export const RootNav = StackNavigator({
    CategoriesScreen: {
        screen: CategoriesScreen,
        navigationOptions: ({ navigation }) => ({
            title: `Main Screen`,
            headerStyle: {
                backgroundColor: '#EE5350'
            },
            headerTintColor: '#FFF'
        })
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
    }
})