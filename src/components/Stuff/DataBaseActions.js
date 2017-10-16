import React, { Component } from 'react'
import { StyleSheet, View, Platform } from 'react-native'
// import { Text } from 'react-native'
import { connectStyle, Button, Text, Icon, Container, Content, StyleProvider, Header, Left, Body, Right, Title } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import platform from '../../../native-base-theme/variables/platform'

// import { Button } from 'react-native-elements'

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
        return (
            <View style={styles.container}>
                <Button
                    blockAnish
                    info
                    onPress={() => this.onSubmit()}
                >
                    <Text>Upload fake data to the server</Text>
                </Button>
                <Button
                    blockAnish
                    info
                    onPress={() => this.showAnimalsFromDB()}
                >
                    <Text>Show animals from DB - console</Text>
                </Button>
                <Button
                    blockAnish
                    info
                    iconLeft
                    onPress={() => this.props.navigation.navigate('AddFormScreen')}
                >
                    <Icon name='attach' style={{ fontSize: 20, color: 'red' }} />
                    <Text>Test: Add animal form</Text>
                </Button>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#DBDAD6'
    },
    header: {
        paddingTop: (Platform.OS === 'android') ? 24 : 18,
    },
    text: {
        fontSize: 20,
    }
});