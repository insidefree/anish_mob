import React, { Component } from 'react'
import { View, StyleSheet, Text, ListView, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'

const uri = 'https://static.pexels.com/photos/58997/pexels-photo-58997.jpeg'
const keyTEMP = 1
class AnimalCard extends Component {

    render() {
        const { animal } = this.props
        return (
            <View style={{ flex: 1 }}>
                <Text>Animal ID: {animal.sub_id}</Text>
                <ScrollView>
                    {animal.images.map(link => <Image key={keyTEMP++} style={styles.animalImg} source={{ uri: link }} />)}
                </ScrollView>
                <Text>Description: {animal.description}</Text>
                <Text>Location: City - {animal.location.city}, Street - {animal.location.street}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    animalImg: {
        flex: 1,
        height: 200,
        width: null
    }
});


export default connect(null)(AnimalCard)