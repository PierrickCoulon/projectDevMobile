import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { TabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

console.disableYellowBox = true

var MainScreenNavigator = TabNavigator({
  Tab1: { screen: HomeScreen},
  Tab2: { screen: FavoriteScreen},
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: true,
  tabBarOptions: {
    scrollEnabled: true,
    activeTintColor: 'white',
    activeBackgroundColor: 'lightblue',
    labelStyle: {
      fontSize: 8,
    }
  }
});

MainScreenNavigator.navigationOptions = {
  title: "Menu"
}


export default MainScreenNavigator;