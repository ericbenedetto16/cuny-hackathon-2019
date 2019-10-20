import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import Nav from './components/Nav';
import { StoreInitializer } from './utils/dataDigest';
import NotificationsHandler from './components/NotificationsHandler';

const App = () => {
  return (
    <Provider store={store}>
      <NotificationsHandler />
      <StoreInitializer />
      <Nav />
    </Provider>
  )
}


export default App;