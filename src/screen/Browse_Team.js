import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { FlatList, Image, RefreshControl, ScrollView, Text, View,TouchableOpacity, Pressable } from "react-native";
import Navigation from "../navigation";
import { useNavigation } from "@react-navigation/native";



const Browse_Team =()=>{


    const [liveData, setLiveData] = useState([]);
    const [matchTypes, setMatchTypes] = useState(['INTERNATIONAL', 'LEAGUE', 'DOMESTIC', 'WOMEN']);
    const [selectedMatchType, setSelectedMatchType] = useState('International');
    const [submitLoading, setSubmitLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);


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
    
          const url = `https://cricketwicket.biz/api/v1/team/?type=${selectedMatchType.toLowerCase()}`;
    
          const response = await fetch(url, {
            method: 'GET',
            headers: myHeaders,
          });
    
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
    
          const responseData = await response.json();
          console.log('responseData>>>>>>', responseData);
    
          if (responseData.list) {
            setLiveData(responseData.list.filter(item => item.teamId)); // Filter out items without teamId
          } else {
            console.error('Unexpected response structure:', responseData);
          }
        } catch (error) {
          console.error('Error fetching team data:', error);
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
        month: 'short',
        day: '2-digit',
       
      };
      return date.toLocaleDateString('en-US', options);
    };
  
    
    const getImageUrl = (imageId) => {
      return `https://static.cricbuzz.com/a/img/v1/i1/c${imageId}/i.jpg`; // Adjust the URL pattern based on your server
    };
    
  
    const renderTeamItem = ({ item }) => {

     

        return (
          <View>

            <TouchableOpacity onPress={()=>navigation.navigate('BrowseTeamlist',{TeamName:item.teamName, teamid:item.teamId})}>
            
            <View style={{ backgroundColor: '#fff', padding: 10, flexDirection: 'row', alignItems: 'center' }}>
           
              {item.imageId ? (
                <Image
                source={{ uri: getImageUrl(item.imageId) }}
                style={{ width: 30, height: 30, marginLeft: 10 }}
              />
              ) : (
                <Text>No Image Available</Text>
              )}
      
              <Text style={{ color: 'black',marginHorizontal:10 }}>{item.teamName}</Text>
            
            </View>

            </TouchableOpacity>
            
          </View>
        );
      };
      
  


      



    return(


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

        {selectedMatchType && (
  <View style={{ backgroundColor:'#c0c0c0', }}>
    <Text style={{ fontWeight: 'bold', color:'black', fontSize: 16 ,marginHorizontal: 10, marginVertical:5 }}>
      {selectedMatchType === 'INTERNATIONAL' ? 'Test Teams' : `${selectedMatchType} Teams`}
    </Text>
  </View>
)}



        
  
        {submitLoading || refreshing ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
            <ActivityIndicator size='large' color='#0000ff' />
          </View>
        ) : ( 
          <FlatList
            data={liveData}
            renderItem={renderTeamItem}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
          />
        
        )}
      </ScrollView>
    )
    
}

export default Browse_Team;