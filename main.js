import Expo from 'expo';
import React, { Component } from 'react';
import { Provider } from 'react-redux'

import Routes from './src/Routes'
import store from './src/store'

import Categories from './src/components/Categories'

import { firebaseApp } from './src/config/firebase'

// actions
import { loginUser } from './src/actions'

store.subscribe(() => console.log(store.getState()))

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(loginUser(user.email))
  } else {
    store.dispatch(loginUser(null))
  }
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);
