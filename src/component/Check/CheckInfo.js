import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import Header from '../../lib/Header';
import { Colors, Sizes } from '../../constants/styles';
import FlatlistofSubcride from '../Subcritions/FlatlistofSubcride';

const CheckInfo = ({ navigation, route }) => {
  const { breakfast, lunch, dinner } = route.params.selectedItems
 

  const [Breakfast, setBreakfast] = useState(breakfast);
  const [Lunch, setLunch] = useState(lunch);
  const [Dinner, setDinner] = useState(dinner);

  const handleRemove = (category, item) => {
    route.params.handleRemoveItem(category, item);
    if (category === 'breakfast') {
      const updatedBreakfast = Breakfast.filter(selected => selected !== item);
      setBreakfast(updatedBreakfast);
    } else if (category === 'lunch') {
      const updatedLunch = Lunch.filter(selected => selected !== item);
      setLunch(updatedLunch);
    } else if (category === 'dinner') {
      const updatedDinner = Dinner.filter(selected => selected !== item);
      setDinner(updatedDinner);
    }
  };

  return (
    <>
      <Header title="Items Subscribe" />

      <View style={{ margin: Sizes.fixPadding }}>
      {
          <Text>{breakfast.length>0?"BreakFast":""}</Text>
        }
        <FlatlistofSubcride onPress={(item) => handleRemove('breakfast', item)} data={Breakfast} />
        {
          <Text>{lunch.length>0?"Lunch":""}</Text>
        }
        <FlatlistofSubcride onPress={(item) => handleRemove('lunch', item)} data={Lunch} />
        {
          <Text style={{}}>{dinner.length>0?"Dinner":""}</Text>
        }
        <FlatlistofSubcride onPress={(item) => handleRemove('dinner', item)} data={Dinner} />

        <View style={{}}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.primaryColor,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 15,
            }}
          >
            <Text style={{ color: 'white' }}>Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CheckInfo;

const styles = StyleSheet.create({});
