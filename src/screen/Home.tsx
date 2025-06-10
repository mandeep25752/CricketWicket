
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Animated,
  ViewToken,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {getArticles} from '../Api';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';





const {width} = Dimensions.get('window');

const Home = (props: ProfileProps) => {
 
  const [activeSlide, setActiveSlide] = useState(0);
  const flatListRef = useRef<FlatList<ImageItem>>(null);
  const [adsShow, setAdsShow] = useState(true);
  

  useEffect(() => {
    getToken();
  }, []);

  const [loginToken, setLoginToken] = useState<string | null>(null);
  const [userId, setUserID] = useState<string | null>(null);
  const [userInfoState, setUserInfoState] = useState<any>(null);

  

  const getToken = async () => {
    const token = await AsyncStorage.getItem("loginToken");
    const userid = await AsyncStorage.getItem("userID");
    // console.log("userid in HOME",userid);
    setUserID(userid)
    setLoginToken(token);
   
  };

  
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  
  const {navigation} = props;
  const ProfileHandler = () => {
    navigation.navigate('MySecondTab');
  };



 


  
 
 

  

 




  



  const [liveData, setLiveData] = useState([]);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);


 
  


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (liveData?.length > 0 && Topstories?.length > 0) {
      setLoading(false);
    }
  }, [liveData, Topstories]);

  


  useEffect(() => {  
    fetchData();
  }, []);


  
  
  const fetchData = async () => {
    setSubmitLoading(true);
    try {
        const token = await AsyncStorage.getItem("loginToken");

        if (!token) {
            console.error('No token found. Please log in again.');
            return;
        }

        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        const urls = [
            'https://cricketwicket.biz/api/v1/matches?type=live',
            'https://cricketwicket.biz/api/v1/matches?type=upcoming',
            'https://cricketwicket.biz/api/v1/matches?type=recent'
        ];

        const today = new Date();
        const yesterday = new Date();
        const tomorrow = new Date();

        yesterday.setUTCDate(today.getUTCDate() - 1);
        tomorrow.setUTCDate(today.getUTCDate() + 1);

        const todayStr = today.toISOString().split('T')[0];
        const yesterdayStr = yesterday.toISOString().split('T')[0];
        const tomorrowStr = tomorrow.toISOString().split('T')[0];

        let allData = [];

        for (const url of urls) {
            const response = await fetch(url, { method: 'GET', headers: myHeaders });

            if (!response.ok) {
                console.error(`Failed to fetch data from ${url}. Status: ${response.status}`);
                continue;
            }

            const responseData = await response.json();

            if (responseData.typeMatches) {
                const filteredData = responseData.typeMatches.flatMap(item => {
                    if (["International", "League"].includes(item.matchType)) {
                        return item.seriesMatches.flatMap(seriesMatch => {
                            const matches = seriesMatch.seriesAdWrapper?.matches || [];
                            return matches.filter(match => {
                                const startDate = match.matchInfo?.startDate;
                                if (!startDate) return false;

                                const matchDate = new Date(parseInt(startDate));
                                if (isNaN(matchDate.getTime())) return false;

                                const matchDateStr = matchDate.toISOString().split('T')[0];
                                return [todayStr, yesterdayStr, tomorrowStr].includes(matchDateStr);
                            }).map(match => {
                                const team1ImageId = match.matchInfo?.team1?.imageId;
                                const team2ImageId = match.matchInfo?.team2?.imageId;

                                return {
                                    ...match,
                                    matchInfo: {
                                        ...match.matchInfo,
                                        team1Image: team1ImageId
                                            ? `https://static.cricbuzz.com/a/img/v1/i1/c${team1ImageId}/i.jpg`
                                            : null,
                                        team2Image: team2ImageId
                                            ? `https://static.cricbuzz.com/a/img/v1/i1/c${team2ImageId}/i.jpg`
                                            : null,
                                    },
                                };
                            });
                        });
                    }
                    return [];
                });

                allData.push(...filteredData.filter(Boolean));
            }
        }

        setLiveData(allData);
        console.log('Fetched and Filtered Data:', allData);
    } catch (error) {
        console.error('Error fetching matches data:', error);
    } finally {
        setSubmitLoading(false);
        setRefreshing(false);
    }
};








  
  
 
  


  const formatTimestamp = (timestamp) => {
    const date = new Date(parseInt(timestamp));
    const today = new Date();

    const options = {
        hour: '2-digit',
        minute: '2-digit',
    };

    if (date.toDateString() === today.toDateString()) {
        return 'Today ' + date.toLocaleTimeString('en-US', options);
    } else {
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + ' at ' +
            date.toLocaleTimeString('en-US', options);
    }
};

