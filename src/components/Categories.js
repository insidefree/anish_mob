import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Category from '../components/common/Category'


const styles = {
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
}


export default class Categories extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                {this.props.data.map(el => <Category key={el.categoryId} {...el}>{el.title}</Category>)}
            </ScrollView>
        )
    }
}