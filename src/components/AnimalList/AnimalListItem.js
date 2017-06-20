import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'


const uri = 'https://static.pexels.com/photos/58997/pexels-photo-58997.jpeg';
export class AnimalListItem extends Component {
    render() {
        const { animal } = this.props
        console.log(animal)
        return (
            <View style={{
                marginVertical: 8,
                margin: 20,
                paddingTop: 15,
                paddingBottom: 30,
                borderBottomColor: '#9f9f9f',
                borderBottomWidth: 1,
                borderStyle: 'dotted'
            }}>
                <Image style={styles.imageStyle} source={{ uri }} />
                <View style={styles.cardStyle}>
                    <Image source={require('../../assets/name.png')} style={{
                        height: 30.7,
                        width: 27,
                    }} />
                    <Text>{animal.name}</Text>
                    <Image source={require('../../assets/age.png')} style={{
                        height: 30.7,
                        width: 27,
                    }} />
                    <Text>{animal.age}</Text>
                    <Image source={require('../../assets/location.png')} style={{
                        height: 30.7,
                        width: 21,
                    }} />
                    <Text>{animal.location.city}</Text>
                </View>
                <Text style={styles.description}>
                    Description: {animal.description}
                </Text>
                <TouchableOpacity
                    onPress={() => console.log('btn pressed')}
                >
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>take me...</Text>
                    </View>
                </TouchableOpacity>
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 8
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
        borderRadius: 15,
        marginBottom: 10
    },
    btn: {
        height: 30,
        width: null,
        marginTop: 20,
        borderRadius: 50,
        backgroundColor: '#EE5350',
    },
    description: {
        marginTop: 10
    },
    btnText: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 20,
        color: '#fff'
    }
};

