/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  Image,
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CustomTabBar from '../CustomTabBar/CustomTabBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const screenHeight = Dimensions.get('window').height;
const Tab = createMaterialTopTabNavigator();

interface INFOProps {
  id: string;
  Match: string;
  Series: string;
  Date: string;
  Time: string;
  Toss: string;
  Venue: string;
  Umpires: string;
  ThirdUmpire: string;
  Stadium: string;
  City: string;
  Refree: string;
}

function Info() {
  const Infodata: INFOProps[] = [
    {
      id: '1',
      Match: '2nd T20I',
      Series: 'Afganishthan tour of Bangladesh',
      Date: 'Sun , Jul 16',
      Time: '10:30PM',
      Toss: 'BANG TO OPT BOWL',
      Venue: 'Sylhet International Cricket Stadium , Sylhet',
      Umpires: 'Shafudoulla , Tanvir Ahmand',
      ThirdUmpire: 'Masudur Rehman',
      Stadium: 'Sylhet International Cricket Stadium',
      City: 'Sylhet',
      Refree: 'Neeyamur Rashid',
    },
  ];
  const renderInfoData = ({item}: {item: INFOProps}) => {
    return (
      <ScrollView style={{flex: 1}}>
        <View>
          {/* <View style={{ height: "100%", backgroundColor: 'yellow' }}></View> */}
          <View>
            <Text
              style={{
                color: '#fff',
                backgroundColor: '#000',
                padding: 10,
                fontSize: moderateScale(16, 0.2),
              }}>
              INFO
            </Text>
            <View style={[styles.viewTwo]}>
              <Text style={styles.textLeft}>Match</Text>
              <Text style={styles.textRight}>{item.Match}</Text>
            </View>
            <View style={[styles.viewTwo]}>
              <Text style={styles.textLeft}>Seris</Text>
              <Text style={styles.textRight}>{item.Series}</Text>
            </View>
            <View style={[styles.viewTwo]}>
              <Text style={styles.textLeft}>Date</Text>
              <Text style={styles.textRight}>{item.Date}</Text>
            </View>
            <View style={[styles.viewTwo]}>
              <Text style={styles.textLeft}>Time</Text>
              <Text style={styles.textRight}>{item.Time}</Text>
            </View>
            <View style={[styles.viewTwo]}>
              <Text style={styles.textLeft}>Toss</Text>
              <Text style={styles.textRight}>{item.Toss}</Text>
            </View>
            <View style={[styles.viewTwo]}>
              <Text style={styles.textLeft}>Venue</Text>
              <Text style={styles.textRight}>{item.Venue}</Text>
            </View>
            <View style={[styles.viewTwo]}>
              <Text style={styles.textLeft}>Umpires</Text>
              <Text style={styles.textRight}>{item.Umpires}</Text>
            </View>
            <View style={[styles.viewTwo]}>
              <Text style={styles.textLeft}>3rd Umpire</Text>
              <Text style={styles.textRight}>{item.ThirdUmpire}</Text>
            </View>
            <View style={[styles.viewTwo]}>
              <Text style={styles.textLeft}>Refree</Text>
              <Text style={styles.textRight}>{item.Refree}</Text>
            </View>
            <Text
              style={{
                color: '#fff',
                backgroundColor: '#000',
                padding: 10,
                fontSize: moderateScale(16, 0.2),
              }}>
              VENUE GUIDE
            </Text>
            <View style={[styles.viewTwo]}>
              <Text style={styles.textLeft}>Stadium</Text>
              <Text style={styles.textRight}>{item.Stadium}</Text>
            </View>
            <View style={[styles.viewTwo]}>
              <Text style={styles.textLeft}>City</Text>
              <Text style={styles.textRight}>{item.City}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };
  return (
    <ScrollView style={{flex: 1, height: '100%', backgroundColor: '#303030'}}>
      <View style={{flex: 1}}>
        <FlatList
          data={Infodata}
          renderItem={renderInfoData}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
}

interface liveProps {
  id: string;
  result: string;
  batsman: string;
  batsmanRun: string;
  batsmanBoll: string;
  fours: string;
  sixs: string;
  StrikeRate: string;
  Over: string;
  ball1: string;
  ball2: string;
  ball3: string;
  ball4: string;
  ball5: string;
  ball6: string;
  totalInOver: string;
  bowler: string;
  bowlerOver: string;
  bowlerRun: string;
  bowlerWkt: string;
  bowlerEco: string;
  team1: string;
  team1Score: string;
  team2: string;
  team2Score: string;
  overDescBall1: string;
  overDescBall2: string;
  overDescBall13: string;
  overDescBall4: string;
  overDescBall5: string;
  overDescBall6: string;
}

const liveData: liveProps[] = [
  {
    id: '1',
    result: 'BB need 52 runs in 20 balls',
    batsman: 'Timcycen Maruma',
    batsmanRun: '2',
    batsmanBoll: '2',
    fours: '0',
    sixs: '0',
    StrikeRate: '100',
    Over: 'Over 9',
    ball1: '0',
    ball2: '1',
    ball3: '4',
    ball4: '0',
    ball5: '6',
    ball6: '1w',
    totalInOver: '12 Runs',
    bowler: 'Junior Dala',
    bowlerOver: '5',
    bowlerRun: '25',
    bowlerWkt: '2',
    bowlerEco: '5',
    team1: 'JB',
    team1Score: '105-7 (10.0)',
    team2: 'BBLW',
    team2Score: '35-6 (3.5)',
    overDescBall1: 'overDescBall1',
    overDescBall2: 'overDescBall2',
    overDescBall13: 'overDescBall13',
    overDescBall4: 'overDescBall4',
    overDescBall5: 'overDescBall5',
    overDescBall6: 'overDescBall6',
  },
];

function Live() {
  const liveDataRender = ({item}: {item: liveProps}) => {
    return (
      <View style={{flex: 1}}>
        <Text
          style={{
            backgroundColor: '#f9f9f9',
            color: '#8a7041',
            textAlign: 'center',
            fontSize: moderateScale(18, 0.2),
            padding: 5,
          }}>
          {item.result}
        </Text>

        <View style={{padding: 5, backgroundColor: '#1b2838'}}>
          <View style={{flexDirection: 'row', padding: 5}}>
            <Text style={[styles.liveText2, {width: '50%'}]}>Batsman</Text>
            <Text style={[styles.liveText2, {width: '10%'}]}>R</Text>
            <Text style={[styles.liveText2, {width: '10%'}]}>B</Text>
            <Text style={[styles.liveText2, {width: '10%'}]}>4s</Text>
            <Text style={[styles.liveText2, {width: '10%'}]}>6s</Text>
            <Text style={[styles.liveText2, {width: '10%'}]}>SR</Text>
          </View>

          <View style={{flexDirection: 'row', padding: 5}}>
            <Text
              style={[styles.liveText2, {width: '50%', fontWeight: 'bold'}]}>
              {item.batsman}
            </Text>
            <Text
              style={[styles.liveText2, {width: '10%', fontWeight: 'bold'}]}>
              {item.batsmanRun}
            </Text>
            <Text
              style={[styles.liveText2, {width: '10%', fontWeight: 'bold'}]}>
              {item.batsmanBoll}
            </Text>
            <Text
              style={[styles.liveText2, {width: '10%', fontWeight: 'bold'}]}>
              {item.fours}
            </Text>
            <Text
              style={[styles.liveText2, {width: '10%', fontWeight: 'bold'}]}>
              {item.sixs}
            </Text>
            <Text
              style={[styles.liveText2, {width: '10%', fontWeight: 'bold'}]}>
              {item.StrikeRate}
            </Text>
          </View>
        </View>

        <View
          style={{flexDirection: 'row', backgroundColor: '#000', padding: 5}}>
          <Text style={[styles.liveText3, {width: '15%'}]}>{item.Over}</Text>
          <Text style={[styles.liveText3, {width: '10%'}]}>{item.ball1}</Text>
          <Text style={[styles.liveText3, {width: '10%'}]}>{item.ball2}</Text>
          <Text
            style={[
              styles.liveText3,
              {width: '10%', backgroundColor: 'orange', borderRadius: 30},
            ]}>
            {item.ball3}
          </Text>
          <Text style={[styles.liveText3, {width: '10%'}]}>{item.ball4}</Text>
          <Text
            style={[
              styles.liveText3,
              {width: '10%', backgroundColor: 'orange', borderRadius: 30},
            ]}>
            {item.ball5}
          </Text>
          <Text style={[styles.liveText3, {width: '10%'}]}>{item.ball6}</Text>
          <Text style={[styles.liveText3]}>=</Text>
          <Text style={[styles.liveText3, {width: '20%'}]}>
            {item.totalInOver}
          </Text>
        </View>

        <View style={{padding: 5, backgroundColor: '#1b2838'}}>
          <View
            style={{
              flexDirection: 'row',
              padding: 5,
              justifyContent: 'space-between',
            }}>
            <Text style={[styles.liveText2, {width: '40%'}]}>Bowler</Text>
            <Text style={[styles.liveText2, {width: '15%'}]}>Ovr</Text>
            <Text style={[styles.liveText2, {width: '15%'}]}>Run</Text>
            <Text style={[styles.liveText2, {width: '15%'}]}>Wkt</Text>
            <Text style={[styles.liveText2, {width: '15%'}]}>eco</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              padding: 5,
              justifyContent: 'space-between',
            }}>
            <Text
              style={[styles.liveText2, {width: '40%', fontWeight: 'bold'}]}>
              {item.bowler}
            </Text>
            <Text
              style={[styles.liveText2, {width: '15%', fontWeight: 'bold'}]}>
              {item.Over}
            </Text>
            <Text
              style={[styles.liveText2, {width: '15%', fontWeight: 'bold'}]}>
              {item.bowlerRun}
            </Text>
            <Text
              style={[styles.liveText2, {width: '15%', fontWeight: 'bold'}]}>
              {item.bowlerWkt}
            </Text>
            <Text
              style={[styles.liveText2, {width: '15%', fontWeight: 'bold'}]}>
              {item.bowlerEco}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            backgroundColor: '#000',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.liveText4}>{item.team1} : </Text>
            <Text style={styles.liveText4}>{item.team1Score}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.liveText4}>{item.team2} : </Text>
            <Text style={styles.liveText4}>{item.team2Score}</Text>
          </View>
        </View>

        <View style={{padding: 5, backgroundColor: '#424242'}}>
          <View style={{flexDirection: 'row', marginVertical: 5}}>
            <Text style={[styles.liveText5, {width: '20%'}]}>13.5</Text>
            <Text style={[styles.liveText5, {width: '80%', textAlign: 'auto'}]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              quis tincidunt libero, sed molestie lorem. Proin nec iaculis mi.
              Duis aliquet turpis arcu, in malesuada enim semper id. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Praesent dapibus
              eleifend tortor, in faucibus metus tincidunt placerat.
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 5}}>
            <Text style={[styles.liveText5, {width: '20%'}]}>13.5</Text>
            <Text style={[styles.liveText5, {width: '80%', textAlign: 'auto'}]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              quis tincidunt libero, sed molestie lorem. Proin nec iaculis mi.
              Duis aliquet turpis arcu, in malesuada enim semper id. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Praesent dapibus
              eleifend tortor, in faucibus metus tincidunt placerat.
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 5}}>
            <Text style={[styles.liveText5, {width: '20%'}]}>13.5</Text>
            <Text style={[styles.liveText5, {width: '80%', textAlign: 'auto'}]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              quis tincidunt libero, sed molestie lorem. Proin nec iaculis mi.
              Duis aliquet turpis arcu, in malesuada enim semper id. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Praesent dapibus
              eleifend tortor, in faucibus metus tincidunt placerat.
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 5}}>
            <Text style={[styles.liveText5, {width: '20%'}]}>13.5</Text>
            <Text style={[styles.liveText5, {width: '80%', textAlign: 'auto'}]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              quis tincidunt libero, sed molestie lorem. Proin nec iaculis mi.
              Duis aliquet turpis arcu, in malesuada enim semper id. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Praesent dapibus
              eleifend tortor, in faucibus metus tincidunt placerat.
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <FlatList
          data={liveData}
          renderItem={liveDataRender}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
}

