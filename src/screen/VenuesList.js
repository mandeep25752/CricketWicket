import AsyncStorage from "@react-native-async-storage/async-storage";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View,Text,ScrollView,FlatList,ActivityIndicator,Image,TouchableOpacity } from "react-native";


const Tab = createMaterialTopTabNavigator();



function INFO() {
    const route = useRoute();
    const { item } = route.params;

    console.log('item>>>>>>>>>>>', item);

    const [SeriesMatch, setSeriesMatch] = useState({});
    const [submitLoading, setSubmitLoading] = useState(false);

    const TopStoryData = async () => {
        setSubmitLoading(true);
        try {
            const token = await AsyncStorage.getItem("loginToken");
            const response = await fetch(`https://cricketwicket.biz/api/v1/venues/get-info/?venueId=${item}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const Data = await response.json();
            // console.log('Data>>>>>>>', Data);
            setSeriesMatch(Data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

        setSubmitLoading(false);
    };

    useEffect(() => {
        TopStoryData();
    }, []);

    const renderItem = ({ item }) => (
        <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
            <Text style={{ fontSize: 16, color: 'black' }}>{item.label}: {item.value}</Text>
        </View>
    );

    const renderContent = () => {
        if (Object.keys(SeriesMatch).length > 0) {
            const dataToShow = [
                { label: 'Opened', value: SeriesMatch.established },
                { label: 'Capacity', value: SeriesMatch.capacity },
                { label: 'Known As', value: SeriesMatch.knownAs },
                  { label: 'Known As', value: SeriesMatch.knownAs },
                { label: 'Location', value:`${SeriesMatch.city}, ${SeriesMatch.country}`},
                { label: 'Timezone', value: SeriesMatch.timezone },
                { label: 'Home to', value: SeriesMatch.homeTeam },
                { label: 'Floodlights', value: SeriesMatch.floodlights ? 'Yes' : 'No' },
             
               
               
            ];

            return (
                <View>
                    <Image
                        source={{ uri: SeriesMatch.imageUrl }}
                        style={{ width: '100%', height: 200 }}
                        resizeMode='cover'
                    />
                    <FlatList
                        data={dataToShow}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        scrollEventThrottle={16}
                        renderItem={renderItem}
                    />
                </View>
            );
        }

        return null;
    };

    return (
        <ScrollView style={{ backgroundColor: '#4fa8b9' }}>
            {submitLoading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                    <ActivityIndicator size='large' color='#0000ff' />
                </View>
            ) : (
                renderContent()
            )}
        </ScrollView>
    );
};


function MATCHES() {
    
    
const route = useRoute();
const { item } = route.params;

const [SeriesMatch, setSeriesMatch] = useState([]);
const [submitLoading, setSubmitLoading] = useState(false);

const TopStoryData = async () => {
    setSubmitLoading(true)
    try {
        const token = await AsyncStorage.getItem("loginToken");
        const response = await fetch(`https://test.textcode.co.in/api/v1/venues/get-matches/?venueId=${item}`, {
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
            <Text style={{marginHorizontal:10,marginVertical:10,fontSize:16,color:'black'}}>{matchDate}</Text>
            {matchDetailsMap.match.map(matchInfo => (
                <View key={matchInfo.matchInfo.matchId}>
                    <TouchableOpacity style={{backgroundColor:'#fff',paddingBottom:5,paddingTop:5}}>
                    <Text style={{ color: 'black',marginHorizontal:10 }}>{matchInfo.matchInfo.matchDesc} . {matchInfo.matchInfo.venueInfo.city}</Text>

                    <View style={{flexDirection:'row', marginVertical:15}}>

                    <Image
                      source={{ uri: getImageUrl(matchInfo.matchInfo.team1.imageId) }}
                      style={{ width: 30, height: 30, marginLeft: 10 }}
                    />

                    <Text style={{ color: 'black',marginHorizontal:10,  }}>
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
                    <Text style={{ color: 'black',marginHorizontal:10,  }}>
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
                    <Text style={{ color: 'black', marginHorizontal: 10, marginVertical:5 }}>
                        {matchInfo.matchInfo.status.includes(',') ? matchInfo.matchInfo.status.split(',')[1].trim() : matchInfo.matchInfo.status}
                    </Text>
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
    

  


function STATS() {
    const route = useRoute();
    const { item } = route.params;
    const [SeriesMatch, setSeriesMatch] = useState([]);
    const [submitLoading, setSubmitLoading] = useState(false);
  
    const TopStoryData = async () => {
      setSubmitLoading(true);
      try {
        const token = await AsyncStorage.getItem("loginToken");
        const response = await fetch(`https://test.textcode.co.in/api/v1/venues/get-stats/?venueId=${item}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
  
        console.log('status data >>>>>>>', data);
  
        setSeriesMatch(data.venueStats);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setSubmitLoading(false);
    };
  
    useEffect(() => {
      TopStoryData();
    }, []);
  
    const liveRenderItem = ({ item }) => {
      // console.log('item>>>>>>>>>', item);
  
      return (
        <View>
            <View style={{flexDirection:'row',backgroundColor:'#fff'}}>
          <Text style={{ color: 'black', fontSize: 14, fontWeight: '400', marginHorizontal: 10, marginVertical: 15 }}>
            {item.key}: 
          </Text>
          <Text style={{ color: 'black', fontSize: 14, fontWeight: '400', marginHorizontal: 10, marginVertical: 15 }}>{item.value}</Text>
          </View>
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
  }


const VenuesList = ({route}) =>{

    const {item}=route.params

   

    return (
        <Tab.Navigator
  tabBarOptions={{
    labelStyle: { fontSize: 14, fontWeight: '600', color: '#fff' },
    style: { backgroundColor: '#4fa8b9' },
    indicatorStyle: { backgroundColor: '#fff' },
    scrollEnabled: true, // Enable horizontal scrolling
  }}
>
  <Tab.Screen name="INFO" component={INFO} initialParams={{item}}/>
  <Tab.Screen name="MATCHES" component={MATCHES} initialParams={{item}}/>
 <Tab.Screen name="STATS" component={STATS} initialParams={{item}}  />
 
</Tab.Navigator>

      
      );
}

export default VenuesList;