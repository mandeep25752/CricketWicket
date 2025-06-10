/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Alert,
  ToastAndroid,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {launchImageLibrary} from 'react-native-image-picker';
import PhoneInput from 'react-native-phone-number-input';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function EditProfile2() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const phoneInput = useRef<PhoneInput>(null);
  const [submitLoading, setSubmitLoading] = useState(false);


  
  



const navigation = useNavigation()
  

  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    if (result.assets && result.assets.length > 0) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const [emailError , setEmailError] = useState("")
  const [phoneError , setPhoneError] = useState("")
  const [nameError , setNameError] = useState("")


  useEffect(() => {
    const getUserData = async () => {
      try {
        // const storedUserID = await AsyncStorage.getItem("userID");
        const storedName = await AsyncStorage.getItem("name");
        const storedEmail = await AsyncStorage.getItem("email");
        const storedContact = await AsyncStorage.getItem("contact");
  
        if (storedName) setName(storedName);
        if (storedEmail) setEmail(storedEmail);
        if (storedContact) setPhoneNumber(storedContact);
  
        console.log("Retrieved user data:", { storedName, storedEmail, storedContact });
      } catch (error) {
        console.error("Error retrieving user data from AsyncStorage:", error);
      }
    };
  
    getUserData();
  }, []);
 
  const handleSignUp = async () => {
    // Validate inputs
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
  
    // Retrieve the login token
    const loginToken = await AsyncStorage.getItem('loginToken');
  
    // Create FormData object
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("contact", phoneNumber.substring(3)); // Adjust as needed
  
    // Set up request options
    const requestOptions = {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${loginToken}`,  // Include the token in the headers
        'Content-Type': 'multipart/form-data',    // Ensure correct content type
      },
      body: formdata,
      redirect: "follow",
    };
  
    // Start loading state
    setSubmitLoading(true);
  
    try {
     
      const response = await fetch("https://cricketwicket.biz/api/v1/user/update/profile", requestOptions);
  
     
      const result = await response.json();
  
      console.log('result>>>>>>>>', result);
  
      if (result.message === "Profile Updated Successfully") {
        // Handle successful OTP message
        ToastAndroid.showWithGravityAndOffset(
          `${result.message}`,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );
       
        navigation.navigate("MyTab");
      } else {
        // Handle other messages
        ToastAndroid.showWithGravityAndOffset(
          `${result.message}`,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      }
  
      // Clear form fields
      setEmail("");
      setPhoneNumber("");
      setName("");
  
    } catch (error) {
      console.error(error);
      ToastAndroid.showWithGravityAndOffset(
        'Registration Failed, Try Again.',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    } finally {
      // Stop loading state
      setSubmitLoading(false);
    }
  };




 
  

  return (
    <ScrollView style={styles.mainView}>
      <View style={styles.pencilStyle}>
        <MaterialCommunityIcons
          name="pencil"
          size={moderateScale(24, 0.3)}
          color={'#000'}
        />
      </View>
      <View>
        <TouchableOpacity onPress={openGallery}>
          <View style={{ alignItems: 'center', marginVertical: 20 }}>
            {selectedImage ? (
              <Image
                resizeMode="contain"
                source={{ uri: selectedImage }}
                style={styles.imgSTyle}
              />
            ) : (
              <Image
                source={require('../../assets/UpdatedProifleImage.png')}
                style={styles.imgSTyle}
              />
            )}
          </View>
        </TouchableOpacity>

        <Text style={styles.textStyle}>Name</Text>
        <TextInput
          placeholder="Enter Name"
          style={styles.textInputStyle}
          placeholderTextColor={'#fff'}
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.textStyle}>Email</Text>
        <TextInput
          placeholder="Enter Email"
          style={styles.textInputStyle}
          placeholderTextColor={'#fff'}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.textStyle}>Phone number</Text>
        <TextInput
          placeholder="Phone number"
          style={styles.textInputStyle}
          placeholderTextColor={'#fff'}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      


      <TouchableOpacity onPress={handleSignUp} style={styles.btn}>
        <Text style={styles.btnTxt}>
          {submitLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            'Save'
          )}
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgSTyle: {
    height: moderateScale(100, 0.2),
    width: moderateScale(100, 0.2),
    borderRadius: 100,
    marginVertical: moderateScale(20, 0.1),
    // alignItems:'center'
  },
  mainView: {
    flex: 1,
    // marginVertical: 50,
    backgroundColor: '#4FA8B9',
    height: '100%',
  },
  textInputStyle: {
    borderColor: 'grey',
    borderWidth: 1,
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 8,
    fontSize: moderateScale(16, 0.1),
    paddingHorizontal: 20,
    color: '#fff',
  },
  textStyle: {
    color: '#fff',
    marginHorizontal: 10,
    fontSize: moderateScale(16, 0.1),
    marginVertical: 5,
  },
  btn: {
    backgroundColor: 'grey',
    alignItems: 'center',
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 8,
    marginVertical: 50,
  },
  inputPhoneStyle: {
    // height:moderateScale(20,0.1),
    marginHorizontal: 25,
    borderRadius: 8,
  },
  textStyle1: {
    backgroundColor: 'red',
  },
  imgSTyle1: {
    height: '5%',
    width: '5%',
  },
  pencilStyle: {
    marginLeft: 220,
    marginTop: 40,
    position: 'absolute',
    zIndex: 1,
  },

 
  btnTxt: {
    color: '#fff',
    fontSize: moderateScale(16, 0.3),
    fontWeight: 'bold',
  },
});

export default EditProfile2;
