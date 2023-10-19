import React, { useState, createRef, useCallback } from "react";
import { SafeAreaView, Dimensions, View, ScrollView, BackHandler, TouchableOpacity, StatusBar, Image, StyleSheet, Text, TextInput } from "react-native";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
// import { MaterialIcons } from '@expo/vector-icons';
// import { Input } from '@rneui/themed';
import { useFocusEffect } from "@react-navigation/native";

const { width } = Dimensions.get('window');

const loginView = ({ navigation }) => {

    const backAction = () => {
        backClickCount == 1 ? BackHandler.exitApp() : _spring();
        return true;
    }

    useFocusEffect(
        useCallback(() => {
            BackHandler.addEventListener("hardwareBackPress", backAction);
            return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
        }, [backAction])
    );

    function _spring() {
        updateState({ backClickCount: 1 });
        setTimeout(() => {
            updateState({ backClickCount: 0 })
        }, 1000)
    }

    const [state, setState] = useState({
        userName: null,
        password: null,
        passwordSecure: true,
        backClickCount: 0
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        userName,
        password,
        passwordSecure,
        backClickCount
    } = state;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                {foodLogo()}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1, paddingBottom: Sizes.fixPadding, }}
                >
                    {signinTitle()}
                    {userNameTextField()}
                    {passwordTextField()}
                    {forgetPasswordText()}
                    {signinButton()}
                    {orConnectWithDivider()}
                    {socialMediaOptions()}
                    {dontAccountInfo()}
                </ScrollView>
                {exitInfo()}
            </View>
        </SafeAreaView>
    )

    function exitInfo() {
        return (
            backClickCount == 1
                ?
                <View style={[styles.animatedView]}>
                    <Text style={{ ...Fonts.whiteColor12SemiBold }}>
                        Press Back Once Again to Exit
                    </Text>
                </View>
                :
                null
        )
    }

    function foodLogo() {
        return (
            <Image
                source={require('../../assets/images/bg1.png')}
                style={styles.foodLogoStyle}
            />
        )
    }

    function dontAccountInfo() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ ...Fonts.grayColor15Medium }}>
                    Don't have an account?
                </Text>
                <Text
                    onPress={() => navigation.push('Signup')}
                    style={{ marginLeft: Sizes.fixPadding - 5.0, ...Fonts.blackColor15Medium }}
                >
                    Sign Up
                </Text>
            </View>
        )
    }

    function socialMediaOptions() {
        return (
            <View style={styles.socialMediaOptionsWrapStyle}>
                {socialMediaOptionsSort({
                    icon: require('../../assets/images/icons/twitter_icon.png'),
                    bgColor: '#1DA1F2',
                })}
                {socialMediaOptionsSort({
                    icon: require('../../assets/images/icons/google_icon.png'),
                    bgColor: '#EA4335',
                })}
                {socialMediaOptionsSort({
                    icon: require('../../assets/images/icons/facebook_icon.png'),
                    bgColor: '#4267B2',
                })}
            </View>
        )
    }

    function socialMediaOptionsSort({ icon, bgColor }) {
        return (
            <View style={{
                ...styles.socialMediaIconWrapstStyle,
                backgroundColor: bgColor,
            }}>
                <Image
                    source={icon}
                    style={{ width: 18.0, height: 18.0, resizeMode: 'contain' }}
                />
            </View>
        )
    }

    function orConnectWithDivider() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ backgroundColor: Colors.grayColor, height: 1.0, flex: 1, }} />
                <Text style={{ marginHorizontal: Sizes.fixPadding, ...Fonts.grayColor15Medium }}>
                    Or Connect with
                </Text>
                <View style={{ backgroundColor: Colors.grayColor, height: 1.0, flex: 1, }} />
            </View>
        )
    }

    function signinButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.push('signupView')}
                style={styles.signinButtonStyle}
            >
                <Text style={{ ...Fonts.whiteColor18Bold }}>
                    Sign In
                </Text>
            </TouchableOpacity>
        )
    }

    function forgetPasswordText() {
        return (
            <Text style={styles.forgetPasswordTextStyle}>
                Forget Password?
            </Text>
        )
    }

    function passwordTextField() {
        const input = createRef();
        return (
            <TextInput
                ref={input}
                value={password}
                onChangeText={(text) => updateState({ password: text })}
                selectionColor={Colors.primaryColor}
                placeholder='Password'
                placeholderTextColor={Colors.grayColor}
                leftIcon={{
                    type: 'material',
                    color: Colors.grayColor,
                    name: 'lock-outline',
                    size: 20,
                    onPress: () => { input.current.focus() }
                }}
                secureTextEntry={passwordSecure}
                rightIcon={{
                    type: 'material-community',
                    color: Colors.grayColor,
                    name: passwordSecure ? 'eye-off-outline' : 'eye-outline',
                    size: 16,
                    onPress: () => { updateState({ passwordSecure: !passwordSecure }) }
                }}
                style={{ ...Fonts.blackColor15Medium, marginLeft: Sizes.fixPadding - 2.0 }}
                inputContainerStyle={{ ...styles.textFieldWrapStyle }}
                containerStyle={styles.textFieldStyle}
            />
        )
    }

    function userNameTextField() {
        const input = createRef();
        return (
            <TextInput
                ref={input}
                value={userName}
                onChangeText={(text) => updateState({ userName: text })}
                selectionColor={Colors.primaryColor}
                placeholder='User Name'
                placeholderTextColor={Colors.grayColor}
                leftIcon={{
                    type: 'material',
                    color: Colors.grayColor,
                    name: 'person-outline',
                    size: 20,
                    onPress: () => { input.current.focus() }
                }}
                style={{ ...Fonts.blackColor15Medium, marginLeft: Sizes.fixPadding - 2.0 }}
                inputContainerStyle={{ ...styles.textFieldWrapStyle }}
                containerStyle={{ marginBottom: Sizes.fixPadding * 3.0, marginTop: Sizes.fixPadding * 2.0, ...styles.textFieldStyle }}
            />
        )
    }

    function signinTitle() {
        return (
            <Text style={{ marginVertical: Sizes.fixPadding, marginHorizontal: Sizes.fixPadding * 2.0, ...Fonts.blackColor20Bold }}>
                Sign In
            </Text>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
              
            </View>
        )
    }

}

