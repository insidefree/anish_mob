import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'


// components
import { View, Text, TouchableOpacity, Image } from 'react-native'

// actions
import { selectCategory } from '../../actions/categoriesAction'


class CategoryListItem extends Component {

    componentWillReceiveProps(nextProps) {
        if (this.props.selectedCategory !== nextProps.selectedCategory) {
            this.props.onPress(nextProps.selectedCategory.navigate)
        }
    }

    render() {
        const { viewStyle, image, headline } = styles;
        const { categoryId, title } = this.props.data
        return (
            <View style={viewStyle}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.selectCategory(categoryId)
                    }}
                >
                    <View style={viewStyle}>
                        <Image style={image} source={require('../../assets/menu/shelters.png')} />
                        {/*<Text style={headline}>{title}</Text>*/}
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = {
    viewStyle: {
        // height: 100,
        // width: 100,
        margin: 'auto'
    },
    image: {
        height: 130,
        width: 130
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