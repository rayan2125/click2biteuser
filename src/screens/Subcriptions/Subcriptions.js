import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { Colors, Sizes } from '../../constants/styles';
import Header from '../../lib/Header';
import LinearGradient from 'react-native-linear-gradient';
import FlatlistofSub from '../../component/Subcritions/FlatlistofSub';
import SweetAlert from '../../lib/SweetAlert';


const breakFast = ["Chole bhature", "Daal baati churma", "Daal puri", "Dal makhani", "Aloo Parantha", "Dhokla", "Idli Sambhar"];

const lunch = ["Rajma chawal", "Palak paneer", "Sambar", "Masala bhindi", "Gujarati kadhi", "Kolhapuri vegetables"]
const dinner = ["biryani", "Chana masala", "Sambar", "Paneer Tikka Masala", "Gujarati kadhi", "Kolhapuri vegetables"]

const Subcriptions = ({ navigation }) => {

  const [selectedBreakfast, setSelectedBreakfast] = useState([]);
  const [selectedLunch, setSelectedLunch] = useState([]);
  const [selectedDinner, setSelectedDinner] = useState([]);
  const [showAlert, setShowAlert] = useState(false);



  const handleItem = (category, item) => {
    if (category === 'breakfast') {
      if (selectedBreakfast.includes(item)) {
        setSelectedBreakfast(selectedBreakfast.filter((selected) => selected !== item));
      } else {
        setSelectedBreakfast([...selectedBreakfast, item]);
      }
    } else if (category === 'lunch') {
      if (selectedLunch.includes(item)) {
        setSelectedLunch(selectedLunch.filter((selected) => selected !== item));
      } else {
        setSelectedLunch([...selectedLunch, item]);
      }
    } else if (category === 'dinner') {
      if (selectedDinner.includes(item)) {
        setSelectedDinner(selectedDinner.filter((selected) => selected !== item));
      } else {
        setSelectedDinner([...selectedDinner, item]);
      }
    }

  };


  const handleSubcribe = () => {
    const selectedItems = {
      breakfast: selectedBreakfast,
      lunch: selectedLunch,
      dinner: selectedDinner,
    };
  
    // Check if any items are selected
    if (
      selectedItems.breakfast.length === 0 &&
      selectedItems.lunch.length === 0 &&
      selectedItems.dinner.length === 0
    ) {
     
     setShowAlert(true)
    } else {
      
      navigation.navigate('CheckInfo', { selectedItems, handleRemoveItem });
    }
  }
  
  const handleRemoveItem = (category, item) => {
    if (category === 'breakfast') {
      setSelectedBreakfast(selectedBreakfast.filter((selected) => selected !== item));
    } else if (category === 'lunch') {
      setSelectedLunch(selectedLunch.filter((selected) => selected !== item));
    } else if (category === 'dinner') {
      setSelectedDinner(selectedDinner.filter((selected) => selected !== item));
    }
  };

  return (
    <>
      <Header title="Subscriptions" />
        <ScrollView>
      <View style={{ margin: Sizes.fixPadding * 2,flex:1 }}>
          
      
        <View style={{ borderColor: 'black' }}>
          <LinearGradient colors={[Colors.primaryColor, "#F47216"]} style={{ height: 30, borderRadius: 15, justifyContent: "center", alignItems: "center" }}>

            <Text style={{ color: 'white' }}>Breakfast</Text>
          </LinearGradient>
          <FlatlistofSub
          onPress={(item)=>handleItem("breakfast",item)}
          selectedItem={selectedBreakfast}
          data={breakFast}/>
          <LinearGradient colors={[Colors.primaryColor, "#F47216"]} style={{ height: 30, borderRadius: 15, justifyContent: "center", alignItems: "center" }}>

            <Text style={{ color: 'white' }}>Lunch</Text>
          </LinearGradient>

          <FlatlistofSub
          onPress={(item)=>handleItem("lunch",item)}
          selectedItem={selectedLunch}
          data={lunch}/>

          <LinearGradient colors={[Colors.primaryColor, "#F47216"]} style={{ height: 30, borderRadius: 15, justifyContent: "center", alignItems: "center" }}>

            <Text style={{ color: 'white' }}>Dinner</Text>
          </LinearGradient>
          <FlatlistofSub
          onPress={(item)=>handleItem("dinner",item)}
          selectedItem={selectedDinner}
          data={dinner}/>
          <TouchableOpacity
            onPress={handleSubcribe}
            style={{ backgroundColor: 'red', height: 40, borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "white" }}>Subcribe Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex:1,position:"absolute",width:'100%',justifyContent:"center",alignItems:"center",bottom:"50%",}}>
      <View style={{width:"70%",}}>
      {
        showAlert &&
         <SweetAlert showAlert={showAlert} cutAlert={setShowAlert} />
          
          
      }
      </View>

      </View>
      </ScrollView>
    </>
  );
};

export default Subcriptions;

const styles = StyleSheet.create({});
