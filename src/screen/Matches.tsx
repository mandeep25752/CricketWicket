/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  ActivityIndicator,
  Pressable,
  Alert,
  Button,
  RefreshControl,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MatchesListService from '../MatchsApi/services';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createMaterialTopTabNavigator();

interface HomeProps {
  navigation: any;
}

interface LiveStatProps {
  id: string;
  count: string;
  image1: any;
  image2: any;
  matchName: string;
  team1: string;
  time: string;
  team2: string;
  teamName1: string;
  teamName2: string;
  date: string;
  matchStatus: any;
  score: string;
  over: string;
  score2: string;
  over2: string;

  viewPoll: string;
  IND: string;
  firstPoll: string;
  secondPoll: string;

  display: boolean;
}
interface UpcomingStatProps {
  id: string;
  count: string;
  image1: any;
  image2: any;
  matchName: string;
  team1: string;
  time: string;
  team2: string;
  teamName1: string;
  teamName2: string;
  date: string;
  matchStatus: any;
  score: string;
  over: string;
  score2: string;
  over2: string;

  display: boolean;
  viewPoll: string;
  IND: string;
  firstPoll: string;
  secondPoll: string;
}
interface RecentStatProps {
  id: string;
  count: string;
  image1: any;
  image2: any;
  matchName: string;
  team1: string;
  time: string;
  team2: string;
  teamName1: string;
  teamName2: string;
  date: string;
  matchStatus: any;
  score: string;
  over: string;
  score2: string;
  over2: string;
  result: string;
  tours: string;
}

