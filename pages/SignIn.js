import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  View,
  TextInput,
  Button,
  Image,
  Text,
  StyleSheet,
  KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard
} from 'react-native';

export default class SignIn extends Component
{
  show1=() =>
  {
    this.props.navigation.navigate('Home');
  }

  render()
  {
    return(
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Image
         style={{width:200 , height:200, marginBottom:20 , marginLeft:70, marginTop:30}}
         source={require('../images/key4.png')}
         ></Image>
          <Text style={styles.hello}>Hello <Text style={styles.user}>User</Text></Text>
          <Text style={styles.txt}>Authenticate your account</Text>
          <TextInput placeholder="Login" style={styles.textInput} />
          <TextInput placeholder="Password" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Sign in" onPress={this.show1} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  header: {
    fontSize: 36,
    marginBottom: 48
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
  user: {
    color:'#007bff'
  },
  hello: {
    fontSize: 32,
    fontWeight:'bold',
    marginTop:5
  },
  txt: {
    marginBottom: 20,
    fontSize:18,
    marginTop:-10
  },
});

