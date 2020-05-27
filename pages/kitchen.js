import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet, 
  Text
} from 'react-native';
import { Switch } from 'react-native-gesture-handler';



export default class kitchen extends Component
{
  constructor(props){
    super(props);
    this.state={
      switchValue: false,
    }
}
  render()
  {
    return(
    <View style={styles.container}>
         <Image
         style={styles.img}
         source={require('../images/kitchenRoom.png')}
         ></Image>

         <View style={styles.device}>
           <Text style={{fontSize:25, margin: 10}}>Window : </Text>
           <Switch value={this.state.switchValue} onValueChange={(switchValue) => this.setState({switchValue})} />
           <Text style={{fontSize:25, margin: 10}}>{this.state.switchValue ? 'opened' : 'closed'}</Text>
         </View>
         
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
  device: {
    marginBottom:1,
    marginTop:80,
    alignItems: "center"
  }
});

