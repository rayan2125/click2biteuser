import { StyleSheet, Text, View,Image, FlatList,TouchableOpacity  } from 'react-native';
import React from 'react';
import Header from '../../lib/Header';
import { Colors, Sizes } from '../../constants/styles';



const Totallist = ({navigation}) => {
  const HotelList = [
    {
      id: "1",
      img:require("../../assets/images/restaurants_logo/logo7.png"),
      restaurantName: "Marine Rise Restaurant",
      ratedPeopleCount: 198,
      restaurantAddress: "1124, Old Church Street, New York, USA",
      rating: 4.3,
    },
    {
      id: "2",
      restaurantName: "Silver Leaf Restaurant",
      img:require("../../assets/images/restaurants_logo/logo6.png"),
      ratedPeopleCount: 170,
      restaurantAddress: "1124, Old Church Street, New York, USA",
      rating: 4.0,
    },
    {
      id: "3",
      restaurantName: "Johnson Foods",
      img:require("../../assets/images/restaurants_logo/logo5.png"),
      ratedPeopleCount: 130,
      restaurantAddress: "1124, Old Church Street, New York, USA",
      rating: 3.5,
    },
    {
      id: "4",
      restaurantName: "Leopard Cafe",
      img:require("../../assets/images/restaurants_logo/logo4.png"),
      ratedPeopleCount: 100,
      restaurantAddress: "1124, Old Church Street, New York, USA",
      rating: 3.0,
    },
    {
      id: "5",
      restaurantName: "King Of Foods",
      img:require("../../assets/images/restaurants_logo/logo3.png"),
      ratedPeopleCount: 80,
      restaurantAddress: "1124, Old Church Street, New York, USA",
      rating: 2.0,
    },
  ];

  return (
    <>
      <Header title="Total List" />
      <View style={{ flex: 1,margin:Sizes.fixPadding*2 }}>
        <FlatList
          data={HotelList}
          renderItem={({ item }) => {
            return (
              <View style={{backgroundColor:"white", borderRadius:15,paddingHorizontal:15,paddingVertical:15,marginBottom:10,justifyContent:"space-around",alignItems:'center',flexDirection:'row'}}>
              <View>
                <Image
                style={{width:50,height:50}}
                source={item.img}/>
              </View>
              <View>

                <Text>{item.restaurantName}</Text>
                <Text>Rated People Count: {item.ratedPeopleCount}</Text>
                <Text>Rating: {item.rating}</Text>
              </View>
              
                <TouchableOpacity
                onPress={()=>navigation.navigate("ListofItem")}
                style={{backgroundColor:'red',height:30,alignItems:'center',width:"30%",justifyContent:'center',paddingVertical:5,paddingHorizontal:9,borderRadius:15}}>
                    <Text style={{color:'white'}}>Subcribe</Text>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
}

export default Totallist;

const styles = StyleSheet.create({});
