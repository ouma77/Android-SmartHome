import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  View,
  Button,
  Image,
  StyleSheet, 
  Text
} from 'react-native';

export default class Landing extends Component
{

  start=() =>
  {
    this.props.navigation.navigate('SignIn');
  }

  render()
  {
    return(
    <View style={styles.container}>
      
        <View style={styles.inner}>
          <Text style={styles.welcome}>Welcome to <Text style={styles.smarthome}>Smarthome</Text></Text>
          <Text style={styles.txt}>Let's manage your smart home</Text>
          <Image
         style={{width:300 , height:260, marginBottom:20 , marginLeft:30, marginTop:7}}
         source={require('../images/home.png')}
         ></Image>
          <View style={styles.btnContainer}>
            <Button title="Get Started" onPress={this.start}/>
          </View>
        </View>
     
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F9F9F9'
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 20
  },
  btnContainer: {
    marginTop: 5
  },
  welcome: {
    fontSize: 32,
    fontWeight:'bold',
    marginTop:20
  },
  txt: {
    marginBottom: 20,
    fontSize:18,
    marginTop:-30
  },
  smarthome: {
    color:'#007bff'
  }
});

