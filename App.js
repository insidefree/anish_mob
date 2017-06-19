import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'


// routes
import { RootNav } from './src/routes'
// store
import store from './src/store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNav />
      </Provider>
    )
  }
}
