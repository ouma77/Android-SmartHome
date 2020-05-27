import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './pages/SignIn';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Bedroom from './pages/Bedroom';
import livingroom from './pages/livingroom';
import kitchen from './pages/kitchen';

const Stack = createStackNavigator();

export default class App extends Component
{

  render()
  {
    return(
    <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Rooms" component={Rooms} />
        <Stack.Screen name="Bedroom" component={Bedroom} />
        <Stack.Screen name="livingroom" component={livingroom} />
        <Stack.Screen name="kitchen" component={kitchen} />
      </Stack.Navigator>
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

