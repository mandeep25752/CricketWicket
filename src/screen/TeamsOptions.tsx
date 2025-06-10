/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface optionProps {
  navigation: any;
}
const TeamsOptions = (props: optionProps) => {
  const {navigation} = props;
  const handleUpcomingMatches = () => {
    navigation.navigate('TeamSquad');
  };
  const handlePointsTable = () => {
    navigation.navigate('TeamBattle');
  };
  const handleTeams = () => {
    navigation.navigate('TeamStatStadium');
  };

  return (
    <View style={{backgroundColor: '#4fa8b9', height: '100%'}}>
      <TouchableOpacity style={styles.btns} onPress={handleUpcomingMatches}>
        <Text style={styles.texts}>Squad</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btns} onPress={handlePointsTable}>
        <Text style={styles.texts}>Team Battle</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btns} onPress={handleTeams}>
        <Text style={styles.texts}>Teams Stats On Stadium</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  btns: {
    marginVertical: 5,
  },
  texts: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    marginVertical: 5,
  },
});
export default TeamsOptions;
