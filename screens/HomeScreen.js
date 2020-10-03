 
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Button } from 'native-base';
import * as firebase from 'firebase'




export default class HomeScreen extends React.Component {
constructor(props){
  super(props)
  this.state={
    email:'',
    name:''
  }
}
static navigationOptions ={
  title:'Home',
  headerShown:false

}
componentDidMount(){
firebase.auth().onAuthStateChanged(authenticate=>{
  if (authenticate) {
    this.setState({
      email:authenticate.email,
      name:authenticate.displayName,
      
    })
  } else {
    this.props.navigation.replace('Signin')
  }
})

}

signOutUser=()=>{
  firebase
  .auth()
  .signOut()
  .then(()=>console.log('signOut'))
  .catch(error=>
    alert(error.mesaage)
)
}

  render(){
  return (
    <View style={styles.container}>
     <View style={styles.logoContainer}>
     <Image
     source={require('../assets/logo.png')}
     />
     <Text>learnCodeOnline.in</Text>
     </View>
     <View  style={styles.userDetails}> 
  <Text>hey {this.state.name}</Text>
  <Text>You Are signed in as: {this.state.email}</Text>
     </View>
     <Button
     rounded
     success
     full
     style={styles.button}
     onPress={()=>{
       this.signOutUser()
     }}
     >
<Text style={styles.buttonText}>
  SignOut
</Text>
     </Button>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 20
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100
  },
  userDetails: {},

  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  }
});
