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
  versus: string;
  type: string;
  Match: string;
  Win: string;
  Loss: string;
  AVG: string;
}

const dataItem: pointTableProps[] = [
  {
    id: '1',
    team: 'GT',
    versus: 'CSK',
    type: 'IPL',
    Match: '4',
    Win: '4',
    Loss: '0',
    AVG: '166.8',
  },
  {
    id: '2',
    team: 'GT',
    versus: 'CSK',
    type: 'IPL',
    Match: '4',
    Win: '4',
    Loss: '0',
    AVG: '166.8',
  },
  {
    id: '3',
    team: 'GT',
    versus: 'CSK',
    type: 'IPL',
    Match: '4',
    Win: '4',
    Loss: '0',
    AVG: '166.8',
  },
  {
    id: '4',
    team: 'GT',
    versus: 'CSK',
    type: 'IPL',
    Match: '4',
    Win: '4',
    Loss: '0',
    AVG: '166.8',
  },
  {
    id: '5',
    team: 'GT',
    versus: 'CSK',
    type: 'IPL',
    Match: '4',
    Win: '4',
    Loss: '0',
    AVG: '166.8',
  },
  {
    id: '6',
    team: 'GT',
    versus: 'CSK',
    type: 'IPL',
    Match: '4',
    Win: '4',
    Loss: '0',
    AVG: '166.8',
  },
  {
    id: '7',
    team: 'GT',
    versus: 'CSK',
    type: 'IPL',
    Match: '4',
    Win: '4',
    Loss: '0',
    AVG: '166.8',
  },
  {
    id: '8',
    team: 'GT',
    versus: 'CSK',
    type: 'IPL',
    Match: '4',
    Win: '4',
    Loss: '0',
    AVG: '166.8',
  },
  {
    id: '9',
    team: 'GT',
    versus: 'CSK',
    type: 'IPL',
    Match: '4',
    Win: '4',
    Loss: '0',
    AVG: '166.8',
  },
  {
    id: '10',
    team: 'GT',
    versus: 'CSK',
    type: 'IPL',
    Match: '4',
    Win: '4',
    Loss: '0',
    AVG: '166.8',
  },
];

const TeamBattle = () => {
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
              <Text style={styles.texts}>{item.versus}</Text>
              <Text style={styles.texts}>{item.type}</Text>
              <Text style={styles.texts}>{item.Match}</Text>
              <Text style={styles.texts}>{item.Win}</Text>
              <Text style={styles.texts}>{item.Loss}</Text>
              <Text style={styles.texts}>{item.AVG}</Text>
              {/* <Text style={{ fontSize: 20,color:'orange', fontWeight:"bold" }}>{item.Pts}</Text> */}
            </View>
          </View>
        </View>
      </ScrollView>
      // </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={{backgroundColor: '#4fa8b9'}}>
      <View
        style={{
          padding: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 5,
          backgroundColor: '#F89880',
        }}>
        <Text style={styles.text} />
        <Text style={styles.text} />
        <Text style={styles.text}>Team</Text>
        <Text style={styles.text}>Versus</Text>
        <Text style={styles.text}>Type</Text>
        <Text style={styles.text}>M</Text>
        <Text style={styles.text}>Win</Text>
        <Text style={styles.text}>Loss</Text>
        <Text style={styles.text}>AVG</Text>
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
    fontSize: 16,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});
export default TeamBattle;
