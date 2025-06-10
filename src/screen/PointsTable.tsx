/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';

interface pointTableProps {
  id: string;
  team: string;
  played: string;
  win: string;
  loss: string;
  NR: string;
  NRR: string;
  Pts: string;
}

const dataItem: pointTableProps[] = [
  {
    id: '1',
    team: 'GT',
    played: '14',
    win: '10',
    loss: '4',
    NR: '0',
    NRR: '+0.258',
    Pts: '16',
  },
  {
    id: '2',
    team: 'CSK',
    played: '14',
    win: '10',
    loss: '4',
    NR: '0',
    NRR: '+0.258',
    Pts: '16',
  },
  {
    id: '3',
    team: 'LSG',
    played: '14',
    win: '10',
    loss: '4',
    NR: '0',
    NRR: '+0.258',
    Pts: '16',
  },
  {
    id: '4',
    team: 'MI',
    played: '14',
    win: '10',
    loss: '4',
    NR: '0',
    NRR: '+0.258',
    Pts: '16',
  },
  {
    id: '5',
    team: 'RR',
    played: '14',
    win: '10',
    loss: '4',
    NR: '0',
    NRR: '+0.258',
    Pts: '16',
  },
  {
    id: '6',
    team: 'RCB',
    played: '14',
    win: '10',
    loss: '4',
    NR: '0',
    NRR: '+0.258',
    Pts: '16',
  },
  {
    id: '7',
    team: 'KKR',
    played: '14',
    win: '10',
    loss: '4',
    NR: '0',
    NRR: '+0.258',
    Pts: '16',
  },
  {
    id: '8',
    team: 'PBKS',
    played: '14',
    win: '10',
    loss: '4',
    NR: '0',
    NRR: '+0.258',
    Pts: '16',
  },
  {
    id: '9',
    team: 'DC',
    played: '14',
    win: '10',
    loss: '4',
    NR: '0',
    NRR: '+0.258',
    Pts: '16',
  },
  {
    id: '10',
    team: 'SRH',
    played: '14',
    win: '10',
    loss: '4',
    NR: '0',
    NRR: '+0.258',
    Pts: '16',
  },
];

const PointsTable = () => {
  const renderItem = ({item}: {item: pointTableProps}) => {
    return (
      // <TouchableOpacity>
      <ScrollView>
        <View
          style={{
            flex: 1,

            backgroundColor: '#fff',
            // elevation: 100,
            maxWidth: 'auto',
            marginVertical: 7,
            padding: 8,
            borderColor: '#000',
            borderWidth: 1,
            borderRadius: 8,
          }}>
          <View style={{}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image
                source={require('../../assets/INDIALOGO.png')}
                style={{height: 30, width: 30}}
              />
              <Text style={styles.texts}>{item.team}</Text>
              <Text style={styles.texts}>{item.played}</Text>
              <Text style={styles.texts}>{item.win}</Text>
              <Text style={styles.texts}>{item.loss}</Text>
              <Text style={styles.texts}>{item.NR}</Text>
              <Text style={styles.texts}>{item.NRR}</Text>
              <Text style={{fontSize: 20, color: 'orange', fontWeight: 'bold'}}>
                {item.Pts}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      // </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={{backgroundColor: '#4fa8b9'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{color: '#000', fontWeight: 'bold', fontSize: 18, margin: 8}}>
          POINTS TABLE
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 5,
        }}>
        <Text style={styles.text}>Team</Text>
        <Text style={styles.text} />
        <Text style={styles.text}>P</Text>
        <Text style={styles.text}>W</Text>
        <Text style={styles.text}>L</Text>
        <Text style={styles.text}>NR</Text>
        <Text style={styles.text}>NRR</Text>
        <Text style={styles.text}>Pts</Text>
      </View>

      <FlatList
        data={dataItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        renderItem={renderItem}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  texts: {
    color: '#000',
    fontSize: 15,
  },
  text: {
    color: '#fff',
  },
});
export default PointsTable;
