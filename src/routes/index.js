import { DrawerNavigator  } from 'react-navigation'
import { Platform } from 'react-native'

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

const RootNav = DrawerNavigator ({
    HomeScreen: {
        screen: HomeScreen
    },
    AnimalListScreen: {
        screen: AnimalListScreen
    },
    CategoriesScreen: {
        screen: CategoriesScreen
    },
    CreateNewAnimalItemScreen:{
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
})

export default RootNav