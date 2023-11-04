import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Sizes } from '../constants/styles';

const Search = ({ handleSearch }) => {
    

    return (
        <View style={{margin:Sizes.fixPadding,borderColor:'black', borderWidth:1, borderRadius:Sizes.fixPadding+5}}>
            <TextInput
                placeholder="Search"
                onChangeText={(text) => handleSearch(text)}
            />
        </View>
    );
}

export default Search;
