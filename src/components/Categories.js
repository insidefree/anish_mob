import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, ScrollView } from 'react-native'

// components
import Category from '../components/common/Category'
import LoginForm from '../components/LoginForm'

const styles = {
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
}


class Categories extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <LoginForm />
                    {this.props.categories.map(el => <Category key={el.categoryId} {...el} />)}
                </ScrollView>
            </View>
        )
    }
}
const mapStateToProps = state => ({
    categories: state.categories.dataCategories
})

export default connect(mapStateToProps)(Categories)