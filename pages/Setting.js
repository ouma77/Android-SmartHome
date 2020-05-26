import React, { useState } from 'react';
import {
  View,
  Switch,
  SafeAreaView,
  ScrollView ,
  StyleSheet, 
  Text
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Setting()
{
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#007bff" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
        />
        </View>
        <View>
          <Text style={styles.txt}>Alarm : </Text>
          <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#007bff" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
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
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#007bff" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
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
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#007bff" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
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
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#007bff" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
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
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#007bff" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
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
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#007bff" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
        />
        </View>
      </View>

      </ScrollView>
    </SafeAreaView>
    );
  
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

