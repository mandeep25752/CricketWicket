import AsyncStorage from "@react-native-async-storage/async-storage";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View,Text,TouchableOpacity,Image,ScrollView,FlatList,ActivityIndicator } from "react-native"




const Tab = createMaterialTopTabNavigator();



const SCHEDULE = ()=>{
    const route = useRoute();
    const {teamid  } = route.params;

    const [SeriesMatch, setSeriesMatch] = useState([]);
    const [submitLoading, setSubmitLoading] = useState(false);


    // console.log('Data>>>>>>>>>',SeriesMatch);

    const TopStoryData = async () => {
        setSubmitLoading(true)
        try {
            const token = await AsyncStorage.getItem("loginToken");
            const response = await fetch(`https://cricketwicket.biz/api/v1/team/get-schedules/?teamId=${teamid}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
           
            const Data = await response.json();


            

            setSeriesMatch(Data.teamMatchesData);
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


        // console.log('Data>>>>>>>>>',item);


        if (!item || !item.matchDetailsMap || !item.matchDetailsMap.key) {
            return null;
        }
    
        const matchDetailsMap = item.matchDetailsMap;
        const matchDate = matchDetailsMap.key;

        
    
        return (
            <View>
                <View style={{backgroundColor:'#d3d3d3',flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{marginHorizontal:10,marginVertical:10,fontSize:16,color:'#808080'}}>{matchDate}</Text>
                <Image style={{ height: 10, width: 10, marginRight: 10, alignSelf: 'center' }} source={require('../../assets/rightarrow.png')} />
                </View>
                {matchDetailsMap.match.map(matchInfo => (
                    <View key={matchInfo.matchInfo.matchId}>
                        <TouchableOpacity style={{backgroundColor:'#fff',paddingBottom:5,paddingTop:5}}>
                        <Text style={{ color: '#808080',marginHorizontal:10 }}>{matchInfo.matchInfo.matchDesc} . {matchInfo.matchInfo.venueInfo.city}</Text>

                        <View style={{flexDirection:'row', marginVertical:15}}>

                        <Image
                          source={{ uri: getImageUrl(matchInfo.matchInfo.team1.imageId) }}
                          style={{ width: 30, height: 30, marginLeft: 10 }}
                        />

                        <Text style={{ color: 'black', fontWeight:'500',marginHorizontal:10, width:'30%' }}>
                            {matchInfo.matchInfo.team1.teamName}  
                        </Text>
                      
                        </View>
                        <View style={{flexDirection:'row'}}>

                        <Image
                          source={{ uri: getImageUrl(matchInfo.matchInfo.team2.imageId) }}
                          style={{ width: 30, height: 30, marginLeft: 10 }}
                        />
                        <Text style={{ color: 'black', fontWeight:'500',marginHorizontal:10, width:'30%' }}>
                            {matchInfo.matchInfo.team2.teamName}  
                        </Text>
                    

                        </View>
                        <Text style={{ color: '#d2691e',  fontWeight:'500', marginHorizontal: 10, paddingTop:10 }}>
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


const RESULTS = ()=>{


    const route = useRoute();
    const {teamid  } = route.params;

    const [SeriesMatch, setSeriesMatch] = useState([]);
    const [submitLoading, setSubmitLoading] = useState(false);


    // console.log('Data>>>>>>>>>',SeriesMatch);

    const TopStoryData = async () => {
        setSubmitLoading(true)
        try {
            const token = await AsyncStorage.getItem("loginToken");
            const response = await fetch(`https://cricketwicket.biz/api/v1/team/get-results/?teamId=${teamid}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
           
            const Data = await response.json();


            

            setSeriesMatch(Data.teamMatchesData);
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


        // console.log('Data>>>>>>>>>',item);


        if (!item || !item.matchDetailsMap || !item.matchDetailsMap.key) {
            return null;
        }
    
        const matchDetailsMap = item.matchDetailsMap;
        const matchDate = matchDetailsMap.key;

        
    
        return (
            <View>
                <View style={{backgroundColor:'#d3d3d3',flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{marginHorizontal:10,marginVertical:10,fontSize:16,color:'#808080'}}>{matchDate}</Text>
                <Image style={{ height: 10, width: 10, marginRight: 10, alignSelf: 'center' }} source={require('../../assets/rightarrow.png')} />
                </View>
                {matchDetailsMap.match.map(matchInfo => (
                    <View key={matchInfo.matchInfo.matchId}>
                        <TouchableOpacity style={{backgroundColor:'#fff',paddingBottom:5,paddingTop:5}}>
                        <Text style={{ color: '#808080',marginHorizontal:10 }}>{matchInfo.matchInfo.matchDesc} . {matchInfo.matchInfo.venueInfo.city}</Text>

                        <View style={{flexDirection:'row', marginVertical:15}}>

                        <Image
                          source={{ uri: getImageUrl(matchInfo.matchInfo.team1.imageId) }}
                          style={{ width: 30, height: 30, marginLeft: 10 }}
                        />

                        <Text style={{ color: 'black', fontWeight:'500',marginHorizontal:10, width:'30%' }}>
                            {matchInfo.matchInfo.team1.teamSName}  
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
                        <Text style={{ color: 'black', fontWeight:'500',marginHorizontal:10, width:'30%' }}>
                            {matchInfo.matchInfo.team2.teamSName}  
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
                        <Text style={{ color: '#00bfff',  fontWeight:'500', marginHorizontal: 10, paddingTop:10 }}>
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


const NEWS = ()=>{

    const route = useRoute();
    const { teamid } = route.params;

    const [SeriesMatch, setSeriesMatch] = useState([]);
    const [submitLoading, setSubmitLoading] = useState(false);

    const NewsStoryData = async () => {
      setSubmitLoading(true);
      try {
        const token = await AsyncStorage.getItem("loginToken");
        const response = await fetch(`https://cricketwicket.biz/api/v1/team/get-news/?teamId=${teamid}`, {
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
        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: 10 }}>
          <Image
            source={{ uri: getImageUrl(imageId) }}
            style={{ width: 100, height: 80, borderRadius:10 }}
          />

          {/* <Text style={{color:'black'}}>{item.story.id}</Text> */}
          <View style={{ flexDirection: 'column', width:'70%' }}>
            <Text style={{ color: 'black',  alignSelf: 'center', fontSize: 16, fontWeight: '400', marginHorizontal:10}}>{hline}</Text>
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
 

}


const PLAYERS = ()=>{


    const route = useRoute();
    const { teamid } = route.params;


   
    const [SeriesMatch, setSeriesMatch] = useState([]);
    const [submitLoading, setSubmitLoading] = useState(false);

    const navigation = useNavigation()

    const TopStoryData = async () => {
      setSubmitLoading(true);
      try {
        const token = await AsyncStorage.getItem("loginToken");
        const response = await fetch(`https://cricketwicket.biz/api/v1/team/get-players/?teamId=${teamid}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();

        // console.log('data>>>>>>>',data);

        setSeriesMatch(data.player);
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
      
        const isCategory = ["BATSMEN", "ALL ROUNDER", "BOWLER", "WICKET KEEPER"].includes(item.name);
    
      
        const backgroundColor = isFirstItem ? '#4fa8b9' : isCategory ? '#e6e6e6' : '#fff';

        const getImageUrl = (imageId) => {
            return `https://static.cricbuzz.com/a/img/v1/i1/c${imageId}/i.jpg`;
        };
    
        return (
            <View style={{ backgroundColor }}>
                <TouchableOpacity  onPress={()=>navigation.navigate('PlyerDetails',{itemid:item.id, itemname:item.name})} style={{ flexDirection: 'row', marginVertical: 10 }}>
                    {/* Show image only for player items */}
                    {!isCategory && (
                        <Image
                            source={{ uri: getImageUrl(item.imageId) }}
                            style={{ width: 30, height: 30, marginLeft: 10, borderRadius: 15 }}
                        />
                    )}
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: '400', marginHorizontal: 10, alignSelf: 'center' }}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        );
    };
    

  
    return(

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
    )

}


const STATS = ()=>{

    const route = useRoute();
    const { teamid } = route.params;
    const navigation =useNavigation()
  
    const [SeriesMatch, setSeriesMatch] = useState([]);
    const [submitLoading, setSubmitLoading] = useState(false);
  
    const TopStoryData = async () => {
      setSubmitLoading(true);
      try {
        const token = await AsyncStorage.getItem("loginToken");
        const response = await fetch(`https://test.textcode.co.in/api/v1/team/get-stats-filters/?teamId=${teamid}`, {
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
          <TouchableOpacity onPress={() => !isHeader && navigation.navigate('BrowerteamStatslist', { teamid:teamid, statsList: item.value })}>
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



const BrowseTeamlist = () =>{

    const route = useRoute();
    const { teamid } = route.params; 
    console.log('TeamName>>>>>>>>', teamid);


    return (
        <Tab.Navigator
  tabBarOptions={{
    labelStyle: { fontSize: 14, fontWeight: '600', color: '#fff' },
    style: { backgroundColor: '#4fa8b9' },
    indicatorStyle: { backgroundColor: '#fff' },
    scrollEnabled: true, // Enable horizontal scrolling
  }}
>
  <Tab.Screen name="SCHEDULE" component={SCHEDULE} initialParams={{teamid}} />
  <Tab.Screen name="RESULTS" component={RESULTS} initialParams={{teamid}} />
  <Tab.Screen name="NEWS" component={NEWS} initialParams={{teamid}} />
  <Tab.Screen name="PLAYERS" component={PLAYERS} initialParams={{teamid}}  />
  <Tab.Screen name="STATS" component={STATS} initialParams={{teamid}}  />
  
</Tab.Navigator>

      
      );
} 

export default BrowseTeamlist