const renderItem = ({ item }) => {
  if (!item || !item.matchInfo) {
    return null;
  }

  const matchInfo = item.matchInfo;
  const team1 = matchInfo.team1;
  const team2 = matchInfo.team2;

  const formattedStartDate = formatTimestamp(item.matchInfo.startDate);
  const startDate = new Date(parseInt(item.matchInfo.startDate)); // Parse timestamp to integer
  const currentDate = new Date();

  let statusComponent;

  if (currentDate > startDate) {
 
    statusComponent = <Text style={{ color: '#4682b4', fontWeight: '500' }}>{matchInfo.status}</Text>;
  } else {
   
    statusComponent = <Text style={[styles.txt, { color: '#8b4513', fontWeight: '500' }]}>{formattedStartDate}</Text>;
  }

 
  const matchScore = item.matchScore || null; 

  return (
    <TouchableOpacity
      
      onPress={() =>
        navigation.navigate('InfoLiveScorecard', {
          matchid: matchInfo.matchId,
          teamName1: team1.teamSName,
          teamName2: team2.teamSName,
          team1Score: matchScore && matchScore.team1Score ? matchScore.team1Score.inngs1 : null,
          team2Score: matchScore && matchScore.team2Score ? matchScore.team2Score.inngs1 : null,
          matchStatus: matchInfo.status,
        })
      }
    >
      <View
        style={{
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: '95%',
            backgroundColor: '#fff',
            paddingTop: 10,
            borderRadius: 10,
            borderWidth:1,
            borderColor:'gray',
            marginBottom: 10,
            elevation: 2, 
            zIndex: 2,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 20,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={[styles.txt, { color: '#808080' }]}>
              {matchInfo.matchDesc} {matchInfo.seriesName.split(' ').slice(0, 4).join(' ')}
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              marginHorizontal: 20,
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}
          >
            
            <Image source={{ uri: item.matchInfo.team1Image }} style={{ height: 30, width: 30 }} />

            <Text
              style={[
                styles.txt,
                {
                  fontSize: moderateScale(16, 0.3),
                  marginLeft: 10,
                  color: '#000',
                  width: '30%',
                },
              ]}
            >
              {team1.teamSName}
            </Text>

            {matchScore && (
              <View style={{ marginLeft: '20%' }}>
                <Text style={{ color: '#000' }}>
                  {matchScore.team1Score.inngs1.runs}/{matchScore.team1Score.inngs1.wickets} ({matchScore.team1Score.inngs1.overs})
                </Text>
              </View>
            )}
          </View>
          <View
            style={{
              width: '100%',
              marginHorizontal: 20,
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}
          >
            {/* Display team2 image */}
            <Image source={{ uri: item.matchInfo.team2Image }} style={{ height: 30, width: 30 }} />

            <Text
              style={[
                styles.txt,
                {
                  fontSize: moderateScale(16, 0.3),
                  marginLeft: 10,
                  color: '#000',
                  width: '30%',
                },
              ]}
            >
              {team2.teamSName}
            </Text>
            <View style={{ marginLeft: '20%' }}>
              {matchScore && matchScore.team2Score && matchScore.team2Score.inngs1 && (
                <View>
                  <Text style={{ color: '#000' }}>
                    {matchScore.team2Score.inngs1.runs}/{matchScore.team2Score.inngs1.wickets} ({matchScore.team2Score.inngs1.overs})
                  </Text>
                </View>
              )}
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 20,
              marginVertical: 15,
            }}
          >
            {statusComponent}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};








const [Topstories, setTopstories] = useState(null);
 



  const TopStoryData = async () => {
    try {
      // Fetch data without token
      const response = await fetch("https://cricketwicket.biz/api/v1/news/list");
      const data = await response.json();

      console.log('Topdata>>>>>>',data);
      
  
      
  
      
      setTopstories(data.storyList); 
  
    } catch (error) {
      console.error('Error fetching data:', error);
     
    }
  };

  useEffect(() => {
    TopStoryData();
  }, []);


  const getImageUrl = (imageId) => {
    return `https://static.cricbuzz.com/a/img/v1/1080x608/i1/c${imageId}/i.jpg`; 
  };


  

  
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/CricketLogo.png')}
          style={styles.logo}
        />
        
         
        
      </View>

      {loading ? (
  <View style={{marginTop:'50%'}}>
    <ActivityIndicator size="large" color="#4fa8b9" />
  </View>
) : (
  <>
  
    <Text style={styles.HeaderTxt}>Matches</Text>
    {liveData && liveData.length > 0 ? (
      <>
    
        <Carousel
          data={liveData}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={index => setActiveSlide(index)}
          autoplay={true} 
          autoplayDelay={500} 
          autoplayInterval={3000} 
          loop={true} 
          enableMomentum={false} 
          lockScrollWhileSnapping={true} 
          useScrollView={true} 
          
        />
       
        
      </>
    ) : (
      <View style={{ alignItems: 'center', marginVertical: 20 }}>
       <Image source={require('../../assets/nodata.png')} style={{height:20,width:20}}/>
      </View>
    )}

    <Text style={styles.HeaderTxt}>Top Stories</Text>
    {Topstories && Topstories.length > 0 ? (
      <View>
        {Topstories.map((item, index) => {
          if (item.story) {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate('NewsDetails', { Newsid: item.story.id })}
              >
                <View style={{ margin: 5 }}>
                  <View style={{ backgroundColor: '#fff', padding: 10 }}>
                    <Text style={{ color: '#808080' }}>{item.story.context}</Text>
                    <Image
                      source={{ uri: getImageUrl(item.story.imageId) }}
                      style={{
                        width: '100%',
                        height: undefined,
                        overflow: 'hidden',
                        borderRadius: 5,
                        marginVertical: 5,
                        aspectRatio: 1.5,
                      }}
                      resizeMode="cover"
                    />
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: '400' }}>
                      {item.story.hline}
                    </Text>
                    <Text style={{ color: '#808080', marginVertical: 5 }}>
                      {item.story.intro}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          } else if (item.ad) {
            return (
              <View key={index}>
                
              </View>
            );
          }
        })}
      </View>
    ) : (
      <View style={{ alignItems: 'center', marginVertical: 20 }}>
        <Image source={require('../../assets/nodata.png')} style={{height:20,width:20}}/>
      </View>
    )}
  </>
)}

    </ScrollView>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
    backgroundColor: '#f5f5f5',
  },
  logoContainer: {
    flexDirection: 'row',
    height: moderateScale(70, 0.3),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    // backgroundColor: '#00b4d8',
    backgroundColor: '#4fa8b9',
    borderBottomColor: '#4fa8b9',
    borderBottomWidth: 1,
    elevation: 100,
  },
  logo: {
    width: moderateScale(60, 0.3),
    height: moderateScale(60, 0.3),
  },
  icon: {
    width: moderateScale(65, 0.3),
    height: moderateScale(100, 0.3),
    tintColor: '#fff',
    marginTop: 20,
  },
  HeaderTxt: {
    fontSize: moderateScale(18, 0.3),
    color: '#000',
    fontWeight: '600',
    marginVertical: 5,
    marginLeft: 10,
  },
  teamLogo: {
    width: moderateScale(35, 0.3),
    height: moderateScale(35, 0.3),
  },
  image: {
    width: width * 0.9,
    height: '100%',
    resizeMode: 'cover',
  },
  pagination: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    // backgroundColor: '#888',
    backgroundColor: '#5A5A5A',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#fff',
  },
  txt: {
    color: '#000',
    marginRight: 10,
    fontSize: moderateScale(14, 0.3),
  },
  
  subHead: {
    color: '#000',
    fontSize: moderateScale(16, 0.3),
  },
  carouselItem: {
    width,
    height: 200, // Adjust as needed
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEAEA',
  },
  paginationContainer: {
    paddingVertical: 1,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    // marginHorizontal: 1,
    backgroundColor: '#3A3B3C', // Change the color as needed
  },
  inactivePaginationDot: {
    // Style for inactive dots
    color: 'red',
    width: 10,
    height: 10,
  },
});

export default Home;
