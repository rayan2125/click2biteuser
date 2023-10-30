import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CostomModal = () => {
  return (
    <View style={{position:"absolute",flex:1,justifyContent:"center",alignItems:"center",}}>
    <View style={{backgroundColor:'black'}}>

      <Text style={{color:"white"}}>List of Additional Products</Text>
      <View>
        <Text style={{color:"white"}}>Butter</Text>
        <Text style={{color:"white"}}>Achar</Text>
      </View>
    </View>
    <TouchableOpacity>
        <Text>X</Text>
    </TouchableOpacity>
    </View>
  )
}

export default CostomModal

const styles = StyleSheet.create({})