const {width} = Dimensions.get('window');
function Live(props: HomeProps) {
  const {navigation} = props;
 

  const handleNav = () => {
    navigation.navigate('InfoLiveScorecard');
  };






  const [liveData, setLiveData] = useState([]);
  const [matchTypes, setMatchTypes] = useState([]);
  const [selectedMatchType, setSelectedMatchType] = useState('All');
  const [submitLoading, setSubmitLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);




  console.log('liveData>>>>>>>>>',liveData);
  


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setSubmitLoading(true);
    try {
      const token = await AsyncStorage.getItem("loginToken");
  
      console.log('token>>>>>>', token);
  
      const myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);
  
      // Add the type parameter to the URL for live matches
      const url = 'https://cricketwicket.biz/api/v1/matches?type=live';
  
      const response = await fetch(url, {
        method: 'GET',
        headers: myHeaders,
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
  
      // Debugging: Log the full response to inspect its structure
      console.log('responseData>>>>>>', responseData);
  
      // Ensure responseData contains the expected structure
      if (responseData.filters && responseData.filters.matchType && responseData.typeMatches) {
        // Set match types
        setMatchTypes(responseData.filters.matchType);
  
        // Filter data based on selected match type
        let filteredData = responseData.typeMatches.filter(item => {
          if (selectedMatchType === 'All') {
            return true; // Return all data if selectedMatchType is 'All'
          } else {
            return item.matchType === selectedMatchType;
          }
        });
  
        setLiveData(filteredData);
      } else {
        console.error('Unexpected response structure:', responseData);
      }
    } catch (error) {
      console.error('Error fetching series data:', error);
    } finally {
      setSubmitLoading(false);
      setRefreshing(false);
    }
  };
  
  
  const onRefresh = () => {
    setRefreshing(true);
   
    fetchData(); 
    setRefreshing(false);
  };
  
  const handleMatchTypeClick = (matchType) => {
    setSelectedMatchType(matchType);
  };

  const getImageUrl = (imageId) => {
    return `https://static.cricbuzz.com/a/img/v1/i1/c${imageId}/i.jpg`; // Adjust the URL pattern based on your server
  };
  
  

  

  const liveRenderItem = ({ item }) => {
    const isCurrentMatchType = selectedMatchType === 'All' || selectedMatchType === item.matchType;
  
    let hasMatches = false;
    if (item.seriesMatches) {
      hasMatches = item.seriesMatches.some(
        seriesItem => seriesItem.seriesAdWrapper && seriesItem.seriesAdWrapper.matches && seriesItem.seriesAdWrapper.matches.length > 0
      );
    }
  
    return (
      <View style={{ marginHorizontal: 10 }}>
        {isCurrentMatchType && (
          <Text style={{ fontSize: 16, color: 'black', fontWeight: '600' }}>{item.matchType}</Text>
        )}
        {item.seriesMatches && item.seriesMatches.map((seriesItem, j) => (
          <View key={j}>
            {isCurrentMatchType && seriesItem.seriesAdWrapper && seriesItem.seriesAdWrapper.seriesName && (
              <TouchableOpacity onPress={()=>navigation.navigate('Browse_SeriesList')} style={{ marginVertical: 10, backgroundColor: '#d3d3d3', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 14, marginVertical: 2, marginHorizontal: 10, color: '#696969', fontWeight: '500' }}>
                  {seriesItem.seriesAdWrapper.seriesName}
                </Text>
                <Image style={{ height: 10, width: 10, marginRight: 2, alignSelf: 'center' }} source={require('../../assets/rightarrow.png')} />
              </TouchableOpacity>
            )}
            {isCurrentMatchType && seriesItem.seriesAdWrapper && seriesItem.seriesAdWrapper.matches && seriesItem.seriesAdWrapper.matches.length > 0 ? (
              seriesItem.seriesAdWrapper.matches.map((matchItem, k) => {
                // Filter matches based on selected match type
                if (!isCurrentMatchType || (selectedMatchType !== 'All' && item.matchType !== selectedMatchType)) {
                  return null; // Skip rendering if match type does not match selected match type
                }
                return (
                  <TouchableOpacity 
                  key={k} 
                  onPress={() => navigation.navigate('InfoLiveScorecard', { 
                    matchid: matchItem.matchInfo.matchId, 
                    teamName1: matchItem.matchInfo.team1.teamSName, 
                    teamName2: matchItem.matchInfo.team2.teamSName,
                    // team1Score: matchItem.matchScore && matchItem.matchScore.team1Score ? matchItem.matchScore.team1Score.inngs1 : null,
                    // team2Score: matchItem.matchScore && matchItem.matchScore.team2Score ? matchItem.matchScore.team2Score.inngs1 : null,
                    // matchStatus: matchItem.matchInfo.status
                  })}
                >
                    <View style={{ marginVertical: 5, backgroundColor: '#fff' }}>
                      
                      <Text style={{ color: '#808080', marginHorizontal: 10, marginVertical: 10 }}>
                        {matchItem.matchInfo.matchDesc} - {matchItem.matchInfo.venueInfo.city}, {matchItem.matchInfo.venueInfo.ground}
                      </Text>
                      <View style={{ marginVertical: 10, flexDirection: 'row' }}>
                        {matchItem.matchInfo.team1 && (
                          <Image
                            source={{ uri: getImageUrl(matchItem.matchInfo.team1.imageId) }}
                            style={{ width: 30, height: 30, marginLeft: 10 }}
                          />
                        )}
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                          <Text style={{ color: 'black', marginHorizontal: 10 }}>
                            {matchItem.matchInfo.team1 ? matchItem.matchInfo.team1.teamSName.toUpperCase() : 'N/A'}
                          </Text>
                          <Text style={{ color: 'black', marginHorizontal: 10, marginLeft: '55%' }}>
            {matchItem.matchScore && matchItem.matchScore.team1Score && matchItem.matchScore.team1Score.inngs1 &&
    matchItem.matchScore.team1Score.inngs1.runs !== undefined &&
    matchItem.matchScore.team1Score.inngs1.wickets !== undefined
    ? `${matchItem.matchScore.team1Score.inngs1.runs}/${
        matchItem.matchScore.team1Score.inngs1.wickets !== undefined
          ? matchItem.matchScore.team1Score.inngs1.wickets
          : '0'
      }`
    : null}
</Text>


                        </View>
                      </View>
                      <View style={{ flexDirection: 'row' }}>
                        {matchItem.matchInfo.team2 && (
                          <Image
                            source={{ uri: getImageUrl(matchItem.matchInfo.team2.imageId) }}
                            style={{ width: 30, height: 30, marginLeft: 10 }}
                          />
                        )}
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                          <Text style={{ color: 'black', marginHorizontal: 10 }}>
                          {matchItem.matchInfo.team2 ? matchItem.matchInfo.team2.teamSName.toUpperCase() : 'N/A'}
                        </Text>
                        <Text style={{ color: 'black', marginHorizontal: 10, marginLeft: '55%' }}>
  {matchItem.matchScore && matchItem.matchScore.team2Score && matchItem.matchScore.team2Score.inngs1
    ? `${matchItem.matchScore.team2Score.inngs1.runs}/${matchItem.matchScore.team2Score.inngs1.wickets || 0}`
    : null}
</Text>

                      </View>
                    </View>
                    <Text style={{ color: 'red', fontWeight: '400', marginHorizontal: 10, marginTop: 10 }}>
                      {matchItem.matchInfo.status}
                    </Text>
                    <Text style={{ borderBottomWidth: 1, width: '100%', borderColor: '#f5f5f5' }}></Text>
                  </View>
                </TouchableOpacity>
              );
            })
          ) : null}
        </View>
      ))}
      
    </View>
  );
};

  

  
  
  

  return (
    <ScrollView
    style={{ backgroundColor: '#f5f5f5' }}
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
        colors={['#4fa8b9']} 
        tintColor={'#4fa8b9'} 
      />
    }>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
      {['All', 'International', 'League', 'Domestic', 'Women'].map((type, index) => (
        <Pressable
          key={index}
          onPress={() => handleMatchTypeClick(type)}
          style={{
            backgroundColor: selectedMatchType === type ? '#006400' : '#fff',
            padding: 5,
            margin: 5,
            borderRadius: 5,
          }}>
          <Text style={{ color: selectedMatchType === type ? '#fff' : 'black', fontSize: 10 }}>{type}</Text>
        </Pressable>
      ))}
    </View>

    {submitLoading || refreshing ? (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
    <ActivityIndicator size="large" color="#4fa8b9" />
  </View>
) : liveData && liveData.length > 0 ? (
  <FlatList
    data={liveData}
    keyExtractor={(item, index) => index.toString()}
    showsVerticalScrollIndicator={false}
    scrollEventThrottle={16}
    renderItem={liveRenderItem}
  />
) : (
  <View style={{ flex: 1, justifyContent: 'center',  alignSelf:'center' }}>
     <Image source={require('../../assets/nodata.png')} style={{ height: 200, width: 200 }} />
  </View>
)}

  </ScrollView>
  );
};

