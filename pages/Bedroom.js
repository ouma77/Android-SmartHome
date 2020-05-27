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


export default class bedroom extends Component
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
         source={require('../images/bedroomRoom.png')}
         ></Image>

         <View style={styles.device}>
         <Text style={{fontSize:18, marginBottom:10}}>Temperature</Text>
         <Text style={styles.deg}>{this.state.slideValue}°C</Text>
         <Slider style={styles.slider} value={this.state.slideValue} minimumValue={15}
                 maximumValue={50} step={1} minimumTrackTintColor='#FF8D8D' thumbTintColor='#FF8D8D' onValueChange={(slideValue) => this.setState({slideValue})} />
         </View>

         <View style={styles.device}>
           <Text style={{fontSize:18, marginBottom:10}}>Light : {this.state.lamp}</Text>
           <Switch value={this.state.switchValue} onValueChange={(switchValue) => this.setState({switchValue})} />
         </View>

         <View style={styles.device}>
           <Text style={{fontSize:18, marginBottom:10}}>Window : </Text>
           <Switch value={this.state.switchValue2} onValueChange={(switchValue2) => this.setState({switchValue2})} />
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
    width:290 , 
    height:180 , 
    marginLeft:50, 
    marginTop:30
  },
  slider: {
    width:'100%',
    margin:10
  },
  device: {
    marginBottom:1,
    marginTop:30,
    alignItems: "center"
  },
  deg: {
    fontSize:20,
    fontWeight:'bold'
  }
});

