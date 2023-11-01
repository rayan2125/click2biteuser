import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { Checkbox } from 'react-native-paper'

const Check = () => {
    const [checked, setChecked]  = useState(false)
    const [seleted,setSelected] =useState()
    // console.log(setSelected)
    // const handleChange =(item)=>{
    //     checked(!setChecked)
    //     setSelected(item)
    // }

  return (
    <View>
      <Checkbox status={checked ? 'checked' : 'unchecked'}onPress={()=>checked(!setChecked)}/>
    </View>
  )
}

export default Check

const styles = StyleSheet.create({})