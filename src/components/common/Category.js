import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'


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


export default class Category extends Component {
    render() {
        const { backdropView, headline, viewStyle } = styles;
        console.log(this.props);
        return (
            <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => console.log(this.props.categoryId)}>
                <View style={viewStyle}>
                    {/*<Image style={imageStyle} source={{ uri: image }}>*/}
                    <View style={backdropView}>
                        <Text style={headline}>{this.props.children}</Text>
                    </View>
                    {/*</Image>*/}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}