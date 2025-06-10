import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text,TouchableOpacity,Image,FlatList,ScrollView,ActivityIndicator } from "react-native";

const StatsList = () =>{

    const route = useRoute();
  const { statsList,seriesId } = route.params;

  console.log('statsList:', statsList, 'seriesId:', seriesId);

  console.log('statsList:', statsList, 'seriesId:', seriesId);

  const [SeriesMatch, setSeriesMatch] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [submitLoading, setSubmitLoading] = useState(false);

  const TopStoryData = async () => {
    setSubmitLoading(true);
    try {
      const token = await AsyncStorage.getItem("loginToken");
      const response = await fetch(`https://cricketwicket.biz/api/v1/series/get-stats/?seriesId=${seriesId}&statsType=${statsList}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();

      console.log('Full API response data:', data); // Log the entire response

      if (data.t20StatsList && data.t20StatsList.headers && data.t20StatsList.values) {
        console.log('t20StatsList values:', data.t20StatsList.values);
        setHeaders(data.t20StatsList.headers);
        setSeriesMatch(data.t20StatsList.values);
      } else {
        console.error('Expected data not found in the response');
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

  const renderHeader = () => {
    return (
      <View style={{ flexDirection: 'row', padding: 10, backgroundColor: '#ddd' }}>
        {headers.map((header, index) => (
          <Text key={index} style={{ flex: 1, fontWeight: 'bold', textAlign: 'center' ,color:'black'}}>{header}</Text>
        ))}
      </View>
    );
  };

  const liveRenderItem = ({ item }) => {
    const values = item.values.slice(1);

    return (
      <View style={{ flexDirection: 'row', padding: 10, backgroundColor: '#fff' }}>
         {values.map((value, index) => (
        <Text
          key={index}
          style={{
            flex: 1,
            textAlign: 'center',
            color: index === 0 ? '#00bfff' : 'black' // Conditional color for the second index
          }}
        >
          {value}
        </Text>
      ))}
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
          {renderHeader()}
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

export default StatsList;