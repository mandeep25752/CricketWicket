/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import React from 'react';

interface pointTableProps {
  id: string;
  Stadium: string;
  Mode: string;
  Match: string;
  Win: string;
  Loss: string;
  AVG: string;
}

const dataItem: pointTableProps[] = [
  {
    id: '1',
    Stadium: 'Wankhede Stadium',
    Mode: 'IPL',
    Match: '5',
    Win: '4',
    Loss: '1',
    AVG: '171.2',
  },
  {
    id: '2',
    Stadium: 'Wankhede Stadium',
    Mode: 'IPL',
    Match: '5',
    Win: '4',
    Loss: '1',
    AVG: '171.2',
  },
  {
    id: '3',
    Stadium: 'Wankhede Stadium',
    Mode: 'IPL',
    Match: '5',
    Win: '4',
    Loss: '1',
    AVG: '171.2',
  },
  {
    id: '4',
    Stadium: 'Wankhede Stadium',
    Mode: 'IPL',
    Match: '5',
    Win: '4',
    Loss: '1',
    AVG: '171.2',
  },
  {
    id: '5',
    Stadium: 'Wankhede Stadium',
    Mode: 'IPL',
    Match: '5',
    Win: '4',
    Loss: '1',
    AVG: '171.2',
  },
  {
    id: '6',
    Stadium: 'Wankhede Stadium',
    Mode: 'IPL',
    Match: '5',
    Win: '4',
    Loss: '1',
    AVG: '171.2',
  },
  {
    id: '7',
    Stadium: 'Wankhede Stadium',
    Mode: 'IPL',
    Match: '5',
    Win: '4',
    Loss: '1',
    AVG: '171.2',
  },
  {
    id: '8',
    Stadium: 'Wankhede Stadium',
    Mode: 'IPL',
    Match: '5',
    Win: '4',
    Loss: '1',
    AVG: '171.2',
  },
  {
    id: '9',
    Stadium: 'Wankhede Stadium',
    Mode: 'IPL',
    Match: '5',
    Win: '4',
    Loss: '1',
    AVG: '171.2',
  },
  {
    id: '10',
    Stadium: 'Wankhede Stadium',
    Mode: 'IPL',
    Match: '5',
    Win: '4',
    Loss: '1',
    AVG: '171.2',
  },
];

const TeamStatStadium = () => {
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
              {/* <Image source={require('../../assets/INDIALOGO.png')} style={{ height: 30, width: 30 }}></Image> */}
              <Text style={[styles.texts, {color: '#00008B'}]}>
                {item.Stadium}
              </Text>
              <Text style={styles.texts}>{item.Mode}</Text>
              <Text style={styles.texts}>{item.Match}</Text>
              <Text style={styles.texts}>{item.Win}</Text>
              <Text style={styles.texts}>{item.Loss}</Text>
              <Text style={styles.texts}>{item.AVG}</Text>
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
        <Text style={styles.text}>Stadium</Text>
        <Text style={[styles.text, {marginLeft: 80}]}>Mode</Text>
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
export default TeamStatStadium;
