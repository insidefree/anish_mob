import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux'
import store from './src/store'
import HomeScreen from './screens/HomeScreen'
import firebase from 'firebase'
import Routes from './src/Routes'


class App extends React.Component {

  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDHKja4zGoInK7D5PsL4MCHAYC2lmvGGPA",
      authDomain: "anish-6cd8e.firebaseapp.com",
      databaseURL: "https://anish-6cd8e.firebaseio.com",
      projectId: "anish-6cd8e",
      storageBucket: "anish-6cd8e.appspot.com",
      messagingSenderId: "613075498242"
    }
    firebase.initializeApp(config)
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
        <HomeScreen />
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);
