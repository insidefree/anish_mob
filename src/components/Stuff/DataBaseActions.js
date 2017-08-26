import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
// import { View, Text, TextInput, ToastAndroid, Platform } from 'react-native'
import { connectStyle, Button, Text, Icon, Container, Content, StyleProvider } from 'native-base';
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
            <StyleProvider style={getTheme(platform)}>
                <Container>
                    <Content padder>
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
                            onPress={() => this.onClear()}
                        >
                            <Text>Clear animals data</Text>
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
                            <Icon name='attach' style={{fontSize: 20, color: 'red'}}/>
                            <Text>Test: Add animal form</Text>
                        </Button>
                    </Content>
                </Container>
            </StyleProvider>
        )
    }
}


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });