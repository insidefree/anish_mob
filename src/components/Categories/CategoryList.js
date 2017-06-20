import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, Text } from 'react-native'


// components
import CategoryListItem from './CategoryListItem'

// actions
import { loadCategories } from '../../actions/categoriesAction'
console.log(loadCategories)
// {this.props.categories.map(el => <CategoryCard key={'1'} {...el} />)}
// {this.props.categories.map(cat => <Text>{cat.title}</Text>)}



class CategoryList extends Component {
  componentWillMount() {
    this.props.loadCategories()
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.categories.map(cat => <CategoryListItem key={cat.categoryId} data={cat} />)}
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
  categories: state.categories.categoryList
})

export default connect(mapStateToProps, { loadCategories })(CategoryList)