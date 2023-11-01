import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

const Search = ({ handleSearch }) => {
    

    return (
        <View>
            <TextInput
                placeholder="Search"
                onChangeText={(text) => handleSearch(text)}
            />
        </View>
    );
}

export default Search;
