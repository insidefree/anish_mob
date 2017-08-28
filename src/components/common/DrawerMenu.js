import React, { Component } from 'react'
import { View, Text, Platform, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Header, Content } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'


export default class DrawerMenu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Grid>
                    <Row size={1}>
                        <Col size={1} style={styles.menuLogo} ><Text>LOGO</Text></Col>
                        <Col size={2} style={styles.menuUser} ><Text>SIGN IN / SIGN UP</Text></Col>
                    </Row>
                    <Row size={2}>
                        <TouchableOpacity style={styles.menuItem} onPress={() => console.log('***')}>
                            <Text style={styles.menuItemText}>ANIMALS</Text>
                        </TouchableOpacity>
                    </Row>
                    <Row style={styles.menuItem} size={2}><Text style={styles.menuItemText}>SHOPS</Text></Row>
                    <Row style={styles.menuItem} size={2}><Text style={styles.menuItemText}>CLINICS</Text></Row>
                    <Row style={styles.menuItem} size={2}><Text style={styles.menuItemText}>STUFF</Text></Row>
                </Grid>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: (Platform.OS === 'android') ? 24 : 15,
    },
    menuHeader: {
        height: 100
    },
    menuLogo: {
        backgroundColor: '#128A6C',
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuUser: {
        backgroundColor: '#2366A8',
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuItem: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DBDAD6',
        borderBottomWidth: 2,
        height: '100%',
        width: '100%'
    },
    menuItemText: {
        fontSize: 20,
    }
});