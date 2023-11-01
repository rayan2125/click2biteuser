import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, Sizes } from '../../constants/styles'

const Items = ({search,foodCategories}) => {

    const [selectedCategory, setSelectedCategory] = useState('all')
  
    const foodMenu = ["all", "Thali", "Combo", "Jain", "SouthIndian", "choka"]
    
   
   
    const handleChangeItems = (item) => {
        setSelectedCategory(item)
        

    }


    const filteredFoodItems = foodCategories.filter((item) => {
        return selectedCategory === 'all' || item.type === selectedCategory
        &&(search === '' || item.name.toLowerCase().includes(search.toLowerCase())) 

    
      });
      

    return (
        <View style={{ margin: Sizes.fixPadding, }}>
            <FlatList
               
                horizontal
                data={foodMenu}
                renderItem={({ item, index }) => {
                    const bg = item ==selectedCategory?Colors.primaryColor:Colors.greenColor
                    return (
                        <TouchableOpacity
                        key={index}
                            onPress={() => handleChangeItems(item)}

                            style={{ backgroundColor: bg,width:100,
                                justifyContent:"center",alignItems:"center",
                             borderRadius: 25, margin: Sizes.fixPadding, paddingHorizontal: Sizes.fixPadding, paddingVertical: Sizes.fixPadding, }}>
                            <Text style={{color:"white"}}>{item}</Text>
                        </TouchableOpacity>
                    )
                }} />
            <FlatList
                data={filteredFoodItems}
                // keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={{ backgroundColor:"white",
                    borderRadius:Sizes.fixPadding,
                    paddingVertical:Sizes.fixPadding,
                    paddingHorizontal:Sizes.fixPadding,
                    margin:Sizes.fixPadding,
                    
                    flexDirection: "row",justifyContent:"space-between",
                    alignItems:"center" }}>
                        <View style={{flexDirection:"row"}}>

                        <View style={{ backgroundColor: Colors.primaryColor,height:60,width:30,justifyContent:"center",alignItems:"center" }}>
                            <Text>img</Text>
                        </View>
                        <View style={{marginHorizontal:Sizes.fixPadding}}>
                            <Text>{item.name}</Text>
                            <Text>Type: {item.type}</Text>
                            <Text>Price: {item.price}</Text>
                        </View>
                        </View>
                        <TouchableOpacity style={{backgroundColor:"red",borderRadius:Sizes.fixPadding,width:"25%",height:25,alignItems:"center",justifyContent:"center"}}>
                            <Text style={{color:"white"}}>Subcribe</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

export default Items

const styles = StyleSheet.create({})