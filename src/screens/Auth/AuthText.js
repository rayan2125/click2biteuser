import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { Sizes } from '../../constants/styles'

const AuthText = ({placeholder,onPress,items}) => {
    
    return (
        <View style={{ margin: Sizes.fixPadding }}>
            <TextInput
            secureTextEntry={items==="password"?true:false}
            placeholder={placeholder}
            onChangeText={onPress}
                mode='outlined' />
        </View>
    )
}

export default AuthText

const styles = StyleSheet.create({})