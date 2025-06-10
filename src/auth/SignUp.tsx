/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Image,
  SafeAreaView,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  useColorScheme,
  Alert,
  ToastAndroid,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PhoneInput from 'react-native-phone-number-input';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';

interface SignUpProps {
  navigation: any;
}

const SignUp = (props: SignUpProps) => {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [show] = useState(false);
  const colorScheme = useColorScheme();
  const [submitLoading, setSubmitLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef<PhoneInput>(null);
  // console.log(phoneInput)
  // console.log(phoneNumber.substring(3))

  const handleUserEmail = (text: string) => {
    setEmail(text);
  };
  const handleruserName = (text: string) => {
    setName(text);
  };
  const handlePassword = (text: string) => {
    setPassword(text);
  };

  const handleConfirmPass = (text: string) => {
    setConfirmPass(text);
  };

  const [emailError , setEmailError] = useState("")
  const [phoneError , setPhoneError] = useState("")
  const [nameError , setNameError] = useState("")
  const [passError , setPassError] = useState("")
  const [cPassError , setCPassError] = useState("")

  const validateEmail = (email :  any) => {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  
  
  const validateMobileNumber = (phoneNumber :  any) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phoneNumber);
  };
  
  const validatePassword = (password : any) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };
  
  const validateFullName = (name : any) => {
    return /^[a-zA-Z ]+$/.test(name);
  };
 


 
  const handleSignUp = async () => {
    if (!email) {
      setEmailError('Email cannot be empty');
      return;
    }
    setEmailError("");
    if (!phoneNumber) {
      setPhoneError('Phone number cannot be empty');
      return;
    }
    setPhoneError("");
    if (!name) {
      setNameError('Name cannot be empty');
      return;
    }
    setNameError("");
    if (!password) {
      setPassError('Password cannot be empty');
      return;
    }
    setPassError("");
    if (!confirmPass) {
      setCPassError('Confirm Password cannot be empty');
      return;
    }
    setCPassError("");
  
    if (password !== confirmPass) {
      setCPassError('Passwords do not match');
      return;
    }
    setCPassError("");
  
    const fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log('register fcmToken:', fcmToken);
  
    // Extract country dialing code and contact number
    const dialingCode = phoneInput.current?.getCallingCode(); // Fetch dialing code like '91'
    const contactNumber = phoneNumber.replace(`+${dialingCode}`, ''); // Remove dialing code for raw number
    console.log('contactNumber>>>>>', contactNumber);
  
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
  
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("country_code", `+${dialingCode}`); 
    formdata.append("contact", contactNumber); 
    formdata.append("password", password);
    formdata.append("password_confirmation", confirmPass);
    formdata.append("fcm_token", fcmToken);
  
    console.log('formdata:', formdata);
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    setSubmitLoading(true);
  
    try {
      const response = await fetch("https://cricketwicket.biz/api/v1/register", requestOptions);
      const result = await response.json();
  
      console.log('result:', result);
  
      if (!response.ok) {
        const errorMessage = result.message || 'Registration Failed, Try Again.';
        ToastAndroid.showWithGravityAndOffset(
          errorMessage,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      } else if (result.message === "OTP sent to your email and phone. Please verify to complete login.") {
        ToastAndroid.showWithGravityAndOffset(
          `${result.message}`,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );
        navigation.navigate("OTP");
      } else {
        ToastAndroid.showWithGravityAndOffset(
          `${result.message}`,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      }
  
      // Clear form fields after handling response
      setSubmitLoading(false);
      setEmail("");
      setPhoneNumber("");
      setName("");
      setPassword("");
      setConfirmPass("");
  
    } catch (error) {
      console.error('Error:', error);
      ToastAndroid.showWithGravityAndOffset(
        'Registration Failed, Try Again.',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      setSubmitLoading(false);
      setEmail("");
      setPhoneNumber("");
      setName("");
      setPassword("");
      setConfirmPass("");
    }
  };
  
  
  
  
  const handleNavigation = () => {
    navigation.navigate('OTP');
  };
  return (
    <SafeAreaView
      style={[
        styles.MainContainer,
        {backgroundColor: colorScheme === 'light' ? '#4fa8b9' : '#000'},
      ]}>
      <Image
        style={styles.logo}
        source={require('../../assets/CricketLogo.png')}
        resizeMode="contain"
      />
      <View style={styles.inputContainer}>
        <FloatingLabelInput
          label="Email"
          value={email}
          onChangeText={handleUserEmail}
          customLabelStyles={{
            fontSizeFocused: 12,
            fontSizeBlurred: 14,
            colorBlurred: colorScheme === 'light' ? '#fff' : '#fff',
            colorFocused: colorScheme === 'light' ? '#fff' : '#fff',
          }}
          labelStyles={styles.labelStyle}
          inputStyles={{
            color: colorScheme === 'light' ? '#000' : '#fff',
            fontSize: moderateScale(14, 0.3),
            marginTop: 10,
            fontWeight: '700',
          }}
          containerStyles={{
            ...styles.floatingContainerStyle,
            borderBottomColor: email !== '' ? '#14302e' : '#808080',
          }}
        />
        {
          emailError ? <Text style={{color:"red" , fontSize: 16, fontWeight:"600"}}>{emailError}</Text> : null
        }
        <PhoneInput
          ref={phoneInput}
          defaultValue={phoneNumber}
          defaultCode="IN"
          layout="first"
          placeholder="Phone number"
          textInputStyle={{color: '#fff'}}
          codeTextStyle={{color: '#fff'}}
          textInputProps={{placeholderTextColor: '#fff'}}
          containerStyle={{
            width: '100%',
            backgroundColor: '#4FA8B9',
            borderBottomWidth: 1,
            borderBottomColor: phoneNumber !== '' ? '#14302e' : '#808080',
            marginTop: 10,
          }}
          textContainerStyle={{
            backgroundColor: '#4FA8B9',
            borderRadius: 8,
            padding: 0,
          }}
          onChangeFormattedText={text => {
            setPhoneNumber(text);
          }}
          withDarkTheme
          withShadow
        />

{
          phoneError ? <Text style={{color:"red" , fontSize: 16, fontWeight:"600"}}>{phoneError}</Text> : null
        }
        <FloatingLabelInput
          label="Full name"
          value={name}
          onChangeText={handleruserName}
          customLabelStyles={{
            fontSizeFocused: 12,
            fontSizeBlurred: 14,
            colorBlurred: colorScheme === 'light' ? '#fff' : '#fff',
            colorFocused: colorScheme === 'light' ? '#fff' : '#fff',
          }}
          labelStyles={styles.labelStyle}
          inputStyles={{
            color: colorScheme === 'light' ? '#000' : '#fff',
            fontSize: moderateScale(14, 0.3),
            marginTop: 10,
            fontWeight: '700',
          }}
          containerStyles={{
            ...styles.floatingContainerStyle,
            borderBottomColor: name !== '' ? '#14302e' : '#808080',
          }}
        />
         {
          nameError ? <Text style={{color:"red" , fontSize: 16, fontWeight:"600"}}>{nameError}</Text> : null
        }
        {/* <View style={styles.inputContainer}> */}
        <FloatingLabelInput
          label="Password"
          value={password}
          onChangeText={handlePassword}
          isPassword
          customLabelStyles={{
            fontSizeFocused: 12,
            fontSizeBlurred: 14,
            colorBlurred: colorScheme === 'light' ? '#fff' : '#fff',
            colorFocused: colorScheme === 'light' ? '#fff' : '#fff',
          }}
          labelStyles={styles.labelStyle}
          inputStyles={styles.floatingInputStyle}
          containerStyles={{
            ...styles.floatingContainerStyle,
            borderBottomColor: password !== '' ? '#14302e' : '#808080',
          }}
          togglePassword={show}
          customShowPasswordComponent={
            <MaterialCommunityIcons
              name="eye-off"
              size={moderateScale(18, 0.3)}
              color={colorScheme === 'light' ? '#fff' : '#fff'}
            />
          }
          customHidePasswordComponent={
            <MaterialCommunityIcons
              name="eye"
              size={moderateScale(18, 0.3)}
              color={colorScheme === 'light' ? '#fff' : '#fff'}
            />
          }
        />

{
          passError ? <Text style={{color:"red" , fontSize: 16, fontWeight:"600"}}>{passError}</Text> : null
        }
        <FloatingLabelInput
          label="Confirm Password"
          value={confirmPass}
          onChangeText={handleConfirmPass}
          isPassword
          customLabelStyles={{
            fontSizeFocused: 12,
            fontSizeBlurred: 14,
            colorBlurred: colorScheme === 'light' ? '#fff' : '#fff',
            colorFocused: colorScheme === 'light' ? '#fff' : '#fff',
          }}
          labelStyles={styles.labelStyle}
          inputStyles={styles.floatingInputStyle}
          containerStyles={{
            ...styles.floatingContainerStyle,
            borderBottomColor: confirmPass !== '' ? '#14302e' : '#808080',
          }}
          togglePassword={show}
          customShowPasswordComponent={
            <MaterialCommunityIcons
              name="eye-off"
              size={moderateScale(18, 0.3)}
              color={colorScheme === 'light' ? '#fff' : '#fff'}
            />
          }
          customHidePasswordComponent={
            <MaterialCommunityIcons
              name="eye"
              size={moderateScale(18, 0.3)}
              color={colorScheme === 'light' ? '#fff' : '#fff'}
            />
          }
        />
         {
          cPassError ? <Text style={{color:"red" , fontSize: 16, fontWeight:"600"}}>{cPassError}</Text> : null
        }
        {/* </View> */}
      </View>

      {/* <TouchableOpacity style={styles.btn} onPress={handleSignUp}>
        <Text style={styles.btnTxt}>SignUp</Text>
      </TouchableOpacity> */}

      <TouchableOpacity onPress={handleSignUp} style={styles.btn}>
        <Text style={styles.btnTxt}>
          {submitLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            'Signup'
          )}
        </Text>
      </TouchableOpacity>


      <View style={styles.imgView}>
        <Pressable>
          <Image
            source={require('../../assets/google-icon.png')}
            style={styles.imgStyles}
          />
        </Pressable>

       {/* { <Pressable>
          <Image
            source={require('../../assets/icons8-facebook-50.png')}
            style={styles.imgStyles}
          />
        </Pressable> */}

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00b4d8',
    padding: 20,
    
  },
  logo: {
    width: '60%',
    height: '30%',
  },
  inputContainer: {
    width: '90%',
    // height: moderateScale(60, 0.3),
    marginBottom: moderateScale(20, 0.3),
    
  },
  labelStyle: {paddingVertical: moderateScale(5, 0.3), color: '#000',},
  floatingInputStyle: {
    // color: '#000',
    fontSize: moderateScale(14, 0.3),
    marginTop: 10,
    fontWeight: '700',
  },
  floatingContainerStyle: {
    borderBottomWidth: 1.5,
    paddingHorizontal: moderateScale(5, 0.3),
  },
  rememberContainer: {
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginHorizontal: moderateScale(15, 0.3),
    justifyContent: 'space-between',
  },
  btn: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(40, 0.3),
    marginBottom: 10,
    borderRadius: 10,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#70e000',
  },
  btnTxt: {
    color: '#fff',
    fontSize: moderateScale(16, 0.3),
    fontWeight: 'bold',
  },
  imgStyles: {
    height: 50,
    width: 50,
    marginHorizontal: 15,
  },
  imgView: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  text: {
    fontSize: moderateScale(16, 0.1),
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
  },
});

export default SignUp;
