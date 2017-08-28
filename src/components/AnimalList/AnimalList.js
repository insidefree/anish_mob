import React, { Component } from 'react'
import { ListView, Image, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
// components
import { AnimalListItem } from './AnimalListItem'

// actions
import { fetchAnimals } from '../../actions/animalsAction'

// config
// import { animalsRef } from '../../config/firebase'


class AnimalList extends Component {
    componentDidMount() {
        // console.log('animalList')
    }

    componentWillMount() {
        // console.log('fetchAnimals: ', this.props.fetchAnimals())
        this.props.fetchAnimals()
        //console.log('LIST1:', this.props.animalsList)
        // animalsRef.on('value', snap => {
        //     console.log(snap)
        //     let animals = [];
        //     snap.forEach(animal => {
        //         const { name } = animal.val();
        //         animals.push({ name });
        //     });
        //     console.log(animals)
        // })
    }

    render() {
        const { animalsList } = this.props
        // console.log('animalsList component: ', animalsList)
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        // this.props.animalsList.on('value', snap => console.log('LIST2: ', snap))
        return (
            <Image source={require('../../assets/BG-01-black.jpg')} style={{
                flex: 1,
                resizeMode: 'cover', // or 'stretch'
                width: null,
                height: null
            }}>
                <Container>
                    <Header style={styles.header}>
                        <Left style={{ flex: 1 }} />
                        <Body style={{ flex: 1 }}>
                            <Title>Home Screen</Title>
                        </Body>
                        <Right style={{ flex: 1 }}>
                            <Button
                                transparent
                                onPress={() => this.props.navigation.navigate("DrawerOpen")}
                            >
                                <Icon name="menu" />
                            </Button>
                        </Right>
                    </Header>
                    <ListView style={{ flex: 1 }}
                        dataSource={ds.cloneWithRows(this.props.animalsList)}
                        renderRow={animal => <AnimalListItem animal={animal} />}

                    />
                </Container>
            </Image>
        )
    }
}


const mapStateToProps = state => ({
    animalsList: state.animals.animalsList,
    loading: state.animals.loading
})


export default connect(mapStateToProps, { fetchAnimals })(AnimalList)


const styles = StyleSheet.create({
    header: {
        paddingTop: (Platform.OS === 'android') ? 24 : 18,
    }
});