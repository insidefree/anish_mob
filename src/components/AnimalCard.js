import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'


class AnimalCard extends Component {

    render() {
        console.log("AnimalCard")
        console.log(" ")
        console.log(" ")
        console.log(this.props)
        const { animal } = this.props
        return (
            <View>
                <Text>{animal.sub_id}</Text>
            </View>
        )
    }
}


export default connect(null)(AnimalCard)