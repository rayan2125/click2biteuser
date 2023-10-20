
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import home from '../screens/home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import loginView from '../screens/Auth/LoginView'
import signupView from '../screens/Auth/SignupView'
import VerificationScreen from '../screens/Auth/VerificationScreen'
import BottomTabBarScreen from '../component/bottomTabBarScreen'
import RestaurantDetailScreen from '../screens/restaurantDetail/restaurantDetailScreen'
import FoodOfDifferentCategoriesScreen from '../screens/foodOfDifferentCategories/foodOfDifferentCategoriesScreen'
import { StackView } from '@react-navigation/stack'
import ProductsScreen from '../screens/products/productsScreen'
import SelectDeliveryAddressScreen from '../screens/selectDeliveryAddress/selectDeliveryAddressScreen'
import SelectPaymentMethodScreen from '../screens/selectPaymentMethod/selectPaymentMethodScreen'
import OrderPlacedInfoScreen from '../screens/orderPlacedInfo/orderPlacedInfoScreen'

const Stack = createNativeStackNavigator()

const Router = () => {
  return (
   <Stack.Navigator screenOptions={{headerShown:false}} >
    <Stack.Screen name='loginView' component={loginView}/>
    <Stack.Screen name='signupView' component={signupView}/>
    <Stack.Screen name='Verification' component={VerificationScreen}/>
    <Stack.Screen name='BottomTabBar' component={BottomTabBarScreen}/>
    <Stack.Screen name='RestaurantDetail' component={RestaurantDetailScreen}/>
    <Stack.Screen name="FoodOfDifferentCategories" component={FoodOfDifferentCategoriesScreen}/>
    <Stack.Screen name='Products' component={ProductsScreen}/>
    <Stack.Screen name='SelectDeliveryAddress' component={SelectDeliveryAddressScreen}/>
    <Stack.Screen name="SelectPaymentMethod" component={SelectPaymentMethodScreen}/>
    <Stack.Screen name='OrderPlaceInfo' component={OrderPlacedInfoScreen}/>
   </Stack.Navigator>
  )
}

export default Router

