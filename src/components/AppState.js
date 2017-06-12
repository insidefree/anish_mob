import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'


// libraries
// import JSONTree from 'react-native-json-tree'

class AppState extends Component {

    render() {
        let obj = {
            example: 'string',
            number: 123,
            boolean: true
        };
        return <View>{obj}</View>
    }
}


mapStateToProps = state => state


export default connect(mapStateToProps)(AppState)