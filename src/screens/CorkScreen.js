import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default class CorkScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Cork Screen</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F29F33'
    },
    text: {
        fontSize: 20,
    }
});