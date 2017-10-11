import React, { Component } from 'react'
import { View, Text, StyleSheet, BackHandler } from 'react-native'


export default class CorkScreen extends Component {
    componentDidMount() {
        // BackHandler.addEventListener('hardwareBackPress', function () {
        //     const { dispatch, navigation, nav } = this.props;
        //     if (nav.routes.length === 1 && (nav.routes[0].routeName === 'Login' || nav.routes[0].routeName === 'Start')) {
        //         return false;
        //     }
        //     // if (shouldCloseApp(nav)) return false
        //     dispatch({ type: 'Navigation/BACK' });
        //     return true;
        // }.bind(this));  

        BackHandler.addEventListener('hardwareBackPress', function() {
            // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
            // Typically you would use the navigator here to go to the last state.
            console.log('BACK')
            
           });
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress')
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Cork Screen</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F29F33'
    },
    text: {
        fontSize: 20,
    }
});