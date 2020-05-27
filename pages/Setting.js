import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  View,
  Switch,
  SafeAreaView,
  ScrollView ,
  StyleSheet, 
  Text
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class Setting extends Component
{

  constructor(props){
    super(props);
    this.state={
      switchValue: false,
      switchValue2: false,
      switchValue3: false,
      switchValue4: false,
      switchValue5: false,
      switchValue6: false,
      switchValue7: false,
    }
  }
  
  render()
  {
    return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.list}>
        <View>
          <FontAwesome5 style={styles.icon} size={20} name="cloud" />
          <Text style={styles.txt}>Weather</Text>
        </View>
        <View>
          <Text style={styles.txt}>Sunny</Text>
          <Text style={styles.txt}>30°C</Text>
        </View>
      </View>
      

      <View style={styles.list}>
        <View>
          <FontAwesome5 style={styles.icon} size={20} name="exclamation-triangle" solid />
          <Text style={styles.txt}>Alert</Text>
        </View>
        <View>
          <Text style={styles.txt}>Watering : </Text>
          <Switch
        onValueChange={(switchValue) => this.setState({switchValue})}
        value={this.state.switchValue}
        />
        </View>
        <View>
          <Text style={styles.txt}>Alarm : </Text>
          <Switch
        onValueChange={(switchValue2) => this.setState({switchValue2})}
        value={this.state.switchValue2}
        />
        </View>
      </View>


      <View style={styles.list}>
        <View>
          <FontAwesome5 style={styles.icon} size={20} name="lightbulb" solid />
          <Text style={styles.txt}>Hall ligth</Text>
        </View>
        <View>
          <Text style={styles.txt}>On/Off : </Text>
          <Switch
        onValueChange={(switchValue3) => this.setState({switchValue3})}
        value={this.state.switchValue3}
        />
        </View>
      </View>

      <View style={styles.list}>
        <View>
          <FontAwesome5 style={styles.icon} size={20} name="lightbulb" solid />
          <Text style={styles.txt}>ligth</Text>
        </View>
        <View>
        <Switch
        onValueChange={(switchValue4) => this.setState({switchValue4})}
        value={this.state.switchValue4}
        />
        </View>
      </View>

      <View style={styles.list}>
        <View>
          <FontAwesome5 style={styles.icon} size={20} name="door-open" />
          <Text style={styles.txt}>Door System</Text>
        </View>
        <View>
          <Text style={styles.txt}>Locked/UnLocked : </Text>
          <Switch
        onValueChange={(switchValue5) => this.setState({switchValue5})}
        value={this.state.switchValue5}
        />
        </View>
      </View>

      <View style={styles.list}>
        <View>
          <FontAwesome5 style={styles.icon} size={20} name="door-open" />
          <Text style={styles.txt}>Door : Garage</Text>
        </View>
        <View>
          <Text style={styles.txt}>Locked/UnLocked : </Text>
          <Switch
        onValueChange={(switchValue6) => this.setState({switchValue6})}
        value={this.state.switchValue6}
        />
        </View>
      </View>

      <View style={styles.list}>
        <View>
          <FontAwesome5 style={styles.icon} size={20} name="windows" solid />
          <Text style={styles.txt}>Window</Text>
        </View>
        <View>
          <Text style={styles.txt}>auto : </Text>
          <Switch
        onValueChange={(switchValue7) => this.setState({switchValue7})}
        value={this.state.switchValue7}
        />
        </View>
      </View>

      </ScrollView>
    </SafeAreaView>
    );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F9F9F9',
    alignItems: 'center'
  },
  list: {
    width: 390,
    height: 70,
    backgroundColor:"#E5E5E5",
    alignItems: 'center',
    flexDirection:"row",
    justifyContent:"space-between",
    borderRadius: 15,
    paddingLeft: 5,
    paddingRight:15,
    marginTop: 20
  },
  icon: {
    color:'#007bff',
    marginLeft: 10
  },
  txt: {
    color:'#202020',
    fontWeight:"bold"
  },
  // scrollView: {
  //   marginHorizontal: 20
  // }
});

