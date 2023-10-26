import React, { useState } from "react";
import { SafeAreaView, View, Dimensions, StatusBar, Image, FlatList, ScrollView, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
import  Icon  from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import Header from "../../lib/Header";
import Menu from "../menu/menu";




const FoodOfDifferentCategoriesScreen = () => {


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            
            <Header
            title="Order"/>
            <View style={{ flex: 1 }}>
            
        
               <Menu/>
            </View>
            
          
        </SafeAreaView>
    )

   
}



export default FoodOfDifferentCategoriesScreen;