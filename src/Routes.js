import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'

// components
import Categories from './components/Categories'
import AnimalList from './components/AnimalList'
import ExampleComponent from './components/ExampleComponent'
import AppState from './components/AppState'
import AnimalCard from './components/AnimalCard'

class Routes extends Component {
  render() {
    return (
      <Router sceneStyle={{ paddingTop: 60 }}>
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
          key='animalList'
          navigationBarStyle={styles.navigationBarStyle}
          barButtonTextStyle={styles.barButtonTextStyle}
          barButtonIconStyle={styles.barButtonIconStyle}
          titleStyle={styles.titleStyle}
          component={AnimalList}
          title='Animal List'
        />
        <Scene
          key='infinity'
          navigationBarStyle={styles.navigationBarStyle}
          barButtonTextStyle={styles.barButtonTextStyle}
          barButtonIconStyle={styles.barButtonIconStyle}
          titleStyle={styles.titleStyle}
          component={ExampleComponent}
          title='infinity'
        />
        <Scene
          key='state'
          navigationBarStyle={styles.navigationBarStyle}
          barButtonTextStyle={styles.barButtonTextStyle}
          barButtonIconStyle={styles.barButtonIconStyle}
          titleStyle={styles.titleStyle}
          component={AppState}
          title='state'
        />
        <Scene
          key='animalCard'
          navigationBarStyle={styles.navigationBarStyle}
          barButtonTextStyle={styles.barButtonTextStyle}
          barButtonIconStyle={styles.barButtonIconStyle}
          titleStyle={styles.titleStyle}
          component={AnimalCard}
          title='Animal Card'
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
