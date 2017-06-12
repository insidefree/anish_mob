import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux'
import store from './src/store'
// import HomeScene from './scenes/HomeScene'
import Categories from './src/components/Categories'
import Routes from './src/Routes'

import { firebaseApp } from './src/config/firebase'

// actions
import { loginUser } from './src/actions'


firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(loginUser(user.email))
  } else {
    store.dispatch(loginUser(null))
  }
})

store.subscribe(() => console.log(store.getState()))


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);
