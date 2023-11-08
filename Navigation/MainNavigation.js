import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import login from '../src/login';
const Stack = createStackNavigator();
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import profile from '../profile';
import allProduct from '../allProduct';
const Tab = createBottomTabNavigator();
const MainNavigation = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="List" component={profile} />
      <Stack.Screen name="SingalProduct" component={allProduct} />
    </Stack.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
