
import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, TextInput, View,Text} from 'react-native';




export default class App extends Component{
  state={
    phone:'',
    name:''
  }
  handleChange =key=>val =>{
    this.setState({
      [key] :val
    })
  }
  onSubmitFrom=()=>{
    alert(this.state.name)
  }
  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity >
        <Text style={styles.logo}>^.^CHAT^.^</Text>
      </TouchableOpacity>
    
      <TextInput
      placeholder='Phone Number'
      keyboardType='number-pad'
      style={styles.input }
      value={this.state.phone}
      onChangeText={this.handleChange('phone')}
      />
      <TextInput
      placeholder='Name'
      style={styles.input}
      value={this.state.name}
      onChangeText={this.handleChange('name')}
      />
      <TouchableOpacity onPress={this.onSubmitFrom}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    
  },
  input:{
    padding :10 ,
    borderWidth:1,
    borderColor:'#f7c602',
    width :'90%',
    marginBottom:10,
    borderRadius :50

  },
  btnText :{
    borderWidth:2,
    borderColor:'#f7c602',
    borderRadius :30,
    padding :10 ,
    fontSize :20
    

  },
  logo:{
    marginBottom:100,
    /* borderWidth:2,
    borderColor:'#f7c602', */
    borderRadius :50,
    padding :10 ,
    color :'#f7c602',
    fontSize :40

  }

});
