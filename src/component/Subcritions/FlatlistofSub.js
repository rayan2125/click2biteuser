import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/styles'


const FlatlistofSub = ({ data, onPress, selectedItem }) => {
    const onclick=()=>{
        setopepicke(!openpicker)
    }
    return (
        <>

            <FlatList
                data={data}
                numColumns={2}
                renderItem={({ item }) => (
                    <View style={{ width: '50%' }}>
                        <TouchableOpacity
                            onPress={() => onPress(item)}
                            style={{
                                paddingVertical: 10,
                                paddingHorizontal: 10,
                                borderColor: Colors.primaryColor,
                                borderWidth: 1,
                                // backgroundColor: "white",
                                // zIndex:99,
                                // elevation:5,
                                borderRadius: 20, margin: 5,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>


                            <View style={{ flexDirection: "row", alignItems: "center",justifyContent:"space-around",width:'100%' }}>

                                <Text style={{width:'80%',textAlign:"left",color:"#022E4C"}} >{item}{" "}</Text>
                                <View>

                                    {
                                        selectedItem.includes(item) ?
                                            <View style={{ backgroundColor: "green", height: 20, width: 20, borderRadius: 99, justifyContent: "center", alignItems: "center" }}>
                                                <Text style={{color:"white"}}>{selectedItem.includes(item) ? '✓' : ''}</Text>
                                            </View> : ""
                                    }
                                </View>
                            </View>
                            

                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </>
    )
}

export default FlatlistofSub

const styles = StyleSheet.create({})