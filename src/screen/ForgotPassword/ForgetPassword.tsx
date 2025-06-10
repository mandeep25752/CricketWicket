/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Pressable, Alert, Image} from 'react-native';
import React, {useState, useRef} from 'react';
import {moderateScale} from 'react-native-size-matters';
import PhoneInput from 'react-native-phone-number-input';
import { ActivityIndicator } from 'react-native';
interface ForgetPasswordProps {
  navigation: any;
}

const ForgetPassword = (props: ForgetPasswordProps) => {
  const {navigation} = props;
 
  const [email, setEmail] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);
 

  const handleNavigation = async () => {


    if (!email.trim() ) {
      Alert.alert('Validation Error', 'Please fill in email fields.');
      return;
    }


    setSubmitLoading(true)


    try {
     
      const apiUrl = `https://cricketwicket.biz/api/v1/auth/forgot-password?contact=${email}`;

      // Making the GET request to the API
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any necessary headers here
        },
      });


      const data = response.data

      console.log('data>>>>>>>>>>>>>',data);
      

      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`);
      }

      // Successful request, navigate to PasswordOTP screen
      navigation.navigate('PasswordOTP');

    } catch (error) {
      console.error('Error sending forgot password request:', error);
      // Handle error as per your application's requirements
    }
    setSubmitLoading(false)
  };

  return (
    <SafeAreaView style={styles.MainContainer}>



<Image
        style={styles.logo}
        source={require('../../../assets/CricketLogo.png')}
        resizeMode="contain"
      />

      <Text style={styles.headerTxt}>Enter your Mobile Number</Text>
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

<Pressable onPress={handleNavigation} style={styles.btn}>
        <Text style={{fontSize:16}}>
          {submitLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            'Send OTP'
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
    //   paddingTop:20,
    justifyContent:'center'
  },
  headerTxt: {
    fontSize: moderateScale(24, 0.3),
    alignSelf: 'flex-start',
    color: '#fff',
    fontWeight: '600',
    marginTop: 20,
    
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
    marginHorizontal: 20,
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
  otpBtn: {
    color: '#000',
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: moderateScale(16, 0.1),
  },

  input: {
    width: '100%',
    backgroundColor: '#4FA8B9',
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    color: '#fff',
  },

  logo: {
    width: '60%',
    height: '30%',
  },

});

export default ForgetPassword;
