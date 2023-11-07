import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useState } from 'react' // Import useState
import Header from '../../lib/Header'
import { Colors, Sizes } from '../../constants/styles'

const CheckInfo = ({ navigation, route }) => {
  const data = route.params;
  const [numColumns, setNumColumns] = useState(3); // Initialize numColumns with 2 columns

  return (
    <>
      <Header title="Items Subcribe" />

      <View style={{ flex: 1, margin: Sizes.fixPadding }}>
        <View style={{}}>

        <Text style={{textAlign:"center"}}>BreakFast</Text>
        </View>
        <FlatList
          key={numColumns} // Change the key prop when changing numColumns
          numColumns={numColumns}
          data={data}
          renderItem={({ item }) => {
            return (
              <View style={{width:"30%",backgroundColor:"green",margin:2,
              borderRadius:20,
              height:25,
              justifyContent:"center",
              alignItems:"center"}}>

                <Text style={{color:'white'}}>{item}</Text>
              </View>
            );
          }}
        />

        <TouchableOpacity
          onPress={() => setNumColumns(3)} // Change the number of columns dynamically
          style={{
            backgroundColor: Colors.primaryColor,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
          }}>
          <Text style={{ color: "white" }}>Order</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default CheckInfo;

const styles = StyleSheet.create({});
