/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {Text, View, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {moderateScale} from 'react-native-size-matters';

// const countries = ['Select Options', 'T20', 'PSL', 'BPL', 'DODI', 'DT20'];
const rideTypeData = [
  {label: 'All', value: 'All'},
  {label: 'ODI', value: 'ODI'},
  {label: 'T20', value: 'T20'},
  {label: 'PSL', value: 'PSL'},
  {label: 'BPL', value: 'BPL'},
  {label: 'DODI', value: 'DODI'},
  {label: 'DT20', value: 'DT20'},
];

const MushFiqurRahim = () => {
  const [rideType, setRideType] = useState<string | null>(null);
  const [rideTypeFocus, setRideTypeFocus] = useState(false);
  //   const renderRideLabel = () => {
  //     if (rideType || rideTypeFocus) {
  //       return (
  //         <Text style={[styles.label, rideTypeFocus && {color: '#14302e'}]}>
  //           Selected Ride Type *
  //         </Text>
  //       );
  //     }
  //     return null;
  //   };
  return (
    <ScrollView>
      <View style={{backgroundColor: '#4fa8b9'}}>
        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Image
                        source={require('../../assets/icons8-play-50.png')}
                        style={{
                            width: moderateScale(20, 0.3),
                            height: moderateScale(20, 0.3),
                            marginTop: 10,
                            margin: 5
                        }}
                    />
                    <Text style={styles.headerText}>Mushfigur Rahim</Text>
                    <Image source={require("../../assets/icons8-play-50.png")} style={{
                        width: moderateScale(20, 0.3),
                        height: moderateScale(20, 0.3),
                        marginTop: 10,
                        margin: 5
                    }}></Image>
                </View> */}

        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between',
          }}>
          <Dropdown
            style={[styles.dropdown, rideTypeFocus && {borderColor: '#14302e'}]}
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
          <View
            style={{
              borderColor: 'gray',
              backgroundColor: '#fff',
              borderWidth: 2,
              width: '45%',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <TouchableOpacity>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#ffb3b3',
            justifyContent: 'space-around',
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
    fontSize: moderateScale(20, 0.3),
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
    height: 50,
    borderColor: '#14302e',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: '50%',
    backgroundColor: '#fff',
  },
  rideView: {
    backgroundColor: '#fff',
    width: '45%',
  },
  placeholderStyle: {
    fontSize: moderateScale(16, 0.3),
    color: '#a6a6a6',
    backgroundColor:'#fff'
  },
  selectedTextStyle: {
    fontSize: moderateScale(16, 0.3),
    color: '#000',
    backgroundColor:'#fff'
  },
  itemTextStyle: {
    color: '#000',
    backgroundColor:'#fff'
  },
  label: {
    position: 'absolute',
    left: 20,
    top: 7,
    zIndex: 999,
    paddingHorizontal: 3,
    fontSize: moderateScale(10, 0.3),
    color: '#a6a6a6',
    backgroundColor: '#fff',
  },
});
export default MushFiqurRahim;
