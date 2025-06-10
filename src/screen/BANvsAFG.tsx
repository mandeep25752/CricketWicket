/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface BANvsAFGProps {
  navigation: any;
}

interface TextItem {
  id: string;
  playername: string;
  playerType: string;
  playerArm: string;
}
const BANvsAFG = (props: BANvsAFGProps) => {
  const data: TextItem[] = [
    {
      id: '1',
      playername: 'Mohammand Naim ghg',
      playerType: 'Batsman',
      playerArm: 'Left Handed',
    },
    {
      id: '2',
      playername: 'Afil Hossain',
      playerType: 'Batting',
      playerArm: 'Left Handed',
    },
    {
      id: '3',
      playername: 'Mitchel Marsh',
      playerType: 'BatsMan',
      playerArm: 'Left Handed',
    },
    {
      id: '4',
      playername: 'Mitchel Marsh',
      playerType: 'BatsMan',
      playerArm: 'Left Handed',
    },
    {
      id: '5',
      playername: 'Mitchel Marsh',
      playerType: 'BatsMan',
      playerArm: 'Left Handed',
    },
    {
      id: '6',
      playername: 'Mitchel Marsh',
      playerType: 'BatsMan',
      playerArm: 'Left Handed',
    },
    {
      id: '7',
      playername: 'Mitchel Marsh',
      playerType: 'BatsMan',
      playerArm: 'Left Handed',
    },
    {
      id: '8',
      playername: 'Mitchel Marsh',
      playerType: 'BatsMan',
      playerArm: 'Left Handed',
    },
    {
      id: '9',
      playername: 'Mitchel Marsh',
      playerType: 'BatsMan',
      playerArm: 'Left Handed',
    },
    {
      id: '10',
      playername: 'Mitchel Marsh',
      playerType: 'BatsMan',
      playerArm: 'Left Handed',
    },
  ];

  const MushtafijurHandler = () => {
    const {navigation} = props;
    navigation.navigate('MushFiqurRahim');
  };

  const renderItem = ({item}: {item: TextItem}) => {
    return (
      <View>
        <Pressable style={styles.btn} onPress={MushtafijurHandler}>
          {({pressed}) => (
            <>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderColor: '#ffb3b3',
                  borderWidth: 2,
                  padding: 10,
                  elevation: 2,
                  backgroundColor: '#fff',
                }}>
                <View>
                  <Text
                    style={[
                      styles.btnTxt,
                      {color: pressed ? '#e76f51' : '#FFBBB6'},
                    ]}>
                    {item.playername}
                  </Text>
                  <Text style={[styles.btnTxt, {marginLeft: 30}]}>
                    {item.playerType}
                  </Text>
                  <Text style={[styles.btnTxt, {marginLeft: 30}]}>
                    {item.playerArm}
                  </Text>
                  <Text style={[styles.btnTxt, {marginLeft: 30}]}>
                    {item.playerArm}
                  </Text>
                </View>
                <View style={{marginTop: 40}}>
                  <Image
                    source={require('../../assets/icons8-play-50.png')}
                    style={{
                      width: moderateScale(20, 0.3),
                      height: moderateScale(20, 0.3),
                      tintColor: pressed ? '#e76f51' : '#000',
                    }}
                  />
                </View>
              </View>
              {/* <Image
                                source={require('../../assets/icons8-play-50.png')}
                                style={{
                                    width: moderateScale(20, 0.3),
                                    height: moderateScale(20, 0.3),
                                    tintColor: pressed ? '#e76f51' : '#000',
                                }}
                            /> */}
            </>
          )}
        </Pressable>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={{backgroundColor: '#4fa8b9'}}>
        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Image
                        source={require('../../assets/icons8-play-50.png')}
                        style={{
                            width: moderateScale(20, 0.3),
                            height: moderateScale(20, 0.3),
                            marginTop: 10,
                            margin: 5
                        }}
                        />
                    <Text style={styles.headerText}>BAN vs AFG</Text>
                    <Image source={require("../../assets/icons8-play-50.png")} style={{
                        width: moderateScale(20, 0.3),
                        height: moderateScale(20, 0.3),
                        marginTop: 10,
                        margin: 5
                    }}></Image>
                </View> */}

        <FlatList
          data={data}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          renderItem={renderItem}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: '#4fa8b9',
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: '100%',
    elevation: 15,
  },
  btnTxt: {
    color: '#000',
    fontSize: moderateScale(16, 0.3),
    width: '100%',
    fontWeight: 'bold',
    textAlign: 'left',
  },
});
export default BANvsAFG;
