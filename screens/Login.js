import { View, Text,TextInput,StyleSheet,Image, Alert,KeyboardAvoidingView} from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
const logo=require('../assets/images/login.png')
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Icon from 'react-native-vector-icons/Entypo'
import Icon1 from 'react-native-vector-icons/FontAwesome'
const Login = ({navigation}) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleSignIn=()=>{
        console.log('signin presses');
        navigation.navigate('SignUp Screen')
    }

    const Login=()=>{
        // Alert.alert('Email'+email+ " " + " "+'Password' +password)
        // setEmail('');
        // setPassword('');
        signInWithEmailAndPassword(auth,email,password)
        .then((userCrendential)=>{
            console.log('usercredential',userCrendential)
            navigation.navigate('Chat Screen');
            setEmail('');
            setPassword('');
        })
        .catch((error)=>{
            const errorCode=error.code;
            const errorMessage=error.Message;
            Alert.alert(errorMessage,errorCode);
        })
    }
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#FFFFFF', padding: 20 }} behavior="padding">
    <View>
    <View>
    <Image source={logo} resizeMode='center' style={styles.image}/>
    <View style={{borderTopLeftRadius:30,backgroundColor:'#F5F5F5'}}>
    <Text style={{fontSize:20,color:'tan',textAlign:'center',margin:15}}>Logged Here!</Text>
    <View style={{margin:10}}>
    <Icon name="email" size={20} color="black" style={styles.icon} />

    <TextInput placeholder='Email' value={email} onChangeText={(text)=>setEmail(text)} style={styles.textInput}></TextInput>
    <Icon1 name='unlock-alt' size={20} color='black' style={styles.icon}/>
      <TextInput placeholder='Password' value={password} onChangeText={(text)=>setPassword(text)} style={styles.textInput} secureTextEntry/>
    </View> 
    </View>
    <View >
    <TouchableOpacity style={styles.button} onPress={Login}>
        <Text style={{textAlign:'center',fontSize:18}} >Login</Text>
    </TouchableOpacity>
    <Text style={{margin:30,textAlign:'center',fontSize:15}}>Don't Have an account <Text style={{color:'tan',fontWeight:'800'}} onPress={handleSignIn}>Sign Up here!</Text></Text>
    </View>
    </View>
    
    
    </View>
     </KeyboardAvoidingView>
  )
}

export default Login

const styles=StyleSheet.create({
    textInput:{
       height:40,
       borderWidth:1,
       borderRadius:7,
       marginBottom:30,
       paddingHorizontal:40
    },
    button:{
        backgroundColor:'tan',
        height:40,
        borderRadius:5,
        padding:5,
    },
    image:{
        height:200,
        width:200,
        alignSelf:'center'
    },
    icon:{
        textAlign:'start',
        top:30,
        paddingHorizontal:10,
        opacity:0.4
    }
})