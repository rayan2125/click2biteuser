import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Sizes } from '../../constants/styles'
import Icon  from 'react-native-vector-icons/FontAwesome5'

const Subcriptions = ({navigation}) => {
  return (
<>

    <View style={{margin:Sizes.fixPadding}}>
        <TouchableOpacity onPress={()=>navigation.pop()}>

        <Icon name="arrow-left"/>
        </TouchableOpacity>
      
    </View>
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