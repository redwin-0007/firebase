import React from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView,
Image,
TouchableOpacity,
ScrollView

} from 'react-native';
import * as firebase from 'firebase'
import {Form,Item,Input,Label,Button} from 'native-base'

export default class SigninScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
      email:'',
      password:'',

    }
  }
 
  static navigationOptions ={
    title:'SignIn',
    headerShown:false
  
  }

  signInUser=(email,password)=>{
  firebase
  .auth()
  .signInWithEmailAndPassword(email,password)
  .then(()=>{
    this.props.navigation.replace('Home')
  })
  .catch(error=>{alert(error.message)})
  }


  render(){
  return (
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
    this.signInUser(this.state.email,this.state.password)
   }}
   >
   <Text style={styles.buttonText}>Sign In</Text>
   </Button>

     </Form>
     <View style={styles.footer}>
       <Text>OR</Text>
       <TouchableOpacity onPress={()=>{
      this.props.navigation.navigate('Signup')
       }}>
         <View style={styles.lastComponent}>
         <Text>Create a New Account</Text>
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
    width: "100%",
    marginBottom: 30
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
    backgroundColor:'#67E6DC',
    borderRadius:30,
    width:155,
    justifyContent:'center',
    alignItems:'center'
  }
});