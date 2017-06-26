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
    const { container, viewFlex } = styles

    return (
      // <ScrollView style={container}>
      <View style={viewFlex}>
        {this.props.categories.map(cat => (
          <CategoryListItem
            key={cat.categoryId}
            data={cat}
            onPress={(screenName) => navigate(screenName)}
          />
        ))}
      </View>
      // </ScrollView>
    )
  }
}


const styles = {
  container: {
    // borderRadius: 4,
    // borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#EE5350'
  },
  viewFlex: {
    // flex: 1, 
    // flexDirection: 'row', 
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    // alignItems: 'flex-end'
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }
}


const mapStateToProps = state => ({
  categories: state.categories.categoryList
})


export default connect(mapStateToProps, { loadCategories })(CategoryList)