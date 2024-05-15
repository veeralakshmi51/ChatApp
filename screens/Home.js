import { View, Text,Image,StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native';
const started=require('../assets/images/starting.png');
const Home = () => {
  const navigation=useNavigation();
  const handleGet=()=>{
    navigation.navigate('Login Screen')
  }
  return (
    <View style={{flex:1,backgroundColor:'#FFFFFF',alignItems:'center'}}>
      <Image source={started} resizeMode='contain' style={styles.image}/>
      <TouchableOpacity onPress={handleGet}>
        <Text style={styles.text}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles=StyleSheet.create({
  image:{
    height:600,
    width:500,
  },
  text:{
    borderRadius:25,
    borderWidth:1,
    color:'white',
    fontSize:20,
    backgroundColor:'tan',
    textAlign:'center',
    padding:12,
    marginTop:-100,
    width:200,
    fontWeight:'800',
    elevation:10
  }
})