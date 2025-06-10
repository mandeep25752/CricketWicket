/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, ScrollView} from 'react-native';
const AboutUs = () => {
  return (
    <ScrollView
      style={{backgroundColor: '#4fa8b9', height: '100%'}}
      showsVerticalScrollIndicator={false}>
      <Text
        style={{
          fontSize: 18,
          color: '#fff',
          marginTop: 20,
          textAlign: 'justify',
          paddingHorizontal: 20,
        }}>
        CRICKET WICKET is the one of the cricket anaylsis and single-sport
        platforms in the world.
      </Text>

      <Text
        style={{
          fontSize: 18,
          color: '#fff',
          marginTop: 10,
          textAlign: 'justify',
          paddingHorizontal: 20,
        }}>
        Cricket has always been a game of digits and Cricket wicket stood by the
        capability to digit into those numbers in the order of improve
        performance , study overall business , and contribute to economics of
        cricket via powerfull analytics.
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: '#fff',
          marginTop: 10,
          textAlign: 'justify',
          paddingHorizontal: 20,
        }}>
        Founded in 2023, CRICKET WICKET exhibits live ball-by-ball stats of all
        Test, ODI & T20 and club matches. The app features multiple live
        coverage of cricket matches with Live Commentary , Scorecard, Fixtures ,
        Player ranking, Team ranking, News and so on. It also includes in depth
        statistics of every cricket match and cricketers to have played the
        game.
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: '#fff',
          marginTop: 10,
          textAlign: 'justify',
          paddingHorizontal: 20,
        }}>
        CRICKET WICKET has a long term ambition to become the worlds most
        popular digital sport platform. We will lead the continued drive towards
        more competitive, entertaining and constructive exploitation of cricket
        for players , enthusiasts and stakeholders
      </Text>
    </ScrollView>
  );
};
export default AboutUs;
