import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome5"
import { Colors, Sizes } from '../constants/styles'
import { useNavigation } from '@react-navigation/native'
const Header = ({title}) => {
    const navigation = useNavigation()
  return (
    <>
    <StatusBar translucent={false} backgroundColor={Colors.primaryColor}/> 
    <View style={{backgroundColor:'green',height:50,justifyContent:"space-between",alignItems:"center",flexDirection:'row', width:'100%'}}>
        <TouchableOpacity style={{width:"30%", marginHorizontal:Sizes.fixPadding}} onPress={()=>navigation.pop()}>
            <Icon name="arrow-left" size={20} color="white"/>
        </TouchableOpacity>
      <Text style={{color:'white',width:'60%'}}>{title}</Text>
    </View>
    </>
  )
}

export default Header

const styles = StyleSheet.create({})