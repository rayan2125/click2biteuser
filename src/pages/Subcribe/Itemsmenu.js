import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../lib/Header'
import Search from '../../lib/Search'
import Items from './Items'

const Itemsmenu = () => {
    const [search, setSearch] = useState('');
    
    const foodCat = [
        {
            name: "Gujrati Thali",
            type: "Thali",
            price: "150"
        },
        {
            name: "Full Thali",
            type: "Thali",
            price: "100"
        },
        {
            name: "Batti Choka",
            type: "choka",
            price: "150"
        },
        {
            name: "Jain Thali",
            type: "Thali",
            price: "150"
        },
        {
            name: "Dall Rice",
            type: "Combo",
            price: "150"
        },
        {
            name: "Mendu Vada",
            type: "SouthIndian",
            price: "30"
        },
        {
            name: "Masala Dosa",
            type: "SouthIndian",
            price: "70"
        },
        {
            name: "Idali",
            type: "SouthIndian",
            price: "20"
        },
        {
            name: "Burger",
            type: "FastFood",
            price: "50"
        },
        {
            name: "Noodless",
            type: "FastFood",
            price: "150"
        },
        {
            name: "Rice",
            type: "FastFood",
            price: "150"
        },
        {
            name: "Dokla",
            type: "Gujratifood",
            price: "40"
        },
        {
            name: "Samosa",
            type: "FastFood",
            price: "20"
        },
        {
            name: "Rice",
            type: "SouthIndian",
            price: "150"
        },
        {
            name: "Bihari Thali",
            type: "Thali",
            price: "150"
        },
        {
            name: "Punjabi Thali",
            type: "Thali",
            price: "150"
        },
    ]
    const handleSearch = (searchValue) => {
        setSearch(searchValue);
        
    }
    const filteredFoodCat = foodCat.filter(item =>
        search === '' || item.name.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <>
    <Header
    title="Subcribe"/>
    <View>
        <Search handleSearch={handleSearch}/>
        <Items foodCategories={filteredFoodCat} />
        
    </View>
    </>
  )
}

export default Itemsmenu

const styles = StyleSheet.create({})