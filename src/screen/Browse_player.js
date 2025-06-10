import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image } from "react-native";
import { View,Text, TouchableOpacity, ScrollView, FlatList,TextInput,Button } from "react-native"


const Browse_player = ({route})=>{

    
  const [SeriesMatch, setSeriesMatch] = useState([]);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navigation = useNavigation();

  const TopStoryData = async () => {
    setSubmitLoading(true);
    try {
      const response = await fetch("https://cricketwicket.biz/api/v1/players/list-trending");
      const data = await response.json();
      setSeriesMatch(data.player);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setSubmitLoading(false);
  };

  const searchPlayer = async (query) => {
    setSubmitLoading(true);
    try {
      const response = await fetch(`https://cricketwicket.biz/api/v1/players/search?plrN=${query}`);
      const data = await response.json();
      setSeriesMatch(data.player);
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
    return (
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate('PlyerDetails', { itemid: item.id, itemname: item.name })}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={{ uri: getImageUrl(item.faceImageId) }}
              style={{ width: 40, height: 40, marginLeft: 10, borderRadius: 20 }}
            />
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ color: 'black', fontSize: 16, fontWeight: '500', marginHorizontal: 15 }}>{item.name}</Text>
              <Text style={{ color: '#808080', fontSize: 16, marginHorizontal: 15 }}>{item.teamName}</Text>
            </View>
          </View>
          <Text style={{ color: '#808080', fontSize: 14, marginHorizontal: 15 }}>{item.description}</Text>
          <Text style={{ borderBottomWidth: 1, borderBottomColor: '#f5f5f5' }}></Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      searchPlayer(searchQuery.trim());
    } else {
      
    }
  };

  return (
    <ScrollView style={{ backgroundColor: '#f5f5f5' }}>
      <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}>
      <TextInput
  placeholder="Search Player"
  placeholderTextColor={'gray'}
  value={searchQuery}
  onChangeText={setSearchQuery}
  style={{
    flex: 1,
    height: 45,
   color: 'black', // Text input color
   backgroundColor:'#fff',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
    elevation:100
  }}
/>

        <Button
          title="Search"
          onPress={handleSearch}
        />
      </View>
      <Text style={{ color: '#696969', marginHorizontal: 10, marginVertical: 10, fontSize: 16, fontWeight: '500' }}>TRENDING SEARCHES</Text>
      {submitLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
          <ActivityIndicator size='large' color='#0000ff' />
        </View>
      ) : (
        <View style={{backgroundColor:'#fff'}}>
         
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

}

export default Browse_player;
