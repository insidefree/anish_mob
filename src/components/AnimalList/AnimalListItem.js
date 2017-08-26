import React, { Component } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base';

const uri = 'https://static.pexels.com/photos/58997/pexels-photo-58997.jpeg';
export class AnimalListItem extends Component {
    render() {
        const { animal } = this.props
        return (

            <Card style={{ flex: 0 }}>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri }} />
                        <Body>
                            <Text>{animal.name}</Text>
                            <Text note>Age: {animal.age}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{ uri }} style={{ height: 200, width: null, flex: 1 }} />

                </CardItem>
                <CardItem>
                    <Text>
                        Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, hic, temporibus! Saepe excepturi voluptas reprehenderit.
                    </Text>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent>
                            <Icon active name="thumbs-up" />
                            <Text>12 Likes</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Button transparent>
                            <Icon active name="chatbubbles" />
                            <Text>4 Comments</Text>
                        </Button>
                    </Body>
                    <Right>
                        <Text>11h ago</Text>
                    </Right>
                </CardItem>
            </Card>

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

