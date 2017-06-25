import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, Text, View } from 'react-native'

// components
import CategoryListItem from './CategoryListItem'

// actions
import { loadCategories } from '../../actions/categoriesAction'


class CategoryList extends Component {
  componentWillMount() {
    this.props.loadCategories()
  }

  render() {
    const { navigate } = this.props
    console.log('list navigate: ', this.props.navigate)
    return (
      <ScrollView style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.props.categories.map(cat => (
            <CategoryListItem
              key={cat.categoryId}
              data={cat}
              onPress={(screenName) => navigate(screenName)}
            />
          ))}
        </View>
      </ScrollView>
    )
  }
}


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    // borderRadius: 4,
    // borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#EE5350'
  },
}


const mapStateToProps = state => ({
  categories: state.categories.categoryList
})


export default connect(mapStateToProps, { loadCategories })(CategoryList)