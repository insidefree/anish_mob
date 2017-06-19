import React from 'react'
import { StackNavigator } from 'react-navigation'


// screens
import Categories from '../screens/Categories'
import AnimalList from '../screens/AnimalList'


export const RootNav = StackNavigator({
    Categories: {
        screen: Categories
    },
    AnimalList: {
        screen: AnimalList
    }
})