import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { loadCategoriesByID } from '../actions/index'


// components 
import AnimalCard from './AnimalCard'


class AnimalList extends Component {

    componentWillMount() {
        this.props.loadCategoriesByID(this.props.categoryID)
    }

    render() {
        console.log(this.props.animals)
        const { animals } = this.props
        return (
            <View style={{ flex: 1 }}>
                {animals.map(animal => <AnimalCard key={animal.sub_id} animal={animal} />)}
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

export default connect(mapStateToProps, { loadCategoriesByID })(AnimalList)