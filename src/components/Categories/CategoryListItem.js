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
        const { viewStyle, iconContainer, image, headline } = styles;
        const { categoryId, title } = this.props.data
        return (
            <View style={viewStyle}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.selectCategory(categoryId)
                    }}
                >
                    <View style={iconContainer}>
                        <Image style={image} source={require('../../assets/menu/shelters.png')} />
                        <Text style={headline}>{title.toUpperCase()}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = {
    viewStyle: {
        height: 140,
        width: 120,
        // borderWidth: 5,
        // borderColor: 'coral',
    },
    iconContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 110,
        width: 110,
        marginLeft: -10,
        marginTop: 2
    },
    headline: {
        fontSize: 13,
        textAlign: 'center',
        // backgroundColor: 'rgba(0,0,0,0)',
        color: 'white'
    },
};

const mapStateToProps = state => ({
    selectedCategory: state.selectCategory.selectedCategory,
})

export default connect(mapStateToProps, {
    selectCategory
})(CategoryListItem)