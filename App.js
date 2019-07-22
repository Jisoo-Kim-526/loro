import React, { Component } from 'react';
import {createSwitchNavigator, createStackNavigator,createAppContainer} from 'react-navigation';
import SplashScreen from './src/screens/SplashScreen';
import Router from './Router';

const App = createSwitchNavigator({
  Splash: SplashScreen,
  App: Router
});

export default createAppContainer(App);