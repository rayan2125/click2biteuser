import React, { useState } from "react";
import { SafeAreaView, View, StatusBar, FlatList, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Colors, Fonts, Sizes, } from "../../constants/styles";


const addressesList = [
    {
        id: '1',
        addressType: 'Home',
        address: '444, Grove Avenue, Golden Tower Near City Part, Washington DC,United States Of America',
        mobileNo: '+19 1234567890',
    },
    {
        id: '2',
        addressType: 'Office',
        address: 'B441, Old city town, Leminton street Near City Part, Washington DC,United States Of America',
        mobileNo: '+19 1234567890',
    },
];

const AddressScreen = ({ navigation }) => {

    const [state, setState] = useState({
        selectedAddressId: addressesList[0].id,
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))


    const {
        selectedAddressId,
    } = state;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                <FlatList
                    ListHeaderComponent={
                        <>
                            {addresses()}
                            {addNewAddressInfo()}
                        </>
                    }
                    contentContainerStyle={{ paddingBottom: Sizes.fixPadding, }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )

    function addNewAddressInfo() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.push('AddNewAddress')}
                style={styles.addNewAddressInfoWrapStyle}
            >
                <Text style={{ ...Fonts.blackColor16SemiBold }}>
                    Add New address
                </Text>
                <View style={styles.addAddressIconWrapStyle}>
                   
                </View>
            </TouchableOpacity>
        )
    }

    function addresses() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => updateState({ selectedAddressId: item.id })}
                style={styles.addressWrapStyle}
            >
                <View style={styles.addressTypeWrapStyle}>
                    <Text style={{ ...Fonts.blackColor16SemiBold }}>
                        {item.addressType}
                    </Text>
                    <View style={styles.radioButtonOuterStyle}>
                        {
                            selectedAddressId == item.id
                                ?
                                <View
                                    style={styles.radioButtonInnerStyle}
                                />
                                :
                                null
                        }
                    </View>
                </View>
                <View style={{ padding: Sizes.fixPadding, }}>
                    <Text style={{ ...Fonts.blackColor13Light }}>
                        {item.address}
                    </Text>
                    <Text style={{ marginTop: Sizes.fixPadding - 7.0, ...Fonts.blackColor13SemiBold }}>
                        {item.mobileNo}
                    </Text>
                </View>
            </TouchableOpacity>
        )
        return (
            <View>
                <FlatList
                    data={addressesList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                />
            </View>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                
                <Text style={{ marginLeft: Sizes.fixPadding - 5.0, flex: 1, ...Fonts.blackColor18SemiBold }}>
                    Address
                </Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    headerWrapStyle: {
        margin: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    addressWrapStyle: {
        backgroundColor: Colors.whiteColor,
        elevation: 1.0,
        borderRadius: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding * 2.0,
    },
    addressTypeWrapStyle: {
        backgroundColor: '#ECECEC',
        padding: Sizes.fixPadding,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    radioButtonOuterStyle: {
        borderColor: Colors.primaryColor,
        borderWidth: 1.0,
        width: 16.0,
        height: 16.0,
        borderRadius: 8.0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    radioButtonInnerStyle: {
        width: 10.0,
        height: 10.0,
        borderRadius: 5.0,
        backgroundColor: Colors.primaryColor
    },
    addNewAddressInfoWrapStyle: {
        backgroundColor: '#E0E1E6',
        borderRadius: Sizes.fixPadding,
        padding: Sizes.fixPadding,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginVertical: Sizes.fixPadding + 5.0,
    },
    addAddressIconWrapStyle: {
        width: 16.0,
        height: 16.0,
        borderRadius: 8.0,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    proceedToCheckoutButtonStyle: {
        backgroundColor: Colors.primaryColor,
        paddingVertical: Sizes.fixPadding + 2.0,
        margin: Sizes.fixPadding * 2.0,
        borderRadius: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'rgba(255, 66, 0, 0.3)',
        borderWidth: 1.0,
        elevation: 1.0,
        shadowColor: Colors.primaryColor,
    },
});

export default AddressScreen;