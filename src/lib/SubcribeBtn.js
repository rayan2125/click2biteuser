import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const SubcribeBtn = ({onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={{ backgroundColor: 'red', height: 40, borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
    <Text style={{ color: "white" }}>Subcribe Now</Text>
  </TouchableOpacity>
  )
}

export default SubcribeBtn

const styles = StyleSheet.create({})