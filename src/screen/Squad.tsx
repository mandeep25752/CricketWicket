/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  FlatList,
  ScrollView,
  SafeAreaView
} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import PlayerRecentMatches from './PlayerRecentMatches';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

interface BANvsAFGProps {
  navigation: any;
}

interface TextItemAfg {
  id: string;
  playername: string;
  playerType: string;
  playerArm: string;
}
interface TextItemBan {
  id: string;
  playername: string;
  playerType: string;
  playerArm: string;
}
const Afg = (props: BANvsAFGProps) => {
  const Afgdata: TextItemAfg[] = [
    {
      id: '1',
      playername: 'AFG Mohammand Naim lll',
      playerType: 'Batsman 11',
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

  const AfgrenderItem = ({item}: {item: TextItemAfg}) => {
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
            </>
          )}
        </Pressable>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={{backgroundColor: '#4fa8b9'}}>
        <FlatList
          data={Afgdata}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          renderItem={AfgrenderItem}
        />
      </View>
    </ScrollView>
  );
};


//----------------------------------------------------
const Ban = (props: BANvsAFGProps) => {
  const Bandata: TextItemBan[] = [
    {
      id: '1',
      playername: 'BAN Mohammand Naim lll',
      playerType: 'Batsman 11',
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

  const BanrenderItem = ({item}: {item: TextItemAfg}) => {
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
            </>
          )}
        </Pressable>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={{backgroundColor: '#4fa8b9'}}>
        <FlatList
          data={Bandata}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          renderItem={BanrenderItem}
        />
      </View>
    </ScrollView>
  );
}; 
// ---------------------------------------------------

// ------------TOP TAP------------
const Squad = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 14, fontWeight: '600', color: '#fff' },
          tabBarStyle: { backgroundColor: '#4fa8b9', elevation: 5 },
        }}>
        <Tab.Screen
          name="TeamOne"
          component={Afg}
          options={{ tabBarLabel: 'AFG' }}
        />
        <Tab.Screen
          name="TeamTwo"
          component={Ban}
          options={{
            tabBarLabel: 'BAN',
            tabBarStyle: { backgroundColor: '#4fa8b9' },
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
// ----------------------




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
export default Squad;
