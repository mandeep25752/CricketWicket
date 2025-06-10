/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

interface BanVsAfgStatProps {
  navigation: any;
}

const BanVsAfgStat = (props: BanVsAfgStatProps) => {
  const {navigation} = props;
  const handlerRecentMatches = () => {
    navigation.navigate('PlayerRecentMatches');
  };
  const handlerSquad = () => {
    navigation.navigate('Squad');
  };
  return (
    <View style={{backgroundColor: '#4fa8b9', height: '100%'}}>
      <Text style={styles.texts}>
        2nd ODI , ODI Match of AFG To BAN 2023 on Zahur Ahmed Chowdhary Stadium
        Click On Below Links To Open Each Details
      </Text>

      <Pressable onPress={handlerRecentMatches}>
        {({pressed}) => (
          <Text style={[styles.btns, {color: pressed ? '#e76f51' : '#000'}]}>
            Player Recent Matches
          </Text>
        )}
      </Pressable>

      <Pressable onPress={handlerSquad}>
        {({pressed}) => (
          <Text style={[styles.btns, {color: pressed ? '#e76f51' : '#000'}]}>
            Squad
          </Text>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btns: {
    color: '#000',
    borderColor: 'red',
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
    marginVertical: 10,
    borderRadius: 12,
    margin: 5,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  texts: {
    color: '#fff',
    textAlign: 'justify',
    marginVertical: 40,
    margin: 10,
    fontSize: 16,
  },
});

export default BanVsAfgStat;
