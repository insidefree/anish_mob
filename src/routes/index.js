import React from 'react'
import { DrawerNavigator, DrawerView } from 'react-navigation'
import { Platform, View, ScrollView } from 'react-native'
import DrawerMenu from '../components/common/DrawerMenu'
// screens
import CategoriesScreen from '../screens/CategoriesScreen'
import AnimalListScreen from '../screens/AnimalListScreen'
import CorkScreen from '../screens/CorkScreen'
import AddFormScreen from '../screens/AddFormScreen'
import StuffScreen from '../screens/StuffScreen'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import CreateNewAnimalItemScreen from '../screens/CreateNewAnimalItemScreen'
import Chat from '../screens/Chat'

const customComponent = (props) => (
    <ScrollView
        style={{
            flex: 1,
            backgroundColor: "coral",
        }}>
        <DrawerMenu {...props} />
    </ScrollView>
);


const RootNav = DrawerNavigator({
    AnimalListScreen: {
        screen: AnimalListScreen
    },
    HomeScreen: {
        screen: HomeScreen
    },
    CategoriesScreen: {
        screen: CategoriesScreen
    },
    CreateNewAnimalItemScreen: {
        screen: CreateNewAnimalItemScreen
    },
    CorkScreen: {
        screen: CorkScreen,
        // navigationOptions: ({ navigation }) => ({
        //     title: `Cork Screen`,
        //     headerStyle: {
        //         height: (Platform.OS === 'android') ? 64 : 55,
        //         paddingTop: (Platform.OS === 'android') ? 20 : 15,
        //         backgroundColor: '#EE5350'

        //     },
        //     headerTintColor: '#FFF',
        // })
    },
    CategoryListItem: {
        screen: AnimalListScreen,
        // navigationOptions: ({ navigation }) => ({
        //     title: `Animals List`,
        //     headerStyle: {
        //         backgroundColor: '#EE5350'
        //     },
        //     headerTintColor: '#FFF',
        // })
    },
    AddFormScreen: {
        screen: AddFormScreen
    },
    StuffScreen: {
        screen: StuffScreen
    },
    Authorized: {
        screen: Chat
    },
    LoginScreen: {
        screen: LoginScreen
    }
},
    // navigator config
    {
        drawerPosition: 'right',
        contentComponent: props => <DrawerMenu {...props} />,
    })

export default RootNav