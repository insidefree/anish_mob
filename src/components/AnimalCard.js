import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ListView,
    Image,
    ScrollView,
    Dimensions,
} from 'react-native';
import { connect } from 'react-redux';

const SCREEN_WIDTH = Dimensions.get('window').width;

const uri = 'https://static.pexels.com/photos/58997/pexels-photo-58997.jpeg';
const keyTEMP = 1;

class AnimalCard extends Component {
    render() {
        const { animal } = this.props;
        return (
            <View style={{ marginVertical: 8 }}>
                <Text style={styles.titleStyle}>
                    Animal ID: {animal.sub_id}
                </Text>
                <ScrollView
                    horizontal
                    style={[styles.scrollView, styles.horizontalScrollView]}
                >
                    {animal.images.map((uri, i) => <Image key={i} style={styles.imageStyle} source={{ uri }}
                    />)}
                </ScrollView>
                <View style={styles.cardStyle}>
                    <Text>
                        Description: {animal.description}
                    </Text>
                    <Text>
                        Location: City - {animal.location.city}, Street - {animal.location.street}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        padding: 8,
        color: '#383838',
        borderColor: '#e0e0e0',
        borderWidth: 1,
    },
    cardStyle: {
        padding: 8,
        borderColor: '#e0e0e0',
        borderWidth: 1,
    },
    scrollView: {
        height: 300,
    },
    horizontalScrollView: {
        height: 180,
    },
    imageStyle: {
        height: null,
        flex: 1,
        width: SCREEN_WIDTH,
    },
};


export default connect()(AnimalCard)
