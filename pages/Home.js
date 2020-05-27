import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  View,
  Button,
  Image,
  StyleSheet, 
  Text
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Rooms from './Rooms';
import Profil from './Profil';
import Disconnect from './Disconnect';
import Setting from './Setting';

const Tab = createBottomTabNavigator();

export default class Home extends Component
{
  render()
  {
    return(
    <View style={styles.container}>
      
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Rooms') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Setting') {
            iconName = focused ? 'cog' : 'cog';
          } else if (route.name === 'Profil') {
            iconName = focused ? 'user' : 'user';
          } else if (route.name === 'Disconnect') {
            iconName = focused ? 'sign-out-alt' : 'sign-out-alt';
          }
          // You can return any component that you like here!
          return <FontAwesome5 name={iconName} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#007bff',
        inactiveTintColor: '#202020'
      }} 
      >
        <Tab.Screen name="Rooms" component={Rooms}/>
        <Tab.Screen name="Setting" component={Setting} />
        <Tab.Screen name="Profil" component={Profil} />
        <Tab.Screen name="Disconnect" component={Disconnect} />
      </Tab.Navigator>
    
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F9F9F9'
  }
});

