import React from "react";
import { SafeAreaView, View, ScrollView, Dimensions, TouchableOpacity, StatusBar, Image, StyleSheet, Text } from "react-native";
import { Colors, Fonts, Sizes, } from "../../constants/styles";

const { height } = Dimensions.get('window');

const OrderPlacedInfoScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {DeliveryBoyIcon()}
                    {orderPlacedInfo()}
                    {orderInfo()}
                    {myOrderButton()}
                </ScrollView>
            </View>
        </SafeAreaView>
    )

    function myOrderButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.push('BottomTabBar', { index: 3 })}
                style={styles.myOrdersButtonStyle}
            >
                <Text style={{ ...Fonts.whiteColor18Bold }}>
                    My Orders
                </Text>
            </TouchableOpacity>
        )
    }

    function orderInfo() {
        return (
            <View style={styles.orderInfoWrapStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ ...Fonts.blackColor14SemiBold }}>
                        Your order number
                    </Text>
                    <Text style={{ ...Fonts.blackColor14SemiBold }}>
                        CCA123654
                    </Text>
                </View>
                <View style={{ marginVertical: Sizes.fixPadding, }}>
                    <Text style={{ ...Fonts.blackColor14SemiBold }}>
                        Delivery address
                    </Text>
                    <Text style={{ marginRight: Sizes.fixPadding * 12.0, ...Fonts.grayColor10SemiBold }}>
                        B 441, Old city town, Leminton, street Near City Part, Washington DC,United States Of America
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ ...Fonts.blackColor14SemiBold }}>
                        Amount Payable
                    </Text>
                    <Text style={{ ...Fonts.blackColor14SemiBold }}>
                        $32.00
                    </Text>
                </View>
                <View style={styles.amountPayViaInfoWrapStyle}>
                    <Text style={{ ...Fonts.blackColor14SemiBold }}>
                        Amount Pay via
                    </Text>
                    <Text style={{ ...Fonts.blackColor14SemiBold }}>
                        Cash on delivery
                    </Text>
                </View>
            </View>
        )
    }

    function orderPlacedInfo() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={{ marginTop: Sizes.fixPadding * 3.0, ...Fonts.blackColor22SemiBold }}>
                    Hey, Samantha
                </Text>
                <Text style={{ marginTop: Sizes.fixPadding - 3.0, ...Fonts.blackColor18Medium }}>
                    Your order is placed!!!
                </Text>
                <Text style={{ marginTop: Sizes.fixPadding + 5.0, textAlign: 'center', ...Fonts.grayColor12Medium }}>
                    {`Thanks for choosing us for\ndelivering your foods.`}
                </Text>
                <Text style={{ marginTop: Sizes.fixPadding - 3.0, textAlign: 'center', ...Fonts.grayColor12Medium }}>
                    {`You can check your order status\nin my order section.`}
                </Text>
            </View>
        )
    }

    function DeliveryBoyIcon() {
        return (
            <View style={{ marginTop: Sizes.fixPadding * 4.0, height: height / 3.0, }}>
                <Image
                    source={require('../../assets/images/delivery_boy.png')}
                    style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                />
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
    myOrdersButtonStyle: {
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
    orderInfoWrapStyle: {
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        borderRadius: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding * 2.0,
        padding: Sizes.fixPadding + 5.0,
        marginTop: Sizes.fixPadding * 3.0,
        marginBottom: Sizes.fixPadding * 2.0,
    },
    amountPayViaInfoWrapStyle: {
        marginTop: Sizes.fixPadding,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

export default OrderPlacedInfoScreen;