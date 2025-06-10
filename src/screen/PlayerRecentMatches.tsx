/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Pressable,
  FlatList,
} from 'react-native';
import React from 'react';
import { moderateScale } from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

interface RecentMatchesProps {
  id: string;
  playerName: string;
  match: string;
  date: string;
  ball: string;
  run: string;
  Fours: string;
  Sixs: string;
  StrikeRate: string;
  Out: string;
  matchs: string;
  dates: string;
  over: string;
  madden: string;
  runs: string;
  wicket: string;
  Eco: string;
}

const dataItem: RecentMatchesProps[] = [
  {
    id: '1',
    playerName: 'Players Name 1',
    date: '05 jul 23',
    match: 'BAN vs AFG',
    ball: '10',
    run: '8',
    Fours: '1',
    Sixs: '0',
    StrikeRate: '50',
    Out: 'catch',
    dates: '05 jul 23',
    matchs: 'BAN vs AFG',
    over: '5.0',
    madden: '0',
    runs: '20',
    wicket: '2',
    Eco: '1.66',
  },

  {
    id: '2',
    playerName: 'Players Name 2 ',
    date: '05 jul 23',
    match: 'BAN vs AFG',
    ball: '10',
    run: '8',
    Fours: '1',
    Sixs: '0',
    StrikeRate: '50',
    Out: 'catch',
    dates: '05 jul 23',
    matchs: 'BAN vs AFG',
    over: '5.0',
    madden: '0',
    runs: '20',
    wicket: '2',
    Eco: '1.66',
  },
  {
    id: '3',
    playerName: 'Players Name 3',
    date: '05 jul 23',
    match: 'BAN vs AFG',
    ball: '10',
    run: '8',
    Fours: '1',
    Sixs: '0',
    StrikeRate: '50',
    Out: 'catch',
    dates: '05 jul 23',
    matchs: 'BAN vs AFG',
    over: '5.0',
    madden: '0',
    runs: '20',
    wicket: '2',
    Eco: '1.66',
  },
  {
    id: '4',
    playerName: 'Players Name 4',
    date: '05 jul 23',
    match: 'BAN vs AFG',
    ball: '10',
    run: '8',
    Fours: '1',
    Sixs: '0',
    StrikeRate: '50',
    Out: 'catch',
    dates: '05 jul 23',
    matchs: 'BAN vs AFG',
    over: '5.0',
    madden: '0',
    runs: '20',
    wicket: '2',
    Eco: '1.66',
  },
  {
    id: '5',
    playerName: 'Players Name 5',
    date: '05 jul 23',
    match: 'BAN vs AFG',
    ball: '10',
    run: '8',
    Fours: '1',
    Sixs: '0',
    StrikeRate: '50',
    Out: 'catch',
    dates: '05 jul 23',
    matchs: 'BAN vs AFG',
    over: '5.0',
    madden: '0',
    runs: '20',
    wicket: '2',
    Eco: '1.66',
  },
  {
    id: '6',
    playerName: 'Players Name 6',
    date: '05 jul 23',
    match: 'BAN vs AFG',
    ball: '10',
    run: '8',
    Fours: '1',
    Sixs: '0',
    StrikeRate: '50',
    Out: 'catch',
    dates: '05 jul 23',
    matchs: 'BAN vs AFG',
    over: '5.0',
    madden: '0',
    runs: '20',
    wicket: '2',
    Eco: '1.66',
  },
];

