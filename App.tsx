/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import {RootNavigator} from './src/navigation/root-navigation';
import {NavigationContainer} from '@react-navigation/native';
// import {RootNavigator} from './src/navigation/root-navigation';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
