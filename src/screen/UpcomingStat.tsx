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
import {moderateScale} from 'react-native-size-matters';

interface UpcomingStatProps {
  id: string;
  count: string;
  // image1: any;
  // image2: any;
  matchName: string;
  team1: string;
  time: string;
  team2: string;
  teamName1: string;
  teamName2: string;
}
interface navigationsPart {
  navigation: any;
}
const {width} = Dimensions.get('window');
const dataItem: UpcomingStatProps[] = [
  {
    id: '1',
    count: '1st T20I',
    matchName: 'NZW TO SL 2023',
    // image1: require('../../assets/instagram-removebg-preview.png'),
    team1: 'NZ-W',
    time: '20:00:00',
    team2: 'SL-W',
    // image2: require('../../assets/529772-cricekt.jpg'),
    teamName1: 'New Zealand Women',
    teamName2: 'Sri Lanka',
  },
  {
    id: '2',
    count: '2st T20I',
    matchName: 'NZW TO SL 2023',
    // image1: require('../../assets/529772-cricekt.jpg'),
    team1: 'NZ-W',
    time: '20:00:00',
    team2: 'SL-W',
    // image2: require('../../assets/529772-cricekt.jpg'),
    teamName1: 'New Zealand Women',
    teamName2: 'Sri Lanka',
  },
  {
    id: '3',
    count: '3st T20I',
    matchName: 'NZW TO SL 2023',
    // image1: require('../../assets/529772-cricekt.jpg'),
    team1: 'NZ-W',
    time: '20:00:00',
    team2: 'SL-W',
    // image2: require('../../assets/529772-cricekt.jpg'),
    teamName1: 'New Zealand Women',
    teamName2: 'Sri Lanka',
  },
  {
    id: '4',
    count: '4st T20I',
    matchName: 'NZW TO SL 2023',
    // image1: require('../../assets/529772-cricekt.jpg'),
    team1: 'NZ-W',
    time: '20:00:00',
    team2: 'SL-W',
    // image2: require('../../assets/529772-cricekt.jpg'),
    teamName1: 'New Zealand Women',
    teamName2: 'Sri Lanka',
  },
  {
    id: '5',
    count: '5st T20I',
    matchName: 'NZW TO SL 2023',
    // image1: require('../../assets/529772-cricekt.jpg'),
    team1: 'NZ-W',
    time: '20:00:00',
    team2: 'SL-W',
    // image2: require('../../assets/529772-cricekt.jpg'),
    teamName1: 'New Zealand Women',
    teamName2: 'Sri Lanka',
  },
  {
    id: '6',
    count: '6st T20I',
    matchName: 'NZW TO SL 2023',
    // image1: require('../../assets/529772-cricekt.jpg'),
    team1: 'NZ-W',
    time: '20:00:00',
    team2: 'SL-W',
    // image2: require('../../assets/529772-cricekt.jpg'),
    teamName1: 'New Zealand Women',
    teamName2: 'Sri Lanka',
  },
];

const UpcomingStat = (props: navigationsPart) => {
  const {navigation} = props;
  const handlerBandVsAfgStats = () => {
    navigation.navigate('BanVsAfgStat');
  };

  const renderItem = ({item}: {item: UpcomingStatProps}) => {
    return (
      <TouchableOpacity onPress={handlerBandVsAfgStats}>
        <View
          style={{
            flex: 1,
            width: width,
            backgroundColor: '#fff',
            // elevation: 100,
            maxWidth: 'auto',
            marginVertical: 7,
            padding: 5,
            borderColor: 'red',
            borderWidth: 2,
            borderRadius: 14,
          }}>
          {/*  */}
          {/* <Pressable
                        onPress={() => {
                            navigation.goBack();
                        }}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <Image
                            source={require('../../assets/back.png')}
                            style={styles.backBtn}
                        />
                        <Text style={styles.notificationText}>Back</Text>
                    </Pressable> */}
          {/*  */}
          <View style={styles.viewRow1}>
            <Text style={styles.textStyle1}>{item.count}</Text>
            <Text style={[styles.textStyle1, {marginHorizontal: 30}]}>
              {item.matchName}
            </Text>
          </View>
          <View style={styles.viewRow2}>
            <Image
              source={require('../../assets/whatsapp-removebg-preview.png')}
              style={styles.imageStyle}
            />
            <Text style={styles.textStyle2}>{item.team1}</Text>
            <Text style={{color: 'red', fontSize: 18}}>{item.time}</Text>
            <Text style={styles.textStyle2}>{item.team2}</Text>
            <Image
              source={require('../../assets/whatsapp-removebg-preview.png')}
              style={styles.imageStyle}
            />
          </View>
          <View style={styles.viewRow3}>
            <Text style={styles.textStyle3}>{item.teamName1}</Text>
            <Text style={styles.textStyle3}>{item.teamName2}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={{backgroundColor: '#4fa8b9'}}>
      {/* <Pressable
                        onPress={() => {
                            navigation.goBack();
                        }}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <Image
                            source={require('../../assets/back.png')}
                            style={styles.backBtn}
                        />
                        <Text style={styles.notificationText}>Back</Text>
                    </Pressable> */}

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
    flexDirection: 'row',
    marginVertical: 5,
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
    fontSize: 15,
  },
  textStyle2: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textStyle3: {
    color: '#000',
    fontSize: 15,
  },
  imageStyle: {
    height: 30,
    width: 30,
  },
  notificationText: {
    color: '#fff',
    fontSize: moderateScale(16, 0.3),
    fontWeight: '500',
  },
  backBtn: {
    height: moderateScale(20),
    width: moderateScale(20),
    resizeMode: 'contain',
    tintColor: '#fff',
    margin: moderateScale(10),
  },
});
export default UpcomingStat;
