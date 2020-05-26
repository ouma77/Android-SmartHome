import React, { Component , useState } from 'react';
import {
  View,
  Button,
  Image,
  FlatList,
  StyleSheet, 
  Text
} from 'react-native';



export default function Rooms() 
{
  const [name , setName] = useState([
    { name: 'Bedroom' , key:'1'},
    { name: 'LivingRoom' , key:'2'},
    { name: 'Kitchen' , key:'3'},
  ]);
  
    return(
    <View style={styles.container}>
      <FlatList
        data ={name}
        renderItem = {({ item }) => (
        <View style = {styles.item}>
          {/* <Image
         style={styles.img}
         source={require('../images/bedroomRoom.png')}
         ></Image> */}
          <Text style = {styles.txt}>{item.name}</Text>
          </View>
        )}
      />
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F9F9F9',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  item: {
    backgroundColor : '#007bff',
    padding: 60,
    paddingLeft:100,
    paddingRight:100,
    margin: 20,
    borderRadius: 50
  },
  txt: {
    color: '#F9F9F9',
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Quicksand-Medium"
  }
  // img: {
  //   width:200, 
  //   height:200
  // }
});

