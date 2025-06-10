import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { Pressable } from "react-native";
import { FlatList, Image, RefreshControl, ScrollView, Text, View,TouchableOpacity } from "react-native";
import Navigation from "../navigation";
import { useNavigation } from "@react-navigation/native";




const Browse_SeriesList = ()=>{




    const [liveData, setLiveData] = useState([]);
    const [matchTypes, setMatchTypes] = useState(['International', 'LEAGUE', 'Domestic', 'Women']);
    const [selectedMatchType, setSelectedMatchType] = useState('International');
    const [submitLoading, setSubmitLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
  
    useEffect(() => {
      fetchData();
    }, [selectedMatchType]);
  
    const fetchData = async () => {
      setSubmitLoading(true);
      try {
        const token = await AsyncStorage.getItem("loginToken");
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
  
        const url = `https://cricketwicket.biz/api/v1/series/?type=${selectedMatchType.toLowerCase()}`;
  
        const response = await fetch(url, {
          method: 'GET',
          headers: myHeaders,
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const responseData = await response.json();
        console.log('responseData>>>>>>', responseData);
  
        if (responseData.seriesMapProto) {
          setLiveData(responseData.seriesMapProto);
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
        month: 'short',
        day: '2-digit',
       
      };
      return date.toLocaleDateString('en-US', options);
    };
    const navigation = useNavigation();

  
    
    const renderDateSection = ({ item }) => {
      // console.log("Item Object:", item);
  
      
      const firstSeries = item.series.length > 0 ? item.series[0] : null;
    
      
      const seriesId = firstSeries ? firstSeries.id : null;
      const seriesName = firstSeries ? firstSeries.name : null;
      // console.log("Series ID:", seriesId);
      // console.log("Series Name:", seriesName);
      return (
       
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', backgroundColor: '#eee', padding: 10 }}>{item.date}</Text>
            {item.series.map((seriesItem, index) => (
              <View key={seriesItem.id} style={{ backgroundColor: '#fff', paddingBottom: 5 }}>

                <TouchableOpacity onPress={() => seriesId && seriesName && navigation.navigate('SeriesMatches', { seriesId, seriesName,  })}>
                <Text style={{ color: 'black', marginHorizontal: 10, marginVertical: 5 }}>{seriesItem.name}</Text>
                <Text style={{ color: '#555', marginHorizontal: 10 }}>{formatTimestamp(seriesItem.startDt)} - {formatTimestamp(seriesItem.endDt)}</Text>
                </TouchableOpacity>
               
                {item.series.length > 1 && index < item.series.length - 1 && (
                  <View style={{ borderBottomWidth: 1, marginVertical: 10,borderBottomColor:'#f5f5f5' }} />
                )}
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
            data={liveData}
            renderItem={renderDateSection}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
          />
        )}
      </ScrollView>
    );
  };

export default Browse_SeriesList;