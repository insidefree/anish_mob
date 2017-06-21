import React from 'react'
import { StackNavigator, Button, Text } from 'react-navigation'


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
        

        }),
        header: ({ goBack }) => ({
            right: (<Button name={'close'} onPress={() => console.log('title btn press')} />)
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