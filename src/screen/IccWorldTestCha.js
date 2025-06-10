import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { View,Text, StyleSheet,TouchableOpacity,FlatList,Image } from "react-native"


const IccWorldTestCha = () =>{

    const [standings, setStandings] = useState([]);
    const [seasonStandings, setSeasonStandings] = useState([]);
    const [selectedSeason, setSelectedSeason] = useState(null);
    const [subText, setSubText] = useState('');
    const [loading, setLoading] = useState(false);


    // console.log('seasonStandings>>>>>>>>',seasonStandings);
  
    const fetchData = async (seasonId = null) => {
        setLoading(true);
      try {
        const response = await fetch("https://cricketwicket.biz/api/v1/stats/standings");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('data>>>>>>>>', data);
        setStandings(data.values);
        setSeasonStandings(data.seasonStandings);
        setSelectedSeason(seasonId || data.seasonStandings[0]?.id);
        setSubText(data.subText)
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);

    const getImageUrl = (imageId) => {
        return `https://static.cricbuzz.com/a/img/v1/i1/c${imageId}/i.jpg`; // Adjust the URL pattern based on your server
      };
  
      const renderStandingItem = ({ item }) => (
        <View style={{ marginVertical: 5 }}>
          <View style={styles.row}>
            {item.value.map((value, index) => {
              if (index === 0) {
                return (
                  <Text key={index} style={{ color: 'black', marginHorizontal: 10, width: '10%' }}>
                    {value}
                  </Text>
                );
              } else if (index === 1) {
                return (
                  <Image
                    key={index}
                    source={{ uri: getImageUrl(value) }}
                    style={{ width: 30, height: 25 }}
                  />
                );
              } else if (index === 2) {
                return (
                  <Text key={index} style={{ color: 'black', width: '30%', marginLeft: '4%' }}>
                    {value}
                  </Text>
                );
              } else {
                return (
                  <Text key={index} style={{ color: 'black', width: '60%', marginLeft: '30%' }}>
                    {value}
                  </Text>
                );
              }
            })}
          </View>
        </View>
      );
      
    
  
    
  
    return (
      <View style={styles.container}>
       <View style={styles.seasonContainer}>
        <Picker
          selectedValue={selectedSeason}
          style={{ height: 50, width: '100%', backgroundColor: '#b0e0e6', color: 'black' }}
          onValueChange={(itemValue) => {
            setSelectedSeason(itemValue);
            fetchData(itemValue);
          }}
        >
        {seasonStandings.map((season) => (
            <Picker.Item key={season.id} label={season.name} value={season.id} />
          ))}
        </Picker>
      </View>
        <View style={{flexDirection:'row',backgroundColor:'#b0e0e6',   justifyContent:'space-between'}}>
  
          <View style={{width:'50%',flexDirection:'row',marginVertical:5,}}>
      <Text style={{color:'black', marginHorizontal:10,}}>Rank</Text>
      <Text style={{color:'black',marginLeft:'30%'}}>TEAM</Text>
  
      </View>
  
        
       <Text style={{color:'black',justifyContent:'flex-end',marginHorizontal:20,marginVertical:5,}}>PCT</Text>
        
  
              </View>

              {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <FlatList
          data={standings}
          renderItem={renderStandingItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}

      <Text style={{ color: '#808080', marginHorizontal: 20, marginTop: 16 }}>{subText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#f5f5f5'
      
    },
    seasonContainer: {
      flexDirection: 'row',
      marginBottom: 16,
    },
    seasonButton: {
      padding: 10,
      backgroundColor: '#ddd',
      marginRight: 10,
    },
    selectedSeasonButton: {
      backgroundColor: '#aaa',
    },
    seasonButtonText: {
      fontSize: 14,
    },
    row: {
      flexDirection: 'row',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      marginHorizontal:10,
     
      
    },
    cell: {
      flex: 1,
      textAlign: 'center',
      color:'black',
      marginRight:'20%'
    },
  });

export default IccWorldTestCha