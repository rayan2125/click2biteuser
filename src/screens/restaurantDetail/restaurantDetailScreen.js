import React, { useState } from "react";
import { SafeAreaView, View, StatusBar, FlatList, TouchableOpacity, Dimensions, ScrollView, StyleSheet, ImageBackground, Image, Text, Platform } from "react-native";
import { Colors, Fonts, Sizes, } from "../../constants/styles";


import { Snackbar } from "react-native-paper";

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

const reviewsList = [
    {
        id: '1',
        peopleImage: require('../../assets/images/users/user1.png'),
        peopleName: 'George Smith',
        reviewDate: 'June 25, 2020',
        rating: 4.0,
        review: 'Marine rise restaurant sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...',
    },
    {
        id: '2',
        peopleImage: require('../../assets/images/users/user2.png'),
        peopleName: 'Grecy John',
        reviewDate: 'June 28, 2020',
        rating: 3.0,
        review: 'Marine rise restaurant sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...',
    },
];

const RestaurantDetailScreen = ({ navigation, route }) => {

    const id = route.params.id;

    const [isFavorite, setisFavorite] = useState(false)

    const [showSnackBar, setshowSnackBar] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../../assets/images/food/food15.png')}
                    style={{ height: 200.0, width: '100%', flex: 1 }}
                >
                    {header()}
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingTop: StatusBar.currentHeight + Sizes.fixPadding * (Platform.OS=='android'?2.0: 3.0),
                        }}
                    >
                        {restaurantDetail()}
                        {mostPopularItemsInfo()}
                        {peopleReviewsInfo()}
                        {orderFoodNowButton()}
                    </ScrollView>
                </ImageBackground>
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
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.push('FoodOfDifferentCategories')}
                style={styles.orderFoodNowButtonStyle}
            >
                <Text style={{ ...Fonts.whiteColor18Bold }}>
                    Order Food Now
                </Text>
            </TouchableOpacity>
        )
    }

    function peopleReviewsInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginBottom: Sizes.fixPadding * 2.0, ...Fonts.blackColor16SemiBold }}>
                    What People Says
                </Text>
                {
                    reviewsList.map((item) => (
                        <View
                            key={`${item.id}`}
                            style={styles.reviewsWrapStyle}
                        >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        source={item.peopleImage}
                                        style={{ width: 60.0, height: 60.0, borderRadius: 30.0, }}
                                    />
                                    <View style={{ flex: 1, marginLeft: Sizes.fixPadding, }}>
                                        <Text style={{ ...Fonts.blackColor14SemiBold }}>
                                            {item.peopleName}
                                        </Text>
                                        <Text style={{ ...Fonts.grayColor12Medium }}>
                                            {item.reviewDate}
                                        </Text>
                                    </View>
                                </View>
                                {/* {showRating({ number: item.rating })} */}
                            </View>
                            <Text numberOfLines={2} style={{ marginTop: Sizes.fixPadding - 5.0, ...Fonts.grayColor12Regular }}>
                                {item.review}
                            </Text>
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
            <View style={styles.restaurantDetailWrapStyle}>
                <View style={styles.restuarantInfoWrapStyle}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            
                            <View style={{ flex: 1, marginLeft: Sizes.fixPadding * 7.7, }}>
                                <Text numberOfLines={1} style={{ ...Fonts.blackColor14SemiBold }}>
                                    Marine Rise Restaurant
                                </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ marginRight: Sizes.fixPadding - 5.0, ...Fonts.primaryColor12SemiBold }}>
                                {4.3.toFixed(1)}
                            </Text>
                            
                        </View>
                    </View>
                    <Text style={{ ...Fonts.grayColor14Medium }}>
                        Fast food, Italian, Chinese
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding - 5.0, flex: 1, flexDirection: 'row', }}>
                        
                        <Text style={{ flex: 1, marginLeft: Sizes.fixPadding - 5.0, ...Fonts.grayColor13Medium }}>
                            2.5 | 1124, ghsyte ghyrths jku
                        </Text>
                    </View>
                </View>
                <View style={styles.aboutRestaurantWrapStyle}>
                    <Text style={{ ...Fonts.blackColor14SemiBold }}>
                        About Restaurant
                    </Text>
                    <Text style={{ marginLeft: Sizes.fixPadding + 10.0, ...Fonts.grayColor12Regular }}>
                        Marine rise restaurant sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...
                    </Text>
                </View>
            </View>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    
                </View>
            </View>
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
    }
});

export default RestaurantDetailScreen;