import React, { Component } from 'react';
import {
  View,
  Button,
  Image,
  StyleSheet, 
  Text
} from 'react-native';
export default class bedroom extends Component
{
  constructor(props){
    super(props);
    this.state={
      lamp: "broken",
    }
    this.getLampState();
    this.getLampState=this.getLampState.bind(this);
  }
  
  getLampState(){
    fetch('http://192.168.1.12:5000/home/lamp').then(res=>res.json()).then(data=>{
      this.setState({lamp: data.bedroom[0]})
    })
  }
  // change=() =>
  // {
  //   return this.setState({lamp:"ON"});
  // }
  render()
  {
    return(
    <View style={styles.container}>
      <Text>Lampe is {this.state.lamp}</Text>
      {/* <Button title="change" onPress={this.change}></Button> */}
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

