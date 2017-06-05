import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'

// components
import Categories from './components/Categories'
import AnimalsList from './components/AnimalsList'

class Routes extends Component {
    render() {
        return (
            <Router sceneStyle={{ paddingTop: 54 }}>
                <Scene
                    key='categories'
                    initial
                    navigationBarStyle={styles.navigationBarStyle}
                    barButtonTextStyle={styles.barButtonTextStyle}
                    barButtonIconStyle={styles.barButtonIconStyle}
                    titleStyle={styles.titleStyle}
                    component={Categories}
                    title='Menu'
                />
                <Scene
                    key='blog'
                    navigationBarStyle={styles.navigationBarStyle}
                    barButtonTextStyle={styles.barButtonTextStyle}
                    barButtonIconStyle={styles.barButtonIconStyle}
                    titleStyle={styles.titleStyle}
                    component={AnimalsList}
                    title='blog'
                />
            </Router>
        );
    }
}

const styles = {
    navigationBarStyle: {
        backgroundColor: '#ffb94d',
        borderBottomColor: '#ffb94d'
    },
    titleStyle: {
        color: '#fff'
    },
    barButtonTextStyle: {
        color: '#fff'
    },
    barButtonIconStyle: {
        tintColor: '#fff'
    }
};

export default Routes