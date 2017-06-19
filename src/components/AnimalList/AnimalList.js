import React, { Component } from 'react'
import { ListView, Text, Image } from 'react-native'

// components
import { AnimalListItem } from './AnimalListItem'

// temp
import animals from '../../fakeData/animals'

export class AnimalList extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(animals),
        };
    }

    render() {
        return (
            <Image source={require('../../assets/BG-01.png')} style={{
                flex: 1,
                resizeMode: 'cover', // or 'stretch'
                width: null,
                height: null
            }}>
                <ListView style={{ flex: 1 }}
                    dataSource={this.state.dataSource}
                    renderRow={animal => <AnimalListItem animal={animal} />}
                />
            </Image>
        );
    }
}

