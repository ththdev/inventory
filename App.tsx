import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './src/navigators/AppNavigator'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </>
  );
};

export default App;
