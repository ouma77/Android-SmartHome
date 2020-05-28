import 'react-native-gesture-handler';
import React, { Component , useState } from 'react';
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet, 
  Text
} from 'react-native';

import Bedroom from './Bedroom';
import livingroom from './livingroom';
import kitchen from './kitchen';


import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default class Rooms extends Component
{
  constructor(props){
    super(props);
    this.state={
      n_bedroom: [
        {
          title: "bedroom 1",
          key: '1'
        },
        {
          title: "bedroom 2",
          key: '2'
        }
      ],
      n_livingroom: [
        {
          title: "livingroom 1",
          key: '1'
        },
        {
          title: "livingroom 2",
          key: '2'
        }
      ],
      n_kitchen: [
        {
          title: "kitchen 1",
          key: '1'
        }
      ]
    }
  }

  list1 = () => {

    return this.state.n_bedroom.map(element => {
      return (
        <View style = {styles.item}>
          <Image
         style={{width:50 , height:32}}
         source={require('../images/bedroomN.png')}
         ></Image>
          <Text key={element.key} style = {styles.txt}>{element.title}</Text>
        </View>
      );
    });
  };

  list2 = () => {
    return this.state.n_livingroom.map(element => {
      return (
        <View style = {styles.item}>
          <Image
         style={{width:50 , height:40}}
         source={require('../images/livingroomN.png')}
         ></Image>
          <Text key={element.key} style = {styles.txt}>{element.title}</Text>
        </View>
      );
    });
  };

  list3 = () => {
    return this.state.n_kitchen.map(element => {
      return (
        <View style = {styles.item}>
          <Image
         style={{width:50 , height:40}}
         source={require('../images/kitchenN.png')}
         ></Image>
          <Text key={element.key} style = {styles.txt}>{element.title}</Text>
        </View>
      );
    });
  };

  onPress=() =>
  {
    this.props.navigation.navigate('Bedroom');
  }

  onPress2=() =>
  {
    this.props.navigation.navigate('livingroom');
  }

  onPress3=() =>
  {
    this.props.navigation.navigate('kitchen');
  }

  render(){
    
    return (
      <View>


        <Stack.Navigator>
        <Stack.Screen name="Bedroom" component={Bedroom} />
        <Stack.Screen name="livingroom" component={livingroom} />
        <Stack.Screen name="kitchen" component={kitchen} />
        </Stack.Navigator>


        <ScrollView>
        <Text style = {styles.tit}>Bedrooms</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={this.onPress}
      >
        <View>{this.list1()}</View>
      </TouchableOpacity>
      
        <Text style = {styles.tit}>Livingrooms</Text>  
      <TouchableOpacity
        style={styles.button}
        onPress={this.onPress2}
      >
        <View>{this.list2()}</View>
      </TouchableOpacity>

        <Text style = {styles.tit}>kitchen</Text> 
      <TouchableOpacity
        style={styles.button}
        onPress={this.onPress3}
      >
      <View>{this.list3()}</View>
      </TouchableOpacity> 
      </ScrollView>
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
  },
  item: {
    backgroundColor : '#7AAFFD',
    padding: 20,
    paddingLeft:50,
    paddingRight:50,
    margin: 20,
    borderRadius: 40
  },
  txt: {
    color: '#F9F9F9',
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Quicksand-Medium"
  },
  tit: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Quicksand-Medium",
    margin: 10
  }
});

