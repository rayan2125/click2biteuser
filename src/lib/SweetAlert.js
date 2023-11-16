import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useRef} from 'react'

const SweetAlert = (props) => {
  
    const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
   
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 30000,
      useNativeDriver: true,
    }).start();
   
  };
  if (props.showAlert) {
    fadeIn();
  }
  return (
    <Animated.View style={{backgroundColor:"white",width:"100%",height:130,
    
    zIndex:99,
    elevation:8,
    borderRadius:20,paddingVertical:15,paddingHorizontal:15,justifyContent:"space-around",}}>
        <View style={{flexDirection:"row",justifyContent:"space-between",width:"100%"}}>
      <Text style={{textAlign:"right",width:"70%",color:"red"}}>Please select Items</Text>
<TouchableOpacity 
onPress={()=>props.cutAlert(false)}
style={{backgroundColor:"red",height:20,width:20,borderRadius:99,justifyContent:"center",alignItems:"center"}}>
    <Text style={{color:"white"}}>X</Text>
</TouchableOpacity>
        </View>
        <View style={{}}>
            <Text style={{color:"red",fontSize:15}}>
            No Items Selected, Please select at least one item before subscribing.
            </Text>
        </View>
    </Animated.View>
  )
}

export default SweetAlert

const styles = StyleSheet.create({})