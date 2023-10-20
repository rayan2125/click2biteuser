import React, { useState } from "react";
import {
  SafeAreaView,
  Dimensions,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  StyleSheet,
  Text,
  Platform,
} from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";

import { CircleFade } from "react-native-animated-spinkit";


const { width } = Dimensions.get("screen");

const VerificationScreen = ({ navigation }) => {
  const [otpInput, setotpInput] = useState("");
  const [isLoading, setisLoading] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
      <View style={{ flex: 1 }}>
        {header()}
        {foodLogo()}
        {verifyTitle()}
        {verificationDetail()}
        {otpFields()}
        {verifyButton()}
      </View>
      {/* {loading()} */}
    </SafeAreaView>
  );

  // function loading() {
  //   return (
  //     <Dialog.Container
  //       visible={isLoading}
  //       contentStyle={styles.dialogContainerStyle}
  //       headerStyle={{ padding: 0, margin: 0 }}
  //     >
  //       <View
  //         style={{
  //           paddingVertical:
  //             Platform.OS == "ios" ? Sizes.fixPadding * 2.0 : Sizes.fixPadding-5.0,
  //           paddingHorizontal: Sizes.fixPadding * 2.0,
  //           backgroundColor: Colors.whiteColor,
  //           alignItems: "center",
  //         }}
  //       >
  //         <CircleFade size={40} color={Colors.primaryColor} />
  //         <Text
  //           style={{
  //             ...Fonts.grayColor16Medium,
  //             marginTop: Sizes.fixPadding * 2.0,
  //           }}
  //         >
  //           Please wait..
  //         </Text>
  //       </View>
  //     </Dialog.Container>
  //   );
  // }

  function verifyButton() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          setisLoading(true);
          setTimeout(() => {
            setisLoading(false);
            navigation.push("BottomTabBar");
          }, 2000);
        }}
        style={styles.verifyNowButtonStyle}
      >
        <Text style={{ ...Fonts.whiteColor18Bold }}>Verify Now</Text>
      </TouchableOpacity>
    );
  }

  function otpFields() {
    return (
     <Text>helloe</Text>
    );
  }

  function foodLogo() {
    return (
      <Image
        source={require("../../assets/images/bg1.png")}
        style={styles.foodLogoStyle}
      />
    );
  }

  function verificationDetail() {
    return (
      <View style={{ marginTop: Sizes.fixPadding + 5.0 }}>
        <Text style={{ textAlign: "center", ...Fonts.grayColor16Medium }}>
          Enter your code here
        </Text>
        <Text
          style={{
            marginTop: Sizes.fixPadding - 5.0,
            textAlign: "center",
            ...Fonts.grayColor11Medium,
          }}
        >
          {`Please check your message and\nenter the verification code we just sent you\n(+91) 1234567890`}
        </Text>
      </View>
    );
  }

  function verifyTitle() {
    return (
      <Text style={{ textAlign: "center", ...Fonts.blackColor20Bold }}>
        Verify Your Mobile
      </Text>
    );
  }

  function header() {
    return (
      <View style={styles.headerWrapStyle}>
        
      </View>
    );
  }
};

const styles = StyleSheet.create({
  headerWrapStyle: {
    margin: Sizes.fixPadding * 2.0,
  },
  foodLogoStyle: {
    width: 160,
    height: 160,
    position: "absolute",
    bottom: 0.0,
    left: 0.0,
  },
  textFieldStyle: {
    borderBottomWidth: null,
    borderRadius: Sizes.fixPadding - 5.0,
    backgroundColor: "rgba(255, 66, 0, 0.4)",
    borderColor: "rgba(255, 66, 0, 0.8)",
    borderWidth: 1.0,
    ...Fonts.blackColor18SemiBold,
  },
  dialogContainerStyle: {
    borderRadius: Sizes.fixPadding - 5.0,
    width: width - 100,
  },
  verifyNowButtonStyle: {
    backgroundColor: Colors.primaryColor,
    paddingVertical: Sizes.fixPadding + 2.0,
    marginHorizontal: Sizes.fixPadding * 2.0,
    marginVertical: Sizes.fixPadding * 4.0,
    borderRadius: Sizes.fixPadding,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "rgba(255, 66, 0, 0.3)",
    borderWidth: 1.0,
    elevation: 1.0,
    shadowColor: Colors.primaryColor,
  },
});

export default VerificationScreen;
