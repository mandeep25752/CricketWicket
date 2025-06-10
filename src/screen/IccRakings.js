import AsyncStorage from "@react-native-async-storage/async-storage";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View,Text,TouchableOpacity,Image,ScrollView,FlatList,ActivityIndicator, StyleSheet, Button } from "react-native"




const Tab = createMaterialTopTabNavigator();


const BATTERS = ()=>{

   const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formatType, setFormatType] = useState('odi');

  const navigation = useNavigation()


  const fetchData = async (formatType, category = 'batsmen') => {
    try {
      const response = await fetch(`https://cricketwicket.biz/api/v1/stats/ranking?formatType=${formatType}&category=${category}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('data>>>>>>>>', data);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };




  

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData(formatType);
      if (result) {
        setData(result.rank); // Update this line to set the rank data
      } else {
        setError('Failed to fetch data');
      }
      setLoading(false);
    };

    getData();
  }, [formatType]);

  const handleButtonPress = (type) => {
    setLoading(true);
    setData(null);
    setError(null);
    setFormatType(type);
  };


  const getImageUrl = (imageId) => {
    return `https://static.cricbuzz.com/a/img/v1/i1/c${imageId}/i.jpg`; // Adjust the URL pattern based on your server
  };



  const liveRenderItem = ({ item }) => {
      
   
  
      return (
        <View>
<TouchableOpacity onPress={()=>navigation.navigate('PlyerDetails',{itemid:item.id, itemname:item.name})}>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10}}>
        <View style={{flexDirection:'row', marginLeft:'4%',}}>
     <Text style={{color:'black', width:'8%'}}>{item.rank}</Text>

     <View style={{width:'80%',flexDirection:'row'}}>
     <Image
      source={{ uri: getImageUrl(item.faceImageId) }}
      style={{width:'15%',height:35,borderRadius:30, marginLeft:'7%'}}
        />

        <View style={{flexDirection:'column'}}>
     <Text style={{color:'black', alignSelf:'center',marginLeft:5}}>{item.name}</Text>
     <Text style={{color:'#808080',marginLeft:5,}}>{item.country}</Text>
     </View>
     </View>
     </View>
     <Text style={{color:'#808080',marginRight:'10%'}}>{item.points}</Text>
     

     </View>
     <Text style={{borderTopWidth:1,borderTopColor:'#d3d3d3'}}></Text>
     </TouchableOpacity>
      </View>
      );
  };
  

  

  return (
    <View style={{backgroundColor:'#f5f5f5',flex:1}}>
      <View style={styles.buttonContainer}>
        <Button title="TEST" onPress={() => handleButtonPress('test')} />
        <Button title="ODI" onPress={() => handleButtonPress('odi')} />
        <Button title="T20" onPress={() => handleButtonPress('t20')} />
      </View>

      <View style={{flexDirection:'row',backgroundColor:'#b0e0e6',   justifyContent:'space-between'}}>

        <View style={{width:'35%',flexDirection:'row',marginVertical:5,}}>
    <Text style={{color:'black', marginHorizontal:10,}}>Rank</Text>
    <Text style={{color:'black',marginLeft:'10%'}}>player</Text>

    </View>

      
     <Text style={{color:'black',justifyContent:'flex-end',marginHorizontal:10,marginVertical:5,}}>Points</Text>
      

            </View>

      {loading ? (
        <View style={{ flex: 1, marginVertical:'50%' }}>
          <ActivityIndicator size='large' color='#0000ff' />
        </View>
      ) : (
        
   
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          renderItem={liveRenderItem}
        />
    )}
    </View>
  );
}





