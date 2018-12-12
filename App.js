import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { TabNavigator, StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import LoginScreen from './screens/LoginScreen';
import AddScreen from './screens/AddScreen';
import MapScreen from './screens/MapScreen';
import ProfilScreen from './screens/ProfilScreen';

console.disableYellowBox = true


var TabScreenNavigator = TabNavigator({
  Tab1: { screen: HomeScreen },
  Tab2: { screen: FavoriteScreen },
  Tab3: { screen: AddScreen },
  Tab4: { screen: MapScreen },
  Tab5: { screen: ProfilScreen },
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

const MainScreenNavigator = StackNavigator({
  ScreenNotOnTabbar: { screen: LoginScreen },
  Tab: { screen: TabScreenNavigator },
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

MainScreenNavigator.navigationOptions = {
  title: "Menu",
}


export default MainScreenNavigator;