const styles = StyleSheet.create({
    animatedView: {
        backgroundColor: Colors.blackColor,
        position: "absolute",
        bottom: 30,
        alignSelf: 'center',
        borderRadius: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        paddingVertical: Sizes.fixPadding,
    },
    headerWrapStyle: {
        margin: Sizes.fixPadding * 2.0,
    },
    textFieldStyle: {
        height: 40.0,
        width: width - 25.0,
        alignSelf: 'center',
    },
    textFieldWrapStyle: {
        paddingHorizontal: Sizes.fixPadding,
        elevation: 1.0,
        borderRadius: Sizes.fixPadding,
        backgroundColor: Colors.whiteColor,
        borderBottomColor: Colors.whiteColor,
        borderBottomWidth: 1.0,
    },
    forgetPasswordTextStyle: {
        marginTop: Sizes.fixPadding + 2.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        alignSelf: 'flex-end',
        ...Fonts.grayColor11Medium
    },
    signinButtonStyle: {
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
    socialMediaOptionsWrapStyle: {
        marginVertical: Sizes.fixPadding,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    socialMediaIconWrapstStyle: {
        width: 38.0,
        height: 38.0,
        borderRadius: 19.0,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Sizes.fixPadding - 5.0,
    },
    foodLogoStyle: {
        width: 160,
        height: 160,
        position: 'absolute',
        bottom: 0.0,
        left: 0.0,
    }
});

export default loginView;