const BOWLERS = ()=>{

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formatType, setFormatType] = useState('odi');
  
    const navigation = useNavigation()

  
  
    const fetchData = async (formatType, category = 'bowlers') => {
      try {
        const response = await fetch(`https://test.textcode.co.in/api/v1/stats/ranking?formatType=${formatType}&category=${category}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('data>>>>>>>>', data);
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
    };
  
  
  
  
    
  
    useEffect(() => {
      const getData = async () => {
        const result = await fetchData(formatType);
        if (result) {
          setData(result.rank); // Update this line to set the rank data
        } else {
          setError('Failed to fetch data');
        }
        setLoading(false);
      };
  
      getData();
    }, [formatType]);
  
    const handleButtonPress = (type) => {
      setLoading(true);
      setData(null);
      setError(null);
      setFormatType(type);
    };
  
  
    const getImageUrl = (imageId) => {
      return `https://static.cricbuzz.com/a/img/v1/i1/c${imageId}/i.jpg`; // Adjust the URL pattern based on your server
    };
  
  
  
    const liveRenderItem = ({ item }) => {
        
     
    
        return (
          <View>
  

  <TouchableOpacity onPress={()=>navigation.navigate('PlyerDetails',{itemid:item.id, itemname:item.name})}>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10}}>
          <View style={{flexDirection:'row', marginLeft:'4%',}}>
       <Text style={{color:'black', width:'8%'}}>{item.rank}</Text>
  
       <View style={{width:'80%',flexDirection:'row'}}>
       <Image
        source={{ uri: getImageUrl(item.faceImageId) }}
        style={{width:'15%',height:35,borderRadius:30, marginLeft:'7%'}}
          />
  
          <View style={{flexDirection:'column'}}>
       <Text style={{color:'black', alignSelf:'center',marginLeft:5}}>{item.name}</Text>
       <Text style={{color:'#808080',marginLeft:5,}}>{item.country}</Text>
       </View>
       </View>
       </View>
       <Text style={{color:'#808080',marginRight:'10%'}}>{item.points}</Text>
       
  
       </View>
       <Text style={{borderTopWidth:1,borderTopColor:'#d3d3d3'}}></Text>
       </TouchableOpacity>
        </View>
        );
    };
    
  
    
  
    return (
      <View style={{backgroundColor:'#f5f5f5',flex:1}}>
        <View style={styles.buttonContainer}>
          <Button title="TEST" onPress={() => handleButtonPress('test')} />
          <Button title="ODI" onPress={() => handleButtonPress('odi')} />
          <Button title="T20" onPress={() => handleButtonPress('t20')} />
        </View>
  
        <View style={{flexDirection:'row',backgroundColor:'#b0e0e6',   justifyContent:'space-between'}}>
  
          <View style={{width:'35%',flexDirection:'row',marginVertical:5,}}>
      <Text style={{color:'black', marginHorizontal:10,}}>Rank</Text>
      <Text style={{color:'black',marginLeft:'10%'}}>player</Text>
  
      </View>
  
        
       <Text style={{color:'black',justifyContent:'flex-end',marginHorizontal:10,marginVertical:5,}}>Points</Text>
        
  
              </View>
  
        {loading ? (
          <View style={{ flex: 1, marginVertical:'50%' }}>
            <ActivityIndicator size='large' color='#0000ff' />
          </View>
        ) : (
          
     
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            renderItem={liveRenderItem}
          />
      )}
      </View>
    );

}


const ALL_ROUNDERS = ()=>{

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formatType, setFormatType] = useState('odi');


    const navigation = useNavigation()
  
  
  
  
    const fetchData = async (formatType, category = 'allrounders') => {
      try {
        const response = await fetch(`https://test.textcode.co.in/api/v1/stats/ranking?formatType=${formatType}&category=${category}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('data>>>>>>>>', data);
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
    };
  
  
  
  
    
  
    useEffect(() => {
      const getData = async () => {
        const result = await fetchData(formatType);
        if (result) {
          setData(result.rank); // Update this line to set the rank data
        } else {
          setError('Failed to fetch data');
        }
        setLoading(false);
      };
  
      getData();
    }, [formatType]);
  
    const handleButtonPress = (type) => {
      setLoading(true);
      setData(null);
      setError(null);
      setFormatType(type);
    };
  
  
    const getImageUrl = (imageId) => {
      return `https://static.cricbuzz.com/a/img/v1/i1/c${imageId}/i.jpg`; // Adjust the URL pattern based on your server
    };
  
  
  
    const liveRenderItem = ({ item }) => {
        
     
    
        return (
          <View>

<TouchableOpacity onPress={()=>navigation.navigate('PlyerDetails',{itemid:item.id, itemname:item.name})}>
  
      <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10}}>
          <View style={{flexDirection:'row', marginLeft:'4%',}}>
       <Text style={{color:'black', width:'8%'}}>{item.rank}</Text>
  
       <View style={{width:'80%',flexDirection:'row'}}>
       <Image
        source={{ uri: getImageUrl(item.faceImageId) }}
        style={{width:'15%',height:35,borderRadius:30, marginLeft:'7%'}}
          />
  
          <View style={{flexDirection:'column'}}>
       <Text style={{color:'black',marginLeft:5}}>{item.name}</Text>
       <Text style={{color:'#808080',marginLeft:5,}}>{item.country}</Text>
       </View>
       </View>
       </View>
       <Text style={{color:'#808080',marginRight:'10%'}}>{item.points}</Text>
       
  
       </View>
       </TouchableOpacity>
        </View>
        );
    };
    
  
    
  
    return (
      <View style={{backgroundColor:'#f5f5f5',flex:1}}>
        <View style={styles.buttonContainer}>
          <Button title="TEST" onPress={() => handleButtonPress('test')} />
          <Button title="ODI" onPress={() => handleButtonPress('odi')} />
          <Button title="T20" onPress={() => handleButtonPress('t20')} />
        </View>
  
        <View style={{flexDirection:'row',backgroundColor:'#b0e0e6',   justifyContent:'space-between'}}>
  
          <View style={{width:'35%',flexDirection:'row',marginVertical:5,}}>
      <Text style={{color:'black', marginHorizontal:10,}}>Rank</Text>
      <Text style={{color:'black',marginLeft:'10%'}}>player</Text>
  
      </View>
  
        
       <Text style={{color:'black',justifyContent:'flex-end',marginHorizontal:10,marginVertical:5,}}>Points</Text>
        
  
              </View>
  
        {loading ? (
          <View style={{ flex: 1, marginVertical:'50%' }}>
            <ActivityIndicator size='large' color='#0000ff' />
          </View>
        ) : (
          
     
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            renderItem={liveRenderItem}
          />
      )}
      </View>
    );
}


