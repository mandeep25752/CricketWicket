/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface optionProps {
  navigation: any;
}
const FourOptionsInSeries = (props: optionProps) => {
  const {navigation} = props;
  const handleUpcomingMatches = () => {
    navigation.navigate('UpcomingMatches');
  };
  const handlePointsTable = () => {
    navigation.navigate('PointsTable');
  };
  const handleTeams = () => {
    navigation.navigate('Teams');
  };
  const handlerRecentMatches = () => {
    navigation.navigate('RecentMatchess');
  };
  return (
    <View style={{backgroundColor: '#4fa8b9', height: '100%'}}>
      <TouchableOpacity style={styles.btns} onPress={handleUpcomingMatches}>
        <Text style={styles.texts}>Upcoming Matches</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btns} onPress={handlePointsTable}>
        <Text style={styles.texts}>Points Table</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btns} onPress={handleTeams}>
        <Text style={styles.texts}>Teams</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btns} onPress={handlerRecentMatches}>
        <Text style={styles.texts}>Recent matches</Text>
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
export default FourOptionsInSeries;