interface AFGBatterProps {
  id: string;
  batsmanName: string;
  playerOutBy: string;
  batsmanRun: string;
  batsmanBall: string;
  fours: string;
  sixs: string;
  strikeRate: string;
}

interface PlayerDidNotBat {
  id: string;
  palyerName: string;
  type: string;
}

interface PlayerBowler {
  id: string;
  bowlerName: string;
  over: string;
  match: string;
  run: string;
  wicket: string;
  Eco: string;
}

interface wicketFall {
  id: string;
  batter: string;
  score: string;
  over: string;
}

const AFGData: AFGBatterProps[] = [
  {
    id: '1',
    batsmanName: 'B McDermott',
    playerOutBy: 'david',
    batsmanRun: '50',
    batsmanBall: '20',
    fours: '2',
    sixs: '4',
    strikeRate: '125',
  },
  {
    id: '2',
    batsmanName: 'B McDermott',
    playerOutBy: 'david',
    batsmanRun: '50',
    batsmanBall: '20',
    fours: '2',
    sixs: '4',
    strikeRate: '125',
  },
  {
    id: '3',
    batsmanName: 'B McDermott',
    playerOutBy: 'david',
    batsmanRun: '50',
    batsmanBall: '20',
    fours: '2',
    sixs: '4',
    strikeRate: '125',
  },
  {
    id: '4',
    batsmanName: 'B McDermott',
    playerOutBy: 'david',
    batsmanRun: '50',
    batsmanBall: '20',
    fours: '2',
    sixs: '4',
    strikeRate: '125',
  },
];

