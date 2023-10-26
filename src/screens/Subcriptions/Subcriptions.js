import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Sizes } from '../../constants/styles'
import Icon  from 'react-native-vector-icons/FontAwesome5'
import Header from '../../lib/Header'

const Subcriptions = ({navigation}) => {
  return (
<>
<Header
title="Subcriptions"/>


  
    <View style={{margin:Sizes.fixPadding*2}}>
        <View style={{borderColor:'black', borderWidth:1}}>

        <Text>montly</Text>
        <Text>montly</Text>
        <Text>montly</Text>
        <Text>montly</Text>
        </View>
    </View>
</>
  )
}

export default Subcriptions

const styles = StyleSheet.create({})