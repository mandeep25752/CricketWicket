/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Linking} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {moderateScale} from 'react-native-size-matters';
interface ProfileProps {
  navigation: any;
}
const ProfilePage = (props: ProfileProps) => {
  const {navigation} = props;
  const handleSettingNavigation = () => {
    navigation.navigate('Settings');
  };
  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };
  const handleRateUsNavigation = () => {
    navigation.navigate('RateUs');
  };
  const handleConnectWithUs = () => {
    navigation.navigate('ConnectWithUs');
  };
  const handleCheckFrUpdate = () => {
    navigation.navigate('CheckForUpdate');
  };
  const handleReportProblem = () => {
    navigation.navigate('ReportProblem');
  };
  const handleInviteFriends = () => {
    navigation.navigate('InviteFriends');
  };
  const handleAboutUs = () => {
    navigation.navigate('AboutUs');
  };
  const handleTermsConditions = () => {
    navigation.navigate('TermsConditions');
  };
  const handlePrivacyPolicy = () => {
    Linking.openURL('https://www.cricketwicket.biz/policy');
  };

  const handleSeries = () => {
    navigation.navigate('Browse_SeriesList');
  };



  const handleBroweseTeam = () => {
    navigation.navigate('Browse Teams');
  };


  const handleBrowesePlayer = () => {
    navigation.navigate('Browse player');
  };


  const handleBroweseSchedule = () => {
    navigation.navigate('Schedule');
  };


  const handleBrowesepHOTOS = () => {
    navigation.navigate('Photos');
  };


  const handleBroweseRakings = () => {
    navigation.navigate('IccRakings');
  };


  const handleBroweseTest = () => {
    navigation.navigate('IccWorldTestCha');
  };



  return (
    <View style={styles.container}>

<ScrollView>

  <View style={{marginHorizontal:10}}>


      <TouchableOpacity onPress={handleEditProfile}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <MaterialCommunityIcons
              name="account-circle"
              size={moderateScale(24, 0.3)}
              color={'#dee2e6'}
            />
            <Text style={styles.textStyle}>Account</Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={moderateScale(28, 0.8)}
            color={'#fff'}
          />
        </View>
      </TouchableOpacity>



<View>


      <TouchableOpacity onPress={handleSeries}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image
  source={require('../../assets/tropy1.png')}
  style={{ width: 25, height: 20, tintColor: '#fff' }} 
/>

            <Text style={styles.textStyle}>Browse Series </Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={moderateScale(28, 0.8)}
            color={'#fff'}
          />
        </View>
      </TouchableOpacity>


     




      <TouchableOpacity onPress={handleBroweseTeam}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image
  source={require('../../assets/team.png')}
  style={{ width: 25, height: 20, tintColor: '#fff' }} 
/>
            <Text style={styles.textStyle}>Browse Team </Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={moderateScale(28, 0.8)}
            color={'#fff'}
          />
        </View>
      </TouchableOpacity>


   


      <TouchableOpacity onPress={handleBrowesePlayer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image
  source={require('../../assets/player.png')}
  style={{ width: 25, height: 20, tintColor: '#fff' }} 
/>
            <Text style={styles.textStyle}>Browse Player</Text>
          </View>



          
          <MaterialCommunityIcons
            name="chevron-right"
            size={moderateScale(28, 0.8)}
            color={'#fff'}
          />
        </View>
      </TouchableOpacity>




      <TouchableOpacity onPress={handleBroweseSchedule}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image
  source={require('../../assets/schedule.png')}
  style={{ width: 25, height: 20, tintColor: '#fff' }} 
/>
            <Text style={styles.textStyle}>Schedule</Text>
          </View>



          
          <MaterialCommunityIcons
            name="chevron-right"
            size={moderateScale(28, 0.8)}
            color={'#fff'}
          />
        </View>
      </TouchableOpacity>



      <TouchableOpacity onPress={handleBrowesepHOTOS}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image
  source={require('../../assets/photos.png')}
  style={{ width: 25, height: 20, tintColor: '#fff' }} 
/>
            <Text style={styles.textStyle}>Photos</Text>
          </View>



          
          <MaterialCommunityIcons
            name="chevron-right"
            size={moderateScale(28, 0.8)}
            color={'#fff'}
          />
        </View>
      </TouchableOpacity>

    

      </View>



      <TouchableOpacity onPress={handleBroweseRakings}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <MaterialCommunityIcons
              name="account-group"
              size={moderateScale(24, 0.3)}
              color={'#dee2e6'}
            />
            <Text style={styles.textStyle}>ICC Rankings-Men</Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={moderateScale(28, 0.8)}
            color={'#fff'}
          />
        </View>
      </TouchableOpacity>




      <TouchableOpacity onPress={handleBroweseTest}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <MaterialCommunityIcons
              name="account-group"
              size={moderateScale(24, 0.3)}
              color={'#dee2e6'}
            />
            <Text style={styles.textStyle}>ICC World Test Championship</Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={moderateScale(28, 0.8)}
            color={'#fff'}
          />
        </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={handleRateUsNavigation}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <MaterialCommunityIcons
              name="star"
              size={moderateScale(24, 0.3)}
              color={'#dee2e6'}
            />
            <Text style={styles.textStyle}> Rate us</Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={moderateScale(28, 0.8)}
            color={'#fff'}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleConnectWithUs}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <MaterialCommunityIcons
              name="account"
              size={moderateScale(24, 0.3)}
              color={'#dee2e6'}
            />
            <Text style={styles.textStyle}>Connect with us</Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={moderateScale(28, 0.8)}
            color={'#fff'}
          />
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={handleCheckFrUpdate}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <MaterialCommunityIcons
              name="tray-arrow-down"
              size={moderateScale(24, 0.3)}
              color={'#dee2e6'}
            />
            <Text style={styles.textStyle}>Check for Updates</Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={moderateScale(28, 0.8)}
            color={'#fff'}
          />
        </View>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={handleReportProblem}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <MaterialCommunityIcons
              name="alert"
              size={moderateScale(24, 0.3)}
              color={'#dee2e6'}
            />
            <Text style={styles.textStyle}>Report a Problem</Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={moderateScale(28, 0.8)}
            color={'#fff'}
          />
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={handleInviteFriends}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <MaterialCommunityIcons
              name="share-variant"
              size={moderateScale(24, 0.3)}
              color={'#dee2e6'}
            />
            <Text style={styles.textStyle}>Invite Friends</Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={moderateScale(28, 0.8)}
            color={'#fff'}
          />
        </View>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={handleAboutUs}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <MaterialCommunityIcons
              name="account-group"
              size={moderateScale(24, 0.3)}
              color={'#dee2e6'}
            />
            <Text style={styles.textStyle}>About Us</Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={moderateScale(28, 0.8)}
            color={'#fff'}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleTermsConditions}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image
              source={require('../../assets/termandconditionsicon.png')}
              style={{height: 25, width: 25, tintColor: '#fff', marginTop: 1}}
            />
            <Text style={styles.textStyle}>Terms and Conditions</Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={moderateScale(28, 0.8)}
            color={'#fff'}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePrivacyPolicy}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image
              source={require('../../assets/privacyPolicyImage.png')}
              // source={require('../../assets/privacy-removebg-preview.jpg')}
              style={{height: 25, width: 25, tintColor: '#fff', marginTop: 1}}
            />
            <Text style={styles.textStyle}>Privacy Policy</Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={moderateScale(28, 0.8)}
            color={'#fff'}
          />
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={handleSettingNavigation}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image
              source={require('../../assets/settingicon-removebg-preview.png')}
              style={{height: 25, width: 25, tintColor: '#fff', marginTop: 1}}
            />
            <Text style={styles.textStyle}>Settings</Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={moderateScale(28, 0.8)}
            color={'#fff'}
          />
        </View>
      </TouchableOpacity> */}
      </View>
      </ScrollView>
    </View>

    
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 15,
    alignSelf:'center'

  },
  container: {
    flex: 1,
    backgroundColor: '#4fa8b9',
   
  },
});

export default ProfilePage;
