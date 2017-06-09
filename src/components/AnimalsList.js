import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'



class AnimalsList extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>
                    {this.props.categoryID}
                </Text>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    categoryID: state.choicedCategory.choiceCategory,
    animals: state.animals
})

export default connect(mapStateToProps)(AnimalsList)