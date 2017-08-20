import React, { Component } from 'react'
import { ListView, Text, Image } from 'react-native'
import { connect } from 'react-redux'
// components
import { AnimalListItem } from './AnimalListItem'

// actions
import { loadAnimals } from '../../actions/animalsAction'

// config
import { animalsRef } from '../../config/firebase'


class AnimalList extends Component {

    componentWillMount() {
        console.log('loadAnimals: ', this.props.loadAnimals())
        this.props.loadAnimals()
        console.log('LIST1:', this.props.animalsList)
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
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2, sectionHeaderHasChanged: (s1, s2) => s1 !== s2});
        // this.props.animalsList.on('value', snap => console.log('LIST2: ', snap))
        return (
            <Image source={require('../../assets/BG-01-black.jpg')} style={{
                flex: 1,
                resizeMode: 'cover', // or 'stretch'
                width: null,
                height: null
            }}>
                <ListView style={{ flex: 1 }}
                    dataSource={ds.cloneWithRows(this.props.animalsList)}
                    renderRow={animal => <AnimalListItem animal={animal} />}
                />
            </Image>
        )
    }
}


const mapStateToProps = state => ({
    animalsList: state.animals.animals
})


export default connect(mapStateToProps, { loadAnimals })(AnimalList)