function Upcoming(props: HomeProps) {
  const {navigation} = props;

 
  

  const [liveData, setLiveData] = useState([]);
const [matchTypes, setMatchTypes] = useState([]);
const [selectedMatchType, setSelectedMatchType] = useState('All');
const [submitLoading, setSubmitLoading] = useState(false);
const [refreshing, setRefreshing] = useState(false);
const [isWellOn, setIsWellOn] = useState({});

console.log('liveData>>>>>>>>>', liveData);

useEffect(() => {
  fetchData();
}, [selectedMatchType]); // Add selectedMatchType as a dependency

const fetchData = async () => {
  setSubmitLoading(true);
  try {
    const token = await AsyncStorage.getItem("loginToken");

    console.log('token>>>>>>', token);

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    // Add the type parameter to the URL for live matches
    const url = 'https://cricketwicket.biz/api/v1/matches?type=upcoming';

    const response = await fetch(url, {
      method: 'GET',
      headers: myHeaders,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();

    // Debugging: Log the full response to inspect its structure
    console.log('responseData>>>>>>', responseData);

    // Ensure responseData contains the expected structure
    if (responseData.filters && responseData.filters.matchType && responseData.typeMatches) {
      // Set match types
      setMatchTypes(responseData.filters.matchType);

      // Filter data based on selected match type
      let filteredData = responseData.typeMatches.filter(item => {
        if (selectedMatchType === 'All') {
          return true; // Return all data if selectedMatchType is 'All'
        } else {
          return item.matchType === selectedMatchType;
        }
      });

      setLiveData(filteredData);
    } else {
      console.error('Unexpected response structure:', responseData);
    }
  } catch (error) {
    console.error('Error fetching series data:', error);
  } finally {
    setSubmitLoading(false);
    setRefreshing(false);
  }
};

const onRefresh = () => {
  setRefreshing(true);
  fetchData();
};

const handleMatchTypeClick = (matchType) => {
  setSelectedMatchType(matchType);
};


const formatTimestamp = (timestamp) => {
  const date = new Date(parseInt(timestamp));
  const options = {
    weekday: 'short', // Adds the day of the week
   
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
   
  };
  return date.toLocaleDateString('en-US', options);
};




const getImageUrl = (imageId) => {
  return `https://static.cricbuzz.com/a/img/v1/i1/c${imageId}/i.jpg`; 
};




const toggleImage = (matchId) => {
  setIsWellOn((prevStates) => ({
    ...prevStates,
    [matchId]: !prevStates[matchId],
  }));
};


const liveRenderItem = ({ item }) => {
  const hasMatches = item.seriesMatches && item.seriesMatches.some(seriesItem => seriesItem.seriesAdWrapper && seriesItem.seriesAdWrapper.matches && seriesItem.seriesAdWrapper.matches.length > 0);
  const isCurrentMatchType = selectedMatchType === 'All' || selectedMatchType === item.matchType;



  

  return (
    <View style={{ marginHorizontal: 10 }}>
      {isCurrentMatchType && (
        <Text style={{ fontSize: 16, color: 'black', fontWeight: '600' }}>{item.matchType}</Text>
      )}
      {item.seriesMatches && item.seriesMatches.map((seriesItem, j) => (
        <View key={j}>
          {isCurrentMatchType && seriesItem.seriesAdWrapper && seriesItem.seriesAdWrapper.seriesName && (
            <TouchableOpacity style={{ marginVertical: 10, backgroundColor: '#d3d3d3', flexDirection: 'row',justifyContent:'space-between' }}>
              <Text style={{ fontSize: 14, marginVertical: 2, marginHorizontal: 10, color: '#696969', fontWeight: '500' }}>
                {seriesItem.seriesAdWrapper.seriesName}
              </Text>
              <Image style={{ height: 10, width: 10, marginRight:2,  alignSelf: 'center' }} source={require('../../assets/rightarrow.png')} />
            </TouchableOpacity>
          )}
          {isCurrentMatchType && seriesItem.seriesAdWrapper && seriesItem.seriesAdWrapper.matches && seriesItem.seriesAdWrapper.matches.length > 0 ? (
            seriesItem.seriesAdWrapper.matches.map((matchItem, k) => {
              if (!isCurrentMatchType || (selectedMatchType !== 'All' && item.matchType !== selectedMatchType)) {
                return null;
              }
              const formattedStartDate = formatTimestamp(matchItem.matchInfo.startDate);
              return (

                <TouchableOpacity 
                key={k} 
                onPress={() => navigation.navigate('InfoLiveScorecard', { 
                  matchid: matchItem.matchInfo.matchId, 
                  teamName1: matchItem.matchInfo.team1.teamSName, 
                  teamName2: matchItem.matchInfo.team2.teamSName,
                 
                })}
              >
                <View key={k} style={{ marginVertical: 5, backgroundColor: '#fff' }}>

                  
                  <Text style={{ color: '#808080', marginHorizontal: 10, marginVertical: 10 }}>{matchItem.matchInfo.matchDesc} - {matchItem.matchInfo.venueInfo.city}, {matchItem.matchInfo.venueInfo.ground}</Text>

                  <View style={{ marginVertical: 10,flexDirection:'row' }}>
                  {matchItem.matchInfo.team1 && (
                      <Image
                        source={{ uri: getImageUrl(matchItem.matchInfo.team1.imageId) }}
                        style={{ width: 30, height: 30, marginLeft: 10 }}
                      />
                    )}
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                      <Text style={{ color: 'black', marginHorizontal: 10,width:'70%' }}>{matchItem.matchInfo.team1 ? matchItem.matchInfo.team1.teamName.toUpperCase() : 'N/A'}</Text>

                      <TouchableOpacity
          
            onPress={() => toggleImage(matchItem.matchInfo.matchId)}
          >
            <Image
              source={
                isWellOn[matchItem.matchInfo.matchId]
                  ?  require('../../assets/welloff.png')
                  : require('../../assets/wellon.png')
              }
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
                    </View>
                   
                  </View>

                  <View style={{flexDirection:'row'}}>
                  {matchItem.matchInfo.team2 && (
                      <Image
                        source={{ uri: getImageUrl(matchItem.matchInfo.team2.imageId) }}
                        style={{ width: 30, height: 30, marginLeft: 10 }}
                      />
                    )}
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                      <Text style={{ color: 'black', marginHorizontal: 10 }}>{matchItem.matchInfo.team2 ? matchItem.matchInfo.team2.teamName.toUpperCase() : 'N/A'}</Text>
                      <Text style={{ color: 'black', marginHorizontal: 10 }}>{matchItem.matchScore}</Text>
                    </View>
                    
                  </View>

                  <Text style={{ color: 'red', fontWeight: '400', marginHorizontal: 10 ,marginTop:10}}>{formattedStartDate}</Text>
                  <Text style={{ borderBottomWidth: 1, width: '100%', borderColor: '#f5f5f5' }}></Text>
                </View>
                </TouchableOpacity>
              );
            })
          ) : (
            null
          )}
        </View>
      ))}
    </View>
  );
};


return (
  <ScrollView
    style={{ backgroundColor: '#f5f5f5' }}
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
        colors={['#4fa8b9']} // Set the colors for the loader
        tintColor={'#4fa8b9'} // Set the tint color for the loader on Android
      />
    }>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
      {['All', 'International', 'League', 'Domestic', 'Women'].map((type, index) => (
        <Pressable
          key={index}
          onPress={() => handleMatchTypeClick(type)}
          style={{
            backgroundColor: selectedMatchType === type ? '#006400' : '#fff',
            padding: 5,
            margin: 5,
            borderRadius: 5,
          }}>
          <Text style={{ color: selectedMatchType === type ? '#fff' : 'black', fontSize: 10 }}>{type}</Text>
        </Pressable>
      ))}
    </View>

    {submitLoading || refreshing ? (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
    <ActivityIndicator size="large" color="#4fa8b9" />
  </View>
) : liveData && liveData.length > 0 ? (
  <FlatList
    data={liveData}
    keyExtractor={(item, index) => index.toString()}
    showsVerticalScrollIndicator={false}
    scrollEventThrottle={16}
    renderItem={liveRenderItem}
  />
) : (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={require('../../assets/nodata.png')} style={{ height: 200, width: 200 }} />
  </View>
)}

  </ScrollView>
);

};

function Recent(props: HomeProps) {
  const {navigation} = props;

  
  const [liveData, setLiveData] = useState([]);
  const [matchTypes, setMatchTypes] = useState([]);
  const [selectedMatchType, setSelectedMatchType] = useState('All');
  const [submitLoading, setSubmitLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);




  console.log('liveData>>>>>>>>>',liveData);
  


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setSubmitLoading(true);
    try {
      const token = await AsyncStorage.getItem("loginToken");
  
      console.log('token>>>>>>', token);
  
      const myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);
  
      // Add the type parameter to the URL for live matches
      const url = 'https://cricketwicket.biz/api/v1/matches?type=recent';
  
      const response = await fetch(url, {
        method: 'GET',
        headers: myHeaders,
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
  
    
      console.log('responseData>>>>>>', responseData);
  
     
      if (responseData.filters && responseData.filters.matchType && responseData.typeMatches) {
       
        setMatchTypes(responseData.filters.matchType);
  
    
        let filteredData = responseData.typeMatches.filter(item => {
          if (selectedMatchType === 'All') {
            return true; 
          } else {
            return item.matchType === selectedMatchType;
          }
        });
  
        setLiveData(filteredData);
      } else {
        console.error('Unexpected response structure:', responseData);
      }
    } catch (error) {
      console.error('Error fetching series data:', error);
    } finally {
      setSubmitLoading(false);
      setRefreshing(false);
    }
  };
  
  
  const onRefresh = () => {
    setRefreshing(true);
   
    fetchData(); 
    setRefreshing(false);
  };
  
  const handleMatchTypeClick = (matchType) => {
    setSelectedMatchType(matchType);
  };

  const getImageUrl = (imageId) => {
    return `https://static.cricbuzz.com/a/img/v1/i1/c${imageId}/i.jpg`;
  };
  

  

  const liveRenderItem = ({ item }) => {
    const hasMatches = item.seriesMatches && item.seriesMatches.some(seriesItem => seriesItem.seriesAdWrapper && seriesItem.seriesAdWrapper.matches && seriesItem.seriesAdWrapper.matches.length > 0);
    const isCurrentMatchType = selectedMatchType === 'All' || selectedMatchType === item.matchType;


    return (
      <View style={{ marginHorizontal: 10 }}>
        {isCurrentMatchType && (
          <Text style={{ fontSize: 16, color: 'black', fontWeight: '600' }}>{item.matchType}</Text>
        )}
        {item.seriesMatches && item.seriesMatches.map((seriesItem, j) => (
          <View key={j}>
            {isCurrentMatchType && seriesItem.seriesAdWrapper && seriesItem.seriesAdWrapper.seriesName && (
              <TouchableOpacity style={{ marginVertical: 10,  backgroundColor: '#d3d3d3',flexDirection:'row',justifyContent:'space-between'  }}>
                <Text style={{ fontSize: 14, marginVertical: 2, marginHorizontal: 10, color:'#696969',fontWeight:'500' }}>
                  {seriesItem.seriesAdWrapper.seriesName}
                 
                </Text>
                <Image style={{height:10,width:10, marginRight:2, alignSelf:'center'}} source={require('../../assets/rightarrow.png')}/>
              </TouchableOpacity>
            )}
            {isCurrentMatchType && seriesItem.seriesAdWrapper && seriesItem.seriesAdWrapper.matches && seriesItem.seriesAdWrapper.matches.length > 0 ? (
              seriesItem.seriesAdWrapper.matches.map((matchItem, k) => {
                // Filter matches based on selected match type
                if (!isCurrentMatchType || (selectedMatchType !== 'All' && item.matchType !== selectedMatchType)) {
                  return null; // Skip rendering if match type does not match selected match type
                }
                return (

                  <TouchableOpacity 
                  key={k} 
                  onPress={() => navigation.navigate('InfoLiveScorecard', { 
                    matchid: matchItem.matchInfo.matchId, 
                    teamName1: matchItem.matchInfo.team1.teamSName, 
                    teamName2: matchItem.matchInfo.team2.teamSName,
                    // team1Score: matchItem.matchScore && matchItem.matchScore.team1Score ? matchItem.matchScore.team1Score.inngs1 : null,
                    // team2Score: matchItem.matchScore && matchItem.matchScore.team2Score ? matchItem.matchScore.team2Score.inngs1 : null,
                    // matchStatus: matchItem.matchInfo.status
                  })}
                >
                  <View key={k} style={{  marginVertical: 5,   backgroundColor:'#fff' }}>

                    
                    <Text style={{ color: '#808080' ,marginHorizontal:10,marginVertical:10}}>{matchItem.matchInfo.matchDesc} - {matchItem.matchInfo.venueInfo.city}, {matchItem.matchInfo.venueInfo.ground}</Text>
                   
                   
                    <View style={{marginVertical:10,flexDirection:'row'}}>

                    {matchItem.matchInfo.team1 && (
                        <Image
                          source={{ uri: getImageUrl(matchItem.matchInfo.team1.imageId) }}
                          style={{ width: 30, height: 30, marginLeft: 10 }}
                        />
                      )}
  
                      <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                        <Text style={{ color: 'black', marginHorizontal:10 }}>{matchItem.matchInfo.team1 ? matchItem.matchInfo.team1.teamSName.toUpperCase() : 'N/A'}</Text>
                        <Text style={{ color: 'black',marginHorizontal:10,marginLeft:'58%'}}>{matchItem.matchScore && matchItem.matchScore.team1Score && matchItem.matchScore.team1Score.inngs1 ? `${matchItem.matchScore.team1Score.inngs1.runs}/${matchItem.matchScore.team1Score.inngs1.wickets}` : 'N/A'}</Text>
                      </View>
                     
                    </View>
                    
                    <View style={{flexDirection:'row'}}>
                    {matchItem.matchInfo.team2 && (
                        <Image
                          source={{ uri: getImageUrl(matchItem.matchInfo.team2.imageId) }}
                          style={{ width: 30, height: 30, marginLeft: 10 }}
                        />
                      )}
                      <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                        <Text style={{ color: 'black',marginHorizontal:10}}>{matchItem.matchInfo.team2 ? matchItem.matchInfo.team2.teamSName.toUpperCase() : 'N/A'}</Text>
                        <Text style={{ color: 'black',marginHorizontal:10,marginLeft:'58%'}}>{matchItem.matchScore && matchItem.matchScore.team2Score && matchItem.matchScore.team2Score.inngs1 ? `${matchItem.matchScore.team2Score.inngs1.runs}/${matchItem.matchScore.team2Score.inngs1.wickets}` : 'N/A'}</Text>
                      </View>
                     
                    </View>
  
                    <Text style={{ color: '#4682b4',fontWeight:'500',marginHorizontal:10,marginTop:10 }}>{matchItem.matchInfo.status}</Text>
                    <Text style={{borderBottomWidth:1, width:'100%',borderColor:'#f5f5f5'}}></Text>
                  </View>
                  </TouchableOpacity>
                );
              })
            ) : (
             null
            )}
          </View>
        ))}
      </View>
    );
};

  
  
  

  return (
    <ScrollView
    style={{ backgroundColor: '#f5f5f5' }}
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
        colors={['#4fa8b9']} // Set the colors for the loader
        tintColor={'#4fa8b9'} // Set the tint color for the loader on Android
      />
    }>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
      {['All', 'International', 'League', 'Domestic', 'Women'].map((type, index) => (
        <Pressable
          key={index}
          onPress={() => handleMatchTypeClick(type)}
          style={{
            backgroundColor: selectedMatchType === type ? '#006400' : '#fff',
            padding: 5,
            margin: 5,
            borderRadius: 5,
          }}>
          <Text style={{ color: selectedMatchType === type ? '#fff' : 'black', fontSize: 10 }}>{type}</Text>
        </Pressable>
      ))}
    </View>

    {submitLoading || refreshing ? (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
    <ActivityIndicator size="large" color="#4fa8b9" />
  </View>
) : liveData && liveData.length > 0 ? (
  <FlatList
    data={liveData}
    keyExtractor={(item, index) => index.toString()}
    showsVerticalScrollIndicator={false}
    scrollEventThrottle={16}
    renderItem={liveRenderItem}
  />
) : (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   <Image source={require('../../assets/nodata.png')} style={{ height: 200, width: 200 }} />
  </View>
)}

  </ScrollView>
  );
};
  
