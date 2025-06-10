import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text,TouchableOpacity,Image,FlatList,ScrollView,ActivityIndicator } from "react-native";

const BrowerteamStatslist = () =>{

    const route = useRoute();
  const { statsList,teamid } = route.params;


  const [SeriesMatch, setSeriesMatch] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [submitLoading, setSubmitLoading] = useState(false);

  const TopStoryData = async () => {
    setSubmitLoading(true);
    try {
      const token = await AsyncStorage.getItem("loginToken");
      const response = await fetch(`https://cricketwicket.biz/api/v1/team/get-stats/?teamId=${teamid}&statsType=${statsList}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
  
      console.log('Full API response data:', data);
  
     
      if (data.filter && data.filter.team) {
       
        const teamData = data.filter.team;
  
       
        setSeriesMatch(teamData);
      } else {
        console.error('Expected team data not found in the response');
      }
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
  
console.log('item>>>>>>>>',item);
    return (
      <View style={{ flexDirection: 'row', padding: 10, backgroundColor: '#fff',justifyContent:'space-between',borderBottomWidth:1,borderBottomColor:'#f5f5f5' }}>
       <Text style={{color:'black',marginHorizontal:10}}>{item.teamShortName}</Text>
       <Text style={{color:'black',marginHorizontal:10,}}>{item.id}</Text>
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
        <View>
          
          <FlatList
            data={SeriesMatch}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            renderItem={liveRenderItem}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default BrowerteamStatslist;