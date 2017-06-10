import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { loadCategoriesByID } from '../actions/index'


class AnimalsList extends Component {

    componentWillMount() {
        this.props.loadCategoriesByID(this.props.categoryID)
    }

    render() {
        console.log(this.props.animals)
        return (
            <View style={{ flex: 1 }}>
                {this.props.animals.map(animal => <Text key={animal.sub_id}>{animal.description}</Text>)}
            </View>
        );
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        categoryID: state.choicedCategory.choiceCategory,
        animals: state.animalsList.animals
    }
}

export default connect(mapStateToProps, { loadCategoriesByID })(AnimalsList)