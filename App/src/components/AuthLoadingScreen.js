import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,

  View,
} from 'react-native';
import User from '../../User';
import firebase from 'firebase'



export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }
  

  componentWillMount (){
    
    var config = {
      apiKey: "AIzaSyBTNP-itiMEBb3stqnDsGLTBtisZlzfVXk",
      authDomain: "fir-dcccc.firebaseapp.com",
      databaseURL: "https://fir-dcccc.firebaseio.com",
      projectId: "fir-dcccc",
      storageBucket: "fir-dcccc.appspot.com",
      messagingSenderId: "969784821481"
    };
    firebase.initializeApp(config);
  }
  

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    User.phone = await AsyncStorage.getItem('userPhone');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(User.phone ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}