/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface optionProps {
  navigation: any;
}
const StadiumOptions = (props: optionProps) => {
  const {navigation} = props;
  const handlerAboutVenue = () => {
    navigation.navigate('AboutVenue');
  };
  const handleT20 = () => {
    navigation.navigate('T20');
  };
  const handleODI = () => {
    navigation.navigate('ODI');
  };
  const handlerTEST = () => {
    navigation.navigate('TEST');
  };
  return (
    <View
      style={{
        backgroundColor: '#4fa8b9',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity style={styles.btns} onPress={handlerAboutVenue}>
        <Text style={styles.texts}>About Venue</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btns} onPress={handleT20}>
        <Text style={styles.texts}>T20</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btns} onPress={handleODI}>
        <Text style={styles.texts}>ODI</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btns} onPress={handlerTEST}>
        <Text style={styles.texts}>TEST</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  btns: {
    marginVertical: 10,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    elevation: 10,
    borderRadius: 12,
    width: '75%',
  },
  texts: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    marginVertical: 5,
  },
});
export default StadiumOptions;
