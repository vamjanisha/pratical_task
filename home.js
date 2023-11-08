import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const home = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('profile')}>
        <Text>home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({});
