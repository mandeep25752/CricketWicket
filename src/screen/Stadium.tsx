/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface StadiumProps {
  navigation: any;
}

interface TextItem {
  id: string;
  text: string;
}

const Stadium = (props: StadiumProps) => {
  const {navigation} = props;
  const handleStadiumOption = () => {
    navigation.navigate('StadiumOptions');
  };
  // const [isExpanded, setIsExpanded] = useState(false);
  const searchInputRef = useRef<TextInput>(null);
  const [searchText, setSearchText] = useState('');
  const [filteredStadium, setFilteredStadium] = useState<TextItem[]>([]);
  const handleSearchIconClick = () => {
    // setIsExpanded(true);
    searchInputRef.current?.focus();
  };
  const handleClearSearch = () => {
    setSearchText('');
    searchInputRef.current?.clear();
    searchInputRef.current?.focus();
  };
  const data: TextItem[] = [
    {id: '1', text: 'MA Chidambaram Stadium Chennai'},
    {id: '2', text: 'Rajiv Gandhi International Stadium Hydrabad'},
    {id: '3', text: 'ICC Academy Ground No 2 Dubai'},
    {id: '4', text: 'Solvangs Pak Glostrup Denamrk'},
    {id: '5', text: 'Himachal Pradesh Cricket Association Stadium Dharamsala'},
    {id: '7', text: 'Daren Sammy National Cricket Stadium Gros Islet Lucia'},
    {
      id: '6',
      text: 'Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium Lucknow',
    },
    {id: '8', text: 'Narendra Modi Stadium Ahmedabad'},
  ];

  const handleSearch = (text: string) => {
    setSearchText(text);

    const filtered = data.filter(series =>
      series.text.toLowerCase().includes(text.toLowerCase()),
    );

    setFilteredStadium(filtered);
  };
  const renderItem = ({item}: {item: TextItem}) => {
    return (
      <Pressable style={styles.btn} onPress={handleStadiumOption}>
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
      <View
        style={{
          backgroundColor: '#4fa8b9',
          paddingVertical: moderateScale(6, 0.3),
          marginBottom: 10,
          elevation: 100,
        }}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/back.png')}
            style={styles.backBtn}
          />
          <Text style={styles.notificationText}>Back</Text>
        </Pressable>
        <View style={styles.searchContainer}>
          <TouchableOpacity
            onPress={handleSearchIconClick}
            style={styles.iconContainer}>
            <Image
              source={require('../../assets/search.png')}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
          <View style={styles.inputContainer}>
            <TextInput
              ref={searchInputRef}
              style={styles.input}
              placeholder="Type Stadium Name"
              placeholderTextColor={'#5A5A5A'}
              onChangeText={handleSearch}
              // autoFocus
            />
            <TouchableOpacity
              onPress={handleClearSearch}
              style={styles.clearIconContainer}>
              <MaterialCommunityIcons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {searchText.length === 0 ? (
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          renderItem={renderItem}
        />
      ) : (
        <FlatList
          data={filteredStadium}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          renderItem={renderItem}
        />
      )}
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
    fontWeight: 'bold',
    fontSize: moderateScale(16, 0.3),
    width: '90%',
  },
});

export default Stadium;
