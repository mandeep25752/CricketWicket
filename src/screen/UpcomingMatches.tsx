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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface UpcomingStatProps {
  id: string;
  count: string;
  // image1: any;
  // image2: any;
  matchName: string;
  team1: string;
  time: string;
  team2: string;
}

const {width} = Dimensions.get('window');
const dataItem: UpcomingStatProps[] = [
  {
    id: '1',
    count: '1st T20',
    matchName: 'NZW TO SL 2023',
    // image1: require('../../assets/instagram-removebg-preview.png'),
    team1: 'Texas Super Kings',
    time: '06:00 AM',
    team2: 'Los Angless Knight Riders',
  },
  {
    id: '2',
    count: '2st T20I',
    matchName: 'NZW TO SL 2023',
    team1: 'Texas Super Kings',
    time: '06:00 AM',
    team2: 'Los Angless Knight Riders',
  },
  {
    id: '3',
    count: '3st T20I',
    matchName: 'NZW TO SL 2023',
    team1: 'Texas Super Kings',
    time: '06:00 AM',
    team2: 'Los Angless Knight Riders',
  },
  {
    id: '4',
    count: '4st T20I',
    matchName: 'NZW TO SL 2023',
    team1: 'Texas Super Kings',
    time: '06:00 AM',
    team2: 'Los Angless Knight Riders',
  },
  {
    id: '5',
    count: '5st T20I',
    matchName: 'NZW TO SL 2023',
    team1: 'Texas Super Kings',
    time: '06:00 AM',
    team2: 'Los Angless Knight Riders',
  },
  {
    id: '6',
    count: '6st T20I',
    matchName: 'NZW TO SL 2023',
    team1: 'Texas Super Kings',
    time: '06:00 AM',
    team2: 'Los Angless Knight Riders',
  },
];

const UpcomingMatches = () => {
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
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textStyle1}>{item.count},</Text>
              <Text style={[styles.textStyle1, {marginHorizontal: 15}]}>
                {item.matchName}
              </Text>
            </View>
            <View>
              <MaterialCommunityIcons
                name="bell-outline"
                size={moderateScale(22, 0.3)}
                color={'#000'}
              />
            </View>
          </View>
          <View style={styles.viewRow2}>
            <View>
              <View style={{flexDirection: 'row', marginVertical: 5}}>
                <Image
                  source={require('../../assets/INDIALOGO.png')}
                  style={styles.imageStyle}
                />
                <Text style={styles.textStyle2}>{item.team1}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../../assets/INDIALOGO.png')}
                  style={styles.imageStyle}
                />
                <Text style={styles.textStyle2}>{item.team2}</Text>
              </View>
            </View>
            <View>
              <Text style={{color: '#000', fontSize: 16}}>Starts at:</Text>
              <Text
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginVertical: 5,
                }}>
                {item.time}
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
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between',
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
    marginLeft: 10,
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
export default UpcomingMatches;

// export default UpcomingMatches;
