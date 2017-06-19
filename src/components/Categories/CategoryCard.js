import React, { Component } from 'react'
import { connect } from 'react-redux'

// components
import { View, Text, TouchableWithoutFeedback } from 'react-native'

// actions
import { selectCategory } from '../../actions'


class CategoryCard extends Component {
    render() {
        const { backdropView, headline, viewStyle } = styles;
        // const { categoryId, title } = this.props
        return (
            <TouchableWithoutFeedback
                style={{ flex: 1 }}
                onPress={() => {
                    this.props.selectCategory()
                }}
            >
                <View style={viewStyle}>
                    <View style={backdropView}>
                        <Text style={headline}>{title}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
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
    }
};

export default connect(null, {
    selectCategory
})(CategoryCard)