/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface optionProps {
  navigation: any;
}
const PlayerOptions = (props: optionProps) => {
  const {navigation} = props;
  const handlerAboutVenue = () => {
    navigation.navigate('AboutPlayer');
  };
  const handleT20 = () => {
    navigation.navigate('PlayerStats');
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
        <Text style={styles.texts}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btns} onPress={handleT20}>
        <Text style={styles.texts}>Player Stats</Text>
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
export default PlayerOptions;
