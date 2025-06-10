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
  name: string;
  playerType: string;
  profile: any;
}

const {width} = Dimensions.get('window');
const dataItem: UpcomingStatProps[] = [
  {
    id: '1',
    profile: require('../../assets/msd-removebg-preview.png'),
    name: ' MS Dhoni',
    playerType: 'Captain',
  },
  {
    id: '2',
    profile: require('../../assets/msd-removebg-preview.png'),
    name: ' MS Dhoni',
    playerType: 'Captain',
  },
  {
    id: '3',
    profile: require('../../assets/msd-removebg-preview.png'),
    name: ' MS Dhoni',
    playerType: 'Captain',
  },
  {
    id: '4',
    profile: require('../../assets/msd-removebg-preview.png'),
    name: ' MS Dhoni',
    playerType: 'Captain',
  },
  {
    id: '5',
    profile: require('../../assets/msd-removebg-preview.png'),
    name: ' MS Dhoni',
    playerType: 'Captain',
  },
  {
    id: '6',
    profile: require('../../assets/msd-removebg-preview.png'),
    name: ' MS Dhoni',
    playerType: 'Captain',
  },
  {
    id: '7',
    profile: require('../../assets/msd-removebg-preview.png'),
    name: ' MS Dhoni',
    playerType: 'Captain',
  },
  {
    id: '8',
    profile: require('../../assets/msd-removebg-preview.png'),
    name: ' MS Dhoni',
    playerType: 'Captain',
  },
  {
    id: '9',
    profile: require('../../assets/msd-removebg-preview.png'),
    name: ' MS Dhoni',
    playerType: 'Captain',
  },
  {
    id: '10',
    profile: require('../../assets/msd-removebg-preview.png'),
    name: ' MS Dhoni',
    playerType: 'Captain',
  },
  {
    id: '11',
    profile: require('../../assets/msd-removebg-preview.png'),
    name: ' MS Dhoni',
    playerType: 'Captain',
  },
  {
    id: '12',
    profile: require('../../assets/msd-removebg-preview.png'),
    name: ' MS Dhoni',
    playerType: 'Captain',
  },
  {
    id: '13',
    profile: require('../../assets/msd-removebg-preview.png'),
    name: ' MS Dhoni',
    playerType: 'Captain',
  },
  {
    id: '14',
    profile: require('../../assets/msd-removebg-preview.png'),
    name: ' MS Dhoni',
    playerType: 'Captain',
  },
  {
    id: '15',
    profile: require('../../assets/msd-removebg-preview.png'),
    name: ' MS Dhoni',
    playerType: 'Captain',
  },
  {
    id: '16',
    profile: require('../../assets/msd-removebg-preview.png'),
    name: ' MS Dhoni',
    playerType: 'Captain',
  },
];

const TeamSquad = () => {
  // const handlerBandVsAfgStats = () => {
  //     navigation.navigate("BanVsAfgStat")
  // }

  const renderItem = ({item}: {item: UpcomingStatProps}) => {
    return (
      // <TouchableOpacity>
      <View
        style={{
          flex: 1,
          width: width,
          backgroundColor: '#fff',
          // elevation: 100,
          maxWidth: 'auto',
          marginVertical: 7,
          // padding: 10,
          // borderColor: 'red',
          borderWidth: 2,
          borderRadius: 12,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity>
          <View style={styles.viewRow1}>
            <View style={{marginHorizontal: 5}}>
              <Image source={item.profile} style={{height: 60, width: 60}} />
            </View>
            <View style={{marginVertical: 5, marginHorizontal: 5}}>
              <Text style={{color: '#000', fontSize: 18}}>{item.name}</Text>
              <Text style={{color: '#000', fontSize: 15}}>
                {item.playerType}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.viewRow1}>
            <View style={{marginHorizontal: 5}}>
              <Image source={item.profile} style={{height: 60, width: 60}} />
            </View>
            <View style={{marginVertical: 5}}>
              <Text style={{color: '#000', fontSize: 18}}>{item.name}</Text>
              <Text style={{color: '#000', fontSize: 15}}>
                {item.playerType}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      // </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={{backgroundColor: '#4fa8b9'}}>
      {/* <SafeAreaView > */}
      <TouchableOpacity>
        <FlatList
          data={dataItem}
          // numColumns ={2}
          keyExtractor={item => item.id}
          // showsVerticalScrollIndicator={false}
          // scrollEventThrottle={16}
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
  imageStyle: {
    height: 30,
    width: 30,
  },
});
export default TeamSquad;

// export default UpcomingMatches;

// export default RecentMatchess;