const playerDidNotBatData: PlayerDidNotBat[] = [
  {
    id: '1',
    palyerName: 'B McDermott',
    type: 'Bowler',
  },
  {
    id: '2',
    palyerName: 'B McDermott',
    type: 'Bowler',
  },
  {
    id: '3',
    palyerName: 'B McDermott',
    type: 'Bowler',
  },
  {
    id: '4',
    palyerName: 'B McDermott',
    type: 'Bowler',
  },
];

const bowlerData: PlayerBowler[] = [
  {
    id: '1',
    bowlerName: 'B McDermott',
    over: '4.0',
    match: '0',
    run: '33',
    wicket: '2',
    Eco: '8.25',
  },
  {
    id: '2',
    bowlerName: 'B McDermott',
    over: '4.0',
    match: '0',
    run: '33',
    wicket: '2',
    Eco: '8.25',
  },
  {
    id: '3',
    bowlerName: 'B McDermott',
    over: '4.0',
    match: '0',
    run: '33',
    wicket: '2',
    Eco: '8.25',
  },
  {
    id: '4',
    bowlerName: 'B McDermott',
    over: '4.0',
    match: '0',
    run: '33',
    wicket: '2',
    Eco: '8.25',
  },
];

const wicketFallData: wicketFall[] = [
  {
    id: '1',
    batter: 'B McDermott',
    score: '3-48',
    over: '2.4',
  },
  {
    id: '2',
    batter: 'B McDermott',
    score: '3-48',
    over: '2.4',
  },
  {
    id: '3',
    batter: 'B McDermott',
    score: '3-48',
    over: '2.4',
  },
];

