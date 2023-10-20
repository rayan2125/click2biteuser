import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Router from './navigations/router'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './redux/store'



const App = () => {
  return (
    <Provider store={store}>

    <NavigationContainer>
      <Router/>
    </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})