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
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { LoginButton, AccessToken, LoginManager, Profile } from 'react-native-fbsdk-next';




interface LoginProps {
  navigation: any;
}

const Login = (props: LoginProps) => {
  const {navigation} = props;
  // test12@gmail.com 12345678
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [show] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [googleloding, setgoogleloding] = useState(false);
  const [accepts, setAccepts] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const colorScheme = useColorScheme();
  









const handleUsernameChange = (text: string) => {
    setUsername(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };
  
  const handleNavigationSignUp = () => {
    navigation.navigate('SignUp');
  };
  const handlePassword = () => {
    navigation.navigate('ForgetPassword');
  };
  const [usernameError , setUserNameError] = useState("")
  const [passError , setPassError] = useState("")



  const handleLogin = async () => {
    if (!username) {
      setUserNameError('User name cannot be empty');
      return;
    }
    setUserNameError("");
  
    if (!password) {
      setPassError('Password cannot be empty');
      return;
    }
    setPassError("");
  
    const fcmToken = await AsyncStorage.getItem('fcmToken');
    const formdata = new FormData();
    formdata.append("email_or_phone", username);
    formdata.append("password", password);
    formdata.append("fcm_token", fcmToken);
  
    console.log("username", username);
  
    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
  
    setSubmitLoading(true);
  
    try {
      const response = await fetch("https://cricketwicket.biz/api/v1/login", requestOptions);
      const result = await response.json();
      console.log("Login Response", result);
  
      if (result.message === "OTP verified. User logged in successfully.") {
        ToastAndroid.showWithGravityAndOffset(
          "User logged in successfully.",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );
  
        const userData = result.user; // Correctly access the 'user' object
        // Save token and userID to AsyncStorage
        await AsyncStorage.setItem("loginToken", result?.token);
        await AsyncStorage.setItem("userID", JSON.stringify(userData.id)); // Use 'userData' for id
        await AsyncStorage.setItem("name", userData.name); // Use 'userData' for name
        await AsyncStorage.setItem("email", userData.email); // Use 'userData' for email
        await AsyncStorage.setItem("contact", userData.contact); // Use 'userData' for contact
  
        // Clear the input fields
        setPassword("");
        setUsername("");
  
        // Navigate to MyTab
        navigation.navigate("MyTab");
  
      } else {
        setSubmitLoading(false);
  
        // Display the appropriate error message
        if (result.errors && result.errors.password) {
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
        setPassword("");
        setUsername("");
      }
    } catch (error) {
      console.error(error);
      setSubmitLoading(false);
      ToastAndroid.showWithGravityAndOffset(
        'Please check username & password.',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      setPassword("");
      setUsername("");
    } finally {
      setSubmitLoading(false);
    }
  };
  
  




  

  // const Facebooksignin =()=>{
  //   <LoginButton
  //   onLoginFinished={
  //     (error, result) => {
  //       if (error) {
  //         console.log("login has error: " + result.error);
  //       } else if (result.isCancelled) {
  //         console.log("login is cancelled.");
  //       } else {
  //         AccessToken.getCurrentAccessToken().then(
  //           (data) => {
  //             console.log(data.accessToken.toString())
  //           }
  //         )
  //       }
  //     }
  //   }
  //   onLogoutFinished={() => console.log("logout.")}/>

  // }

  // useEffect (()=>{
  //   GoogleSignin.configure()
  //   },[])
  // GoogleSignin.configure({
  //   webClientId: '162276697830-u8k2nd7c0aknpopdiv7musbb6fioq8ie.apps.googleusercontent.com', 
  //   offlineAccess: true, 
   
  // });


  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '1095918266994-5mdv511cn436lrh15qmkvm7okprje2mn.apps.googleusercontent.com',
      offlineAccess: true,
    });

    GoogleSignin.configure()
  }, []);
  
  


 



  const handleGoogleLogin = async () => {
    setgoogleloding(true)
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      console.log('Play services available');
  
      const userInfo = await GoogleSignin.signIn();
      const getToken = await GoogleSignin.getTokens()
      console.log('User info after sign in:', getToken);
      console.log('User info after sign in:', userInfo);
  
      const { accessToken } = getToken; 
  
      if (accessToken) {
     
        console.log('idToken:', accessToken);
        const { id } = userInfo.user;
        await callGoogleLoginAPI(accessToken, id); 
      } else {
       
        console.error('idToken is null or undefined');
      }
  
    } catch (error) {
      console.error('Error in Google login:', error);
   
    }
    setgoogleloding(false)
  };
  
  
  
  const callGoogleLoginAPI = async (accessToken, id) => {
    const fcmToken = await AsyncStorage.getItem('fcmToken');
    try {
      const data = {
        provider: id,
        social_provider: 'google',
        access_token: accessToken,
        fcm_token:fcmToken
      };
  
      const response = await fetch('https://cricketwicket.biz/api/v1/social-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const responseData = await response.json();
      console.log('API response:', responseData);
  
      // Check if the response contains a token and user data
      if (responseData.token && responseData.user) {
        // Save the token to AsyncStorage
        await AsyncStorage.setItem("loginToken", responseData.token);
  
        // Save user information to AsyncStorage
        const { name, email, contact } = responseData.user;
        await AsyncStorage.setItem("name", name);
        await AsyncStorage.setItem("email", email);
        await AsyncStorage.setItem("contact", contact);
  
        // Navigate to 'MyTab' screen
        navigation.navigate('MyTab');
      } else {
        console.error('Token or user data not found in API response');
      }
    } catch (error) {
      console.error('Error in social login API:', error);
    }
  };
  
  
  
  
  
  
  const handleFacebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      console.log('result>>>>>>>', result);

      if (result.isCancelled) {
        console.log('Login cancelled');
      } else {
        const data = await AccessToken.getCurrentAccessToken();
        console.log('data>>>>>>>>>', data);

        if (data) {
          setIsLoggedIn(true);
          // Call your API with access token
          callSocialLoginAPI(data.accessToken);
        } else {
          console.log('Access token not available');
        }
      }
    } catch (error) {
      console.log('Error during Facebook login:', error);
    }
  };

  const handleFacebookLogout = () => {
    LoginManager.logOut();
    setIsLoggedIn(false);
    console.log('Logged out');
  };

  const callSocialLoginAPI = async (accessToken) => {
    try {
      const data = {
        provider: accessToken,
        social_provider: 'facebook',
      };

      const response = await fetch('https://test.textcode.co.in/api/v1/social-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('API response>>>>', responseData);

    } catch (error) {
      console.error('Error in social login API:', error);
    }
  };

  useEffect(() => {
   
    AccessToken.getCurrentAccessToken().then(data => {
      if (data) {
        setIsLoggedIn(true);
      }
    });
  }, []);

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

<View>

{googleloding && 

<ActivityIndicator  style={styles.activityIndicator}  size="large" color="#0000ff" />
}
</View>


      <View style={styles.inputContainer}>
        <FloatingLabelInput
          label="Enter email"
          value={username}
          onChangeText={handleUsernameChange}
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
            borderBottomColor: username !== '' ? '#14302e' : '#808080',
          }}
        />
      </View>
      {
          usernameError ? <Text style={{color:"red" , fontSize: 16, fontWeight:"600"}}>{usernameError}</Text> : null
        }

      <View style={styles.inputContainer}>
        <FloatingLabelInput
          label="Password"
          value={password}
          onChangeText={handlePasswordChange}
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
            borderBottomColor: username !== '' ? '#14302e' : '#808080',
          }}
          // togglePassword={show}
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
      </View>
      {
          passError ? <Text style={{color:"red" , fontSize: 16, fontWeight:"600", marginBottom:10}}>{passError}</Text> : null
        }
      <View style={styles.rememberContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: colorScheme === 'light' ? '#fff' : '#fff',
              fontSize: moderateScale(14, 0.3),
            }}>
            Remember me
          </Text>
          <Pressable
            onPress={() => {
              setAccepts(!accepts);
            }}>
            <Ionicons
              size={20}
              color={colorScheme === 'light' ? '#fff' : '#fff'}
              style={{marginLeft: moderateScale(5, 0.3)}}
              name={accepts ? 'ios-checkbox' : 'ios-square-outline'}
            />
          </Pressable>
        </View>
        <View>
          <TouchableOpacity onPress={handlePassword}>
            <Text
              style={{
                color: colorScheme === 'light' ? '#fff' : '#fff',
                fontSize: moderateScale(14, 0.3),
              }}>
              Forgot my password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>

     
      {/* <View style={{marginTop:10, flexDirection:'row'}}>
        <TouchableOpacity onPress={handleNavigationSignUp} >
          <View style={{width:'10%'}}><Text>gjhg</Text></View>
        <View>
        <Text
            style={{
              color: colorScheme === 'light' ? '#fff' : '#fff',
              fontSize: moderateScale(14, 0.3),
              width:'80%'
            }}>
            Dont have an account? SignUp
          </Text>
        </View>
        </TouchableOpacity>
      </View> */}

      <TouchableOpacity
        onPress={handleNavigationSignUp}
        style={{alignSelf: 'flex-end', marginRight: 15}}>
        <Text
          style={{
            color: colorScheme === 'light' ? '#fff' : '#fff',
            fontSize: moderateScale(14, 0.3),
            alignSelf: 'flex-end',
          }}>
          Dont have an account? SignUp
        </Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnTxt}>Login</Text>
      </TouchableOpacity> */}

      <Pressable onPress={handleLogin} style={styles.btn}>
        <Text style={styles.btnTxt}>
          {submitLoading ? (
            <ActivityIndicator size="small" color="#0000ff" />
          ) : (
            'Login'
          )}
        </Text>
      </Pressable>







      {/* <TouchableOpacity style={styles.btn} onPress={()=>{
        navigation.navigate("OTP")
      }}>
        <Text style={styles.btnTxt}>Login 2</Text>
      </TouchableOpacity> */}
      <View style={styles.imgView}>
        <Pressable onPress={handleGoogleLogin}>


          <Image
            source={require('../../assets/google-icon.png')}
            style={styles.imgStyles}
          />




        </Pressable>


       

        {/* <View>
      {isLoggedIn ? (
        <TouchableOpacity onPress={handleFacebookLogout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleFacebookLogin}>
          <Image
            source={require('../../assets/icons8-facebook-50.png')}
            style={styles.imgStyles}
          />
        </TouchableOpacity>
      )}
    </View> */}

      
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
    marginBottom: moderateScale(15, 0.3),
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
    marginVertical: 20,
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
  },
  text: {
    fontSize: moderateScale(16, 0.1),
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
  },

  activityIndicator: {
    position: 'absolute',
    top: 20, 
    alignSelf:'center'
  },
});

export default Login;
