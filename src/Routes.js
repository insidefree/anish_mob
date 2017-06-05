import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import HomeScene from '../scenes/HomeScene'


class Routes extends React.Component {
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
                    component={HomeScene}
                    title='Menu'
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