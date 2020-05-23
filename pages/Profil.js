import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  View,
  StyleSheet, 
  Text
} from 'react-native';

export default class Profil extends Component
{
  render()
  {
    return(
    <View style={styles.container}>
      <Text>Profil</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F9F9F9',
    alignItems: 'center', 
    justifyContent: 'center'
  }
});