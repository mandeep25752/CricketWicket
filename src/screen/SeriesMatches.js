import AsyncStorage from "@react-native-async-storage/async-storage";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { View,Text, ScrollView, FlatList,TouchableOpacity,Image } from "react-native";



const Tab = createMaterialTopTabNavigator();
function Matches() {
    const route = useRoute();
    const { seriesId } = route.params;

    const navigation= useNavigation()

    const [SeriesMatch, setSeriesMatch] = useState([]);
    const [submitLoading, setSubmitLoading] = useState(false);

    const TopStoryData = async () => {
        setSubmitLoading(true)
        try {
            const token = await AsyncStorage.getItem("loginToken");
            const response = await fetch(`https://cricketwicket.biz/api/v1/series/get-matches/?seriesId=${seriesId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
           
            const Data = await response.json();
            setSeriesMatch(Data.matchDetails);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

        setSubmitLoading(false)
    };

    useEffect(() => {
        TopStoryData();
    }, []);

    const getImageUrl = (imageId) => {
      return `https://static.cricbuzz.com/a/img/v1/i1/c${imageId}/i.jpg`; // Adjust the URL pattern based on your server
    };

    const liveRenderItem = ({ item }) => {
        if (!item || !item.matchDetailsMap || !item.matchDetailsMap.key) {
            return null;
        }
    
        const matchDetailsMap = item.matchDetailsMap;
        const matchDate = matchDetailsMap.key;

        
    
        return (
            <View>
                <Text style={{marginHorizontal:10,marginVertical:10,fontSize:16,color:'#000000',fontWeight:'500'}}>{matchDate}</Text>
                {matchDetailsMap.match.map(matchInfo => (
                    <View key={matchInfo.matchInfo.matchId}>
                        <TouchableOpacity style={{backgroundColor:'#fff',paddingBottom:5,paddingTop:5}}
                        onPress={() => {
                          const {
                              matchInfo: {
                                  matchId,
                                  team1: { teamName: teamName1 },
                                  team2: { teamName: teamName2 },
                                  status
                              },
                              matchScore: {
                                  team1Score: { inngs1: { runs: team1Runs, wickets: team1Wickets, overs: team1Overs } },
                                  team2Score: { inngs1: { runs: team2Runs, wickets: team2Wickets, overs: team2Overs } }
                              }
                          } = matchInfo;
                      
                          const team1Data = {
                              runs: team1Runs,
                              wickets: team1Wickets,
                              overs: team1Overs
                          };
                      
                          const team2Data = {
                              runs: team2Runs,
                              wickets: team2Wickets,
                              overs: team2Overs
                          };
                      
                          navigation.navigate('InfoLiveScorecard', {
                              matchid: matchId,
                              teamName1: teamName1,
                              teamName2: teamName2,
                              team1Score: team1Data,
                              team2Score: team2Data,
                              matchStatus: status.includes(',') ? status.split(',')[1].trim() : status
                          });
                      }}
                      
                        >
                        <Text style={{ color: '#808080',marginHorizontal:10 }}>{matchInfo.matchInfo.matchDesc} . {matchInfo.matchInfo.venueInfo.city}</Text>

                        <View style={{flexDirection:'row', marginVertical:15}}>

                        <Image
                          source={{ uri: getImageUrl(matchInfo.matchInfo.team1.imageId) }}
                          style={{ width: 30, height: 30, marginLeft: 10 }}
                        />

                        <Text style={{ color: 'black',marginHorizontal:10, width:'30%' }}>
                            {matchInfo.matchInfo.team1.teamName}  
                        </Text>
                        <View style={{ flexDirection: 'row',marginLeft:'30%' }}>
    {matchInfo.matchScore && matchInfo.matchScore.team1Score && matchInfo.matchScore.team1Score.inngs1 && 
        matchInfo.matchScore.team1Score.inngs1.runs !== undefined && (
            <Text style={{ color: 'black', marginHorizontal: 5 }}>
                {matchInfo.matchScore.team1Score.inngs1.runs}
                {matchInfo.matchScore.team1Score.inngs1.wickets !== 10 ? `-${matchInfo.matchScore.team1Score.inngs1.wickets}` : ''}
            </Text>
        )}

    {matchInfo.matchScore && matchInfo.matchScore.team1Score && matchInfo.matchScore.team1Score.inngs1 && 
        matchInfo.matchScore.team1Score.inngs1.overs !== undefined && (
            <Text style={{ color: 'black',  }}>
                {`(${matchInfo.matchScore.team1Score.inngs1.overs})`}
            </Text>
        )}
</View>

                        </View>
                        <View style={{flexDirection:'row'}}>

                        <Image
                          source={{ uri: getImageUrl(matchInfo.matchInfo.team2.imageId) }}
                          style={{ width: 30, height: 30, marginLeft: 10 }}
                        />
                        <Text style={{ color: 'black',marginHorizontal:10, width:'30%' }}>
                            {matchInfo.matchInfo.team2.teamName}  
                        </Text>
                        <View style={{ flexDirection: 'row', marginLeft:'28%' }}>
    {matchInfo.matchScore && matchInfo.matchScore.team2Score && matchInfo.matchScore.team2Score.inngs1 ? (
        <>
            <Text style={{ color: 'black', marginHorizontal: 5 }}>
                {matchInfo.matchScore.team2Score.inngs1.runs}
                {matchInfo.matchScore.team2Score.inngs1.wickets !== 10 ? `-${matchInfo.matchScore.team2Score.inngs1.wickets}` : ''}
            </Text>
            <Text style={{ color: 'black', }}>
                {`(${matchInfo.matchScore.team2Score.inngs1.overs})`}
            </Text>
        </>
    ) : null}
</View>

                        </View>
                        <Text style={{ color: '#87cefa', fontWeight:'500', marginHorizontal: 10, marginVertical:10 }}>
                            {matchInfo.matchInfo.status.includes(',') ? matchInfo.matchInfo.status.split(',')[1].trim() : matchInfo.matchInfo.status}
                        </Text>
                        <Text style={{borderBottomWidth:1,borderBottomColor:'#f5f5f5'}}></Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        );
    };
    
    

    return (
        <ScrollView style={{backgroundColor:'#4fa8b9'}}>

{submitLoading  ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
            <ActivityIndicator size='large' color='#0000ff' />
          </View>):(
        <FlatList
            data={SeriesMatch}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            renderItem={liveRenderItem}
        />
          )}
        </ScrollView>
    );
}

  function SQUADS() {

    const route = useRoute();
    const { seriesId } = route.params;
    const navigation = useNavigation();

    const [SeriesMatch, setSeriesMatch] = useState([]);
    const [submitLoading, setSubmitLoading] = useState(false);

    const TopStoryData = async () => {
      setSubmitLoading(true);
      try {
        const token = await AsyncStorage.getItem("loginToken");
        const response = await fetch(`https://cricketwicket.biz/api/v1/series/get-squads/?seriesId=${seriesId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        setSeriesMatch(data.squads);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setSubmitLoading(false);
    };
  
    useEffect(() => {
      TopStoryData();
    }, []);
  
    const liveRenderItem = ({ item }, index) => {
      const isFirstItem = item.isHeader;

      // console.log('isFirstItem????',isFirstItem);
  
      return (
        <View style={{ backgroundColor: isFirstItem ? '' : '#fff' }}>

<TouchableOpacity onPress={() => !isFirstItem && navigation.navigate('SquadTeam', { seriesId, squadId: item.squadId ,teamName: item.squadType})}>
          <Text style={{ color: 'black', fontSize: 16, fontWeight: '400', marginHorizontal: 10, marginVertical: 10 }}>{item.squadType}</Text>
        </TouchableOpacity>
        </View>
      );
    };
  
    return (
      <ScrollView style={{ backgroundColor: '#4fa8b9' }}>
        {submitLoading ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
            <ActivityIndicator size='large' color='#0000ff' />
          </View>
        ) : (
          <FlatList
            data={SeriesMatch}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            renderItem={liveRenderItem}
          />
        )}
      </ScrollView>
    );
  };

   
 
    



  function NEWS() {

    const route = useRoute();
    const { seriesId } = route.params;

    const [SeriesMatch, setSeriesMatch] = useState([]);
    const [submitLoading, setSubmitLoading] = useState(false);

    const NewsStoryData = async () => {
      setSubmitLoading(true);
      try {
        const token = await AsyncStorage.getItem("loginToken");
        const response = await fetch(`https://cricketwicket.biz/api/v1/series/get-news/?seriesId=${seriesId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();

        // console.log('data>>>>>>>',data);


        setSeriesMatch(data.storyList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setSubmitLoading(false);
    };
  
    useEffect(() => {
      NewsStoryData();
    }, []);


    const getImageUrl = (imageId) => {
      return `https://static.cricbuzz.com/a/img/v1/1080x608/i1/c${imageId}/i.jpg`;
  };


  const navigation = useNavigation()

  
  const NewsRenderItem = ({ item }) => {
    // console.log('isFirstItem????', item);
  
    if (!item || !item.story) {
      console.error('Invalid item format:', item);
      return null;
    }
  
   
    const { hline, intro, imageId, pubTime } = item.story;
  
    const pubDate = new Date(Number(pubTime));
  
   
    const currentTime = new Date();
    const timeDifference = currentTime.getTime() - pubDate.getTime();
  
   
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutesDifference = Math.floor((timeDifference / (1000 * 60)) % 60);
  
    
    let formattedElapsedTime = '';
    if (hoursDifference > 0) {
      formattedElapsedTime = `${hoursDifference} ${hoursDifference === 1 ? 'hour' : 'hours'} ago`;
    } else {
      formattedElapsedTime = `${minutesDifference} ${minutesDifference === 1 ? 'minute' : 'minutes'} ago`;
    }
  
    return (
      <View style={{ backgroundColor: '#fff', }}>

        <TouchableOpacity  onPress={() => navigation.navigate('NewsDetails',{Newsid:item.story.id})}>
        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: 5 }}>
          <Image
            source={{ uri: getImageUrl(imageId) }}
            style={{ width: 80, height: 80, marginLeft: 10,borderRadius:10 }}
          />
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ color: 'black', alignSelf: 'center', fontSize: 16, fontWeight: '400', marginHorizontal: 10, }}>{hline}</Text>
            <Text style={{ color: '#808080', marginHorizontal: 10 }}>{formattedElapsedTime}</Text>
          </View>
        </View>
        <Text style={{color: '#808080',marginHorizontal:10 }}>{intro}</Text>
        <Text style={{borderTopWidth:1,marginTop:10, borderTopColor:'#f5f5f5'}}></Text>
        </TouchableOpacity>
      </View>
    );
};

  
    
  
    return (
      <ScrollView style={{ backgroundColor: '#4fa8b9' }}>
        {submitLoading ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
            <ActivityIndicator size='large' color='#0000ff' />
          </View>
        ) : (
          <FlatList
            data={SeriesMatch}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            renderItem={NewsRenderItem}
          />
        )}
      </ScrollView>
    );
  };


  function TABLE() {
    const route = useRoute();
    const { seriesId } = route.params;

    // console.log('seriesId>>>>>>>>>',seriesId);

    const [SeriesMatch, setSeriesMatch] = useState([]);
    const [submitLoading, setSubmitLoading] = useState(false);

    const TopStoryData = async () => {
      setSubmitLoading(true);
      try {
          const token = await AsyncStorage.getItem("loginToken");
          const response = await fetch(`https://cricketwicket.biz/api/v1/series/get-points-table/?seriesId=${seriesId}`, {
              headers: {
                  'Authorization': `Bearer ${token}`
              }
          });
          const data = await response.json();
          setSeriesMatch(data.pointsTable);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
      setSubmitLoading(false);
  };
  
  useEffect(() => {
      TopStoryData();
  }, []);
  
  const getImageUrl = (imageId) => {
    return `https://static.cricbuzz.com/a/img/v1/i1/c${imageId}/i.jpg`;
};

const liveRenderItem = ({ item }) => {
    if (!item || !item.pointsTableInfo) {
        return null;
    }

    const { pointsTableInfo, groupName } = item;

    return (
        <View>
            <View style={{ backgroundColor: '#f5f5f5' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 16, color: 'black', width: '25%' }}>{groupName}</Text>
                    <Text style={{ color: 'black' }}>P</Text>
                    <Text style={{ color: 'black' }}>W</Text>
                    <Text style={{ color: 'black' }}>L</Text>
                    <Text style={{ color: 'black' }}>NR</Text>
                    <Text style={{ color: 'black' }}>Pts</Text>
                    <Text style={{ color: 'black',marginRight:'5%' }}>NRR</Text>
                </View>
            </View>
            {pointsTableInfo.map(teamInfo => {
                const matchesPlayed = teamInfo.matchesPlayed || 0;
                const matchesWon = teamInfo.matchesWon || 0;
                const matchesLost = matchesPlayed - matchesWon;
                const points = teamInfo.points || 0;
                const nrr = teamInfo.nrr || '0.00';

                return (
                    <View key={teamInfo.teamId}>
                        <View style={{ flexDirection: 'row', width: '100%', backgroundColor: '#fff' }}>
                            <View style={{ flexDirection: 'row', width: '25%', marginVertical: 10, marginHorizontal: 10 }}>
                                <Image
                                    source={{ uri: getImageUrl(teamInfo.teamImageId) }}
                                    style={{ width: 30, height: 30 }}
                                />
                                <Text style={{ color: 'black', marginHorizontal: 10, alignSelf: 'center' }}>{teamInfo.teamName}</Text>
                            </View>
                            <View style={{ width: '70%', marginHorizontal: 10, flexDirection: 'row' }}>
                                <Text style={{ color: 'black', fontSize:12,  alignSelf: 'center' }}>{matchesPlayed}</Text>
                                <Text style={{ color: 'black',fontSize:12, marginLeft:'11%', alignSelf: 'center' }}>{matchesWon}</Text>
                                <Text style={{ color: 'black',fontSize:12, marginLeft:'11%', alignSelf: 'center' }}>{matchesLost}</Text>
                                <Text style={{ color: 'black',fontSize:12, marginLeft:'12%', alignSelf: 'center' }}>{teamInfo.noResult || 0}</Text>
                                <Text style={{ color: 'black',fontSize:12,  marginLeft:'15%', alignSelf: 'center' }}>{points}</Text>
                                <Text style={{ color: 'black', fontSize:12, marginLeft:'10%', alignSelf: 'center' }}>{nrr}</Text>

                              <TouchableOpacity style={{alignSelf:'center'}}>
                                <Image
                                    source={require('../../assets/downarrow.png')}
                                    style={{ width: 10, height: 10, alignSelf:'center',marginHorizontal:4}}
                                />

                                 </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                );
            })}
        </View>
    );
};



  
  return (
      <ScrollView style={{ backgroundColor: '#4fa8b9' }}>
          {submitLoading ? (
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                  <ActivityIndicator size='large' color='#0000ff' />
              </View>
          ) : (
              <FlatList
                  data={SeriesMatch}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                  scrollEventThrottle={16}
                  renderItem={liveRenderItem}
              />
         )} 
      </ScrollView>
  );
  };

  


  function VENUES() {
  
    const route = useRoute();
    const { seriesId } = route.params;

    const navigation = useNavigation()

    const [SeriesMatch, setSeriesMatch] = useState([]);
  const [submitLoading, setSubmitLoading] = useState(false);

  const VenuceStoryData = async () => {
    setSubmitLoading(true);
    try {
      const token = await AsyncStorage.getItem("loginToken");
      const response = await fetch(`https://cricketwicket.biz/api/v1/series/get-venues/?seriesId=${seriesId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      console.log('API response data:', data);
      setSeriesMatch(data.seriesVenue || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setSubmitLoading(false);
  };

  useEffect(() => {
    VenuceStoryData();
  }, []);

  const getImageUrl = (imageId) => {
    return `https://static.cricbuzz.com/a/img/v1/i1/c${imageId}/i.jpg`;
  };

  const VenuceRenderItem = ({ item }) => {
    return (
      <View style={{ backgroundColor: '#fff',}}>
        <TouchableOpacity onPress={() => navigation.navigate('VenuesList', { item:item.id, teamName: item.ground })}>

<View style={{flexDirection:'row'}}>
                             <Image
                                    source={{ uri: getImageUrl(item.imageId) }}
                                    style={{ width: 80, height: 80,  marginHorizontal:10, marginVertical:10}}/>

                                    <View style={{flexDirection:'column',}}>
          <Text style={{ color: 'black', fontSize: 14, fontWeight: '400', marginHorizontal: 5, marginVertical:10}}>{item.ground}</Text>

         
          <Text style={{ color: 'black', fontSize: 14, marginHorizontal: 5, color:'#a9a9a9' }}>{item.city}</Text>

          </View>

          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={{ backgroundColor: '#4fa8b9' }}>
      {submitLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
          <ActivityIndicator size='large' color='#0000ff' />
        </View>
      ) : (
        <FlatList
          data={SeriesMatch}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          renderItem={VenuceRenderItem}
        />
    
    
    )} 
    </ScrollView>
  );
};

  function STATS() {
    
    const route = useRoute();
  const { seriesId } = route.params;
  const navigation =useNavigation()

  const [SeriesMatch, setSeriesMatch] = useState([]);
  const [submitLoading, setSubmitLoading] = useState(false);

  const TopStoryData = async () => {
    setSubmitLoading(true);
    try {
      const token = await AsyncStorage.getItem("loginToken");
      const response = await fetch(`https://cricketwicket.biz/api/v1/series/get-stats-filters/?seriesId=${seriesId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();

      // console.log('hello stats data >>>>>>>', data);

      setSeriesMatch(data.types);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setSubmitLoading(false);
  };

  useEffect(() => {
    TopStoryData();
  }, []);

  const liveRenderItem = ({ item }) => {
    const isHeader = !item.value;
  
    return (
      <View style={{ backgroundColor: isHeader ? '#f0f0f0' : '#fff', padding: 10 }}>
        <TouchableOpacity onPress={() => !isHeader && navigation.navigate('StatsList', { seriesId:seriesId, statsList: item.value })}>
          {isHeader ? (
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>{item.header}</Text>
          ) : (
            <Text style={{ color: 'black', fontSize: 16, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' }}>{item.header}</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={{ backgroundColor: '#4fa8b9' }}>
      {submitLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size='large' color='#0000ff' />
        </View>
      ) : (
        <FlatList
          data={SeriesMatch}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          renderItem={liveRenderItem}
        />
      )}
    </ScrollView>
  );
}

const SeriesMatches = ({route})=>{

const {seriesId}=route.params

  //  console.log('seriesId>>>>>>>>>',seriesId);
    


    return (
        <Tab.Navigator
  tabBarOptions={{
    labelStyle: { fontSize: 14, fontWeight: '600', color: '#fff' },
    style: { backgroundColor: '#4fa8b9' },
    indicatorStyle: { backgroundColor: '#fff' },
    scrollEnabled: true, // Enable horizontal scrolling
  }}
>
  <Tab.Screen name="MATCHES" component={Matches} initialParams={{seriesId}} />
  <Tab.Screen name="TABLE" component={TABLE} initialParams={{seriesId}} />
  <Tab.Screen name="SQUADS" component={SQUADS} initialParams={{seriesId}} />
  <Tab.Screen name="STATS" component={STATS} initialParams={{seriesId}} />
  <Tab.Screen name="VENUES" component={VENUES} initialParams={{seriesId}} />
  <Tab.Screen name="NEWS" component={NEWS} initialParams={{seriesId}} />
</Tab.Navigator>

      
      );
}

export default SeriesMatches;