import React, { Component } from 'react';
import {
  View,
  Button,
  Image,
  StyleSheet, 
  Text
} from 'react-native';

import Rooms from './Rooms'
import Setting from './Setting'
import Disconnect from './Disconnect'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Rooms" component={Rooms} />
      <Tab.Screen name="Setting" component={Setting} />
      <Tab.Screen name="Disconnect" component={Disconnect} />
    </Tab.Navigator>
  );
} 


