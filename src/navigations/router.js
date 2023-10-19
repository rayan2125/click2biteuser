
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import home from '../screens/home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import loginView from '../screens/Auth/loginView'
import signupView from '../screens/Auth/signupView'

const Stack = createNativeStackNavigator()

const Router = () => {
  return (
   <Stack.Navigator screenOptions={{headerShown:false}} >
    <Stack.Screen name='loginView' component={loginView}/>
    <Stack.Screen name='signupView' component={signupView}/>
   </Stack.Navigator>
  )
}

export default Router

