import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,KeyboardAvoidingView,


} from 'react-native';
import * as firebase from 'firebase'
import {Form,Item,Input,Label,Button} from 'native-base'

export default class SignupScreen extends React.Component {
constructor(props){
  super(props)
  this.state={
    email:'',
    password:'',
    name:''
  }
}
  static navigationOptions ={
    title:'SignUn',
    headerShown:false
  
  }

  signupUser=(name, email,password)=>{
  firebase
  .auth()
  .createUserWithEmailAndPassword(email,password)
  .then(authenticate=>{
    return authenticate.user
    .updateProfile({
      displayName: name
    })
    .then(()=>{
      this.props.navigation.replace('Home')
    })
  })
  .catch(error=>{
    alert(error.message)
  })
  



  }



  render(){
  return(
   <KeyboardAvoidingView
    behavior='position'
    enabled
    style={styles.container}
    >
     <View style={styles.logoContainer}>
     <Image 
     source={require('../assets/logo.png')}
     />
     <Text>LeanCodeOnline.in</Text>
     </View>
     <Form style={styles.form}>
      
     <Item  floatingLabel>
         <Label>Name</Label>
        <Input
        
       autoCapitalize='none'
       autoCorrect={false}
       keyboardType='name-phone-pad'
       onChangeText={(name)=>{
         this.setState({
          name
         })

       }}
       />
       </Item>


       <Item  floatingLabel>
         <Label>Email</Label>
        <Input
       autoCapitalize='none'
       autoCorrect={false}
       keyboardType='email-address'
       onChangeText={(email)=>{
         this.setState({
           email
         })

       }}
       />
       </Item>



       <Item  floatingLabel>
         <Label>Password</Label>
        <Input
        secureTextEntry={true}
       autoCapitalize='none'
       autoCorrect={false}
       keyboardType='email-address'
       onChangeText={(password)=>{
         this.setState({
          password
         })

       }}
       />
       </Item>
   <Button
   style={styles.button}
   full
   rounded
   onPress={()=>{
    this.signupUser(
      this.state.name,
      this.state.email,
      this.state.password,
    )
   }}
   >
   <Text style={styles.buttonText}>Sign Up</Text>
   </Button>

     </Form>
     <View style={styles.footer}>
       <Text>OR</Text>
       <TouchableOpacity onPress={()=>{
      this.props.navigation.navigate('Signin')
       }}>
         <View style={styles.lastComponent}>
         <Text>Already having Account</Text>
         </View>
       </TouchableOpacity>
     </View>
    </KeyboardAvoidingView>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100
  },
  form: {
    padding: 20,
    width: "100%"
  },
  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
  footer: {
    alignItems: "center"
  },
  lastComponent:{
    backgroundColor:'#45CE30',
    borderRadius:30,
    width:155,
    justifyContent:'center',
    alignItems:'center'
  }
});