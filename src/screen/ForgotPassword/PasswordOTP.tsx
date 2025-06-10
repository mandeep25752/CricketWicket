/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {moderateScale} from 'react-native-size-matters';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native';

interface OtpProps {
  navigation: any;
}

const PasswordOTP = (props: OtpProps) => {
  const [email, setEmail] = useState('');
  const [reset_token, setreset_token] = useState('');
  const [password, setpassword] = useState('');
  const [confirm_password, setconfirm_password] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);
  const {navigation} = props;
  


  const handleNavigation = async () => {
    // Basic validation to check if any field is empty
    if (!email.trim() || !reset_token.trim() || !password.trim() || !confirm_password.trim()) {
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }

    setSubmitLoading(true);

    try {
      const apiUrl = "https://cricketwicket.biz/api/v1/auth/reset-password";

      const requestBody = {
        contact: email,
        reset_token: reset_token,
        password: password,
        confirm_password: confirm_password,
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any necessary headers here
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`);
      }

   
      Alert.alert('Success', 'Password reset successfully!', [
        { text: 'OK', onPress: () => navigation.navigate('Login') }
      ]);

    } catch (error) {
      console.error('Error sending reset password request:', error);
      Alert.alert('Error', 'Failed to reset password. Please try again later.');
    } finally {
      setSubmitLoading(false);
    }
  };



  return (
    <SafeAreaView style={styles.MainContainer}>


<Image
        style={styles.logo}
        source={require('../../../assets/CricketLogo.png')}
        resizeMode="contain"
      />

      <Text style={styles.headerTxt}>Enter the 4 digit OTP</Text>
      <TouchableOpacity style={{alignSelf: 'flex-start'}}>
        <Text style={[styles.txt, {color: '#00f5d4'}]}>Need help?</Text>
      </TouchableOpacity>
      <View style={styles.inpCont}>
      <TextInput
  style={styles.input}
  placeholder="Mobile Number"
  placeholderTextColor="#fff"
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
  autoCapitalize="none"
  autoCompleteType="email"
  textContentType="emailAddress"
/>

<TextInput
  style={styles.input}
  placeholder="Email OTP"
  placeholderTextColor="#fff"
  value={reset_token}
  onChangeText={setreset_token}
  keyboardType="numeric"
  placeholder="Enter OTP"
  autoCapitalize="none"
  autoCompleteType="off"
  textContentType="oneTimeCode"
/>

<TextInput
  style={styles.input}
  placeholder="Password"
  placeholderTextColor="#fff"
  value={password}
  onChangeText={setpassword}
  secureTextEntry={true}
  autoCapitalize="none"
  autoCompleteType="password"
  textContentType="newPassword"
/>

<TextInput
  style={styles.input}
  placeholder="Confirm Password"
  placeholderTextColor="#fff"
  value={confirm_password}
  onChangeText={setconfirm_password}
  secureTextEntry={true}
  autoCapitalize="none"
  autoCompleteType="password"
  textContentType="newPassword"
/>


      </View>
      <TouchableOpacity style={{alignSelf: 'flex-end'}}>
        <Text style={[styles.txt, {color: '#80ed99'}]}>Resend</Text>
      </TouchableOpacity>
     

      <Pressable onPress={handleNavigation} style={styles.btn}>
        <Text style={{fontSize:16}}>
          {submitLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            'Continue'
          )}
        </Text>
      </Pressable>
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

  input: {
    width: '100%',
    backgroundColor: '#4FA8B9',
    borderWidth: 2,
    borderColor: '#143022',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    color: '#fff',
  },

  logo: {
    width: '60%',
    height: '20%',
  },
});

export default PasswordOTP;
