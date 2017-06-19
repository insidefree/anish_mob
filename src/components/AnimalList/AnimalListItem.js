import React, { Component } from 'react'
import { View, Text, Dimensions, ScrollView, Image } from 'react-native'

// consts
const SCREEN_WIDTH = Dimensions.get('window').width;
// SCREEN_WIDTH = SCREEN_WIDTH*90/100

const uri = 'https://static.pexels.com/photos/58997/pexels-photo-58997.jpeg';
export class AnimalListItem extends Component {
    render() {
        const { animal } = this.props
        console.log(animal)
        return (
            <View style={{ marginVertical: 8, padding: 20 }}>
                <Image style={styles.imageStyle} source={{ uri }} />
                <View style={styles.cardStyle}>
                    <Image source={require('../../assets/Menu-button.png')} style={{
                        width: 50,
                        height: 40
                    }} />
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

// <ScrollView
//     horizontal
//     style={[styles.scrollView, styles.horizontalScrollView]}
// >
//     {animal.images.map((uri, i) => <Image key={i} style={styles.imageStyle} source={{ uri }}
//     />)}
// </ScrollView>

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
        height: 200,
        flex: 1,
        width: null,
    },
};

