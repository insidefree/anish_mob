import React, { Component } from 'react'
import Expo from 'expo'
import { View, Text, Image, NetInfo } from 'react-native'
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


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      online: true,
      isReady: false
    }
    console.ignoredYellowBox = ['Setting a timer']
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  componentWillUpdate(nextState, nextProps) {
    // NetInfo.isConnected.fetch().then(isConnected => {
    //   this.setState({ online: isConnected });
    // });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }
    return <Provider store={store}>
      {
        this.state.online ? <AppNavigator /> :
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 22, textAlign: 'center' }}>Required internet</Text>
          </View>
      }
    </Provider>
  }
}