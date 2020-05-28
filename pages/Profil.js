import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View,
        Dimensions,TouchableOpacity,Button,Alert,Image,
        ImageBackground,StatusBar} from 'react-native';

export default class Profil extends Component
{
  render()
  {
    return (
      <View style={styles.container}>
        <Image
         style={{width:150 , height:150, marginBottom:30}}
         source={require('../images/profil.png')}
         ></Image>
         <Text style={styles.txt}>Hello, You are the administrator off your own Home!</Text>
         <Text style={styles.txt}>You can Add or change users in this application.</Text>

         <Text>View Users</Text>
         <TouchableOpacity
        style={styles.button}
        onPress={this.onPress3}
      >
         <Text>Add Users</Text>
         </TouchableOpacity>
      </View>
    );
  }
}
      
const styles = StyleSheet.create({
  container: {
     flex: 1,
     marginTop:40,
     alignItems:'center'
  },
  txt: {
    marginTop:10,
    fontSize:15
  }
})