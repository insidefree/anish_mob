import React from 'react'
import { StackNavigator } from 'react-navigation'


// screens
import CategoriesScreen from '../screens/CategoriesScreen'
import AnimalList from '../screens/AnimalList'


export const RootNav = StackNavigator({
    CategoriesScreen: {
        screen: CategoriesScreen
    },
    AnimalList: {
        screen: AnimalList
    }
})