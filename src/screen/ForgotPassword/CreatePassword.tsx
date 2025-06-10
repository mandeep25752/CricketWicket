/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface SignUpProps {
  navigation: any;
}

const CreatePassword = (props: SignUpProps) => {
  const {navigation} = props;
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [show] = useState(false);
  const colorScheme = useColorScheme();

  const handlePassword = (text: string) => {
    setPassword(text);
  };

  const handleConfirmPass = (text: string) => {
    setConfirmPass(text);
  };
  const handleNavigation = () => {
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView
      style={[
        styles.MainContainer,
        {backgroundColor: colorScheme === 'light' ? '#4fa8b9' : '#000'},
      ]}>
      <Text style={styles.headerText}>Change Your Password</Text>
      <View style={styles.inputContainer}>
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
        {/* </View> */}
      </View>

      <TouchableOpacity style={styles.btn} onPress={handleNavigation}>
        <Text style={styles.btnTxt}>Change Password</Text>
      </TouchableOpacity>
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
  labelStyle: {paddingVertical: moderateScale(5, 0.3), color: '#000'},
  floatingInputStyle: {
    // color: '#000',
    fontSize: moderateScale(14, 0.3),
    marginTop: 5,
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
  headerText: {
    fontSize: moderateScale(24, 0.1),
    color: '#fff',
    fontWeight: 'bold',
    padding: 10,
  },
});

export default CreatePassword;
