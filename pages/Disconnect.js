import React, { Component } from 'react';
import {
  View,
  Button,
  Image,
  StyleSheet, 
  Text
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class Disconnect extends Component
{

  render()
  {
    return(
    <View style={styles.container}>
      <FontAwesome5 style={styles.icon} size={80} name="frown" solid />
      <Text style={styles.titre}>Ouups!</Text>
      <Text style={styles.txt}>Are you sure you want to disconnect from the application ?</Text>
      <Button style={styles.btn} title="Disconnect"/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F9F9F9',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  txt: {
    fontSize: 18,
    margin:20,
    textAlign: "center"
  },
  titre: {
    fontSize: 30,
    fontWeight:"bold",
    textAlign: "center"
  },
  icon: {
    color:"#007bff",
    margin: 30
  }
});

