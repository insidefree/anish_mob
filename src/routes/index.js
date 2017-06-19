import React from 'react'
import { StackNavigator } from 'react-navigation'


// screens
import CategoriesScreen from '../screens/CategoriesScreen'
import AnimalListScreen from '../screens/AnimalListScreen'


export const RootNav = StackNavigator({
    CategoriesScreen: {
        screen: CategoriesScreen,
        navigationOptions: ({ navigation }) => ({
            title: `Main Screen`,
            headerStyle: {
                backgroundColor: 'coral',
            }
        })
    },
    AnimalListScreen: {
        screen: AnimalListScreen,
        navigationOptions: ({ navigation }) => ({
            title: `Animals List`,
            headerStyle: {
                backgroundColor: 'coral',
            }
        })
    }
})