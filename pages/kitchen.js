import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Image,
  StyleSheet, 
  Text,
  Slider
} from 'react-native';
import { Switch } from 'react-native-gesture-handler';


export default class kitchen extends Component
{
  constructor(props){
    super(props);
    this.state={
      lamp: "broken",
      slideValue:15,
      switchValue: false,
      switchValue2: false
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
      {/* <ScrollView> */}
         <Image
         style={styles.img}
         source={require('../images/kitchenRoom.png')}
         ></Image>

         <View style={styles.device}>
           <Text style={{fontSize:25, margin: 10}}>Window : </Text>
           <Switch value={this.state.switchValue} onValueChange={(switchValue) => this.setState({switchValue})} />
           <Text style={{fontSize:25, margin: 10}}>{this.state.switchValue ? 'opened' : 'closed'}</Text>
         </View>
         
      
      {/* <Button title="change" onPress={this.change}></Button> */}
      {/* </ScrollView> */}
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F9F9F9',
  },
  img:{
    width:270 , 
    height:220 , 
    marginLeft:68, 
    marginTop:60
  },
  slider: {
    width:'100%',
    margin:10
  },
  device: {
    marginBottom:1,
    marginTop:80,
    alignItems: "center"
  }
});

