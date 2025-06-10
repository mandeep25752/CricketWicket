/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  TextInput
} from 'react-native';
import React, { useEffect, useState } from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {moderateScale} from 'react-native-size-matters';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native';


interface OtpProps {
  navigation: any;
}

const Otp = () => {
 
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);
  const [usernameError, setUserNameError] = useState("");
  const [passError, setPassError] = useState("");

  const navigation = useNavigation();

  const OtpVerifyLogin = async () => {
    //  navigation.navigate("MyTab");
    if (!email) {
      setUserNameError('Email cannot be empty');
      return;
    }
    setUserNameError("");
    if (!otp) {
      setPassError('OTP cannot be empty');
      return;
    }
    setPassError("");

    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("otp", otp);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    setSubmitLoading(true);
    try {
      const response = await fetch("https://cricketwicket.biz/api/v1/otp/verify", requestOptions);
      const result = await response.json();
      console.log("Login Response", result);

      setSubmitLoading(false);

      if (result.message === "OTP verified. User logged in successfully.") {
        ToastAndroid.showWithGravityAndOffset(
          `${result.message}`,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50,
        );

        if (result.token) {
          await AsyncStorage.setItem("loginToken", result.token);
          await AsyncStorage.setItem("userID", JSON.stringify(result.user.id));

          setEmail("");
          setOtp("");

          navigation.navigate("MyTab");
        } else {
          console.error('Token is undefined in the response');
          ToastAndroid.showWithGravityAndOffset(
            'Login successful but token is missing in the response.',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50
          );
        }
      } else {
        // Display the appropriate error message
        if (result.message === "Invalid or expired OTP.") {
          ToastAndroid.showWithGravityAndOffset(
            'Invalid or expired OTP.',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50
          );
        } else if (result.errors && result.errors.password) {
          ToastAndroid.showWithGravityAndOffset(
            `${result.errors.password[0]}`,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50
          );
        } else if (result.message) {
          ToastAndroid.showWithGravityAndOffset(
            `${result.message}`,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50
          );
        } else {
          ToastAndroid.showWithGravityAndOffset(
            'An unknown error occurred.',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50
          );
        }
        setEmail("");
        setOtp("");
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitLoading(false);
      ToastAndroid.showWithGravityAndOffset(
        'Please check email & OTP.',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      setEmail("");
      setOtp("");
    }
  };

  return (
    <SafeAreaView style={styles.MainContainer}>



<Image
        style={styles.logo}
        source={require('../../assets/CricketLogo.png')}
        resizeMode="contain"
      />

      <Text style={styles.headerTxt}>Enter the 4 digit OTP</Text>
     
      <TouchableOpacity style={{ alignSelf: 'flex-start' }}>
        <Text style={[styles.txt, { color: '#00f5d4' }]}> Enter YOUR Mobile Number</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Mobile Number"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={styles.textInput}
        placeholderTextColor="#888"
      />

      <View style={styles.inpCont}>
        <OTPInputView
          style={{
            width: '70%',
            height: 60,
          }}
          pinCount={4}
          value={otp}
          keyboardType="number-pad"
          autoFocusOnLoad={false}
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            setOtp(code);
          }}
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={OtpVerifyLogin}>
        <Text style={styles.btnText}> {submitLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            'Verify OTP'
          )}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#00b4d8',
    backgroundColor: '#4fa8b9',
    padding: 20,
  },
  headerTxt: {
    fontSize: moderateScale(24, 0.3),
    alignSelf: 'flex-start',
    color: '#fff',
    fontWeight: '600',
  },
  txt: {
    fontSize: moderateScale(16, 0.3),
    alignSelf: 'flex-start',
    color: '#fff',
    marginVertical: 5,
  },
  inpCont: {
    alignItems: 'center',
    width: '100%',
  },
  underlineStyleBase: {
    width: moderateScale(45, 0.3),
    height: moderateScale(45, 0.3),
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000',
    color: '#000',
    fontSize: moderateScale(20, 0.3),
  },
  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    width: '65%',
    padding: 10,
    backgroundColor: '#80ed99',
    borderRadius: 50,
    elevation: 10,
  },
  btnText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },

  textInput: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    color:'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff', // Optional: Add a background color
  },

  logo: {
    width: '60%',
    height: '30%',
  },
  
});

export default Otp;
