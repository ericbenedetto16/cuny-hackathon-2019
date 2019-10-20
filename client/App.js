import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import Nav from './components/Nav';
import { StoreInitializer } from './utils/dataDigest';

const App = () => {
  return (
    <Provider store={store}>
      <StoreInitializer />
      <Nav />
    </Provider>
  )
}


export default App;