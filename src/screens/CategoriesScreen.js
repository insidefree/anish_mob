import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native'


// components
import CategoryList from '../components/Categories/CategoryList'
import Login from '../components/Login/Login'
import TestComp from '../components/TestComp/TestComp'


export default class CategoriesScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Home',
            headerStyle: {
                height: (Platform.OS === 'android') ? 64 : 55,
                paddingTop: (Platform.OS === 'android') ? 20 : 15,
                backgroundColor: '#EE5350'
            },
            headerTintColor: '#FFF',
            headerRight: <TouchableOpacity onPress={() => { navigation.navigate('CorkScreen') }}>
                <Image source={require('../assets/menuButton.png')} style={{
                    height: 25.5,
                    width: 31,
                    marginRight: 20
                }} />
            </TouchableOpacity>
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {
                    !this.props.email ?
                        <Login title="Register" /> :
                        <TouchableOpacity onPress={() => firebaseApp.auth().signOut()}>
                            <Text style={{ padding: 16 }}>Log Out</Text>
                        </TouchableOpacity>
                }
                <CategoryList navigate={this.props.navigation.navigate} />
            </View>
        )
    }
}
