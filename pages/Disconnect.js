import React, { Component } from 'react';
import {
  View,
  Button,
  Image,
  StyleSheet, 
  Text
} from 'react-native';

export default class Disconnect extends Component
{

  render()
  {
    return(
    <View style={styles.container}>
      <Text>Disconnect here</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F9F9F9'
  }
});

