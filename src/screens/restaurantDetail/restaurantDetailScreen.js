import React, { useState } from "react";
import { SafeAreaView, View, StatusBar, FlatList, TouchableOpacity, Dimensions, ScrollView, StyleSheet, ImageBackground, Image, Text, Platform } from "react-native";
import { Colors, Fonts, Sizes, } from "../../constants/styles";


import { Snackbar } from "react-native-paper";
import FoodOfDifferentCategoriesScreen from "../foodOfDifferentCategories/foodOfDifferentCategoriesScreen";
import Header from "../../lib/Header";
import Menu from "../menu/menu";
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const popularItemsList = [
    {
        id: '1',
        foodImage: require('../../assets/images/food/food12.png'),
        foodName: 'Veg Cheese Sandwich',
        amount: 7.00,
    },
    {
        id: '2',
        foodImage: require('../../assets/images/food/food16.png'),
        foodName: 'Veg Frankie',
        amount: 6.00,
    },
];

const otherAvailableFoodList = [
    {
        id: '1',
        foodImage: require('../../assets/images/food/food13.png'),
        foodName: 'Burger',
        amount: 12.00,
        prefredfor:"brunch",
        discount:"50%",
        customizable: false,
    },
    {
        id: '2',
        foodImage: require('../../assets/images/food/food18.png'),
        foodName: 'Veg Cheese Sandwich',
        amount: 10.00,
        prefredfor:"brunch",
        discount:"40%",
        customizable: true,
    },
    {
        id: '3',
        foodImage: require('../../assets/images/food/food19.png'),
        foodName: 'Crust Gourmet Pizza',
        amount: 15.00,
        prefredfor:"brunch",
        discount:"20%",
        customizable: true,
    },
    {
        id: '4',
        foodImage: require('../../assets/images/food/food12.png'),
        foodName: 'Veg Sandwich',
        amount: 6.00,
        customizable: true,
        prefredfor:"breakfast",
        discount:"20%",
    },
    {
        id: '5',
        foodImage: require('../../assets/images/food/food16.png'),
        foodName: 'Veg Frankie',
        amount: 10.00,
        customizable: false,
        prefredfor:"lunch",
        discount:"20%",
    },
    {
        id: '6',
        foodImage: require('../../assets/images/food/food17.png'),
        foodName: 'Margherite Pizza',
        amount: 12.00,
        customizable: true,
        prefredfor:"dinner",
        discount:"20%",
    },
    {
        id: '7',
        foodImage: require('../../assets/images/food/food13.png'),
        foodName: 'Burger',
        amount: 12.00,
        customizable: false,
        prefredfor:"lunch",
        discount:"20%",
    },
    {
        id: '8',
        foodImage: require('../../assets/images/food/food18.png'),
        foodName: 'Veg Cheese Sandwich',
        amount: 10.00,
        customizable: true,
        prefredfor:"lunch",
        discount:"20%",
    },
    {
        id: '9',
        foodImage: require('../../assets/images/food/food19.png'),
        foodName: 'Crust Gourmet Pizza',
        amount: 15.00,
        customizable: true,
        prefredfor:"breakfast",
        discount:"20%",
    },


];

const startColor = 'rgba(244, 196, 48,0.5)'; 
const endColor = 'rgba(0, 128, 0,0.1)';

