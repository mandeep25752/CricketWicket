/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

interface UpcomingStatProps {
  id: string;
  date: string;
  desc: string;
  team1: string;
  time: string;
  team2: string;
  result: string;
  lead: string;
  score: string;
  over: string;
  location: string;
  icon1: any;
  icon2: any;
}

const {width} = Dimensions.get('window');
const dataItem: UpcomingStatProps[] = [
  {
    id: '1',
    date: '11 Arpil , Tuesday',
    desc: '16th T20',
    location: 'Arun Jaitely Stadium, Delhi, India',
    icon1: require('../../assets/sunrisers_hyderabad.png'),
    icon2: require('../../assets/sunrisers_hyderabad.png'),
    team1: 'DC',
    score: '172-2',
    time: '06:00 AM',
    team2: 'MI',
    result: 'MI WON',
    lead: 'by 6 wickets',
    over: '19.4',
  },
  {
    id: '2',
    date: '11 Arpil , Tuesday',
    desc: '16th T20',
    location: 'Arun Jaitely Stadium, Delhi, India',
    icon1: require('../../assets/sunrisers_hyderabad.png'),
    icon2: require('../../assets/sunrisers_hyderabad.png'),
    team1: 'DC',
    score: '172-2',
    time: '06:00 AM',
    team2: 'MI',
    result: 'MI WON',
    lead: 'by 6 wickets',
    over: '19.4',
  },
  {
    id: '3',
    date: '11 Arpil , Tuesday',
    desc: '16th T20',
    location: 'Arun Jaitely Stadium, Delhi, India',
    icon1: require('../../assets/sunrisers_hyderabad.png'),
    icon2: require('../../assets/sunrisers_hyderabad.png'),
    team1: 'DC',
    score: '172-2',
    time: '06:00 AM',
    team2: 'MI',
    result: 'MI WON',
    lead: 'by 6 wickets',
    over: '19.4',
  },
  {
    id: '4',
    date: '11 Arpil , Tuesday',
    desc: '16th T20',
    location: 'Arun Jaitely Stadium, Delhi, India',
    icon1: require('../../assets/sunrisers_hyderabad.png'),
    icon2: require('../../assets/sunrisers_hyderabad.png'),
    team1: 'DC',
    score: '172-2',
    time: '06:00 AM',
    team2: 'MI',
    result: 'MI WON',
    lead: 'by 6 wickets',
    over: '19.4',
  },
  {
    id: '5',
    date: '11 Arpil , Tuesday',
    desc: '16th T20',
    location: 'Arun Jaitely Stadium, Delhi, India',
    icon1: require('../../assets/sunrisers_hyderabad.png'),
    icon2: require('../../assets/sunrisers_hyderabad.png'),
    team1: 'DC',
    score: '172-2',
    time: '06:00 AM',
    team2: 'MI',
    result: 'MI WON',
    lead: 'by 6 wickets',
    over: '19.4',
  },
  {
    id: '6',
    date: '11 Arpil , Tuesday',
    desc: '16th T20',
    location: 'Arun Jaitely Stadium, Delhi, India',
    icon1: require('../../assets/sunrisers_hyderabad.png'),
    icon2: require('../../assets/sunrisers_hyderabad.png'),
    team1: 'DC',
    score: '172-2',
    time: '06:00 AM',
    team2: 'MI',
    result: 'MI WON',
    lead: 'by 6 wickets',
    over: '19.4',
  },
];

const RecentMatchess = () => {
  // const handlerBandVsAfgStats = () => {
  //     navigation.navigate("BanVsAfgStat")
  // }

  const renderItem = ({item}: {item: UpcomingStatProps}) => {
    return (
      <TouchableOpacity>
        <View
          style={{
            flex: 1,
            width: width,
            backgroundColor: '#fff',
            // elevation: 100,
            maxWidth: 'auto',
            marginVertical: 7,
            padding: 10,
            // borderColor: 'red',
            borderWidth: 2,
            borderRadius: 12,
          }}>
          <View style={styles.viewRow1}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textStyle1}>{item.date}</Text>
            </View>
            <View style={{flexDirection: 'row', marginVertical: 8}}>
              <Text style={{color: '#000', fontSize: 15}}>{item.desc}</Text>
              <Text style={{color: '#000', fontSize: 15}}>{item.location}</Text>
            </View>
          </View>
          <View style={styles.viewRow2}>
            <View>
              <View style={{flexDirection: 'row', marginVertical: 5}}>
                <Image source={item.icon1} style={styles.imageStyle} />
                <Text style={styles.textStyle2}>{item.team1}</Text>
                <Text style={styles.textStyle2}>{item.score}</Text>
                <Text style={styles.textStyle2}>{item.over}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={item.icon2} style={styles.imageStyle} />
                <Text style={styles.textStyle2}>{item.team2}</Text>
                <Text style={styles.textStyle2}>{item.score}</Text>
                <Text style={styles.textStyle2}>{item.over}</Text>
              </View>
            </View>
            <View
              style={{
                borderLeftColor: '#000',
                borderLeftWidth: 0.5,
                marginHorizontal: 10,
              }}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 16,
                  marginVertical: 7,
                  marginLeft: 20,
                }}>
                {item.result}
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginVertical: 5,
                  marginLeft: 20,
                }}>
                {item.lead}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={{backgroundColor: '#4fa8b9'}}>
      {/* <SafeAreaView > */}
      <TouchableOpacity>
        <FlatList
          data={dataItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          renderItem={renderItem}
        />
      </TouchableOpacity>
      {/* </SafeAreaView> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewRow1: {
    // flexDirection: 'row',
    marginVertical: 5,
    // justifyContent: 'space-between'
  },
  viewRow2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },

  viewRow3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  textStyle1: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textStyle2: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 2,
  },
  textStyle3: {
    color: '#000',
    fontSize: 15,
  },
  imageStyle: {
    height: 30,
    width: 30,
  },
});
export default RecentMatchess;

// export default UpcomingMatches;

// export default RecentMatchess;
