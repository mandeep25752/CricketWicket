/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './src/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import { Alert, PermissionsAndroid, Platform, Text, View } from 'react-native';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';


const App = () => {
 
  const [isLoggedIn, setIsLoggedIn] = useState(null); 

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const loginToken = await AsyncStorage.getItem('loginToken');
        console.log('Retrieved token from storage:', loginToken);
        
        if (loginToken) {
          setIsLoggedIn(true);
          await getToken(); // Get FCM token if user is logged in
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Failed to fetch the token from storage', error);
        setIsLoggedIn(false); // Ensure login is prompted if there's an error
      } finally {
        SplashScreen.hide(); // Hide the splash screen after token check
      }
    };
  
    initializeApp();
  }, []);



  //  class NotificationsPermissions {
  //   static async requestPermissionsNotifications() {
  //     if (Platform.OS === 'android') {
  //       console.log('Platform version:', Platform.Version);
  
  //       try {
  //         // For Android 13 and above, explicitly request permission
  //         if (Platform.Version >= 33) {
  //           console.log('Requesting notification permissions for Android version 33+');
  //           const result = await request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
  //           console.log('Permission result:', result);
  
  //           if (result === RESULTS.GRANTED) {
  //             console.log('Permissions granted');
  //           } else if (result === RESULTS.DENIED) {
  //             console.log('Permissions denied by the user');
  //             Alert.alert(
  //               'Permission Denied',
  //               'Notifications permission was denied. Please enable it from settings.'
  //             );
  //           } else if (result === RESULTS.BLOCKED) {
  //             console.log('Permissions permanently blocked by the user');
  //             Alert.alert(
  //               'Permission Blocked',
  //               'Notifications permission has been blocked. Go to your app settings to enable it.'
  //             );
  //           } else {
  //             console.log('Permission request result:', result);
  //           }
  //         } else {
  //           // For Android versions below 33 (Android 12 and lower), permission is granted by default
  //           console.log('Checking notification permissions for Android version < 33');
            
  //           // Check current permission status
  //           const status = await check(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
  //           console.log('Permission status for Android version < 33:', status);
            
  //           if (status === RESULTS.GRANTED) {
  //             console.log('Permissions already granted');
  //           } else if (status === RESULTS.DENIED) {
  //             console.log('Permissions denied, prompting user');
  //             Alert.alert(
  //               'Permission Denied',
  //               'Notifications permission was denied. Please enable it from settings.'
  //             );
  //           } else if (status === RESULTS.BLOCKED) {
  //             console.log('Permissions blocked, informing user');
  //             Alert.alert(
  //               'Permission Blocked',
  //               'Notifications permission has been blocked. Go to your app settings to enable it.'
  //             );
  //           } else if (status === RESULTS.UNAVAILABLE) {
  //             // Handle "unavailable" status for versions below Android 13
  //             console.log('Permission unavailable, assuming granted by default');
  //             console.log('Permissions granted by default for this version');
  //           } else {
  //             console.log('Unexpected permission status:', status);
  //           }
  //         }
  //       } catch (error) {
  //         console.error('Permission request error:', error);
  //       }
  //     }
  //   }
  // }
  

  const requestNotificationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const permissionGranted = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
        );
  
        if (permissionGranted) {
          console.log('Notification permission already granted.');
          await getToken();
        } else {
          const result = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
            {
              title: 'Allow Notifications',
              message: 'This app requires notification permissions to stay updated.',
              buttonPositive: 'Allow',
              buttonNegative: 'Deny',
            }
          );
  
          if (result === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Notification permission granted.');
            await getToken();
          } else {
            console.log('Notification permission denied.');
          }
        }
      }
    } catch (error) {
      console.error('Failed to request notification permission:', error);
    }
  };


  
  
  // Example usage
  useEffect(() => {
    requestNotificationPermission();
    getToken()
  }, []);
  
  const getToken = async () => {
    try {
      const token = await messaging().getToken();
      console.log('FCM Token:', token);
      if (token) {
        await AsyncStorage.setItem('fcmToken', token);
      }
    } catch (error) {
      console.error('Error fetching FCM token:', error);
    }
  };

  if (isLoggedIn === null) {
   
    return <View><Text>Loading...</Text></View>;
  }

  return (
    <NavigationContainer>
      <Navigation isLoggedIn={isLoggedIn} />
    </NavigationContainer>
  );
};

export default App;