const TEAMS = ()=>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formatType, setFormatType] = useState('odi');
  
  
  const navigation = useNavigation()
  
    const fetchData = async (formatType, category = 'teams') => {
      try {
        const response = await fetch(`https://test.textcode.co.in/api/v1/stats/ranking?formatType=${formatType}&category=${category}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('data>>>>>>>>', data);
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
    };
  
  
  
  
    
  
    useEffect(() => {
      const getData = async () => {
        const result = await fetchData(formatType);
        if (result) {
          setData(result.rank); // Update this line to set the rank data
        } else {
          setError('Failed to fetch data');
        }
        setLoading(false);
      };
  
      getData();
    }, [formatType]);
  
    const handleButtonPress = (type) => {
      setLoading(true);
      setData(null);
      setError(null);
      setFormatType(type);
    };
  
  
    const getImageUrl = (imageId) => {
      return `https://static.cricbuzz.com/a/img/v1/i1/c${imageId}/i.jpg`; // Adjust the URL pattern based on your server
    };
  
  
  
    const liveRenderItem = ({ item }) => {
        
     
    
        return (
          <View>
  

  <TouchableOpacity onPress={()=>navigation.navigate('BrowseTeamlist',{TeamName:item.name, teamid:item.id})}>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10}}>
          <View style={{flexDirection:'row', marginLeft:'4%',}}>
       <Text style={{color:'black', width:'8%', alignSelf:'center'}}>{item.rank}</Text>
  
     
       <View style={{width:'55%',flexDirection:'row',marginVertical:5,}}>
               <Image
                source={{ uri: getImageUrl(item.imageId) }}
                style={{ width: 30, height: 30, marginLeft: 10 }}
              />
      <Text style={{color:'black',marginLeft:'10%',alignSelf:'center'}}>{item.name}</Text>
  
      </View>
       </View>

       <View style={{width:'45%',flexDirection:'row',marginVertical:5,}}>
       <Text style={{color:'black', width:'20%' }}>{item.rating}</Text>
       <Text style={{color:'black',marginLeft:'22%'}}>{item.points}</Text>
  
      </View>
       
  
       </View>
       <Text style={{borderTopWidth:1,borderTopColor:'#d3d3d3'}}></Text>
       </TouchableOpacity>
        </View>
        );
    };
    
  
    
  
    return (
      <View style={{backgroundColor:'#f5f5f5',flex:1}}>
        <View style={styles.buttonContainer}>
          <Button title="TEST" onPress={() => handleButtonPress('test')} />
          <Button title="ODI" onPress={() => handleButtonPress('odi')} />
          <Button title="T20" onPress={() => handleButtonPress('t20')} />
        </View>
  
        <View style={{flexDirection:'row',backgroundColor:'#b0e0e6',   justifyContent:'space-between'}}>
  
          <View style={{width:'35%',flexDirection:'row',marginVertical:5,}}>
      <Text style={{color:'black', marginHorizontal:10,}}>Rank</Text>
      <Text style={{color:'black',marginLeft:'25%'}}>TEAM</Text>
  
      </View>
  
        
      <View style={{width:'40%',flexDirection:'row',marginVertical:5,}}>
      <Text style={{color:'black', }}>Ratings</Text>
      <Text style={{color:'black',marginLeft:'25%'}}>Points</Text>
  
      </View>
        
  
              </View>
  
        {loading ? (
          <View style={{ flex: 1, marginVertical:'50%' }}>
            <ActivityIndicator size='large' color='#0000ff' />
          </View>
        ) : (
          
     
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            renderItem={liveRenderItem}
          />
      )}
      </View>
    );
}



const IccRakings = () =>{

   

    return (
        <Tab.Navigator
  tabBarOptions={{
    labelStyle: { fontSize: 14, fontWeight: '600', color: '#fff' },
    style: { backgroundColor: '#4fa8b9' },
    indicatorStyle: { backgroundColor: '#fff' },
    scrollEnabled: true, // Enable horizontal scrolling
  }}
>
  <Tab.Screen name="BATTERS" component={BATTERS}  />
  <Tab.Screen name="BOWLERS" component={BOWLERS}  />
  <Tab.Screen name="ALL ROUNDERS" component={ALL_ROUNDERS}  />
  <Tab.Screen name="TEAMS" component={TEAMS}  />
  
</Tab.Navigator>

      
      );
} 

const styles = StyleSheet.create({
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 20,
    },
  });

export default IccRakings
