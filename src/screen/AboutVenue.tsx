/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// import { Image } from "@mui/icons-material";
import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, FlatList, Image} from 'react-native';

interface StadiumVenue {
  id: string;
  stadium: string;
  location: string;
  peopleLimit: string;
  profile: any;
  peopleLimitLogo: any;
  Ends: string;
  Established: string;
  Association: string;
  desc: string;
}

const data: StadiumVenue[] = [
  {
    id: '1',
    stadium: 'Narendra Modi Stadium',
    location: 'Ahmedabad, India',
    peopleLimit: '132000',
    profile: require('../../assets/icons8-location-50.png'),
    peopleLimitLogo: require('../../assets/icons8-person-50.png'),
    Ends: 'Adani Pavallian End , Jio End',
    Established: '1960',
    Association: 'Gujarat Cricket Association',
    desc: 'Located near the Banks of Sabarmati river, Narendra Modi Stadium is the Largest Cricket Stadium in the world. The stadium was constructed in 1982 to flourish cricket talents in the province.',
  },
];
const AboutVenue = () => {
  const renderItem = ({item}: {item: StadiumVenue}) => {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <View style={styles.viewOne}>
          <Text style={styles.text1}>{item.stadium}</Text>
          <View style={styles.viewTwo}>
            <Image
              source={item.profile}
              tintColor={'#fff'}
              style={{height: 20, width: 20}}
            />
            <Text style={styles.text2}>{item.location}</Text>
            <Image
              source={item.peopleLimitLogo}
              tintColor={'#fff'}
              style={{height: 20, width: 20}}
            />
            <Text style={styles.text2}>{item.peopleLimit}</Text>
          </View>
        </View>

        <View style={styles.setView}>
          <Text style={[styles.text3, {width: '25%'}]}>Name</Text>
          <Text style={[styles.text3, {width: '1%'}]}>:</Text>
          <Text style={[styles.text3, {width: '74%'}]}>{item.stadium}</Text>
        </View>

        <View style={styles.setView}>
          <Text style={[styles.text3, {width: '25%'}]}>Location</Text>
          <Text style={[styles.text3, {width: '1%'}]}>:</Text>
          <Text style={[styles.text3, {width: '74%'}]}>{item.location}</Text>
        </View>

        <View style={styles.setView}>
          <Text style={[styles.text3, {width: '25%'}]}>Ends</Text>
          <Text style={[styles.text3, {width: '1%'}]}>:</Text>
          <Text style={[styles.text3, {width: '74%'}]}>{item.Ends}</Text>
        </View>

        <View style={styles.setView}>
          <Text style={[styles.text3, {width: '25%'}]}>Established</Text>
          <Text style={[styles.text3, {width: '1%'}]}>:</Text>
          <Text style={[styles.text3, {width: '74%'}]}>{item.Established}</Text>
        </View>

        <View style={styles.setView}>
          <Text style={[styles.text3, {width: '25%'}]}>Association</Text>
          <Text style={[styles.text3, {width: '1%'}]}>:</Text>
          <Text style={[styles.text3, {width: '74%'}]}>{item.Association}</Text>
        </View>
        <View style={styles.setView}>
          <Text style={styles.text3}>{item.desc}</Text>
        </View>
        <View style={{alignItems: 'center', backgroundColor: '#fff'}}>
          <Image
            source={require('../../assets/Groundimage.png')}
            style={styles.imgsBg}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: '#4fa8b9', height: '100%'}}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        renderItem={renderItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  viewOne: {
    backgroundColor: '#000',
    padding: 10,
  },
  text1: {
    color: '#fff',
    fontSize: 20,
  },
  text2: {
    color: '#fff',
    fontSize: 16,
    marginHorizontal: 10,
  },
  text3: {
    color: '#000',
    fontSize: 18,
    marginHorizontal: 10,
  },
  viewTwo: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  setView: {
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderBlockColor: '#000',
    borderBottomWidth: 1,
    marginVertical: 3,
    elevation: 10,
  },
  imgsBg: {
    height: 200,
    width: 250,
    alignItems: 'center',
  },
});
export default AboutVenue;
