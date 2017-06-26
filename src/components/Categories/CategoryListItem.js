import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'


// components
import { View, Text, TouchableOpacity, imageContainer, Image } from 'react-native'

// actions
import { selectCategory } from '../../actions/categoriesAction'


class CategoryListItem extends Component {

    componentWillReceiveProps(nextProps) {
        if (this.props.selectedCategory !== nextProps.selectedCategory) {
            this.props.onPress(nextProps.selectedCategory.navigate)
        }
    }

    render() {
        const { viewStyle, touchableContainer, image, headline } = styles;
        const { categoryId, title } = this.props.data
        return (
            <View style={viewStyle}>
                <TouchableOpacity style={touchableContainer}
                    onPress={() => {
                        this.props.selectCategory(categoryId)
                    }}
                >
                    <Image style={image} source={require('../../assets/menu/shelters.png')} />
                    {/*<Text style={headline}>{title}</Text>*/}
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = {
    viewStyle: {
        borderWidth: 5,
        borderColor: 'coral',
    },
    touchableContainer: {
        alignSelf: 'center'
    },
    image: {
        height: 100,
        width: 100,
        marginLeft: -10
    },
    headline: {
        // fontSize: 12,
        // textAlign: 'center',
        // backgroundColor: 'rgba(0,0,0,0)',
        // color: 'white'
    },
};

const mapStateToProps = state => ({
    selectedCategory: state.selectCategory.selectedCategory,
})

export default connect(mapStateToProps, {
    selectCategory
})(CategoryListItem)