import React, {Component} from 'react';
import {TextInput, StyleSheet, Text,Modal, View,
        Dimensions,TouchableOpacity,Button,Alert,Image,
        TouchableHighlight,StatusBar} from 'react-native';

export default class Profil extends Component
{
    state = {
      modalVisible: false
    };
  
    setModalVisible = (visible) => {
      this.setState({ modalVisible: visible });
    }
  
  render()
  {
    const { modalVisible } = this.state;
    return (
      <View style={styles.container}>
        
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Add Users here :</Text>
              <TextInput placeholder="Login" style={styles.textInput} />
              <TextInput placeholder="Password" style={styles.textInput} />

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Submit</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>


        <Image
         style={{width:150 , height:150, marginBottom:30}}
         source={require('../images/profil.png')}
         ></Image>
         <Text style={styles.txt}>Hello, You are the administrator of your own Home!</Text>
         <Text style={styles.txt}>You can Add or change users in this application.</Text>
{/* 
         <TouchableOpacity
        style={styles.button}
        onPress={this.onPress3}
      >
         <Text style={{color:'#F9F9F9' , fontWeight:'bold', fontSize:18}}>View Users</Text>
         </TouchableOpacity> */}

         <TouchableOpacity
        style={styles.button}
        onPress={() => {
          this.setModalVisible(true);
        }}
      >
         <Text style={{color:'#F9F9F9' , fontWeight:'bold', fontSize:18}}>Add Users</Text>
         </TouchableOpacity>
      </View>
    );
  }
}
      
const styles = StyleSheet.create({
  container: {
     flex: 1,
     marginTop:40,
     alignItems:'center'
  },
  txt: {
    marginTop:10,
    fontSize:15
  },
  button: {
    backgroundColor:"#7AAFFD",
    padding:20,
    margin:20,
    borderRadius:30
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 30
  }
})