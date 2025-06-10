import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text,View,TouchableOpacity,ScrollView,FlatList,ActivityIndicator ,Image} from "react-native"


const SquadTeam = ()=>{

    const route = useRoute();
    const { seriesId, squadId } = route.params;

    console.log('seriesId>>>>>>>>',seriesId, squadId);

    const [SeriesMatch, setSeriesMatch] = useState([]);
    const [submitLoading, setSubmitLoading] = useState(false);

    const TopStoryData = async () => {
      setSubmitLoading(true);
      try {
        const token = await AsyncStorage.getItem("loginToken");
        const response = await fetch(`https://cricketwicket.biz/api/v1/series/get-players/?seriesId=${seriesId}&squadId=${squadId}`, {
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
  
        
        const getImageUrl = (imageId) => {
            return `https://static.cricbuzz.com/a/img/v1/i1/c${imageId}/i.jpg`;
        };
        return (
          <View style={{ backgroundColor: isFirstItem ? '' : '#fff' }}>
  
                  <TouchableOpacity style={{flexDirection:'row',marginVertical:10}}>
    
                         <Image
                          source={{ uri: getImageUrl(item.imageId) }}
                          style={{ width: 30, height: 30, marginLeft: 10,borderRadius: 15  }}
                        />
            <Text style={{ color: 'black', fontSize: 16, fontWeight: '400', marginHorizontal: 10, alignSelf:'center' }}>{item.name}</Text>
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

export default SquadTeam;