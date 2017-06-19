import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, Text } from 'react-native'

// components
// import CategoryCard from './CategoryCard'

// {this.props.categories.map(el => <CategoryCard key={'1'} {...el} />)}

export class Categories extends Component {
  render() {
    console.log('***', this.props)
    return (
      <ScrollView style={styles.container}>
        <Text>categories</Text>
      </ScrollView>
    )
  }
}

const styles = {
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
}

const mapStateToProps = state => ({
  categories: {"a": "a"},
})

export default connect(mapStateToProps)(Categories)