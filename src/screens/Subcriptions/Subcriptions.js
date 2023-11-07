import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Colors, Sizes } from '../../constants/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../../lib/Header';
import SubcribeBtn from '../../lib/SubcribeBtn';


const data = [

  {
    name: "breakFast ",
    items: ["Chole bhature", "Daal baati churma", "Daal puri", "Dal makhani", "Aloo Parantha", "Dhokla", "Idli Sambhar"]
  },


  {
    name: "lunch",
    items: ["Rajma chawal", "Palak paneer", "Sambar", "Masala bhindi", "Gujarati kadhi", "Kolhapuri vegetables"]
  },

  {
    name: "dinner",
    items: ["biryani", "Chana masala", "Sambar", "Paneer Tikka Masala", "Gujarati kadhi", "Kolhapuri vegetables"]
  }
]

const Subcriptions = ({ navigation }) => {

  const [selectedItems, setSelectedItems] = useState(data);


  const handleItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else {

      setSelectedItems([...selectedItems, item]);
    }
  };
  const handleSubcribe = () => {
    navigation.navigate("CheckInfo", selectedItems)
    // setSelectedItems
  }

  return (
    <>
      <Header title="Subscriptions" />
      <View style={{ margin: Sizes.fixPadding * 2 }}>
        <View style={{ borderColor: 'black' }}>
          <Text>Breakfast</Text>
          <FlatList
          numColumns={2}
            data={data}
            renderItem={({ item }) => (
              item.items.map((inde) => (
                <View style={{ width: '50%' }}>
                  <TouchableOpacity
                    onPress={() => handleItem(inde)}
                    style={{
                      paddingVertical: 10,
                      paddingHorizontal: 10,
                      backgroundColor: selectedItems.includes(inde)
                        ? Colors.primaryColor
                        : "green",
                      borderRadius: 20,
                      margin: 5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "white" }}>{inde}</Text>
                  </TouchableOpacity>
                  {/* <TouchableOpacity
                    onPress={handleSubcribe}
                    style={{ backgroundColor: 'red', height: 40, borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "white" }}>Subcribe Now</Text>
                  </TouchableOpacity> */}
                </View>
              ))
            )}
            keyExtractor={(item, index) => index.toString()}
          />






        </View>
      </View>
    </>
  );
};

export default Subcriptions;

const styles = StyleSheet.create({});
