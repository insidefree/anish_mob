import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, ScrollView } from 'react-native'
import { loadCategoriesByID } from '../actions/index'

// components
import AnimalCard from './AnimalCard';

class AnimalList extends Component {
  componentWillMount() {
    this.props.loadCategoriesByID(this.props.categoryID);
  }

  render() {
    const { animals } = this.props;
    return (
      <ScrollView>
        {animals.map(animal => <AnimalCard key={animal.sub_id} animal={animal} />)}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    categoryID: state.choicedCategory.choiceCategory,
    animals: state.animalsList.animals,
  }
}

export default connect(mapStateToProps, { loadCategoriesByID })(AnimalList)
