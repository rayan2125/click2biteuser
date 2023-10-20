import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Sizes } from '../src/constants/styles'
import  Icon  from 'react-native-vector-icons/FontAwesome5'

const Back = ({navigation}) => {
  return (
    <View style={{margin:Sizes.fixPadding}}>
        <TouchableOpacity onPress={()=>navigation.pop()}>

        <Icon name="arrow-left"/>
        </TouchableOpacity>
      
    </View>
  )
}

export default Back

const styles = StyleSheet.create({})