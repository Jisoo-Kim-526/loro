import React, { Component } from 'react';
import {createSwitchNavigator, createStackNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import GuestScreen from './src/screens/GuestScreen';
import FacebookScreen from './src/screens/FacebookScreen.js';
import GoogleScreen from './src/screens/GoogleScreen';
import SubscriberScreen from './src/screens/SubscriberScreen';
import MainScreen from './src/screens/MainScreen';

const Router = createStackNavigator({
    HomeScreen: { screen: HomeScreen }, 
    GuestScreen: { screen: GuestScreen }, 
    FacebookScreen: { screen: FacebookScreen },
    GoogleScreen: { screen: GoogleScreen },
    SubscriberScreen: { screen: SubscriberScreen },
    MainScreen: { screen: MainScreen },
  },
  {
    initialRouteName: 'HomeScreen',
  }
);

export default createAppContainer(Router);