import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { View,Text,ScrollView,RefreshControl,FlatList,Image,Pressable,TouchableOpacity } from "react-native"




const Schedule = ()=>{
  
  
    const [matchSchedule, setMatchSchedule] = useState([]);
    const [selectedMatchType, setSelectedMatchType] = useState('INTERNATIONAL');
    const [matchTypes, setMatchTypes] = useState(['International', 'LEAGUE', 'Domestic', 'Women']);
    const [submitLoading, setSubmitLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
  

    // console.log('matchSchedule>>>>>>>>>>',matchSchedule);

    const navigation = useNavigation()

    useEffect(() => {
      fetchData();
    }, [selectedMatchType]);
  
    const fetchData = async () => {
      setSubmitLoading(true);
      try {
        const token = await AsyncStorage.getItem("loginToken");
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
    
        const url = `https://cricketwicket.biz/api/v1/schedules/list/?type=${selectedMatchType.toLowerCase()}`;
    
        const response = await fetch(url, {
          method: 'GET',
          headers: myHeaders,
        });
    
        const responseData = await response.json();
    
        // console.log('responseData>>>>>>', responseData);
    
        if (responseData.matchScheduleMap && responseData.matchScheduleMap.length > 0) {
          // Extract matchScheduleList from each item in matchScheduleMap
          const schedules = responseData.matchScheduleMap
            .filter(item => item.scheduleAdWrapper && item.scheduleAdWrapper.matchScheduleList) // Filter out items without scheduleAdWrapper or matchScheduleList
            .map(item => item.scheduleAdWrapper); // Extract scheduleAdWrapper
          setMatchSchedule(schedules);
        } else {
          console.error('No match schedule data found');
        }
      } catch (error) {
        console.error('Error fetching match schedule:', error);
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
  
    const formatTimestamp = (timestamp, timezoneOffset) => {
        const date = new Date(parseInt(timestamp));
        const options = {
            hour: 'numeric',
            minute: 'numeric',
        };
        
        // Check if timezoneOffset is provided
        if (timezoneOffset) {
            // Calculate timezone offset in minutes
            const offsetHours = parseInt(timezoneOffset.split(':')[0]);
            const offsetMinutes = parseInt(timezoneOffset.split(':')[1]);
            
            // Apply timezone offset
            const localDate = new Date(date.getTime() + (offsetHours * 60 + offsetMinutes) * 60000);
            
            // Extract day, month, date, and year
            const day = localDate.toLocaleDateString('en-US', { weekday: 'short' });
            const month = localDate.toLocaleDateString('en-US', { month: 'short' });
            const date = localDate.getDate();
            const year = localDate.getFullYear();
            
            return { day, month, date, year };
        } else {
            // If timezoneOffset is not provided, return timestamp in default format
            return date.toLocaleTimeString('en-US', options);
        }
    };
    

    const getImageUrl = (imageId) => {
      return `https://static.cricbuzz.com/a/img/v1/i1/c${imageId}/i.jpg`; // Adjust the URL pattern based on your server
    };
    
    const renderMatchItem = ({ item }) => {
      return (
        <View>
          <Text style={{ color: 'black', fontWeight: 'bold', alignSelf:'center', fontSize: 16, marginVertical: 10 }}>{item.date}</Text>
          {item.matchScheduleList.map((series, seriesIndex) => (
            <View key={seriesIndex}>
              <TouchableOpacity
              style={{backgroundColor:'#dcdcdc',flexDirection:'row',justifyContent:'space-between',}}>
                <Text style={{ color: 'black', fontWeight: 'bold', marginHorizontal:10, fontSize: 14, marginVertical: 10 }}>{series.seriesName}</Text>
                <Image style={{ height: 10, width: 10, marginRight: '5%', alignSelf: 'center' }} source={require('../../assets/rightarrow.png')} />
              </TouchableOpacity>
              {series.matchInfo.map((match, matchIndex) => (
                <TouchableOpacity key={matchIndex} 
                
                onPress={() => navigation.navigate('InfoLiveScorecard',{matchid: match.matchId, 
                  teamName1: match.team1.teamName, 
                  teamName2: match.team2.teamName,
                  matchStatus: match.status
                 })}
                style={{ backgroundColor: '#eee', borderBottomWidth:1, borderBottomColor:'#dcdcdc', justifyContent: 'space-between', padding: 10 }}>

                  <View style={{flexDirection:'row'}}>
                  <Text style={{ color: 'black', marginHorizontal: 10 }}>{match.matchDesc}</Text>
                 
                    <Text style={{ color: 'black' }}>{match.venueInfo.city}</Text>
                    </View>
                    <View style={{ flexDirection:'row',marginTop:10 }}>
                    <Image
                          source={{ uri: getImageUrl(match.team1.imageId) }}
                          style={{ width: 30, height: 30, marginLeft: 10 }}
                        />
                     
                      <Text style={{ color: 'black',marginHorizontal: 10, width:'30%'  }}>{match.team1.teamName}</Text>
                      
                      <Text style={{color:'black',marginHorizontal:'30%'}}>{formatTimestamp(match.startDate)}</Text>
                    </View>

                    <View style={{ flexDirection: 'column',flexDirection:'row',marginVertical:10 }}>

                    <Image
                          source={{ uri: getImageUrl(match.team2.imageId) }}
                          style={{ width: 30, height: 30, marginLeft: 10 }}
                        />
                     
                      <Text style={{ color: 'black',marginHorizontal: 10  }}>{match.team2.teamName}</Text>
                    </View>
                  
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      );
    };
    
  
    
      
    return (
      <ScrollView
        style={{ backgroundColor: '#4fa8b9' }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#0000ff']}
            tintColor={'#0000ff'}
          />
        }>
        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
          {['INTERNATIONAL', 'LEAGUES', 'DOMESTIC', 'WOMEN'].map((type, index) => (
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
        </View> */}
  


        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
          {matchTypes.map((type, index) => (
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
            <ActivityIndicator size='large' color='#0000ff' />
          </View>
        ) : (
            <FlatList
              data={matchSchedule}
              renderItem={renderMatchItem}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16}
            />
          )}
      </ScrollView>
    );
}

export default Schedule;