const Matches = () => {
  const matchesList = useCallback(async () => {
    try {
      const resp = await MatchesListService.matchesList();
      if (resp) {
        console.log(resp?.data, 'Matches List');
      } else {
        console.log(resp);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      matchesList();
    }, []),
  );
  return (
    // <SafeAreaView style={styles.container}>
    // <SafeAreaView>
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 14, fontWeight: '600', color: '#fff'},
        tabBarStyle: {backgroundColor: '#4fa8b9', elevation: 10},
      }}>
      <Tab.Screen name="Live" component={Live} />
      <Tab.Screen name="Upcoming" component={Upcoming} />
      <Tab.Screen name="Recent" component={Recent} />
    </Tab.Navigator>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewRow1: {
    flexDirection: 'row',
    marginVertical: 2,
    paddingHorizontal: 5,
    // marginHorizontal: 25
  },
  viewRow2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginVertical: 5,
    padding: 10,
  },

  viewRow3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  textStyle1: {
    color: '#000',
    fontSize: moderateScale(14, 0.2),
    fontWeight: 'bold',
  },
  textStyle2: {
    color: '#000',
    // fontSize: 18,
    fontSize: moderateScale(14, 0.1),
    fontWeight: 'bold',
  },
  imageStyle: {
    height: moderateScale(40, 0.2),
    width: moderateScale(40, 0.2),
    borderRadius: 300,
  },
  notificationText: {
    color: '#fff',
    fontSize: moderateScale(16, 0.3),
    fontWeight: '500',
  },
  backBtn: {
    height: moderateScale(20),
    width: moderateScale(20),
    resizeMode: 'contain',
    tintColor: '#fff',
    margin: moderateScale(10),
  },
  text:{
    backgroundColor:'#fff',
    borderRadius:10,
    padding:5,
   fontSize:10,
    color:'black'
  },

  selectedButtonText:{backgroundColor:'#006400',borderRadius:10,
  padding:5,
 fontSize:10, color:'#fff',fontWeight:'400'}
});

export default Matches;
