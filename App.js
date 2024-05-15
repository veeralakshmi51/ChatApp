import { View, Text } from 'react-native'
import React from 'react'
import Login from './screens/Login'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Chat from './screens/Chat'
import Signin from './screens/Signin'
import Home from './screens/Home'
const Stack=createStackNavigator();


const App = () => {
  
  return (

    <NavigationContainer >
       <Stack.Navigator initialRouteName="Home Page" screenOptions={{
        headerTitleAlign: 'center',
      }}>
        <Stack.Screen name='Login Screen'  component={Login} headerShown={false}/>
        <Stack.Screen name='SignUp Screen' component={Signin} headerShown={false}/>
        <Stack.Screen name='Chat Screen' component={Chat}/>
        <Stack.Screen name='Home Page' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App