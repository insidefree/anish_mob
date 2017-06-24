import React, { Component } from 'react'
import { View, Text, TextInput, ToastAndroid, Platform } from 'react-native'
import { Button } from 'react-native-elements'

import { animalsRef } from '../../config/firebase'

export default class AddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    onSubmit = () => {
        const { name } = this.state
        if (name) {
            animalsRef.push({ name })
                .then(() => {
                    Platform.OS === 'android'
                        ? ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT) : ''
                })
                .catch(error => console.log(error))
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Name</Text>
                    <TextInput
                        autoCorrect={false}
                        placeholder={'write name'}
                        style={styles.inputStyle}
                        value={this.state.name}
                        onChangeText={name => this.setState({ name })}
                    />

                </View>
                <Button
                    large
                    color='white'
                    backgroundColor='coral'
                    title='Add'
                    onPress={() => this.onSubmit()}
                />
            </View>
        )
    }
}

const styles = {
    textStyle: {
        fontSize: 18,
        paddingLeft: 5,
        flex: 1,
        color: '#000'
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    viewStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};