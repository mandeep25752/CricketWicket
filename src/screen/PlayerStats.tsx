/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {Text, View, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {moderateScale} from 'react-native-size-matters';

const rideTypeData = [
  {label: 'All', value: 'All'},
  {label: 'ODI', value: 'ODI'},
  {label: 'T20', value: 'T20'},
  {label: 'PSL', value: 'PSL'},
  {label: 'BPL', value: 'BPL'},
  {label: 'DODI', value: 'DODI'},
  {label: 'DT20', value: 'DT20'},
];
const PlayerStats = () => {
  const [rideType, setRideType] = useState<string | null>(null);
  const [rideTypeFocus, setRideTypeFocus] = useState(false);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{backgroundColor: '#4fa8b9'}}>
        <View style={{flexDirection: 'row'}}>
          {/* <View style={{borderColor: 'gray', borderWidth: 1, margin: 4}}> */}
          <TouchableOpacity
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Dropdown
              style={[
                styles.dropdown,
                rideTypeFocus && {borderColor: '#14302e'},
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              itemTextStyle={styles.itemTextStyle}
              data={rideTypeData}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!rideTypeFocus ? 'Select Match Type *' : '...'}
              value={rideType}
              onFocus={() => setRideTypeFocus(true)}
              onBlur={() => setRideTypeFocus(false)}
              onChange={item => {
                if (typeof item.value === 'string') {
                  setRideType(item.value);
                }
                setRideTypeFocus(false);
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: 'gray',
              backgroundColor: '#fff',
              borderWidth: 2,
              width: '27%',
              margin: 4,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              borderRadius: 10,
              height: moderateScale(45, 0.3),
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>All</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#ffb3b3',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <Text style={styles.texts}>ALL</Text>
          <Text style={styles.texts}>ODI</Text>
          <Text style={styles.texts}>T20</Text>
          <Text style={styles.texts}>PSL</Text>
          <Text style={styles.texts}>BPL</Text>
          <Text style={styles.texts}>DODI</Text>
          <Text style={styles.texts}>DT20</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.textss}>ALL</Text>
          <Text style={styles.textss}>ODI</Text>
          <Text style={styles.textss}>T20</Text>
          <Text style={styles.textss}>PSL</Text>
          <Text style={styles.textss}>BPL</Text>
          <Text style={styles.textss}>DODI</Text>
          <Text style={styles.textss}>DT20</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.textss}>ALL</Text>
          <Text style={styles.textss}>ODI</Text>
          <Text style={styles.textss}>T20</Text>
          <Text style={styles.textss}>PSL</Text>
          <Text style={styles.textss}>BPL</Text>
          <Text style={styles.textss}>DODI</Text>
          <Text style={styles.textss}>DT20</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.textss}>ALL</Text>
          <Text style={styles.textss}>ODI</Text>
          <Text style={styles.textss}>T20</Text>
          <Text style={styles.textss}>PSL</Text>
          <Text style={styles.textss}>BPL</Text>
          <Text style={styles.textss}>DODI</Text>
          <Text style={styles.textss}>DT20</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.textss}>ALL</Text>
          <Text style={styles.textss}>ODI</Text>
          <Text style={styles.textss}>T20</Text>
          <Text style={styles.textss}>PSL</Text>
          <Text style={styles.textss}>BPL</Text>
          <Text style={styles.textss}>DODI</Text>
          <Text style={styles.textss}>DT20</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.textss}>ALL</Text>
          <Text style={styles.textss}>ODI</Text>
          <Text style={styles.textss}>T20</Text>
          <Text style={styles.textss}>PSL</Text>
          <Text style={styles.textss}>BPL</Text>
          <Text style={styles.textss}>DODI</Text>
          <Text style={styles.textss}>DT20</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.textss}>ALL</Text>
          <Text style={styles.textss}>ODI</Text>
          <Text style={styles.textss}>T20</Text>
          <Text style={styles.textss}>PSL</Text>
          <Text style={styles.textss}>BPL</Text>
          <Text style={styles.textss}>DODI</Text>
          <Text style={styles.textss}>DT20</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.textss}>ALL</Text>
          <Text style={styles.textss}>ODI</Text>
          <Text style={styles.textss}>T20</Text>
          <Text style={styles.textss}>PSL</Text>
          <Text style={styles.textss}>BPL</Text>
          <Text style={styles.textss}>DODI</Text>
          <Text style={styles.textss}>DT20</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#ffb3b3',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <Text style={styles.texts}>Batting Stats</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.textss}>ALL</Text>
          <Text style={styles.textss}>ODI</Text>
          <Text style={styles.textss}>T20</Text>
          <Text style={styles.textss}>PSL</Text>
          <Text style={styles.textss}>BPL</Text>
          <Text style={styles.textss}>DODI</Text>
          <Text style={styles.textss}>DT20</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.textss}>ALL</Text>
          <Text style={styles.textss}>ODI</Text>
          <Text style={styles.textss}>T20</Text>
          <Text style={styles.textss}>PSL</Text>
          <Text style={styles.textss}>BPL</Text>
          <Text style={styles.textss}>DODI</Text>
          <Text style={styles.textss}>DT20</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.textss}>ALL</Text>
          <Text style={styles.textss}>ODI</Text>
          <Text style={styles.textss}>T20</Text>
          <Text style={styles.textss}>PSL</Text>
          <Text style={styles.textss}>BPL</Text>
          <Text style={styles.textss}>DODI</Text>
          <Text style={styles.textss}>DT20</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.textss}>ALL</Text>
          <Text style={styles.textss}>ODI</Text>
          <Text style={styles.textss}>T20</Text>
          <Text style={styles.textss}>PSL</Text>
          <Text style={styles.textss}>BPL</Text>
          <Text style={styles.textss}>DODI</Text>
          <Text style={styles.textss}>DT20</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.textss}>ALL</Text>
          <Text style={styles.textss}>ODI</Text>
          <Text style={styles.textss}>T20</Text>
          <Text style={styles.textss}>PSL</Text>
          <Text style={styles.textss}>BPL</Text>
          <Text style={styles.textss}>DODI</Text>
          <Text style={styles.textss}>DT20</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.textss}>ALL</Text>
          <Text style={styles.textss}>ODI</Text>
          <Text style={styles.textss}>T20</Text>
          <Text style={styles.textss}>PSL</Text>
          <Text style={styles.textss}>BPL</Text>
          <Text style={styles.textss}>DODI</Text>
          <Text style={styles.textss}>DT20</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.textss}>ALL</Text>
          <Text style={styles.textss}>ODI</Text>
          <Text style={styles.textss}>T20</Text>
          <Text style={styles.textss}>PSL</Text>
          <Text style={styles.textss}>BPL</Text>
          <Text style={styles.textss}>DODI</Text>
          <Text style={styles.textss}>DT20</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.textss}>ALL</Text>
          <Text style={styles.textss}>ODI</Text>
          <Text style={styles.textss}>T20</Text>
          <Text style={styles.textss}>PSL</Text>
          <Text style={styles.textss}>BPL</Text>
          <Text style={styles.textss}>DODI</Text>
          <Text style={styles.textss}>DT20</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#ffb3b3',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <Text style={styles.texts}>Bowling Stats</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.textss}>ALL</Text>
          <Text style={styles.textss}>ODI</Text>
          <Text style={styles.textss}>T20</Text>
          <Text style={styles.textss}>PSL</Text>
          <Text style={styles.textss}>BPL</Text>
          <Text style={styles.textss}>DODI</Text>
          <Text style={styles.textss}>DT20</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.textss}>ALL</Text>
          <Text style={styles.textss}>ODI</Text>
          <Text style={styles.textss}>T20</Text>
          <Text style={styles.textss}>PSL</Text>
          <Text style={styles.textss}>BPL</Text>
          <Text style={styles.textss}>DODI</Text>
          <Text style={styles.textss}>DT20</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.textss}>ALL</Text>
          <Text style={styles.textss}>ODI</Text>
          <Text style={styles.textss}>T20</Text>
          <Text style={styles.textss}>PSL</Text>
          <Text style={styles.textss}>BPL</Text>
          <Text style={styles.textss}>DODI</Text>
          <Text style={styles.textss}>DT20</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.textss}>ALL</Text>
          <Text style={styles.textss}>ODI</Text>
          <Text style={styles.textss}>T20</Text>
          <Text style={styles.textss}>PSL</Text>
          <Text style={styles.textss}>BPL</Text>
          <Text style={styles.textss}>DODI</Text>
          <Text style={styles.textss}>DT20</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.textss}>ALL</Text>
          <Text style={styles.textss}>ODI</Text>
          <Text style={styles.textss}>T20</Text>
          <Text style={styles.textss}>PSL</Text>
          <Text style={styles.textss}>BPL</Text>
          <Text style={styles.textss}>DODI</Text>
          <Text style={styles.textss}>DT20</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.textss}>ALL</Text>
          <Text style={styles.textss}>ODI</Text>
          <Text style={styles.textss}>T20</Text>
          <Text style={styles.textss}>PSL</Text>
          <Text style={styles.textss}>BPL</Text>
          <Text style={styles.textss}>DODI</Text>
          <Text style={styles.textss}>DT20</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.textss}>ALL</Text>
          <Text style={styles.textss}>ODI</Text>
          <Text style={styles.textss}>T20</Text>
          <Text style={styles.textss}>PSL</Text>
          <Text style={styles.textss}>BPL</Text>
          <Text style={styles.textss}>DODI</Text>
          <Text style={styles.textss}>DT20</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.textss}>ALL</Text>
          <Text style={styles.textss}>ODI</Text>
          <Text style={styles.textss}>T20</Text>
          <Text style={styles.textss}>PSL</Text>
          <Text style={styles.textss}>BPL</Text>
          <Text style={styles.textss}>DODI</Text>
          <Text style={styles.textss}>DT20</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  texts: {
    color: '#fff',
    // marginHorizontal: 10,
    // marginVertical: 10,
    fontSize: 18,
    margin: 15,
  },
  textss: {
    color: '#fff',
    // marginHorizontal: 10,
    // marginVertical: 10,
    fontSize: 16,
    margin: 15,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: '#4fa8b9',
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: '100%',
  },
  btnTxt: {
    color: '#000',
    fontSize: moderateScale(16, 0.3),
    width: '100%',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  dropdown: {
    height: moderateScale(45, 0.3),
    borderColor: '#14302e',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: '67%',
    backgroundColor: '#fff',
    marginTop: 10,
    marginLeft: 15,
  },
  placeholderStyle: {
    width: '100%',
    fontSize: moderateScale(14, 0.3),
    color: '#a6a6a6',
  },
  selectedTextStyle: {
    fontSize: moderateScale(14, 0.3),
    color: '#000',
  },
  itemTextStyle: {
    color: '#000',
  },
});
export default PlayerStats;