function AFG() {
  const AFGRenderData = ({item}: {item: AFGBatterProps}) => {
    return (
      <View>
        <View style={{flex: 1}}>
          <View
            style={{
              backgroundColor: '#f5f5f5',
              flexDirection: 'row',
              padding: 5,
            }}>
            <View style={{width: '50%'}}>
              <Text style={[styles.scoreCardText2, {width: '100%'}]}>
                {item.batsmanName}
              </Text>
              <Text style={[styles.scoreCardText2, {width: '100%'}]}>
                {item.playerOutBy}
              </Text>
            </View>
            <Text style={[styles.scoreCardText2, {width: '10%'}]}>
              {item.batsmanRun}
            </Text>
            <Text style={[styles.scoreCardText2, {width: '10%'}]}>
              {item.batsmanBall}
            </Text>
            <Text style={[styles.scoreCardText2, {width: '10%'}]}>
              {item.fours}
            </Text>
            <Text style={[styles.scoreCardText2, {width: '10%'}]}>
              {item.sixs}
            </Text>
            <Text style={[styles.scoreCardText2, {width: '10%'}]}>
              {item.strikeRate}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const TeamPlayerDidNotBat = ({item}: {item: PlayerDidNotBat}) => {
    return (
      <View style={styles.gridItemContainer}>
        <View style={styles.gridItem}>
          <Image
            source={require('../../assets/msd-removebg-preview.png')}
            style={styles.playerImage}
          />
          <View>
            <Text style={styles.playerName}>{item.palyerName}</Text>
            <Text style={styles.playerType}>{item.type}</Text>
          </View>
        </View>
      </View>
    );
  };

  const BowlerRenderData = ({item}: {item: PlayerBowler}) => {
    return (
      <View>
        <View
          style={{
            backgroundColor: '#f5f5f5',
            flexDirection: 'row',
            padding: 5,
          }}>
          <View style={{width: '50%'}}>
            <Text style={[styles.scoreCardText2, {width: '100%'}]}>
              {item.bowlerName}
            </Text>
          </View>
          <Text style={[styles.scoreCardText2, {width: '10%'}]}>
            {item.over}
          </Text>
          <Text style={[styles.scoreCardText2, {width: '10%'}]}>
            {item.match}
          </Text>
          <Text style={[styles.scoreCardText2, {width: '10%'}]}>
            {item.run}
          </Text>
          <Text style={[styles.scoreCardText2, {width: '10%'}]}>
            {item.wicket}
          </Text>
          <Text style={[styles.scoreCardText2, {width: '10%'}]}>
            {item.Eco}
          </Text>
        </View>
      </View>
    );
  };

  const WicketFallRenderData = ({item}: {item: wicketFall}) => {
    return (
      <View>
        <View style={{flexDirection: 'row', padding: 5}}>
          <Text style={[styles.scoreCardText3, {width: '50%'}]}>
            {item.batter}
          </Text>
          <Text style={[styles.scoreCardText3, {width: '25%'}]}>
            {item.score}
          </Text>
          <Text style={[styles.scoreCardText3, {width: '25%'}]}>
            {item.over}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#f5f5f5',
          flexDirection: 'row',
          padding: 5,
        }}>
        <View style={{width: '50%', flexDirection: 'row'}}>
          <Text
            style={[styles.scoreCardText1, {width: '30%', color: '#cbddea'}]}>
            Batter
          </Text>
          <MaterialCommunityIcons
            name="arrow-down"
            size={moderateScale(23, 0.3)}
            color={'#cbddea'}
          />
        </View>
        <Text style={[styles.scoreCardText1, {width: '10%'}]}>R</Text>
        <Text style={[styles.scoreCardText1, {width: '10%'}]}>B</Text>
        <Text style={[styles.scoreCardText1, {width: '10%'}]}>4s</Text>
        <Text style={[styles.scoreCardText1, {width: '10%'}]}>6s</Text>
        <Text style={[styles.scoreCardText1, {width: '10%'}]}>SR</Text>
      </View>
      <FlatList
        data={AFGData}
        renderItem={AFGRenderData}
        keyExtractor={item => item.id}
        scrollEventThrottle={16}
      />
      <View style={{backgroundColor: '#1b2838', padding: 8}}>
        <Text style={{color: '#fff', textAlign: 'center'}}>
          Extras : 9 ( wd-6 , nb-0 , lb-3 , b-0)
        </Text>
      </View>
      <Text style={{padding: 5}}>DID NOT BAT</Text>
      <FlatList
        data={playerDidNotBatData}
        renderItem={TeamPlayerDidNotBat}
        keyExtractor={item => item.id}
        numColumns={2}
      />
      <Text style={{padding: 5}}>Bowling</Text>
      <View
        style={{
          backgroundColor: '#f5f5f5',
          flexDirection: 'row',
          padding: 5,
        }}>
        <View style={{width: '50%', flexDirection: 'row'}}>
          <Text style={[styles.scoreCardText1, {width: '30%'}]}>Bowler</Text>
          <MaterialCommunityIcons
            name="arrow-down"
            size={moderateScale(24, 0.3)}
            color={'#dee2e6'}
          />
        </View>
        <Text style={[styles.scoreCardText1, {width: '10%'}]}>O</Text>
        <Text style={[styles.scoreCardText1, {width: '10%'}]}>M</Text>
        <Text style={[styles.scoreCardText1, {width: '10%'}]}>R</Text>
        <Text style={[styles.scoreCardText1, {width: '10%'}]}>W</Text>
        <Text style={[styles.scoreCardText1, {width: '10%'}]}>Eco</Text>
      </View>
      <FlatList
        data={bowlerData}
        renderItem={BowlerRenderData}
        keyExtractor={item => item.id}
        scrollEventThrottle={16}
      />
      <View style={{padding: 5}}>
        <Text>FALL OF WICKET</Text>
      </View>
      <View>
        <View style={{flexDirection: 'row', padding: 5}}>
          <Text style={{width: '50%'}}>Batter</Text>
          <Text style={{width: '25%'}}>Score</Text>
          <Text style={{width: '25%'}}>Over</Text>
        </View>
      </View>
      <FlatList
        data={wicketFallData}
        renderItem={WicketFallRenderData}
        keyExtractor={item => item.id}
        scrollEventThrottle={16}
      />
    </ScrollView>
  );
}

function BAN() {
  const AFGRenderData = ({item}: {item: AFGBatterProps}) => {
    return (
      <View>
        <View style={{flex: 1}}>
          <View
            style={{
              backgroundColor: '#f5f5f5',
              flexDirection: 'row',
              padding: 5,
            }}>
            <View style={{width: '50%'}}>
              <Text style={[styles.scoreCardText2, {width: '100%'}]}>
                {item.batsmanName}
              </Text>
              <Text style={[styles.scoreCardText2, {width: '100%'}]}>
                {item.playerOutBy}
              </Text>
            </View>
            <Text style={[styles.scoreCardText2, {width: '10%'}]}>
              {item.batsmanRun}
            </Text>
            <Text style={[styles.scoreCardText2, {width: '10%'}]}>
              {item.batsmanBall}
            </Text>
            <Text style={[styles.scoreCardText2, {width: '10%'}]}>
              {item.fours}
            </Text>
            <Text style={[styles.scoreCardText2, {width: '10%'}]}>
              {item.sixs}
            </Text>
            <Text style={[styles.scoreCardText2, {width: '10%'}]}>
              {item.strikeRate}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const TeamPlayerDidNotBat = ({item}: {item: PlayerDidNotBat}) => {
    return (
      <View style={styles.gridItemContainer}>
        <View style={styles.gridItem}>
          <Image
            source={require('../../assets/msd-removebg-preview.png')}
            style={styles.playerImage}
          />
          <View>
            <Text style={styles.playerName}>{item.palyerName}</Text>
            <Text style={styles.playerType}>{item.type}</Text>
          </View>
        </View>
      </View>
    );
  };

  const BowlerRenderData = ({item}: {item: PlayerBowler}) => {
    return (
      <View>
        <View
          style={{
            backgroundColor: '#f5f5f5',
            flexDirection: 'row',
            padding: 5,
          }}>
          <View style={{width: '50%'}}>
            <Text style={[styles.scoreCardText2, {width: '100%'}]}>
              {item.bowlerName}
            </Text>
          </View>
          <Text style={[styles.scoreCardText2, {width: '10%'}]}>
            {item.over}
          </Text>
          <Text style={[styles.scoreCardText2, {width: '10%'}]}>
            {item.match}
          </Text>
          <Text style={[styles.scoreCardText2, {width: '10%'}]}>
            {item.run}
          </Text>
          <Text style={[styles.scoreCardText2, {width: '10%'}]}>
            {item.wicket}
          </Text>
          <Text style={[styles.scoreCardText2, {width: '10%'}]}>
            {item.Eco}
          </Text>
        </View>
      </View>
    );
  };

  const WicketFallRenderData = ({item}: {item: wicketFall}) => {
    return (
      <View>
        <View style={{flexDirection: 'row', padding: 5}}>
          <Text style={[styles.scoreCardText3, {width: '50%'}]}>
            {item.batter}
          </Text>
          <Text style={[styles.scoreCardText3, {width: '25%'}]}>
            {item.score}
          </Text>
          <Text style={[styles.scoreCardText3, {width: '25%'}]}>
            {item.over}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <ScrollView style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#f5f5f5',
          flexDirection: 'row',
          padding: 5,
        }}>
        <View style={{width: '50%', flexDirection: 'row'}}>
          <Text
            style={[styles.scoreCardText1, {width: '30%', color: '#cbddea'}]}>
            Batter
          </Text>
          <MaterialCommunityIcons
            name="arrow-down"
            size={moderateScale(23, 0.3)}
            color={'#cbddea'}
          />
        </View>
        <Text style={[styles.scoreCardText1, {width: '10%'}]}>R</Text>
        <Text style={[styles.scoreCardText1, {width: '10%'}]}>B</Text>
        <Text style={[styles.scoreCardText1, {width: '10%'}]}>4s</Text>
        <Text style={[styles.scoreCardText1, {width: '10%'}]}>6s</Text>
        <Text style={[styles.scoreCardText1, {width: '10%'}]}>SR</Text>
      </View>
      <FlatList
        data={AFGData}
        renderItem={AFGRenderData}
        keyExtractor={item => item.id}
        scrollEventThrottle={16}
      />
      <View style={{backgroundColor: '#1b2838', padding: 8}}>
        <Text style={{color: '#fff', textAlign: 'center'}}>
          Extras : 9 ( wd-6 , nb-0 , lb-3 , b-0)
        </Text>
      </View>
      <Text style={{padding: 5}}>DID NOT BAT</Text>
      <FlatList
        data={playerDidNotBatData}
        renderItem={TeamPlayerDidNotBat}
        keyExtractor={item => item.id}
        numColumns={2}
      />
      <Text style={{padding: 5}}>Bowling</Text>
      <View
        style={{
          backgroundColor: '#f5f5f5',
          flexDirection: 'row',
          padding: 5,
        }}>
        <View style={{width: '50%', flexDirection: 'row'}}>
          <Text style={[styles.scoreCardText1, {width: '30%'}]}>Bowler</Text>
          <MaterialCommunityIcons
            name="arrow-down"
            size={moderateScale(24, 0.3)}
            color={'#dee2e6'}
          />
        </View>
        <Text style={[styles.scoreCardText1, {width: '10%'}]}>O</Text>
        <Text style={[styles.scoreCardText1, {width: '10%'}]}>M</Text>
        <Text style={[styles.scoreCardText1, {width: '10%'}]}>R</Text>
        <Text style={[styles.scoreCardText1, {width: '10%'}]}>W</Text>
        <Text style={[styles.scoreCardText1, {width: '10%'}]}>Eco</Text>
      </View>
      <FlatList
        data={bowlerData}
        renderItem={BowlerRenderData}
        keyExtractor={item => item.id}
        scrollEventThrottle={16}
      />
      <View style={{padding: 5}}>
        <Text>FALL OF WICKET</Text>
      </View>
      <View>
        <View style={{flexDirection: 'row', padding: 5}}>
          <Text style={{width: '50%'}}>Batter</Text>
          <Text style={{width: '25%'}}>Score</Text>
          <Text style={{width: '25%'}}>Over</Text>
        </View>
      </View>
      <FlatList
        data={wicketFallData}
        renderItem={WicketFallRenderData}
        keyExtractor={item => item.id}
        scrollEventThrottle={16}
      />
    </ScrollView>
  );
}

function Scorecard() {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
        <Tab.Screen
          name="Feed"
          // component={AllScreen}
          options={{tabBarLabel: 'AFG 116-7 (17.0)'}}>
          {props => <AFG {...props} />}
        </Tab.Screen>
        <Tab.Screen
          name="Notifications"
          // component={TodayScreen}
          options={{tabBarLabel: 'BAN 119-4 (16.1)'}}>
          {props => <BAN {...props} />}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
}

const RecentInfoLiveScorecard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.matchContainer}>
          <View
            style={{
              flexDirection: 'row',
              padding: 5,
              width: '40%',
            }}>
            <View
              style={{
                height: '100%',
                width: '50%',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Image
                source={require('../../assets/INDIALOGO.png')}
                style={styles.img}
                resizeMode="contain"
              />
              <Text style={{fontSize: moderateScale(16, 0.3), color: '#fff'}}>
                BAN
              </Text>
            </View>
            <View
              style={{
                height: '100%',
                width: '50%',
              }}>
              <Text style={{fontSize: moderateScale(16, 0.3), color: '#fff'}}>
                119-4
              </Text>
              <Text style={{fontSize: moderateScale(14, 0.3), color: '#fff'}}>
                (16.1)
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Image
              source={require('../../assets/icons8-shield-50.png')}
              style={{width: 30, height: 30}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              padding: 5,
              width: '40%',
            }}>
            <View
              style={{
                height: '100%',
                width: '50%',
                alignItems: 'flex-end',
              }}>
              <Text style={{fontSize: moderateScale(16, 0.3), color: '#fff'}}>
                119-4
              </Text>
              <Text style={{fontSize: moderateScale(14, 0.3), color: '#fff'}}>
                (16.1)
              </Text>
            </View>
            <View
              style={{
                height: '100%',
                width: '50%',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Image
                source={require('../../assets/INDIALOGO.png')}
                style={styles.img}
                resizeMode="contain"
              />
              <Text style={{fontSize: moderateScale(16, 0.3), color: '#fff'}}>
                BAN
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
          }}>
          <View style={{justifyContent: 'center'}}>
            <Text style={{color: '#ffd500', fontSize: moderateScale(18, 0.3)}}>
              India won by 6 wickets (DLS method)
            </Text>
          </View>
        </View>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 14, fontWeight: '600', color: '#fff'},
          tabBarStyle: {backgroundColor: '#313131', elevation: 10},
        }}>
        <Tab.Screen
          name="Feed"
          // component={AllScreen}
          options={{tabBarLabel: 'INFO'}}>
          {props => <Info {...props} />}
        </Tab.Screen>
        <Tab.Screen
          name="Notifications"
          // component={TodayScreen}
          options={{tabBarLabel: 'LIVE'}}>
          {props => <Live {...props} />}
        </Tab.Screen>
        <Tab.Screen
          name="Profile"
          // component={TomorrowScreen}
          options={{tabBarLabel: 'SCORECARD'}}>
          {props => <Scorecard {...props} />}
        </Tab.Screen>
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    height: screenHeight / 6,
    backgroundColor: '#4fa8b9',
  },
  matchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    height: '70%',
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  viewTwo: {
    flexDirection: 'row',
    // padding: 10,
    paddingHorizontal: 10,
    // paddingVertical: 3,
    // marginVertical:2,
    backgroundColor: '#424242',
  },
  textLeft: {
    fontSize: moderateScale(15, 0.3),
    color: '#fff',
    width: '30%',
  },
  textRight: {
    width: '70%',
    fontSize: moderateScale(15, 0.3),
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  liveText2: {
    fontSize: moderateScale(15, 0.2),
    color: '#f0f3f9',
  },
  liveText3: {
    fontSize: moderateScale(17, 0.2),
    color: '#f0f3f9',
    textAlign: 'center',
  },
  liveText4: {
    color: '#fff',
    fontSize: moderateScale(18, 0.2),
  },
  liveText5: {
    color: '#f0f3f9',
    fontSize: moderateScale(15, 0.2),
  },
  scoreCardText1: {
    fontSize: moderateScale(16, 0.2),
    color: '#333333',
  },
  scoreCardText2: {
    fontSize: moderateScale(14, 0.2),
    color: '#333333',
  },
  scoreCardText3: {
    fontSize: moderateScale(14, 0.2),
    color: '#333333',
  },
  gridItemContainer: {
    flex: 1,
    backgroundColor: '#1b2838',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  gridItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  playerImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  playerName: {
    color: '#fff',
  },
  playerType: {
    color: '#fff',
    fontSize: 14,
  },
});

export default RecentInfoLiveScorecard;
