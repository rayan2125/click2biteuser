
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import home from '../screens/home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginView from '../screens/Auth/LoginView'
import SignupView from '../screens/Auth/SignupView'
import VerificationScreen from '../screens/Auth/VerificationScreen'
import BottomTabBarScreen from '../component/bottomTabBarScreen'
import RestaurantDetailScreen from '../screens/restaurantDetail/restaurantDetailScreen'
import FoodOfDifferentCategoriesScreen from '../screens/foodOfDifferentCategories/foodOfDifferentCategoriesScreen'
import ProductsScreen from '../screens/products/productsScreen'
import SelectDeliveryAddressScreen from '../screens/selectDeliveryAddress/selectDeliveryAddressScreen'
import SelectPaymentMethodScreen from '../screens/selectPaymentMethod/selectPaymentMethodScreen'
import OrderPlacedInfoScreen from '../screens/orderPlacedInfo/orderPlacedInfoScreen'
import Subcriptions from '../screens/Subcriptions/Subcriptions'
import AddressScreen from '../screens/address/addressScreen'
import AddNewAddressScreen from '../screens/addNewAddress/addNewAddressScreen'
import Totallist from '../pages/totallist/totallist'
import ListofItem from '../pages/listofItem/listofItem'
import Itemsmenu from '../pages/Subcribe/Itemsmenu'
import RestaurantsListScreen from '../screens/restaurantsList/restaurantsListScreen'
import CheckInfo from '../component/Check/CheckInfo'

const Stack = createNativeStackNavigator()

const Router = () => {
  return (
   <Stack.Navigator screenOptions={{headerShown:false}} >
    <Stack.Screen name='loginView' component={LoginView}/>
    <Stack.Screen name='signupView' component={SignupView}/>
    <Stack.Screen name='Verification' component={VerificationScreen}/>
    <Stack.Screen name='BottomTabBar' component={BottomTabBarScreen}/>
    <Stack.Screen name='RestaurantDetail' component={RestaurantDetailScreen}/>
    <Stack.Screen name="FoodOfDifferentCategories" component={FoodOfDifferentCategoriesScreen}/>
    <Stack.Screen name='Products' component={ProductsScreen}/>
    <Stack.Screen name='SelectDeliveryAddress' component={SelectDeliveryAddressScreen}/>
    <Stack.Screen name="SelectPaymentMethod" component={SelectPaymentMethodScreen}/>
    <Stack.Screen name='OrderPlaceInfo' component={OrderPlacedInfoScreen}/>
    <Stack.Screen name='Subcriptions' component={Subcriptions}/>
    <Stack.Screen name='addresses' component={AddressScreen}/>
    <Stack.Screen name='AddNewAddress' component={AddNewAddressScreen}/>
    <Stack.Screen name='TotalList' component={Totallist}/>
    <Stack.Screen name='ListofItem' component={ListofItem}/>
    <Stack.Screen name='Itemsmenu' component={Itemsmenu}/>
    <Stack.Screen name='RestaurantsList' component={RestaurantsListScreen}/>
    {/* <Stack.Screen name='CheckInfo' component={CheckInfo}/> */}
    <Stack.Screen name='CheckInfo' component={CheckInfo}/>
   </Stack.Navigator>
  )
}

export default Router

