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
            </View>
        )
    }
}

// const styles = {
//     textStyle: {
//         fontSize: 18,
//         paddingLeft: 5,
//         flex: 1,
//         color: '#000'
//     },
//     inputStyle: {
//         color: '#000',
//         paddingRight: 5,
//         paddingLeft: 5,
//         fontSize: 18,
//         lineHeight: 23,
//         flex: 2
//     },
//     viewStyle: {
//         height: 40,
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center'
//     }
// };