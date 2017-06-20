import React, { Component } from 'react'
import { connect } from 'react-redux'

// components
import { View, Text, TouchableOpacity } from 'react-native'

// actions
import { selectCategory } from '../../actions/categoriesAction'


class CategoryListItem extends Component {
    render() {
        const { backdropView, headline, viewStyle } = styles;
        const { categoryId, title } = this.props.data
        return (
            <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() => {
                    this.props.selectCategory(categoryId)
                    setTimeout(() => console.log('selectedCategory: ', this.props.selectedCategory), .1)
                }}
            >
                <View style={viewStyle}>
                    <View style={backdropView}>
                        <Text style={headline}>{title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}


const styles = {
    viewStyle: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },
    imageStyle: {
        height: 200,
        flex: 1,
        width: null
    },
    backdropView: {
        height: 200,
        flex: 1,
        width: null,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center'
    },
    headline: {
        fontSize: 28,
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'white'
    },

};

const mapStateToProps = state => ({
    selectedCategory: state.selectCategory.selectedCategory
})

export default connect(mapStateToProps, {
    selectCategory
})(CategoryListItem)