function BAN() {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>(
    {},
  );

  const toggleItem = (itemId: string) => {
    setExpandedItems(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  const renderItem = ({ item }: { item: RecentMatchesProps }) => {
    const isExpanded = expandedItems[item.id] || false;
    return (
      <ScrollView style={{ backgroundColor: '#4fa8b9' }}>
        <TouchableOpacity onPress={() => toggleItem(item.id)}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              // elevation: 100,
              maxWidth: 'auto',
              marginVertical: 7,
              padding: 5,
              borderColor: 'red',
              borderWidth: 2,
              borderRadius: 14,
            }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Pressable>
                {({ pressed }) => (
                  <Text
                    style={[
                      { color: pressed ? '#e76f51' : '#000' },
                      { marginTop: 4, fontSize: 16, marginLeft: 20 },
                    ]}>
                    {item.playerName}
                  </Text>
                )}
              </Pressable>
              {isExpanded ? (
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={moderateScale(28, 0.3)}
                  color={'#000'}
                />
              ) : (
                <MaterialCommunityIcons
                  name="chevron-up"
                  size={moderateScale(28, 0.3)}
                  color={'#000'}
                />
              )}
            </View>
            {isExpanded && (
              <View>
                <Text
                  style={{
                    marginBottom: 5,
                    marginTop: 5,
                    color: '#000',
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    backgroundColor: '#fff',
                    padding: 6,
                    borderColor: 'orange',
                    borderWidth: 2,
                    borderRadius: 12,
                    marginHorizontal: 10,
                  }}>
                  Batting
                </Text>

                <View style={[styles.battingViewHeader, { display: 'flex', justifyContent: 'space-around' }]}>
                  <Text style={[styles.bowlingText1, { width: '19%', textAlign: 'center' }]}>Date</Text>
                  <Text style={[styles.bowlingText1, { width: '28%', textAlign: 'center' }]}>Matches</Text>
                  <Text style={[styles.bowlingText1, { width: '7%', textAlign: 'center' }]}>Bo</Text>
                  <Text style={[styles.bowlingText1, { width: '7%', textAlign: 'center' }]}>R</Text>
                  <Text style={[styles.bowlingText1, { width: "7%", textAlign: 'center' }]}>4s</Text>
                  <Text style={[styles.bowlingText1, { width: '7%', textAlign: 'center' }]}>6s</Text>
                  <Text style={[styles.bowlingText1, { width: '8%', textAlign: 'center' }]}>SR</Text>
                  <Text style={[styles.bowlingText1, { width: '17%', textAlign: 'center' }]}>Out</Text>
                </View>


                <View
                  style={{
                    flex: 1,
                    backgroundColor: '#fff',
                    // elevation: 100,
                    maxWidth: 'auto',
                    // marginVertical: 7,
                    padding: 5,
                    // borderColor: 'red',
                    // borderWidth: 2,
                    // borderRadius: 14,
                  }}>

                  <View style={[styles.bowlingView, { display: 'flex', flexDirection: "row", justifyContent: 'space-evenly' }]}>
                    <Text style={[styles.bowlingText1, { width: '19%', textAlign: 'center', color: 'red' }]}>{item.date}</Text>
                    <Text style={[styles.bowlingText1, { width: '28%', textAlign: 'center', color: 'blue', fontWeight: 'bold' }]}>{item.match}</Text>
                    <Text style={[styles.bowlingText1, { width: '7%', textAlign: 'center' }]}>{item.ball}</Text>
                    <Text style={[styles.bowlingText1, { width: "7%", textAlign: 'center' }]}>{item.run}</Text>
                    <Text style={[styles.bowlingText1, { width: "7%", textAlign: 'center' }]}>{item.Fours}</Text>
                    <Text style={[styles.bowlingText1, { width: '7%', textAlign: 'center' }]}>{item.Sixs}</Text>
                    <Text style={[styles.bowlingText1, { width: "8%", textAlign: 'center' }]}>{item.StrikeRate}</Text>
                    <Text style={[styles.bowlingText1, { width: '17%', textAlign: 'center' }]}>{item.Out}</Text>
                  </View>


                </View>

                <Text
                  style={{
                    marginBottom: 5,
                    marginTop: 5,
                    color: '#000',
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    backgroundColor: '#fff',
                    padding: 6,
                    borderColor: 'orange',
                    borderWidth: 2,
                    borderRadius: 12,
                    marginHorizontal: 10,
                  }}>
                  Bowling
                </Text>

                <View style={[styles.bowlingViewHeader, { display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }]}>
                  <Text style={[styles.bowlingText1, { width: '20%', textAlign: 'center', }]}>Date</Text>
                  <Text style={[styles.bowlingText1, { width: '30%', textAlign: 'center' }]}>Matches</Text>
                  <Text style={[styles.bowlingText1, { width: '10%', textAlign: 'center' }]}>Over</Text>
                  <Text style={[styles.bowlingText1, { width: "5%", textAlign: 'center' }]}>M</Text>
                  <Text style={[styles.bowlingText1, { width: "10%", textAlign: 'center' }]}>R</Text>
                  <Text style={[styles.bowlingText1, { width: '10%', textAlign: 'center' }]}>W</Text>
                  <Text style={[styles.bowlingText1, { width: "15%", textAlign: 'center' }]}>Eco</Text>
                  {/* <Text style={[styles.bowlingText1, {width:'20%',textAlign:'center'}]}>{item.Out}</Text> */}
                </View>

                <View
                  style={{
                    flex: 1,

                    backgroundColor: '#fff',
                    // elevation: 100,
                    maxWidth: 'auto',
                    // marginVertical: 3,
                    padding: 5,
                    // borderColor: 'red',
                    // borderWidth: 2,
                    // borderRadius: 10,
                  }}>
                  <View style={[styles.bowlingView, { display: 'flex', flexDirection: "row", justifyContent: 'space-evenly' }]}>
                    <Text style={[styles.bowlingText1, { width: '20%', textAlign: 'center', color: 'red', }]}>{item.dates}</Text>
                    <Text style={[styles.bowlingText1, { width: '30%', textAlign: 'center', color: 'blue', fontWeight: 'bold' }]}>{item.matchs}</Text>
                    <Text style={[styles.bowlingText1, { width: '10%', textAlign: 'center' }]}>{item.over}</Text>
                    <Text style={[styles.bowlingText1, { width: "5%", textAlign: 'center' }]}>{item.madden}</Text>
                    <Text style={[styles.bowlingText1, { width: "10%", textAlign: 'center' }]}>{item.runs}</Text>
                    <Text style={[styles.bowlingText1, { width: '10%', textAlign: 'center' }]}>{item.wicket}</Text>
                    <Text style={[styles.bowlingText1, { width: "15%", textAlign: 'center' }]}>{item.Eco}</Text>
                  </View>



                </View>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  return (
    <View style={{ backgroundColor: '#4fa8b9', flex: 1 }}>
      <FlatList
        data={dataItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        renderItem={renderItem}
      />
    </View>
  );
}

function AFG() {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>(
    {},
  );

  const toggleItem = (itemId: string) => {
    setExpandedItems(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  const renderItem = ({ item }: { item: RecentMatchesProps }) => {
    const isExpanded = expandedItems[item.id] || false;
    return (
      <ScrollView>
        <TouchableOpacity onPress={() => toggleItem(item.id)}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              // elevation: 100,
              maxWidth: 'auto',
              marginVertical: 7,
              padding: 5,
              borderColor: 'red',
              borderWidth: 2,
              borderRadius: 14,
            }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Pressable>
                {({ pressed }) => (
                  <Text
                    style={[
                      { color: pressed ? '#e76f51' : '#000' },
                      { marginTop: 4, fontSize: 16, marginLeft: 20 },
                    ]}>
                    {item.playerName}
                  </Text>
                )}
              </Pressable>
              {isExpanded ? (
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={moderateScale(28, 0.3)}
                  color={'#000'}
                />
              ) : (
                <MaterialCommunityIcons
                  name="chevron-up"
                  size={moderateScale(28, 0.3)}
                  color={'#000'}
                />
              )}
            </View>
            {isExpanded && (

              <View>
                <Text
                  style={{
                    marginBottom: 5,
                    marginTop: 5,
                    color: '#000',
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    backgroundColor: '#fff',
                    padding: 6,
                    borderColor: 'orange',
                    borderWidth: 2,
                    borderRadius: 12,
                    marginHorizontal: 10,
                  }}>
                  Batting
                </Text>
                <View style={[styles.battingViewHeader, { display: 'flex', justifyContent: 'space-around' }]}>
                  <Text style={[styles.bowlingText1, { width: '19%', textAlign: 'center' }]}>Date</Text>
                  <Text style={[styles.bowlingText1, { width: '28%', textAlign: 'center' }]}>Matches</Text>
                  <Text style={[styles.bowlingText1, { width: '7%', textAlign: 'center' }]}>Bo</Text>
                  <Text style={[styles.bowlingText1, { width: '7%', textAlign: 'center' }]}>R</Text>
                  <Text style={[styles.bowlingText1, { width: "7%", textAlign: 'center' }]}>4s</Text>
                  <Text style={[styles.bowlingText1, { width: '7%', textAlign: 'center' }]}>6s</Text>
                  <Text style={[styles.bowlingText1, { width: '8%', textAlign: 'center' }]}>SR</Text>
                  <Text style={[styles.bowlingText1, { width: '17%', textAlign: 'center' }]}>Out</Text>
                </View>

                <View
                  style={{
                    flex: 1,
                    backgroundColor: '#fff',
                    // elevation: 100,
                    maxWidth: 'auto',
                    // marginVertical: 7,
                    padding: 5,
                    // borderColor: 'red',
                    // borderWidth: 2,
                    // borderRadius: 14,
                  }}>

                  <View style={[styles.bowlingView, { display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }]}>
                    <Text style={[styles.bowlingText1, { width: '19%', textAlign: 'center', color: 'red' }]}>{item.date}</Text>
                    <Text style={[styles.bowlingText1, { width: '28%', textAlign: 'center', color: 'blue', fontWeight: 'bold' }]}>{item.match}</Text>
                    <Text style={[styles.bowlingText1, { width: '7%', textAlign: 'center' }]}>{item.ball}</Text>
                    <Text style={[styles.bowlingText1, { width: "7%", textAlign: 'center' }]}>{item.run}</Text>
                    <Text style={[styles.bowlingText1, { width: "7%", textAlign: 'center' }]}>{item.Fours}</Text>
                    <Text style={[styles.bowlingText1, { width: '7%', textAlign: 'center' }]}>{item.Sixs}</Text>
                    <Text style={[styles.bowlingText1, { width: "8%", textAlign: 'center' }]}>{item.StrikeRate}</Text>
                    <Text style={[styles.bowlingText1, { width: '17%', textAlign: 'center' }]}>{item.Out}</Text>
                  </View>




                </View>

                <Text
                  style={{
                    marginBottom: 5,
                    marginTop: 5,
                    color: '#000',
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    backgroundColor: '#fff',
                    padding: 6,
                    borderColor: 'orange',
                    borderWidth: 2,
                    borderRadius: 12,
                    marginHorizontal: 10,
                  }}>
                  Bowling
                </Text>

                <View style={[styles.bowlingViewHeader, { display: 'flex', justifyContent: 'space-evenly' }]}>
                  <Text style={[styles.bowlingText1, { width: '20%', textAlign: 'center', }]}>Date</Text>
                  <Text style={[styles.bowlingText1, { width: '30%', textAlign: 'center' }]}>Matches</Text>
                  <Text style={[styles.bowlingText1, { width: '10%', textAlign: 'center' }]}>Over</Text>
                  <Text style={[styles.bowlingText1, { width: "5%", textAlign: 'center' }]}>M</Text>
                  <Text style={[styles.bowlingText1, { width: "10%", textAlign: 'center' }]}>R</Text>
                  <Text style={[styles.bowlingText1, { width: '10%', textAlign: 'center' }]}>W</Text>
                  <Text style={[styles.bowlingText1, { width: "15%", textAlign: 'center' }]}>Eco</Text>
                  {/* <Text style={[styles.bowlingText1, {width:'20%',textAlign:'center'}]}>{item.Out}</Text> */}
                </View>



                <View
                  style={{
                    flex: 1,
                    backgroundColor: '#fff',
                    // elevation: 100,
                    maxWidth: 'auto',
                    // marginVertical: 3,
                    padding: 5,
                    // borderColor: 'red',
                    // borderWidth: 2,
                    // borderRadius: 10,
                  }}>


                  <View style={[styles.bowlingView, { display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }]}>
                    <Text style={[styles.bowlingText1, { width: '20%', textAlign: 'center', color: 'red', }]}>{item.dates}</Text>
                    <Text style={[styles.bowlingText1, { width: '30%', textAlign: 'center', color: 'blue', fontWeight: 'bold' }]}>{item.matchs}</Text>
                    <Text style={[styles.bowlingText1, { width: '10%', textAlign: 'center' }]}>{item.over}</Text>
                    <Text style={[styles.bowlingText1, { width: "5%", textAlign: 'center' }]}>{item.madden}</Text>
                    <Text style={[styles.bowlingText1, { width: "10%", textAlign: 'center' }]}>{item.runs}</Text>
                    <Text style={[styles.bowlingText1, { width: '10%', textAlign: 'center' }]}>{item.wicket}</Text>
                    <Text style={[styles.bowlingText1, { width: "15%", textAlign: 'center' }]}>{item.Eco}</Text>
                  </View>
                </View>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  return (
    <View style={{ backgroundColor: '#4fa8b9', flex: 1 }}>
      <FlatList
        data={dataItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        renderItem={renderItem}
      />
    </View>
  );
}

const PlayerRecentMatches = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 14, fontWeight: '600', color: '#fff' },
          tabBarStyle: { backgroundColor: '#4fa8b9', elevation: 10 },
        }}>
        <Tab.Screen
          name="TeamOne"
          component={BAN}
          options={{ tabBarLabel: 'BAN' }}
        />
        <Tab.Screen
          name="TeamTwo"
          component={AFG}
          options={{
            tabBarLabel: 'AFG',
            tabBarStyle: { backgroundColor: '#4fa8b9' },
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  HeaderTxt: {
    fontSize: moderateScale(18, 0.3),
    color: '#fff',
    fontWeight: '600',
    marginVertical: 5,
  },
  SubTxt: {
    color: '#fff',
    fontSize: moderateScale(15, 0.3),
  },
  txt: {
    color: '#fff',
    fontSize: moderateScale(14, 0.3),
  },
  img: {
    width: moderateScale(25, 0.3),
    height: moderateScale(25, 0.3),
  },
  btns: {
    color: '#000',
    borderColor: 'red',
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
    marginVertical: 5,
    borderRadius: 5,
    margin: 5,
    fontSize: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  texts: {
    color: '#fff',
    textAlign: 'justify',
    marginVertical: 40,
    margin: 10,
    fontSize: 16,
  },

  bowlingView: {
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    padding: 5,
  },
  bowlingViewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'orange',
    padding: 8,
  },
  bowlingText: {
    color: '#000',
    fontSize: 14,
  },
  bowlingText1: {
    color: '#000',
    fontSize: 16,
    marginLeft: 18,
  },
  battingViewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'orange',
    padding: 8,
  },
});

export default PlayerRecentMatches;
