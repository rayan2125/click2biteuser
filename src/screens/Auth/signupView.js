import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import AuthText from './AuthText'


const SignupView = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
      });
const handleSubmit =()=>{
if(state.name==""){
    console.log("please fill up")
}else{
    console.log("nothing ")
}
}
    const registerData = ["name", "email", "phone", "password"]
    const handlechange = (fieldName, text) => {
     
        setState((prevState) => ({
          ...prevState,
          [fieldName]: text
        }));
      }
  return (
    <View>
      {
        registerData.map((item,index)=>{
            return(
                <AuthText
                items={item}
                key={index}
                onPress={(text) => handlechange(item, text)} 
                placeholder={item}/>
            )
        })
      }
      <TouchableOpacity onPress={handleSubmit} style={{backgroundColor:'red', height:30,justifyContent:'center',alignItems:'center'}}> 
        <Text style={{color:'white'}}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignupView

const styles = StyleSheet.create({})