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
  
  
  
  
  
  const INFO = ()=>{
  
    const [SeriesMatch, setSeriesMatch] = useState([]);
    const [submitLoading, setSubmitLoading] = useState(false);



    const route = useRoute();
    
    const {itemid} = route.params
    console.log('SeriesMatch>>>>>>>>',itemid);
   
    const  navigation = useNavigation()
  
    const TopStoryData = async () => {
      setSubmitLoading(true);
      try {
        // Fetch data without token
        const response = await fetch(`https://cricketwicket.biz/api/v1/players/get-info/?playerId=${itemid}`);
        const data = await response.json();
    
        
    
        
        setSeriesMatch([data]); 
    
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
  
  
   
  
  
  
    const liveRenderItem = ({ item }) => {
        
  console.log('item>>>>>>>',item)
        return (
          <View>
  
    
  
            <View style={{flexDirection:'column', alignItems:'center',marginTop:10}}>
          <Image
          source={{ uri: getImageUrl(item.faceImageId) }}
           style={{ width: 80, height: 80,  borderRadius:70}}
                          />
         <Text style={{color:'black',fontSize:16, alignSelf:'center',marginTop:5}}>{item.name}</Text>
          <Text style={{color:'#808080',fontSize:16, alignSelf:'center' }}>{item.intlTeam}</Text>
          </View>


          <Text style={{color:'black',fontSize:16, marginLeft:10, marginVertical:10 }}>PERSONAL INFORMATION</Text>


     <View style={{flexDirection:'row',backgroundColor:'#fff', }}>
          <View>
          <Text style={{color:'#808080',fontSize:16, marginLeft:10, marginVertical:10 }}>Born</Text>
          <Text style={{color:'#808080',fontSize:16, marginLeft:10, marginVertical:10 }}>Nickname</Text>
          <Text style={{color:'#808080',fontSize:16, marginLeft:10, marginVertical:10 }}>Role</Text>
          <Text style={{color:'#808080',fontSize:16, marginLeft:10, marginVertical:10 }}>Batting Style</Text>
          <Text style={{color:'#808080',fontSize:16, marginLeft:10, marginVertical:10 }}>Bowling Style</Text>

          </View>

          <View>
          <Text style={{color:'black',fontSize:16, marginLeft:10, marginVertical:10 }}>{item.DoB}</Text>
          <Text style={{color:'black',fontSize:16, marginLeft:10, marginVertical:10 }}>{item.nickName}</Text>
          <Text style={{color:'black',fontSize:16, marginLeft:10, marginVertical:10 }}>{item.role}</Text>
          <Text style={{color:'black',fontSize:16, marginLeft:10, marginVertical:10 }}>{item.bat}</Text>
          <Text style={{color:'black',fontSize:16, marginLeft:10, marginVertical:10 }}>{item.bowl}</Text>

          </View>

          <Text style={{borderTopWidth:1,borderTopColor:'#f5f5f5'}}></Text>

          </View>
       
          <Text style={{color:'black',fontSize:16, marginLeft:10, marginVertical:10 }}>ICC RANKINGS</Text>

          
          <View style={styles.rankingsTable}>
        <View style={styles.rankingsHeader}>
          <Text style={styles.rankingsHeaderText}></Text>
          <Text style={styles.rankingsHeaderText}>TEST</Text>
          <Text style={styles.rankingsHeaderText}>ODI</Text>
          <Text style={styles.rankingsHeaderText}>T20I</Text>
        </View>

        <View style={styles.rankingsRow}>
          <Text style={styles.rankingsLabel}>Bat</Text>


          <Text style={styles.rankingsValue}>{item.rankings.bat.testRank || '--'}</Text>
          
          <Text style={styles.rankingsValue}>{item.rankings.bat.odiBestRank || '--'}</Text>
          <Text style={styles.rankingsValue}>{item.rankings.bat.t20BestRank || '--'}</Text>
        </View>

        <View style={styles.rankingsRow}>
          <Text style={styles.rankingsLabel}>Bowl</Text>
          <Text style={styles.rankingsValue}>{item.rankings.bat.testBestRank || '--'}</Text>
          <Text style={styles.rankingsValue}>{item.rankings.bat.odiBestRank || '--'}</Text>
          <Text style={styles.rankingsValue}>{item.rankings.bat.t20BestRank || '--'}</Text>
        </View>

        <View style={styles.rankingsRow}>
          <Text style={styles.rankingsLabel}>All Round</Text>
          <Text style={styles.rankingsValue}>{item.rankings.bowl.testBestRank || '--'}</Text>
          <Text style={styles.rankingsValue}>{item.rankings.bowl.odiBestRank || '--'}</Text>
          <Text style={styles.rankingsValue}>{item.rankings.bowl.t20BestRank || '--'}</Text>
        </View>

      </View>

      <Text style={{color:'black',fontSize:16, marginLeft:10, marginVertical:10 }}>TEAMS</Text>
      <View style={styles.rankingsTable}>
       
      <Text style={{color:'#808080',fontSize:16, marginLeft:10, marginVertical:10 }}>{item.teams}</Text>
     </View>

        </View>
        );
    };
    
  
  
    return(
  
        <ScrollView style={{ backgroundColor: '#f5f5f5',}}>
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
  
  
  const BATTING = ()=>{
  
    
    const [SeriesMatch, setSeriesMatch] = useState([]);
    const [submitLoading, setSubmitLoading] = useState(false);
  
    const route = useRoute();
    const { itemid } = route.params;
    const navigation = useNavigation();
  
    const TopStoryData = async () => {
      setSubmitLoading(true);
      try {
        const response = await fetch(`https://cricketwicket.biz/api/v1/players/get-batting/?playerId=${itemid}`);
        const data = await response.json();
        // Assuming 'values' in your API response contains the structured data
        setSeriesMatch(data.values);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setSubmitLoading(false);
    };
  
    useEffect(() => {
      TopStoryData();
    }, []);
  
    const liveRenderItem = ({ item }) => {
      return (
        <View style={{borderBottomWidth: 1, borderBottomColor:'#d3d3d3'}}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10,marginVertical:10,}}>
            <Text style={{ flex: 1, color: 'black' }}>{item.values[0]}</Text>
            <Text style={{ flex: 1, textAlign: 'center', color: 'black' }}>{item.values[1]}</Text>
            <Text style={{ flex: 1, textAlign: 'center', color: 'black' }}>{item.values[2]}</Text>
            <Text style={{ flex: 1, textAlign: 'center', color: 'black' }}>{item.values[3]}</Text>
            <Text style={{ flex: 1, textAlign: 'center', color: 'black' }}>{item.values[4]}</Text>
           
          </View>
        </View>
      );
    };
  
    return (
      <ScrollView style={{ backgroundColor: '#f5f5f5' }}>
        {submitLoading ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size='large' color='#0000ff' />
          </View>
        ) : (
          <FlatList
            data={SeriesMatch}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={liveRenderItem}
            ListHeaderComponent={() => (

                <View style={{backgroundColor:'#d3d3d3'}}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical:10 }}>
                <Text style={{ flex: 1, color: 'black',}}>Category</Text>
                <Text style={{ flex: 1, textAlign: 'center', color: 'black',}}>Test</Text>
                <Text style={{ flex: 1, textAlign: 'center', color: 'black',}}>ODI</Text>
                <Text style={{ flex: 1, textAlign: 'center', color: 'black',}}>T20I</Text>
                <Text style={{ flex: 1, textAlign: 'center', color: 'black', }}>IPL</Text>
              </View>
              </View>
            )}
          />
        )}
  
  
  
  </ScrollView>
  );
};
  
  
  
  const BOWLING = ()=>{
  
    
    const [SeriesMatch, setSeriesMatch] = useState([]);
    const [submitLoading, setSubmitLoading] = useState(false);
  
    const route = useRoute();
    const { itemid } = route.params;
    const navigation = useNavigation();
  
    const TopStoryData = async () => {
      setSubmitLoading(true);
      try {
        const response = await fetch(`https://cricketwicket.biz/api/v1/players/get-bowling/?playerId=${itemid}`);
        const data = await response.json();
        // Assuming 'values' in your API response contains the structured data
        setSeriesMatch(data.values);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setSubmitLoading(false);
    };
  
    useEffect(() => {
      TopStoryData();
    }, []);
  
    const liveRenderItem = ({ item }) => {
      return (
        <View style={{borderBottomWidth: 1, borderBottomColor:'#d3d3d3'}}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10,marginVertical:10,}}>
            <Text style={{ flex: 1, color: 'black' }}>{item.values[0]}</Text>
            <Text style={{ flex: 1, textAlign: 'center', color: 'black' }}>{item.values[1]}</Text>
            <Text style={{ flex: 1, textAlign: 'center', color: 'black' }}>{item.values[2]}</Text>
            <Text style={{ flex: 1, textAlign: 'center', color: 'black' }}>{item.values[3]}</Text>
            <Text style={{ flex: 1, textAlign: 'center', color: 'black' }}>{item.values[4]}</Text>
           
          </View>
        </View>
      );
    };
  
    return (
      <ScrollView style={{ backgroundColor: '#f5f5f5' }}>
        {submitLoading ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size='large' color='#0000ff' />
          </View>
        ) : (
          <FlatList
            data={SeriesMatch}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={liveRenderItem}
            ListHeaderComponent={() => (

                <View style={{backgroundColor:'#d3d3d3'}}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical:10 }}>
                <Text style={{ flex: 1, color: 'black',}}>Category</Text>
                <Text style={{ flex: 1, textAlign: 'center', color: 'black',}}>Test</Text>
                <Text style={{ flex: 1, textAlign: 'center', color: 'black',}}>ODI</Text>
                <Text style={{ flex: 1, textAlign: 'center', color: 'black',}}>T20I</Text>
                <Text style={{ flex: 1, textAlign: 'center', color: 'black', }}>IPL</Text>
              </View>
              </View>
            )}
          />
        )}
  
  
  
  </ScrollView>
  );
  }


  const CAREER = ()=>{
  
    
    const [SeriesMatch, setSeriesMatch] = useState([]);
    const [submitLoading, setSubmitLoading] = useState(false);
  
    const route = useRoute();
    const { itemid } = route.params;
    const navigation = useNavigation();
  
    const TopStoryData = async () => {
      setSubmitLoading(true);
      try {
        const response = await fetch(`https://cricketwicket.biz/api/v1/players/get-career/?playerId=${itemid}`);
        const data = await response.json();
        setSeriesMatch(data.values);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setSubmitLoading(false);
    };
  
    useEffect(() => {
      TopStoryData();
    }, []);
  
    const liveRenderItem = ({ item }) => {
      return (

        <View>
        <View style={{backgroundColor:'#f5f5f5',}}>
          <Text style={{ color: 'black', marginBottom: 5,marginLeft:10,marginTop:10 }}>{item.name.toUpperCase()}</Text>
          </View>

          <View style={{backgroundColor:'#fff'}}>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{ color: '#808080', marginLeft:10,marginVertical:10 }}>Debut:</Text>
          <Text style={{ color: 'black', marginLeft:10,width:'60%',marginVertical:10 }}>{item.debut}</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{ color: '#808080', marginLeft:10,marginVertical:10 }}>LastPlayed:</Text>
          <Text style={{ color: 'black', marginLeft:10 ,width:'60%',marginVertical:10}}>{item.lastPlayed}</Text>
          </View>
          </View>
       
        </View>
      );
    };
  
    return (
      <ScrollView style={{ backgroundColor: '#f5f5f5' }}>
        {submitLoading ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size='large' color='#0000ff' />
          </View>
        ) : (
          <FlatList
            data={SeriesMatch}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={liveRenderItem}
          />
        )}
      </ScrollView>
    );
    };
    
  
  
  


  const NEWS = ()=>{
  
    
    const [SeriesMatch, setSeriesMatch] = useState([]);
    const [submitLoading, setSubmitLoading] = useState(false);
    const route = useRoute();
    const { itemid } = route.params;
    // console.log('News list data>>>>>>>>:', SeriesMatch);
    const  navigation = useNavigation()
  
    const TopStoryData = async () => {
      setSubmitLoading(true);
      try {
        // Fetch data without token
        const response = await fetch(`https://cricketwicket.biz/api/v1/players/get-news/?playerId=${itemid}`);
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
      
        if (days <= 7) {
          if (minutes < 60) {
            return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
          } else if (hours < 24) {
            return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
          } else {
            return `${days} day${days !== 1 ? 's' : ''} ago`;
          }
        } else {
          // Display date in 'Month Day, Year' format for older dates
          const date = new Date(newsTime);
          const options = { year: 'numeric', month: 'short', day: 'numeric' };
          return date.toLocaleDateString('en-US', options);
        }
      };
      
  
  
    const liveRenderItem = ({ item }) => {
        
        if (!item || !item.story) {
            return null; 
          }
          const { pubTime } = item.story;
          const timeAgo = getTimeDifference(pubTime);
      
    
        return (
          <View style={{marginTop:10,}}>
  
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
  
  
  
  
  const PlyerDetails = () =>{
  
    const route = useRoute();
    
    const {itemid}=route.params

    console.log('itemid>>>>>>',itemid);
  
  
    return (
        <Tab.Navigator
  tabBarOptions={{
    labelStyle: { fontSize: 14, fontWeight: '600', color: '#fff' },
    style: { backgroundColor: '#4fa8b9' },
    indicatorStyle: { backgroundColor: '#fff' },
    scrollEnabled: true, // Enable horizontal scrolling
  }}
  >
  <Tab.Screen name="INFO" component={INFO} initialParams={{itemid}}/> 
  <Tab.Screen name="BATTING" component={BATTING} initialParams={{itemid}}/>
  <Tab.Screen name="BOWLING" component={BOWLING} initialParams={{itemid}}/>
  <Tab.Screen name="CAREER" component={CAREER} initialParams={{itemid}}/>
  <Tab.Screen name="NEWS" component={NEWS} initialParams={{itemid}}/>
  
  </Tab.Navigator>
  
      
      );
  } 
  
  
  
  const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
      },
      header: {
        flexDirection: 'row',
        marginTop: 10,
      },
      image: {
        width: 100,
        height: 100,
        marginLeft: 10,
        borderRadius: 10,
      },
      headerText: {
        flexDirection: 'column',
        marginLeft: 10,
        justifyContent: 'center',
      },
      name: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
      },
      nickName: {
        color: 'gray',
        fontSize: 14,
      },
      role: {
        color: 'gray',
        fontSize: 14,
      },
      detail: {
        color: 'gray',
        fontSize: 14,
      },
      sectionTitle: {
        color: 'black',
        fontSize: 16,
        marginLeft: 10,
        marginVertical: 10,
      },
      rankingsTable: {
        backgroundColor: '#fff',
      
      },
      rankingsHeader: {
        flexDirection: 'row',
      },
      rankingsHeaderText: {
        color: '#808080',
        fontSize: 16,
        flex: 1,
        textAlign: 'center',
        marginVertical: 10,
      },
      rankingsRow: {
        flexDirection: 'row',
      },
      rankingsLabel: {
        color: '#808080',
        fontSize: 16,
        flex: 1,
        marginVertical: 10,
        marginLeft:10
      },
      rankingsValue: {
        color: 'black',
        fontSize: 16,
        flex: 1,
        textAlign: 'center',
        marginVertical: 10,
      },
      infoRow: {
        flexDirection: 'row',
        marginVertical: 10,
      },
      infoLabel: {
        color: '#808080',
        fontSize: 16,
        flex: 1,
      },
      infoValue: {
        color: 'black',
        fontSize: 16,
        flex: 1,
      },

      infoLabel: {
        color: '#808080',
        fontSize: 16,
        marginLeft: 10,
        marginVertical: 10,
      },
      infoValue: {
        color: 'black',
        fontSize: 16,
        marginLeft: 10,
        marginVertical: 10,
      },
      rankingsTable: {
        marginLeft: 10,
        backgroundColor: '#fff',
      },
      rankingsHeader: {
        flexDirection: 'row',
      },
      rankingsHeaderText: {
        color: '#808080',
        fontSize: 16,
        flex: 1,
        textAlign: 'center',
        marginVertical: 10,
      },
      rankingsRow: {
        flexDirection: 'row',
      },
      rankingsLabel: {
        color: '#808080',
        fontSize: 16,
        flex: 1,
        marginVertical: 10,
      },
      rankingsValue: {
        color: 'black',
        fontSize: 16,
        flex: 1,
        textAlign: 'center',
        marginVertical: 10,
      },
  });
  
  export default PlyerDetails;
  