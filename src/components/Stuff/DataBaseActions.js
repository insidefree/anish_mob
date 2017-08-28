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
            <StyleProvider style={getTheme(platform)}>
                <Container>
                    <Header>
                        <Left style={{ flex: 1 }} />
                        <Body style={{ flex: 1 }}>
                            <Title>Home Screen</Title>
                        </Body>
                        <Right style={{ flex: 1 }}>
                            <Button
                                transparent
                                onPress={() => this.props.navigation.navigate("DrawerOpen")}
                            >
                                <Icon name="menu" />
                            </Button>
                        </Right>
                    </Header>
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
                            <Icon name='attach' style={{ fontSize: 20, color: 'red' }} />
                            <Text>Test: Add animal form</Text>
                        </Button>
                    </Content>
                </Container>
            </StyleProvider>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DBDAD6'
    },
    header: {
        paddingTop: (Platform.OS === 'android') ? 24 : 18,
    },
    text: {
        fontSize: 20,
    }
});