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
                borderBottomColor: '#9f9f9f',
            }}>
                <Image style={styles.imageStyle} source={{ uri }} />
                <View style={styles.cardStyle}>
                    <Image source={require('../../assets/name.png')} style={{
                        height: 27,
                        width: 23
                    }} />
                    <Text style={{ backgroundColor: 'transparent' }}>{animal.name}</Text>
                    <Image source={require('../../assets/age.png')} style={{
                        height: 27,
                        width: 27.1,
                    }} />
                    <Text style={{ backgroundColor: 'transparent' }}>{animal.age}</Text>
                    <Image source={require('../../assets/location.png')} style={{
                        height: 27,
                        width: 18.7,
                    }} />
                    <Text style={{ backgroundColor: 'transparent' }}>{animal.location.city}</Text>
                </View>
                <Text style={styles.description}>
                    Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, hic, temporibus! Saepe excepturi voluptas reprehenderit.
                </Text>
                <TouchableOpacity
                    onPress={() => console.log('btn pressed')}
                >
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>TAKE ME</Text>
                    </View>
                </TouchableOpacity>
                <Image source={require('../../assets/Devider.png')} style={{
                    height: 2,
                    width: null,
                    marginTop: 25
                }} />
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
        borderRadius: 6,
        marginBottom: 10
    },
    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        marginTop: 20,
        borderRadius: 50,
        backgroundColor: '#EE5350',
        height: 40
    },
    description: {
        marginTop: 10,
        backgroundColor: 'transparent'
    },
    btnText: {
        // flex: 1,
        // height: 40,
        // width: null,
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignContent: 'center',
        fontSize: 20,
        color: '#fff'
    }
};

