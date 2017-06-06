import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

//components
import { View, Text, TouchableWithoutFeedback } from 'react-native'

//actions
import { choiceCategory } from '../../actions'

const styles = {
    viewStyle: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        // position: 'relative',
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
        color: 'white',
        // textShadowColor: 'rgba(0,0,0,0.8)',
        // textShadowOffset: { width: 0, height: 2 },
        // textShadowRadius: 8
    }
};


class Category extends Component {
    render() {
        const { backdropView, headline, viewStyle } = styles;
        const { categoryId } = this.props
        // console.log(this.props.categoryID)
        return (
            <TouchableWithoutFeedback
                style={{ flex: 1 }}
                onPress={() => {
                    this.props.choiceCategory(categoryId)
                    Actions.blog()
                }}
            >
                <View style={viewStyle}>
                    <View style={backdropView}>
                        <Text style={headline}>{this.props.children}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}


export default connect(null, {
    choiceCategory
})(Category)