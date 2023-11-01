import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CostomModal = (props) => {
  
  return (
    <View style={{justifyContent:"center",alignItems:"center",position:"absolute",top:'50%',left:'25%',}}>
    <View style={{backgroundColor:'black',justifyContent:"center",alignItems:"center",paddingHorizontal:15,paddingVertical:15,borderRadius:15}}>

      <Text style={{color:"white"}}>List of Additional Products</Text>
      <View>
        <Text style={{color:"white"}}>Butter</Text>
        <Text style={{color:"white"}}>Achar</Text>
      </View>
    </View>
    <TouchableOpacity 
    onPress={()=>props.setmodal(false)}
    
    style={{position:"absolute",top:-5,right:-5,zIndex:99,backgroundColor:"red",height:20,width:20,borderRadius:99,justifyContent:"center",alignItems:"center"}}>
        <Text>X</Text>
    </TouchableOpacity>
    </View>
  )
}

export default CostomModal

const styles = StyleSheet.create({})