import React from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

// routes
import { RootNav } from './src/routes'
// actions
import { loginUser } from './src/actions/loginUser'
// store
import store from './src/store'
// config
import { firebaseApp } from './src/config/firebase'

import AppNavigator from './src/AppNavigator'

// firebase connect
firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(loginUser(user.email))
  } else {
    store.dispatch(loginUser(null))
  }
})

// store.subscribe(() => console.log('store subscribe: ', store.getState()))
// end firebase connect


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('facebook_login', () => App)