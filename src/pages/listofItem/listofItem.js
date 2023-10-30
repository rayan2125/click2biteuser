import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../lib/Header'
import { Sizes } from '../../constants/styles'
import CostomModal from '../../component/modal'

const ListofItem = () => {


    const ItemName = [
        {
            name: "Roti",
            rs: "15",

        },
        {
            name: "Daal",
            rs: "15",

        },
        {
            name: "Baji",
            rs: "15",

        },
        {
            name: "Hari Baji",
            rs: "15",

        },
        {
            name: "Rice",
            rs: "15",

        },
        {
            name: "Paner Sabji",
            rs: "15",

        },
        {
            name: "Naan",
            rs: "15",

        },
        {
            name: "Paav Bajji",
            rs: "15",

        },
        {
            name: "Pullav",
            rs: "15",

        },
    ]

    const [openModal,setOpenModal]= useState(false)
    return (
        <>
            <Header
                title="List of Item"
            />
<View style={{margin:Sizes.fixPadding*2}}>
    <View>
        {
            ItemName.map((item,index)=>{
                return(
                    <View style={{justifyContent:"space-between",flexDirection:"row",alignItems:"center",backgroundColor:"white",borderRadius:15,paddingVertical:Sizes.fixPadding,paddingHorizontal:Sizes.fixPadding,marginBottom:10}} key={index}>
                        <View style={{marginHorizontal:30}}>

                        <Text>{item.name}</Text>
                        <Text >Rs:{item.rs}</Text>
                        </View>
                        <TouchableOpacity style={{marginHorizontal:30}} onPress={()=>setOpenModal(true)}>
                            <Text>Add</Text>
                        </TouchableOpacity>
                    </View>
                )
            })
        }
        {
            openModal &&
            <CostomModal/>
        }
    </View>
</View>
        </>
    )
}

export default ListofItem

const styles = StyleSheet.create({})