import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, Text, View } from 'react-native'

// icons
// import { createIconSetFromIcoMoon } from '@expo/vector-icons';
// import icoMoonConfig from '../../assets/menu/anish/selection.json';
// const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'shelters');

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
      <View style={viewFlex}>
        {this.props.categories.map(cat => (
          <CategoryListItem
            key={cat.categoryId}
            data={cat}
            onPress={(screenName) => navigate(screenName)}
          />
        ))}
      </View>
    )
  }
}


const styles = {
  viewFlex: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    backgroundColor: '#EE5350'
  }
}


const mapStateToProps = state => ({
  categories: state.categories.categoryList
})


export default connect(mapStateToProps, { loadCategories })(CategoryList)