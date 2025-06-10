/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
// import { styles } from "react-native-floating-label-input/src/styles";

interface dataItems {
  id: string;
  Name: string;
  Birth: string;
  Height: string;
  Nationality: string;
  Role: string;
  Bats: string;
  Bowl: string;
  PopularShot: string;
  title: string;
}

const data: dataItems[] = [
  {
    id: '1',
    title: 'About David Warner',
    Name: ' David Warner',
    Birth: '27 Oct 1986, Paddington, New South Wales',
    Height: '5ft 7 in',
    Nationality: 'Australian',
    Role: 'Batter',
    Bats: 'Left handed , Opener',
    Bowl: 'right-arm leg-break, Spinner',
    PopularShot: 'Square Cut',
  },
];
const AboutPlayer = () => {
  const renderItem = ({item}: {item: dataItems}) => {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <View style={styles.viewOne}>
          <Text style={[styles.textOne, {fontWeight: 'bold'}]}>
            {item.title}
          </Text>
        </View>

        <View style={styles.viewTwo}>
          <Text style={[styles.textOne, {width: '25%'}]}>Name</Text>
          <Text style={[styles.textOne, {width: '1%'}]}>:</Text>

          <Text style={[styles.textTwo, {width: '74%'}]}>{item.Name}</Text>
        </View>

        <View style={[styles.viewTwo]}>
          <Text style={[styles.textOne, {width: '25%'}]}>Birth</Text>
          <Text style={[styles.textOne, {width: '1%'}]}>:</Text>
          <Text style={[styles.textTwo, {width: '74%'}]}>{item.Birth}</Text>
        </View>
        <View style={styles.viewTwo}>
          <Text style={[styles.textOne, {width: '25%'}]}>Height</Text>
          <Text style={[styles.textOne, {width: '1%'}]}>:</Text>
          <Text style={[styles.textTwo, {width: '74%'}]}>{item.Height}</Text>
        </View>
        <View style={styles.viewTwo}>
          <Text style={[styles.textOne, {width: '25%'}]}>Nationality</Text>
          <Text style={[styles.textOne, {width: '1%'}]}>:</Text>
          <Text style={[styles.textTwo, {width: '74%'}]}>
            {item.Nationality}
          </Text>
        </View>
        <View style={styles.viewTwo}>
          <Text style={[styles.textOne, {width: '25%'}]}>Role</Text>
          <Text style={[styles.textOne, {width: '1%'}]}>:</Text>
          <Text style={[styles.textTwo, {width: '74%'}]}>{item.Role}</Text>
        </View>
        <View style={styles.viewTwo}>
          <Text style={[styles.textOne, {width: '25%'}]}>Bats</Text>
          <Text style={[styles.textOne, {width: '1%'}]}>:</Text>
          <Text style={[styles.textTwo, {width: '74%'}]}>{item.Bats}</Text>
        </View>
        <View style={styles.viewTwo}>
          <Text style={[styles.textOne, {width: '25%'}]}>Bowl</Text>
          <Text style={[styles.textOne, {width: '1%'}]}>:</Text>
          <Text style={[styles.textTwo, {width: '74%'}]}>{item.Bowl}</Text>
        </View>
        <View style={styles.viewTwo}>
          <Text style={[styles.textOne, {width: '25%'}]}>Popular Shot</Text>
          <Text style={[styles.textOne, {width: '1%'}]}>:</Text>
          <Text style={[styles.textTwo, {width: '74%'}]}>
            {item.PopularShot}
          </Text>
        </View>

        <View>
          <View style={{backgroundColor: '#000', padding: 10}}>
            <Text style={{color: '#fff', fontSize: 18}}>Team</Text>
          </View>
          <View style={{backgroundColor: '#878787', padding: 8}}>
            <Text style={{color: '#fff', fontSize: 16, textAlign: 'justify'}}>
              Australia, Delhi Capitals, new South Wales, Middlesex, cricket ,
              Australia, Delhi Capitals, new South Wales, Middlesex, cricket ,
              Australia, Delhi Capitals, new South Wales, Middlesex, cricket
            </Text>
          </View>
        </View>

        <View>
          <View style={{backgroundColor: '#000', padding: 10}}>
            <Text style={{color: '#fff', fontSize: 18}}>T20</Text>
          </View>
          <View style={{backgroundColor: '#878787', padding: 8}}>
            {/* <Text style={{ color: '#fff', fontSize: 16 }}>Teaaaam</Text> */}
            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: '#fff',
                paddingVertical: 5,
              }}>
              <Text style={{color: '#fff', fontSize: 16, width: '30%'}}>
                debut
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  width: '70%',
                  textAlign: 'justify',
                }}>
                vs South Africa, 2009-01-11, Melbourne Crciket Ground
              </Text>
            </View>
            <View style={{flexDirection: 'row', paddingVertical: 5}}>
              <Text style={{color: '#fff', fontSize: 16, width: '30%'}}>
                Last Played
              </Text>
              <Text
                style={{
                  color: '#fff',
                  width: '70%',
                  fontSize: 16,
                  textAlign: 'justify',
                }}>
                vs South Africa, 2009-01-11, Melbourne Crciket Ground
              </Text>
            </View>
          </View>
        </View>

        <View>
          <View style={{backgroundColor: '#000', padding: 10}}>
            <Text style={{color: '#fff', fontSize: 18}}>TEST</Text>
          </View>
          <View style={{backgroundColor: '#878787', padding: 8}}>
            {/* <Text style={{ color: '#fff', fontSize: 16 }}>Teaaaam</Text> */}
            <View style={{flexDirection: 'row', paddingVertical: 5}}>
              <Text style={{color: '#fff', fontSize: 16, width: '30%'}}>
                debut
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  width: '70%',
                  textAlign: 'justify',
                }}>
                vs South Africa, 2009-01-11, Melbourne Crciket Ground
              </Text>
            </View>
            <View style={{flexDirection: 'row', paddingVertical: 5}}>
              <Text style={{color: '#fff', fontSize: 16, width: '30%'}}>
                Last Played
              </Text>
              <Text
                style={{
                  color: '#fff',
                  width: '70%',
                  fontSize: 16,
                  textAlign: 'justify',
                }}>
                vs South Africa, 2009-01-11, Melbourne Crciket Ground
              </Text>
            </View>
          </View>
        </View>

        <View>
          <View style={{backgroundColor: '#000', padding: 10}}>
            <Text style={{color: '#fff', fontSize: 18}}>ODI</Text>
          </View>
          <View style={{backgroundColor: '#878787', padding: 8}}>
            {/* <Text style={{ color: '#fff', fontSize: 16 }}>Teaaaam</Text> */}
            <View style={{flexDirection: 'row', paddingVertical: 5}}>
              <Text style={{color: '#fff', fontSize: 16, width: '30%'}}>
                debut
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  width: '70%',
                  textAlign: 'justify',
                }}>
                vs South Africa, 2009-01-11, Melbourne Crciket Ground
              </Text>
            </View>
            <View style={{flexDirection: 'row', paddingVertical: 5}}>
              <Text style={{color: '#fff', fontSize: 16, width: '30%'}}>
                Last Played
              </Text>
              <Text
                style={{
                  color: '#fff',
                  width: '70%',
                  fontSize: 16,
                  textAlign: 'justify',
                }}>
                vs South Africa, 2009-01-11, Melbourne Crciket Ground
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{backgroundColor: '#000', padding: 10}}>
            <Text style={{color: '#fff', fontSize: 18}}>IPL</Text>
          </View>
          <View style={{backgroundColor: '#878787', padding: 8}}>
            {/* <Text style={{ color: '#fff', fontSize: 16 }}>Teaaaam</Text> */}
            <View style={{flexDirection: 'row', paddingVertical: 5}}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  width: '30%',
                  textAlign: 'justify',
                }}>
                debut
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  width: '70%',
                  textAlign: 'justify',
                }}>
                vs South Africa, 2009-01-11, Melbourne Crciket Ground hgjkgjgj
                hhjfhgjksd hgjfg jhgjhs
              </Text>
            </View>
            <View style={{flexDirection: 'row', paddingVertical: 5}}>
              <Text style={{color: '#fff', fontSize: 16, width: '30%'}}>
                Last Played
              </Text>
              <Text
                style={{
                  color: '#fff',
                  width: '70%',
                  fontSize: 16,
                  textAlign: 'justify',
                }}>
                vs South Africa, 2009-01-11, Melbourne Crciket Ground
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{height: '100%', backgroundColor: '#4fa8b9'}}>
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
    // flexDirection: 'row',
    backgroundColor: '#fff',
    // justifyContent:'space-around',
    marginVertical: 3,
    padding: 5,
  },
  viewTwo: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    marginVertical: 3,
    margin: 2,
    padding: 5,
    // textAlign: 'justify',
    marginHorizontal: 2,
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    elevation: 10,
    // paddingRight:5
  },
  textOne: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#000',
    // marginHorizontal: 10
  },
  textTwo: {
    fontSize: 16,
    color: '#000',
    paddingRight: 8,
    textAlign: 'justify',
    marginHorizontal: 5,
  },
});
export default AboutPlayer;
