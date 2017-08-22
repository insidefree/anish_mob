import React, { Component } from 'react'
import { View, Text } from 'react-native'


import DataBaseActions from '../components/Stuff/DataBaseActions'

export default class StuffScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <DataBaseActions navigation={this.props.navigation}/>
            </View>
        )
    }
}