import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux'
import store from './src/store'
import HomeScreen from './screens/HomeScreen'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);
