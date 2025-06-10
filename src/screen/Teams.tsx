/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

interface TeamsProps {
  navigation: any;
}

interface TextItem {
  id: string;
  text: string;
}

const Teams = (props: TeamsProps) => {
  const {navigation} = props;
  const handleTeamsOptions = () => {
    navigation.navigate('TeamsOptions');
  };

  const data: TextItem[] = [
    {id: '1', text: 'Chennai Super Kings'},
    {id: '2', text: 'Delhi Capitals'},
    {id: '3', text: 'Gujrat Titans'},
    {id: '4', text: 'Kolkata Knight Riders'},
    {id: '5', text: 'Lucknow Super Giants'},
    {id: '6', text: 'Mumbai Indians'},
    {id: '7', text: 'Punjab Kings'},
    {id: '8', text: 'Rajsthan Royals'},
    {id: '9', text: 'Rooyal Challengers Banglore'},
    {id: '10', text: 'Sunrisers Hyderabad'},
  ];

  const renderItem = ({item}: {item: TextItem}) => {
    return (
      <Pressable style={styles.btn} onPress={handleTeamsOptions}>
        {({pressed}) => (
          <>
            <Text
              style={[styles.btnTxt, {color: pressed ? '#e76f51' : '#fff'}]}>
              {item.text}
            </Text>
            <Image
              source={require('../../assets/icons8-play-50.png')}
              style={{
                width: moderateScale(20, 0.3),
                height: moderateScale(20, 0.3),
                tintColor: pressed ? '#e76f51' : '#fff',
              }}
            />
          </>
        )}
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#4fa8b9',
  },
  backBtn: {
    height: moderateScale(20),
    width: moderateScale(20),
    resizeMode: 'contain',
    tintColor: '#fff',
    margin: moderateScale(10),
  },
  notificationText: {
    color: '#fff',
    fontSize: moderateScale(16, 0.3),
    fontWeight: '500',
  },
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    elevation: 7,
    margin: moderateScale(10),
    borderRadius: moderateScale(25),
    paddingHorizontal: moderateScale(15),
  },
  textInput: {
    fontSize: moderateScale(18, 0.3),
    color: '#000',
    width: '80%',
  },
  searchIcon: {
    height: moderateScale(20),
    width: moderateScale(20),
    resizeMode: 'cover',
  },
  iconContainer: {
    marginRight: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 8,
    backgroundColor: '#fff',
    elevation: 7,
    margin: moderateScale(10),
    borderRadius: moderateScale(25),
    paddingHorizontal: moderateScale(16),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    height: 40,
  },
  clearIconContainer: {
    marginLeft: 8,
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
    elevation: 15,
  },
  btnTxt: {
    color: '#000',
    fontSize: moderateScale(16, 0.3),
    width: '90%',
    fontWeight: 'bold',
  },
});

export default Teams;
