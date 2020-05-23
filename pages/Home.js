import React, { Component } from 'react';
import {
  View,
  Button,
  Image,
  StyleSheet, 
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Rooms" component={Rooms} />
        <Tab.Screen name="Setting" component={Setting} />
        <Tab.Screen name="Profil" component={Profil} />
        <Tab.Screen name="Disconnect" component={Disconnect} />
      </Tab.Navigator>
    </NavigationContainer>
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

