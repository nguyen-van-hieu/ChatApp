
import React from 'react';
import {TouchableOpacity,AsyncStorage,Alert, TextInput, View,Text} from 'react-native';
import User from '../../User';
import styles from '../../constants/styles';
import firebase from 'firebase'









export default class LoginScreen extends React.Component{
  static navigationOptions={
    header :null
  }
  state={
    phone:'',
    name:''
  }
  handleChange =key=>val =>{
    this.setState({
      [key] :val
    })
  }

  onSubmitFrom= async ()=>{
    if(this.state.phone.length <10){
      Alert.alert('Error','wrong phone number')
    } else if(this.state.name.length <3){
      Alert.alert('Error','Wrong name')
    }else{
      //save user data
      await AsyncStorage.setItem('userPhone',this.state.phone)
      User.phone=this.state.phone
      firebase.database().ref('users/'+ User.phone).set({
        name: this.state.name
      })
      
      this.props.navigation.navigate('App');
      

    }
  }
  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity >
        <Text style={styles.logo}>^.^CHAT^.^</Text>
      </TouchableOpacity>

      <TextInput
      placeholder='Name'
      style={styles.input}
      value={this.state.name}
      onChangeText={this.handleChange('name')}
      />
    
      <TextInput
      placeholder='Phone Number'
      keyboardType='number-pad'
      style={styles.input }
      value={this.state.phone}
      onChangeText={this.handleChange('phone')}
      />
    
      <TouchableOpacity onPress={this.onSubmitFrom}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      
      </View>
    );
  }
}


