import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constants/styles';

const FlatlistofSubcride = ({ data,onPress }) => {
    const [numColumns, setNumColumns] = useState(3);
    return (
        <>

            <FlatList

                numColumns={numColumns}
                data={data}
                renderItem={({ item, index }) => {

                    return (
                        <View style={{
                            width: "30%",
                            borderColor: Colors.primaryColor,
                            borderWidth: 1,
                            margin: 2,
                            borderRadius: 20,
                            height: 30,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>

                            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-around", width: '100%' }}>

                                <Text  
                                style={{width:'70%', color: "#022E4C", fontSize: 11 }} key={index}>{item}</Text>
                                <View>
                                    <TouchableOpacity 
                                    onPress={()=>onPress(item)}
                                    style={{ backgroundColor: "red",
                                    height:20,width:20,borderRadius:99,justifyContent:'center',alignItems:"center" }}>
                                        <Text style={{color:"white"}}>X</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    );
                }}
                keyExtractor={(item) => item}
            />
        </>
    )
}

export default FlatlistofSubcride

const styles = StyleSheet.create({})