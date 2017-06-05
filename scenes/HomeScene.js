import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import Categories from '../src/components/Categories'


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Categories data={this.props.categories} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.dataCategories
})

export default connect(mapStateToProps)(HomeScreen)