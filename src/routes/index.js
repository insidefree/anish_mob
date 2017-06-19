import React from 'react'
import { StackNavigator } from 'react-navigation'


// screens
import CategoriesScreen from '../screens/CategoriesScreen'
import AnimalListScreen from '../screens/AnimalListScreen'


export const RootNav = StackNavigator({
    CategoriesScreen: {
        screen: CategoriesScreen
    },
    AnimalListScreen: {
        screen: AnimalListScreen
    }
})