const RestaurantDetailScreen = ({ navigation, route }) => {

const KitchenName = route.params
console.log("======>",KitchenName)

    const [isFavorite, setisFavorite] = useState(false)

    const [showSnackBar, setshowSnackBar] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            
            <Header
            title={KitchenName.item.restaurantName}
            />
            <View style={{ flex: 1 }}>
                
                   
                    {restaurantDetail()}
                  
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingTop: StatusBar.currentHeight + Sizes.fixPadding * (Platform.OS=='android'?2.0: 3.0),
                        }}
                    >
                        {mostPopularItemsInfo()}
                        {orderFoodNowButton()}
                        {menu()}
                      {foodlistTimeWise()}
                        
                    </ScrollView>
                
                
                {snackBar()}
            </View>
        </SafeAreaView>
    )

    function snackBar() {
        return (
            <Snackbar
                visible={showSnackBar}
                onDismiss={() => { setshowSnackBar(false) }}
                elevation={0}
            >
                <Text style={{ ...Fonts.whiteColor15Medium }}>
                    {isFavorite ? 'added to favorites' : 'removed from favorites'}
                </Text>
            </Snackbar>
        )
    }

    function orderFoodNowButton() {
        return (
            <View style={{
                // margin:Sizes.fixPadding,
                flexDirection:'row', width:'100%',justifyContent:"space-around",alignItems:"center"}}>

            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.push('FoodOfDifferentCategories')}
                style={[styles.orderFoodNowButtonStyle,{backgroundColor:"green",}]}
            >
                <Text style={{ ...Fonts.whiteColor18Bold }}>
                    Order 
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.push('Subcriptions')}
                style={styles.orderFoodNowButtonStyle}
            >
                <Text style={{ ...Fonts.whiteColor18Bold }}>
                   Subscribe
                </Text>
            </TouchableOpacity>
            </View>
        )
    }

    function foodlistTimeWise() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginBottom: Sizes.fixPadding * 2.0, ...Fonts.blackColor16SemiBold }}>
                    Brunch
                </Text>
                {
                    otherAvailableFoodList.map((item) => (
                        <View
                            key={`${item.id}`}
                            style={styles.reviewsWrapStyle}
                        
                        >
                            <View style={{position:"absolute",right:0, backgroundColor: '#FFECE5',height:30,width:70, top:0,borderTopStartRadius:Sizes.fixPadding ,borderBottomStartRadius:Sizes.fixPadding, justifyContent:'center', alignItems:'center' }}>
                                <Text style={{ ...Fonts.primaryColor16Medium }}>{item.discount}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        source={item.foodImage}
                                        style={{ width: 60.0, height: 60.0, borderRadius: 30.0, }}
                                    />
                                    <View style={{ flex: 1, marginLeft: Sizes.fixPadding, }}>
                                        <Text style={{ ...Fonts.blackColor14SemiBold }}>
                                            {item.foodName}
                                        </Text>
                                        <Text style={{ ...Fonts.grayColor12Medium }}>
                                            ${item.amount}
                                        </Text>
                                    </View>
                                </View>
                                {/* {showRating({ number: item.rating })} */}
                            </View>
                            <Text numberOfLines={2} style={{ marginTop: Sizes.fixPadding - 5.0, ...Fonts.grayColor12Regular }}>
                                {item.review}
                            </Text>
                            <TouchableOpacity
                                onPress={()=>navigation.navigate("Products")}
                            style={{backgroundColor:'green', borderRadius:20, height:30, justifyContent:'center', alignItems:'center'}}>
                                <Text style={{color:"white", fontWeight:'bold'}}>Order</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                }
                
            </View>
        )
    }

   

    function mostPopularItemsInfo() {
        const renderItem = ({ item }) => (
            <View style={styles.popularItemsWrapStyle}>
                <View style={{ flex: 1, }}>
                    <Image
                        source={item.foodImage}
                        style={styles.popularFoodImageStyle}
                    />
                </View>
                <View style={{ padding: Sizes.fixPadding - 5.0, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>
                        <Text style={{ flex: 1, ...Fonts.blackColor12SemiBold }}>
                            {item.foodName}
                        </Text>
                        <Text style={{ ...Fonts.blackColor12SemiBold }}>
                            { } | { }
                        </Text>
                        <Text style={{ ...Fonts.primaryColor12SemiBold }}>
                            {`$`}{item.amount.toFixed(2)}
                        </Text>
                    </Text>
                </View>
            </View>
        )
        return (
            <View style={{}}>
                <Text style={{ marginHorizontal: Sizes.fixPadding * 2.0, ...Fonts.blackColor16SemiBold }}>
                    Most Popular
                </Text>
                <FlatList
                    data={popularItemsList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingVertical: Sizes.fixPadding * 2.0, paddingLeft: Sizes.fixPadding * 2.0, }}
                />
            </View>
        )
    }

    function restaurantDetail() {
        return (
            <LinearGradient 
            colors={[startColor, endColor]}
            style={{margin:Sizes.fixPadding*2, backgroundColor:"white", zIndex:9, elevation:9,borderRadius:15, paddingHorizontal:15,paddingVertical:15}}>



                <Text style={{color:'black'}}>{KitchenName.item.restaurantName}</Text>
                <Text style={{color:'black'}}>4.6(108) </Text>
                <Text style={{color:'black'}}>North Indian , Punjabi</Text>
                <Text style={{color:'black'}}>Serve:Dinner, Lunch</Text>
            </LinearGradient >
        )
    }

  
    function menu(){
        return(
            <Menu/>
        )
    }
}

const styles = StyleSheet.create({
    headerWrapStyle: {
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginTop: StatusBar.currentHeight + 20.0,
        marginBottom: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    aboutRestaurantWrapStyle: {
        borderBottomLeftRadius: Sizes.fixPadding,
        borderBottomRightRadius: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding + 2.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        backgroundColor: '#DEE2EB'
    },
    restaurantLogoStyle: {
        width: 70.0,
        position: 'absolute',
        bottom: -5.0,
        height: 70.0,
        borderRadius: Sizes.fixPadding,
    },
    restuarantInfoWrapStyle: {
        borderRadius: Sizes.fixPadding,
        backgroundColor: Colors.whiteColor,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        paddingVertical: Sizes.fixPadding
    },
    restaurantDetailWrapStyle: {
        backgroundColor: '#DEE2EB',
        borderRadius: Sizes.fixPadding,
        margin: Sizes.fixPadding * 2.0,
    },
    popularFoodImageStyle: {
        width: '100%',
        height: '100%',
        flex: 1,
        borderTopLeftRadius: Sizes.fixPadding,
        borderTopRightRadius: Sizes.fixPadding,
    },
    popularItemsWrapStyle: {
        backgroundColor: '#DEE2EB',
        borderRadius: Sizes.fixPadding,
        width: width / 1.8,
        height: 105.0,
        marginRight: Sizes.fixPadding * 2.0,
        flex: 1,
    },
    reviewsWrapStyle: {
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        marginBottom: Sizes.fixPadding * 2.0,
        elevation: 0.20,
        borderColor: '#E9EAF0',
        borderWidth: 1.0,
    },
    orderFoodNowButtonStyle: {
        backgroundColor: Colors.primaryColor,
        paddingVertical: Sizes.fixPadding + 2.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding * 2.0,
        marginTop: Sizes.fixPadding,
        borderRadius: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'rgba(255, 66, 0, 0.3)',
        borderWidth: 1.0,
        elevation: 1.0,
        shadowColor: Colors.primaryColor,
        width:"48%"
    }
});

export default RestaurantDetailScreen;