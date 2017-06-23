import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


// components
import CategoryList from '../components/Categories/CategoryList'
import Login from '../components/Login/Login'

export default class CategoriesScreen extends Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#EE5350'
        },
        headerTintColor: '#FFF'
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
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('AnimalListScreen')
                        console.log('this props button', this.props)
                    }}
                >
                    <Text>PRESS ME!!!</Text>
                </TouchableOpacity>
                <CategoryList navigate={this.props.navigation.navigate} />
            </View>
        )
    }
}
