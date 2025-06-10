/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Switch,
  Modal,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {ScrollView} from 'react-native';

interface Language {
  id: number;
  name: string;
}

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loadImage, setLoadImage] = useState(false);
  const [lowQuality, setLowQuality] = useState(false);
  const [allowNotifications, setAllowNotifications] = useState(false);
  const [sound, setSound] = useState(false);
  const [vibration, setVibration] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(
    null,
  );
  const [isModalVisible, setIsModalVisible] = useState(false);

  const languages: Language[] = [
    {id: 1, name: 'English'},
    {id: 2, name: 'Spanish'},
    {id: 3, name: 'French'},
    // ... other languages
  ];

  const toggleSwitchOne = () => setDarkMode(previousState => !previousState);


  const toggleSwitchTwo = () => setLoadImage(previousState => !previousState);
 
  const toggleSwitchThree = () => setLowQuality(previousState => !previousState);
  
  const toggleSwitchFour = () => setAllowNotifications(previousState => !previousState);
  
  const toggleSwitchFive = () => setSound(previousState => !previousState);

  const toggleSwitchSix = () => setVibration(previousState => !previousState);
  // 
  // const toggleSwitch = () => {
  //   setDarkMode(!darkMode);
  // };
  // const toggleSwitch1 = () => {
  //   setLoadImage(!loadImage);
  // };
  // const toggleSwitch2 = () => {
  //   setLowQuality(!lowQuality);
  // };
  // const toggleSwitch3 = () => {
  //   setAllowNotifications(!allowNotifications);
  // };
  // const toggleSwitch4 = () => {
  //   setSound(!sound);
  // };
  // const toggleSwitch5 = () => {
  //   setVibration(!vibration);
  // };

  const handleLanguageSelection = (language: Language) => {
    setSelectedLanguage(language);
    setIsModalVisible(false);
  };

  const renderLanguageItem = ({item}: {item: Language}) => (
    <TouchableOpacity
      style={styles.languageItem}
      onPress={() => handleLanguageSelection(item)}>
      <Text style={styles.languageText}>{item.name}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={[styles.headerTxt, {padding: 10}]}>
          DATA SAVER OPTIONS
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10,
            paddingHorizontal: 10,
          }}>
          <View>
            <Text style={styles.txt}>Automatic data refresh</Text>
            <Text style={styles.subTxt}>Manual refresh is still available</Text>
          </View>
          {/* <Switch value={darkMode} onValueChange={() => toggleSwitch()}   /> */}
          <Switch     trackColor={{false: '#4E6EB', true: '#E4E6EB'}}
        thumbColor={darkMode ? '#0000CD' : 'gray'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitchOne}
        value={darkMode} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10,
            paddingHorizontal: 10,
          }}>
          <View>
            <Text style={styles.txt}>Load Images</Text>
            <Text style={styles.subTxt}>Effects data usage</Text>
          </View>
          {/* <Switch value={loadImage} onValueChange={() => toggleSwitch1()} /> */}
          <Switch     trackColor={{false: '#4E6EB', true: '#E4E6EB'}}
        thumbColor={loadImage ? '#0000CD' : 'gray'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitchTwo}
        value={loadImage} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10,
            paddingHorizontal: 10,
          }}>
          <View>
            <Text style={styles.txt}>Low Quality Video Playback</Text>
            <Text style={styles.subTxt}>Save data on video streaming</Text>
          </View>
          {/* <Switch value={lowQuality} onValueChange={() => toggleSwitch2()} /> */}
          <Switch     trackColor={{false: '#4E6EB', true: '#E4E6EB'}}
        thumbColor={lowQuality ? '#0000CD' : 'gray'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitchThree}
        value={lowQuality} />
        </View>
        <View
          style={{
            width: '100%',
            height: moderateScale(2),
            backgroundColor: '#e9ecef',
          }}
        />
        <Text style={[styles.headerTxt, {padding: 10}]}>VIDEO OPTION</Text>
        <TouchableOpacity
          style={styles.languageButton}
          onPress={() => setIsModalVisible(true)}>
          <Text style={styles.txt}>Video Language</Text>
          <Text style={styles.subTxt}>
            {selectedLanguage
              ? selectedLanguage.name
              : 'Please select your preferred language for videos'}
          </Text>
        </TouchableOpacity>
        <Modal visible={isModalVisible} animationType="slide" transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <FlatList
                data={languages}
                renderItem={renderLanguageItem}
                keyExtractor={item => item.id.toString()}
                style={styles.languageList}
              />
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setIsModalVisible(false)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View
          style={{
            width: '100%',
            height: moderateScale(2),
            backgroundColor: '#e9ecef',
          }}
        />
        <Text style={[styles.headerTxt, {padding: 10}]}>NOTIFICATIONS</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10,
            paddingHorizontal: 10,
          }}>
          <Text style={styles.txt}>Allow Notifications</Text>
          {/* <Switch value={allowNotifications}  onValueChange={() => toggleSwitch3()}  /> */}
          <Switch     trackColor={{false: '#4E6EB', true: '#E4E6EB'}}
        thumbColor={allowNotifications? '#0000CD' : 'gray'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitchFour}
        value={allowNotifications} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10,
            paddingHorizontal: 10,
          }}>
          <Text style={styles.txt}>Sound</Text>
          {/* <Switch value={sound} onValueChange={() => toggleSwitch4()} /> */}
          <Switch     trackColor={{false: '#4E6EB', true: '#E4E6EB'}}
        thumbColor={sound ? '#0000CD' : 'gray'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitchFive}
        value={sound} />
        </View>
        <View                                                                                                                                                         
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10,
            paddingHorizontal: 10,
          }}>
          <Text style={styles.txt}>Vibration</Text>
          {/* <Switch value={vibration} onValueChange={() => toggleSwitch5()} /> */}
          <Switch     trackColor={{false: '#4E6EB', true: '#E4E6EB'}}
        thumbColor={vibration ? '#0000CD' : 'gray'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitchSix}
        value={vibration} />
        </View>
        <View
          style={{
            width: '100%',
            height: moderateScale(2),
            backgroundColor: '#e9ecef',
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#4fa8b9',
  },
  headerTxt: {
    fontSize: moderateScale(16, 0.3),
    color: '#fff',
    fontWeight: '600',
  },
  txt: {
    fontSize: moderateScale(18, 0.3),
    color: '#fff',
  },
  subTxt: {
    fontSize: moderateScale(14, 0.3),
    color: '#fff',
  },
  languageButton: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    maxHeight: '80%',
    width: '80%',
  },
  languageList: {
    marginBottom: 8,
  },
  languageItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  languageText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  selectedLanguageContainer: {
    marginTop: 16,
  },
  selectedLanguageText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Settings;
