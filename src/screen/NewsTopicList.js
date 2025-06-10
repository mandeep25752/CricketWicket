import {
    View,
    Text,
    SafeAreaView,
    Image,
    StyleSheet,
    Dimensions,
    StatusBar,
    Pressable,
    ScrollView,
    Share,
    TouchableOpacity,
    FlatList,
    ImageBackground,
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
  import {moderateScale} from 'react-native-size-matters';
  import { useNavigation, useRoute } from '@react-navigation/native';
  import { ActivityIndicator } from 'react-native';
  
  
  
  
  const NewsTopicList = () => {
    const [SeriesMatch, setSeriesMatch] = useState([]);
  const [submitLoading, setSubmitLoading] = useState(false);

 

  const route = useRoute();
  const { itemid } = route.params || {};
//   console.log('itemid>>>>>>>>',itemid);

  const  navigation = useNavigation()

  const TopStoryData = async () => {
    setSubmitLoading(true);
    try {
      // Fetch data without token
      const response = await fetch(`https://cricketwicket.biz/api/v1/news/topics/list/?topicId=${itemid}`);
      const data = await response.json();
  
      // console.log('data>>>>>>',data);
  
      
      setSeriesMatch(data.storyList); 
  
    } catch (error) {
      console.error('Error fetching data:', error);
     
    }
    setSubmitLoading(false);
  };
  

  useEffect(() => {
    TopStoryData();
  }, []);


  const getImageUrl = (imageId) => {
    return `https://static.cricbuzz.com/a/img/v1/1080x608/i1/c${imageId}/i.jpg`; // Adjust the URL pattern based on your server
  };


  const getTimeDifference = (pubTime) => {
    const currentTime = new Date().getTime(); 
    const newsTime = parseInt(pubTime); 

   
    const difference = currentTime - newsTime;

   
    const minutes = Math.floor(difference / (1000 * 60));
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

   
    if (minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (hours < 24) {
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else {
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    }
  };



  const liveRenderItem = ({ item }) => {
      
    // console.log('item>>>>>>>>',item);
    if (!item || !item.story) {
      return null; 
    }
    const { pubTime } = item.story;
    const timeAgo = getTimeDifference(pubTime);
      return (
        <View>

   <TouchableOpacity  onPress={() => navigation.navigate('NewsDetails',{Newsid:item.story.id})}>

          <View style={{flexDirection:'row',marginTop:10}}>
        <Image
        source={{ uri: getImageUrl(item.story.imageId) }}
         style={{ width: 100, height: 100, marginLeft: 10, borderRadius:10}}
                        />

        <View style={{flexDirection:'column'}}>
        <Text style={{color:'black',fontSize:16,width:'45%', marginLeft:10}}>{item.story.hline}</Text>
        <Text style={{color:'#808080',fontSize:14, marginLeft:10,marginTop:10}}>{timeAgo}</Text>
        </View>
      </View>
      <Text style={{color:'#808080',fontSize:14, marginVertical:10,  marginLeft:10}}>{item.story.intro}</Text>
      <Text style={{borderTopWidth:1,borderTopColor:'#f5f5f5'}}></Text>
      </TouchableOpacity>
      </View>
      );
  };
  


  return(

      <ScrollView style={{ backgroundColor: '#fff' }}>
      {submitLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
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

  
  };
  
  const styles = StyleSheet.create({
   
  });
  
  export default NewsTopicList;
  