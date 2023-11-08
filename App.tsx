import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import home from './home';
import profile from './profile';
import login from './src/login';
import MainNavigation from './Navigation/MainNavigation';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      
  <MainNavigation/>
    </NavigationContainer>
   
  )
}

export default App

const styles = StyleSheet.create({})