
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  Pressable,
  ScrollView,
  LogBox,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const Tab = createMaterialTopTabNavigator();





const ALL_STORIES = ()=>{

  const [SeriesMatch, setSeriesMatch] = useState([]);
  const [submitLoading, setSubmitLoading] = useState(false);

  // console.log('News list data>>>>>>>>:', SeriesMatch);
  const  navigation = useNavigation()

  const TopStoryData = async () => {
    setSubmitLoading(true);
    try {
      // Fetch data without token
      const response = await fetch("https://cricketwicket.biz/api/v1/news/list");
      const data = await response.json();
  
      
  
      
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


const CATEGORIES = ()=>{

  const [SeriesMatch, setSeriesMatch] = useState([]);
  const [submitLoading, setSubmitLoading] = useState(false);

  // console.log('News list data>>>>>>>>:', SeriesMatch);
  const  navigation = useNavigation()

  const TopStoryData = async () => {
    setSubmitLoading(true);
    try {
      // Fetch data without token
      const response = await fetch("https://cricketwicket.biz/api/v1/news/categories");
      const data = await response.json();
  
      
  
      
      setSeriesMatch(data.storyType); 
  
    } catch (error) {
      console.error('Error fetching data:', error);
     
    }
    setSubmitLoading(false);
  };
  

  useEffect(() => {
    TopStoryData();
  }, []);


  const getImageUrl = (imageId) => {
    return `https://static.cricbuzz.com/a/img/v1/i1/c${imageId}/i.jpg`; // Adjust the URL pattern based on your server
  };


 


  const liveRenderItem = ({ item }) => {
      
    // console.log('item>>>>>>>>',item);
    
  
      return (
        <View style={{marginTop:10,}}>

          <TouchableOpacity onPress={()=>navigation.navigate('Newscategorylist',{itemid:item.id, itemname:item.name})}>

  <Text style={{color:'black',fontSize:16,fontWeight:'500',marginHorizontal:15}}>{item.name}</Text>
  <Text style={{color:'#808080',fontSize:14,marginHorizontal:15}}>{item.description}</Text>
  <Text style={{borderBottomWidth:1,borderBottomColor:'#f5f5f5'}}></Text>
  </TouchableOpacity>
      </View>
      );
  };
  


  return(

      <ScrollView style={{ backgroundColor: '#fff' }}>
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



const TOPICS = ()=>{

  
  const [SeriesMatch, setSeriesMatch] = useState([]);
  const [submitLoading, setSubmitLoading] = useState(false);

  // console.log('News list data>>>>>>>>:', SeriesMatch);
  const  navigation = useNavigation()

  const TopStoryData = async () => {
    setSubmitLoading(true);
    try {
      // Fetch data without token
      const response = await fetch("https://cricketwicket.biz/api/v1/news/topics");
      const data = await response.json();
  
      
  
      
      setSeriesMatch(data.topics); 
  
    } catch (error) {
      console.error('Error fetching data:', error);
     
    }
    setSubmitLoading(false);
  };
  

  useEffect(() => {
    TopStoryData();
  }, []);


  const getImageUrl = (imageId) => {
    return `https://static.cricbuzz.com/a/img/v1/i1/c${imageId}/i.jpg`; // Adjust the URL pattern based on your server
  };


 


  const liveRenderItem = ({ item }) => {
      
    // console.log('item>>>>>>>>',item);
    
  
      return (
        <View style={{marginTop:10,}}>

          <TouchableOpacity onPress={()=>navigation.navigate('NewsTopicList',{itemid:item.id, itemname:item.headline})}>

  <Text style={{color:'black',fontSize:16,fontWeight:'500',marginHorizontal:15}}>{item.headline}</Text>
  <Text style={{color:'#808080',fontSize:14,marginHorizontal:15}}>{item.description}</Text>
  <Text style={{borderBottomWidth:1,borderBottomColor:'#f5f5f5'}}></Text>
  </TouchableOpacity>
      </View>
      );
  };
  


  return(

      <ScrollView style={{ backgroundColor: '#fff' }}>
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




const News = () =>{

  const route = useRoute();
  


  return (
      <Tab.Navigator
tabBarOptions={{
  labelStyle: { fontSize: 14, fontWeight: '600', color: '#fff' },
  style: { backgroundColor: '#4fa8b9' },
  indicatorStyle: { backgroundColor: '#fff' },
  scrollEnabled: true, // Enable horizontal scrolling
}}
>
<Tab.Screen name="ALL STORIES" component={ALL_STORIES}/> 
<Tab.Screen name="CATEGORIES" component={CATEGORIES}   />
<Tab.Screen name="TOPICS" component={TOPICS}   />

</Tab.Navigator>

    
    );
} 



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  SubTxt: {
    color: '#fff',
    fontSize: moderateScale(16, 0.3),
  },
  txt: {
    color: '#fff',
    fontSize: moderateScale(14, 0.3),
  },
  dateTxt: {
    color: '#dee2e6',
    fontSize: moderateScale(13, 0.3),
    marginVertical:10
  },
});

export default News;
