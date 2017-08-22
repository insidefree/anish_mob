import React, { Component } from 'react'
import { View, Text, TextInput, ToastAndroid, Platform } from 'react-native'
import { Button } from 'react-native-elements'

// config
import { animalsRef } from '../../config/firebase'

// fakedata
import fakeAnimals from '../../fakeData/animals'

export default class DataBaseActions extends Component {

    onSubmit = () => {
        fakeAnimals.map(animal => {
            animalsRef.push(animal)
                // .then(() => {
                //     Platform.OS === 'android'
                //         ? ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT) : ''
                // })
                .catch(error => console.log(error))
        })
    }

    onClear = () => {
        animalsRef.remove()
    }

    showAnimalsFromDB = () => {
        let count = 0
        animalsRef.on('value', snapshot => {
            console.log(count++)
            console.log(snapshot.val())
        })
    }

    render() {
        console.log('fakeAnimals: ', fakeAnimals)
        return (
            <View style={{ flex: 1 }}>
                <Button
                    large
                    color='white'
                    backgroundColor='coral'
                    title='Upload fake data to the server'
                    onPress={() => this.onSubmit()}
                />
                <Button
                    large
                    color='white'
                    backgroundColor='blue'
                    title='Clear animals data'
                    onPress={() => this.onClear()}
                />
                <Button
                    large
                    color='white'
                    backgroundColor='red'
                    title='showAnimalsFromDB'
                    onPress={() => this.showAnimalsFromDB()}
                />
                <Button
                    title='Move to AddFormScreen - test add animal form'
                    onPress={() => this.props.navigation.navigate('AddFormScreen')} 
                />
            </View>
        )
    }
}
