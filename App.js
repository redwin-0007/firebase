import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase'
import{createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from'./screens/HomeScreen'
import LoadingScreen from'./screens/LoadingScreen'
import SigninScreen from './screens/SigninScreen'
import SignupScreen from './screens/SignupScreen'

var firebaseConfig = {
  apiKey: "AIzaSyAj9eS8lvUwSOyPlA_aTqkQBfMG0aOAbHM",
  authDomain: "react-7a1ee.firebaseapp.com",
  databaseURL: "https://react-7a1ee.firebaseio.com",
  projectId: "react-7a1ee",
  storageBucket: "react-7a1ee.appspot.com",
  messagingSenderId: "986265317614",
  appId: "1:986265317614:web:b2f94fdce362e51a2c83ff",
  measurementId: "G-J90VBCCLSJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const MainNavigator =createStackNavigator(
  {
  Loading:{screen:LoadingScreen},
  Signin:{screen:SigninScreen},
  Signup:{screen:SignupScreen},
  Home:{screen:HomeScreen}
},{
  initialRouteName:'Loading'
}
)

const App =createAppContainer(MainNavigator)
export default App