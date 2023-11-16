import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome5"
import { Colors, Sizes } from '../constants/styles'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
const Header = ({title}) => {
    const navigation = useNavigation()
  return (
    <>
    <StatusBar translucent={false} backgroundColor={Colors.greenColor}/> 
    <LinearGradient colors={[Colors.primaryColor,"#F6D239"]} style={{height:50,alignItems:"center",flexDirection:'row', width:'100%'}}>
        <TouchableOpacity style={{ marginHorizontal:Sizes.fixPadding,justifyContent:'center'}} onPress={()=>navigation.pop()}>
            <Icon name="arrow-left" size={20} color="white"/>
        </TouchableOpacity>
        <View style={{flex:1,}}>

      <Text style={{color:'white',textAlign:"center",marginHorizontal:-3}}>{title}</Text>
        </View>
    </LinearGradient>
    </>
  )
}

export default Header

const styles = StyleSheet.create({})