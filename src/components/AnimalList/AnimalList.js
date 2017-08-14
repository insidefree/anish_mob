import React, { Component } from 'react'
import { ListView, Text, Image } from 'react-native'
import { connect } from 'react-redux'
// components
import { AnimalListItem } from './AnimalListItem'

// actions
import { loadAnimals } from '../../actions/animalsAction'

// temp
import animals from '../../fakeData/animals'

// config
import { animalsRef } from '../../config/firebase'


class AnimalList extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([])
        };
    }

    componentWillMount() {
        console.log('loadAnimals: ', this.props.loadAnimals())
        this.props.loadAnimals()
        animalsRef.on('value', snap => {
            console.log(snap)
            let animals = [];
            snap.forEach(animal => {
                const { name } = animal.val();
                animals.push({ name });
            });
            console.log(animals)
        })
    }

    // componentDidMount() {
    //     const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    //     this.setState({
    //         dataSource: ds.cloneWithRows(this.props.animalsList)
    //     })
    // }

    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        console.log('ANIMAL_LIST:', this.props.animalsList)
        return (
            <Image source={require('../../assets/BG-01-black.jpg')} style={{
                flex: 1,
                resizeMode: 'cover', // or 'stretch'
                width: null,
                height: null
            }}>
                <ListView style={{ flex: 1 }}
                    dataSource={this.props.dataSource}
                    renderRow={animal => <AnimalListItem animal={animal} />}
                />


            </Image>
        );
    }
}


const mapStateToProps = state => ({
    animalsList: state.animals.animals
})


export default connect(mapStateToProps, { loadAnimals })(AnimalList)