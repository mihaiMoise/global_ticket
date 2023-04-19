/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import Home from './Home';

function App(): JSX.Element {
  return(
    <>
      <StatusBar barStyle="dark-content" hidden/>
      <Home  username='Sports Fan'/> 
    </>
  );
}


export default App;
