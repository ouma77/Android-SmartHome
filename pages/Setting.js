import React, { Component } from 'react';
import {
  View,
  Button,
  Image,
  StyleSheet, 
  Text
} from 'react-native';

export default class Setting extends Component
{

  render()
  {
    return(
    <View style={styles.container}>
      <Text>Setting</Text>
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

