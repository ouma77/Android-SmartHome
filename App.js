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
import Profil from './pages/Profil';
import Disconnect from './pages/Disconnect';

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
        <Stack.Screen name="Profil" component={Profil} />
        <Stack.Screen name="Disconnect" component={Disconnect} />
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

