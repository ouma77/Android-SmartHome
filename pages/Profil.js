import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View,
        Dimensions,TouchableOpacity,Button,Alert,Image,
        ImageBackground,StatusBar} from 'react-native';

export default class Profil extends Component
{
  render()
  {
    return (
      <ImageBackground
       source={require('../images/homeBG.jpg')}
       imageStyle={{resizeMode: 'stretch'}}
       style={{width: '200%', height: '100%'}}>

     <StatusBar
       backgroundColor="#0B7600"
       barStyle="light-content"/>

     <View style={styles.container}>

     <View style={styles.inputContainer}>
       <TextInput style={styles.inputs}
        placeholder="Login"
        keyboardType="email-address"
        underlineColorAndroid='transparent'
        />
     </View>

     <View style={styles.inputContainer}>

        <TextInput style={styles.inputs}
        placeholder="Password"
        secureTextEntry={true}
        underlineColorAndroid='transparent'
        />
     </View>

   <TouchableOpacity style={styles.AddUserButtonText}>
    <Text style={styles.AddUser}>Add a User</Text>
   </TouchableOpacity>

  </View>
</ImageBackground>
    );
  }
}
      
const styles = StyleSheet.create({
  container: {
     flex: 1,
     marginLeft:30,
     marginTop:40
  },
  AddUserButtonText:{
    color: '#007bff',
    backgroundColor: '#F9F9F9',
    width:350,
    height:45,
    borderRadius:20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  AddUser:{
    color: '#007bff',
    fontWeight:'bold',
    alignItems: 'center'
 },
 inputContainer: {
    borderBottomColor: '#05C203',
    backgroundColor: '#FFFFFF',
    borderRadius:5,
    borderBottomWidth: 1,
    width:350,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
 },
 inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
 },
})