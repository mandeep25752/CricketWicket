import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions, useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, Pressable, Alert, ToastAndroid } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface navProps {
  navigation: any;
}

const EditProfile = (props: navProps) => {
  
  const navigation= useNavigation()
  const [loginToken, setLoginToken] = useState<string | null>(null);
  const [userInfoState, setUserInfoState] = useState<any>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null); 
  
  console.log("token in state home screen", loginToken);
  
  const getToken = async () => {
    const token = await AsyncStorage.getItem("loginToken");
    setLoginToken(token);
    console.log("token in Edit Profile screen", token);
    if (token) {
      getUserInfo(token);
    }
  };
  
  useFocusEffect(
    React.useCallback(() => {
        getToken();
    }, [])
  );
  
  const getUserInfo = async (token: string) => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);
    
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow" 
    };
    
    try {
      const response = await fetch("https://cricketwicket.biz/api/v1/user/info", requestOptions);
      const result = await response.json();
      console.log("user info in Account", result);
      setUserInfoState(result);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handlerEditProfile2 = () => {
    navigation.navigate('EditProfile2');
  };

  

  const handleLogout = async () => {
    try {
      // Show confirmation dialog
      confirmLogout();
    } catch (error) {
      ToastAndroid.showWithGravityAndOffset(
        'Please Try Again.',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    }
  };

  
  const confirmLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Yes', onPress: () => performLogout() },
      ],
      { cancelable: false }
    );
  };
  
  const performLogout = async () => {
    try {
      // Clear the session data from AsyncStorage
      await AsyncStorage.removeItem("loginToken");
      await AsyncStorage.removeItem("userID");
      await AsyncStorage.removeItem("name");
      await AsyncStorage.removeItem("email");
      await AsyncStorage.removeItem("contact");
  
      // Navigate to the Login screen
      navigation.navigate("Login");
  
      // Show success toast
      ToastAndroid.showWithGravityAndOffset(
        'Successfully logged out.',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    } catch (error) {
      console.error("Error logging out:", error);
  
      // Show failure toast
      ToastAndroid.showWithGravityAndOffset(
        'Failed to log out. Please try again.',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    }
  };
  



  const confirmDelete = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => performDelete(),
        },
      ],
      { cancelable: false }
    );
  };
  


  const performDelete = async () => {
    try {
      const token = await AsyncStorage.getItem("loginToken");
  
      if (!token) {
        throw new Error('Token not found');
      }
  
      const myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);
  
      const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow"
      };
  
      // Make the DELETE API call
      const response = await fetch("https://cricketwicket.biz/api/v1/user/delete", requestOptions);
      const responseData = await response.json();
  
      console.log("delete response", responseData);
  
      if (responseData.message === "Your account has been successfully deleted.") {
       
        await AsyncStorage.removeItem("loginToken");
        
      
        const checkToken = await AsyncStorage.getItem("loginToken");
        console.log('Token after removal:', checkToken); 
  
        if (!checkToken) {
          setIsLoggedIn(false);
  
          ToastAndroid.showWithGravityAndOffset(
            'Account successfully deleted.',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50,
          );
  
          navigation.navigate('AuthStack', { screen: 'Login' })
        } else {
          console.error('Token removal failed');
        }
      } else {
        ToastAndroid.showWithGravityAndOffset(
          'Delete failed. Please try again.',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
      }
    } catch (error) {
      ToastAndroid.showWithGravityAndOffset(
        'Please Try Again.',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    }
  };
  
  
  
  
  
  
  

  

  return (
    <View style={styles.Container}>

      <View style={styles.pencilStyle}>
        <MaterialCommunityIcons
          name="pencil"
          size={moderateScale(24, 0.3)}
          color={'#000'}
        />
      </View>

      <Pressable onPress={handlerEditProfile2} style={styles.btnStyle}>
        <Text style={styles.btnText}>Edit Profile</Text>
      </Pressable>
     
      <Pressable onPress={handleLogout} style={styles.btnStyle}>
        <Text style={styles.btnText}>Logout</Text>
      </Pressable>

      <Pressable onPress={confirmDelete} style={styles.btnStyle}>
        <Text style={styles.btnText}>Delete Account</Text>
      </Pressable>


      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 70 }}>
        <Image
          source={require('../../assets/UpdatedProifleImage.png')}
          style={styles.ProfileImage}
        />
      </View>

      {userInfoState && (
        <View>
          <Text style={styles.textStyle}>Name: {userInfoState?.data?.name}</Text>
          <Text style={styles.textStyle}>Contact: {userInfoState?.data?.contact}</Text>
          <Text style={styles.textStyle}>Email: {userInfoState?.data?.email}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#4FA8B9',
    height: '100%',
    width: '100%',
  },

  ProfileImage: {
    height: 150,
    width: 150,
    borderRadius: 80,
    marginBottom: 40,
  },

  textStyle: {
    color: '#fff',
    fontSize: 18,
    margin: 5,
    fontWeight: '800',
    borderBottomColor: '#fff',
    borderBottomWidth: 1.5,
    padding: 4,
    width: 300,
    marginLeft: 10,
  },

  btnStyle: {
    marginTop: 10,
    marginHorizontal: 10,
    alignItems: 'flex-end',
  },

  btnText: {
    color: '#4FA8B9',
    backgroundColor: '#fff',
    padding: 8,
    textAlign: 'right',
    borderRadius: 8,
    fontSize: moderateScale(16, 0.1),
    elevation: 20,
    marginTop: 10,
  },

  pencilStyle: {
    marginLeft: 360,
    marginTop: 10,
    position: 'absolute',
    zIndex: 1,
  },
});

export default EditProfile;
