import AsyncStorage from "@react-native-async-storage/async-storage";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text,TouchableOpacity,Image,ScrollView,FlatList,ActivityIndicator,RefreshControl, ImageBackground } from "react-native";



const Tab = createMaterialTopTabNavigator();




function INFO() {
  const route= useRoute()


  const {matchid} = route.params

  console.log('matchid>>>>>>>>>',matchid);


  const navigation = useNavigation ()

  const [SeriesMatch, setSeriesMatch] = useState(null);
  const [submitLoading, setSubmitLoading] = useState(false);

  const TopStoryData = async () => {
    setSubmitLoading(true);
    try {
      const token = await AsyncStorage.getItem("loginToken");
      const response = await fetch(`https://cricketwicket.biz/api/v1/matches/info/?matchId=${matchid}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const Data = await response.json();
      setSeriesMatch(Data);
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

  const renderMatchInfo = (matchInfo) => {
    if (!matchInfo) return null;
  
    const formatDate = (timestamp) => {
      const date = new Date(timestamp);
      return date.toLocaleDateString('en-US', {
        weekday: 'short',  // Full name of the day
        day: '2-digit',   // 2-digit day
        month: 'long'     // Full name of the month
      });
    };
  
    // Function to format timestamp to readable time (HH:MM AM/PM)
    const formatTime = (timestamp) => {
      const date = new Date(timestamp);
      let hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      return `${hours}:${minutes} ${ampm}`;
    };


    const splitSeriesName = (name) => {
      const words = name.split(' ');
      const firstLine = words.slice(0, 7).join(' '); // Adjust number of words as needed
      const secondLine = words.slice(7).join(' ');
      return { firstLine, secondLine };
    };
  
    const { firstLine, secondLine } = splitSeriesName(matchInfo.series.name);
  
 
  
    return (
      <View>

<TouchableOpacity onPress={() => navigation.navigate('SQUADS')}>
        <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#fff'}}>

       
            <Text style={{ marginHorizontal: 10, marginVertical: 10, fontSize: 16, color: 'black' }}>
              SQUADS
            </Text>
         
          <Image style={{height:10,width:10, marginRight:10, alignSelf:'center'}} source={require('../../assets/rightarrow.png')}/>
        </View>
        </TouchableOpacity>
  
        <Text style={{color:'black',marginHorizontal:10,marginVertical:10,fontWeight:'500'}}>INFO</Text>
  
        <View style={{flexDirection:'row', backgroundColor:'#fff',paddingBottom:10}}>
  
          <View style={{flexDirection:'column', marginHorizontal:10}}>
            <Text style={{color:'#808080',marginTop: 10}}>Match  </Text>
            <Text style={{color:'#808080',marginTop: 10}}>Series </Text>
            <Text style={{color:'#808080',marginTop: 26}}>Date </Text>
            <Text style={{color:'#808080',marginTop: 10}}>Time </Text>
            <Text style={{color:'#808080',marginTop: 10}}>Toss </Text>
            <Text style={{color:'#808080',marginTop: 10}}>Venue </Text>
            <Text style={{color:'#808080',marginTop: 10}}>Umpires </Text>
            <Text style={{color:'#808080',marginTop: 10}}>Referee </Text>
          </View>
  
          <View>
            <Text style={{color:'black',marginTop: 10}}>{matchInfo.matchDescription} </Text>
            <Text style={{ color: 'black', marginTop: 10 }}>
            {firstLine}
            {'\n'}
            <Text>{secondLine}</Text>
          </Text>
            <Text style={{color:'black',marginTop: 10}}>{formatDate(matchInfo.matchStartTimestamp)}</Text>
            <Text style={{color:'black',marginTop: 10}}>{formatTime(matchInfo.matchStartTimestamp)},Your Time</Text>
            <Text style={{color:'black',marginTop: 10}}>{matchInfo.tossResults.tossWinnerName} opt to {matchInfo.tossResults.decision} </Text>
            <Text style={{color:'black',marginTop: 10}}>{matchInfo.venue.name}  {matchInfo.venue.city} </Text>
            <Text style={{color:'black',marginTop: 10}}>{matchInfo.umpire1.name}, {matchInfo.umpire2.name}, {matchInfo.umpire3.name} </Text>
            <Text style={{color:'black',marginTop: 10}}>{matchInfo.referee.name} </Text>
          </View>
  
        </View>
        <Text style={{marginHorizontal:10,marginVertical:10,color:'black',fontWeight:'500'}}>VENUE GUIDE</Text>

        <View style={{flexDirection:'row', backgroundColor:'#fff'}}>
  
  <View style={{flexDirection:'column', marginHorizontal:10}}>
    <Text style={{color:'#808080',marginVertical:10}}>Stadium </Text>
    <Text style={{color:'#808080',marginVertical:10}}>city </Text>
   </View>

  <View>
   
  
    <Text style={{color:'black',marginVertical:10}}>{matchInfo.venue.name}  </Text>
    
    <Text style={{color:'black',marginVertical:10}}> {matchInfo.venue.city} </Text>
  </View>

</View>

      </View>
    );
  };
  
  

  return (
    <ScrollView style={{ backgroundColor: '#4fa8b9' }}>
      {submitLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', marginTop:'50%', alignItems: 'center', alignSelf: 'center' }}>
          <ActivityIndicator size='large' color='#0000ff' />
        </View>
      ) : (
        <FlatList
          data={SeriesMatch ? [SeriesMatch] : []}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          renderItem={({ item }) => renderMatchInfo(item.matchInfo)}
        />
       )}
    </ScrollView>
  );
}



function LIVE() {
 
  
  
  const route = useRoute();
  const { matchid } = route.params;

  console.log('matchid>>>>>>>>>',matchid);
  

  const [seriesMatch, setSeriesMatch] = useState([]);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const topStoryData = async () => {
    setSubmitLoading(true);
    try {
      const token = await AsyncStorage.getItem("loginToken");
      const response = await fetch(`https://cricketwicket.biz/api/v1/matches/commentaries/?matchId=${matchid}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      setSeriesMatch([data]); // Wrap the object in an array
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setSubmitLoading(false);
  };

  useEffect(() => {
    topStoryData();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    topStoryData();
    setRefreshing(false);
  };

  const getImageUrl = (imageId) => {
    return `https://static.cricbuzz.com/a/img/v1/1080x608/i1/c${imageId}/i.jpg`; // Adjust the URL pattern based on your server
  };

  const renderMatchInfo = ({ item }) => {
    const matchDescription = item?.matchHeader?.matchDescription || 'No match description available';
    const matchStatus = item?.matchHeader?.status || 'No status available';
    const seriesDesc = item?.matchHeader?.seriesDesc || 'No series description available';
  
    const batTeamName = item?.miniscore?.batTeam?.teamName || 'N/A';
    const batTeamScore = item?.miniscore?.batTeam?.teamScore || 0;
    const batTeamWkts = item?.miniscore?.batTeam?.teamWkts || 0;
    const currentRunRate = item?.miniscore?.currentRunRate || 'N/A';
  
    const commentaryList = item?.commentaryList || [];
    const inningsScoreList = item?.miniscore?.matchScoreDetails?.inningsScoreList || [];
    const playersOfTheMatch = item?.matchHeader?.playersOfTheMatch || [];
    const matchVideos = item?.matchVideos || [];
    const commentarySnippetList = item?.commentarySnippetList || [];
  
    return (
      <View style={{ paddingHorizontal: 15, paddingBottom: 10 }}>
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Match Information:</Text>
        {inningsScoreList.map((innings, index) => (
          <View key={index}>
            <Text style={{ color: 'black', fontSize: 18, margin: 5 }}>{`${innings.batTeamName} - ${innings.score}-${innings.wickets}  (${innings.overs}) `}</Text>
          </View>
        ))}
        <Text style={{ color: '#1e90ff', fontSize: 16, marginVertical: 5 }}>{matchStatus}</Text>
      </View>
    
      {/* Render Player of the Match section only if data is available */}
      {playersOfTheMatch.length > 0 && (
        <View>
          <Text style={{ fontSize: 16, color: '#808080' }}>Player of the Match</Text>
          {playersOfTheMatch.map((player, index) => (
            <View style={{ flexDirection: 'row', marginVertical: 10 }} key={index}>
              <Image
                source={{ uri: getImageUrl(player.faceImageId) }}
                style={{ width: 40, height: 40, borderRadius: 20 }}
              />
              <Text style={{ color: 'black', fontSize: 18, alignSelf: 'center', marginLeft: 10 }}>{player.fullName}</Text>
            </View>
          ))}
        </View>
      )}
    
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Match Videos:</Text>
        {commentarySnippetList.length > 0 ? (
          <View style={{ flexDirection: 'column', marginVertical: 5 }}>
            <ImageBackground
              source={{ uri: getImageUrl(commentarySnippetList[0].imageId) }}
              style={{ width: '100%', height: 200, borderRadius: 5, overflow: 'hidden' }}
            >
              <View style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                right: 0, 
                padding: 10 
              }}>
                <Text style={{ color: '#fff', fontSize: 16 }}>
                  {commentarySnippetList[0].headline}
                </Text>
              </View>
            </ImageBackground>
          </View>
        ) : null}
      </View>
    
      <View>
        {commentaryList.map((commentary, index) => {
          const commText = commentary.commText.replace(/B0\$/, ''); 
          const commTextLines = commText.split('\\n'); 
          
          return (
            <View key={index} style={{ marginVertical: 5 }}>
              {commentary?.commentaryFormats?.bold?.formatValue ? (
                <Text style={{ fontWeight: 'bold', color: 'black', marginBottom: 5 }}>
                  {commentary.commentaryFormats.bold.formatValue[0]}{' '}
                </Text>
              ) : null}
              
              {commTextLines.map((line, lineIndex) => (
                <Text key={lineIndex} style={{ color: 'black', marginBottom: 2 }}>
                  {line}
                </Text>
              ))}
            </View>
          );
        })}
      </View>
    </View>
    );
  };
  
  
  

  return (
    <ScrollView
      style={{ backgroundColor:'#fff' }}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
    >
      {submitLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
          <ActivityIndicator size='large' color='#4fa8b9' />
        </View>
      ) : (
        <FlatList
          data={seriesMatch}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={renderMatchInfo}
        />
      )}
    </ScrollView>
  );

  
  
}


function SCROECARD() {

   
  const route = useRoute()
  const {matchid,} = route.params

 


  const navigation = useNavigation ()

  const [SeriesMatch, setSeriesMatch] = useState(null);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [showHelloTextNamibia, setShowHelloTextNamibia] = useState(false); 
    const [showHelloTextAustralia, setShowHelloTextAustralia] = useState(false);
    const [showHelloTextindia, setshowHelloTextindia] = useState(false); 
    const [showHelloTextAus, setshowHelloTextAus] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [expandedInnings, setExpandedInnings] = useState({});

  const TopStoryData = async () => {
    setSubmitLoading(true);
    try {
      const token = await AsyncStorage.getItem("loginToken");
      const response = await fetch(`https://cricketwicket.biz/api/v1/matches/scard/?matchId=${matchid}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const Data = await response.json();

      // console.log('hello>>>>>>>>>',Data);

      setSeriesMatch(Data);
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


  const handleRefresh = () => {
    setRefreshing(true);
    // Fetch data again
    TopStoryData();
    setRefreshing(false);
  };


  const renderPlayerStats = (item) => {

    
    
   
    const batTeamName = item.batTeamDetails.batTeamName;
    
    const teamid = item.inningsId;

    console.log('batTeamid>>>>>>>',teamid);
    

     const runsScored = item.scoreDetails.runs;
    const wicketsLost = item.scoreDetails.wickets;
    const batTeamOvers = item.scoreDetails.overs;
   
    const toggleHelloTextNamibia = () => {
      setShowHelloTextNamibia(!showHelloTextNamibia);
      setShowHelloTextAustralia(false); // Hide Australia team data
  };

  // Function to toggle Australia team data
  const toggleHelloTextAustralia = () => {
      setShowHelloTextAustralia(!showHelloTextAustralia);
      setShowHelloTextNamibia(false); // Hide Namibia team data
  };




  const toggleHelloTextindia = () => {
    setshowHelloTextindia(!showHelloTextindia);
    setshowHelloTextAus(false); // Hide Australia team data
};

// Function to toggle Australia team data
const toggleHelloTextAu = () => {
  setshowHelloTextAus(!showHelloTextAus);
  setshowHelloTextindia(false); // Hide Namibia team data
};



 return (
        <View>
          
          {teamid === 1 || teamid === 2 ? (
    <TouchableOpacity onPress={teamid === 1 ? toggleHelloTextNamibia : toggleHelloTextAustralia}>
        <View style={{backgroundColor:'#fff', marginVertical:10}}>
            <View style={{flexDirection:'row',justifyContent:'space-between', marginHorizontal:10,marginVertical:10}}>
                <Text style={{fontSize:16, color:'black'}}>{batTeamName}</Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:16, color:'black'}}>{runsScored}-{wicketsLost}  ({batTeamOvers.toFixed(1)})</Text>
                    {teamid === 1 ? (showHelloTextNamibia ? <Image source={require('../../assets/uparrow.png')} style={{height:15,width:15,alignSelf:'center',marginLeft:5}}/> : <Image source={require('../../assets/downarrow.png')} style={{height:15,width:15,alignSelf:'center',marginLeft:5}}/>) : (showHelloTextAustralia ? <Image source={require('../../assets/uparrow.png')} style={{height:15,width:15,alignSelf:'center',marginLeft:5}}/> : <Image source={require('../../assets/downarrow.png')} style={{height:15,width:15,alignSelf:'center',marginLeft:5}}/>)}
                    
                </View>
            </View>
        </View>
    </TouchableOpacity>
) : null}

{teamid === 3 || teamid === 4 ? (
    <TouchableOpacity onPress={teamid === 3 ? toggleHelloTextindia : toggleHelloTextAu}>
        <View style={{backgroundColor:'#fff', marginVertical:10}}>
            <View style={{flexDirection:'row',justifyContent:'space-between', marginHorizontal:10,marginVertical:10}}>
                <Text style={{fontSize:16, color:'black'}}>{batTeamName}</Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:16, color:'black'}}>{runsScored}-{wicketsLost}  ({batTeamOvers.toFixed(1)})</Text>
                    {teamid === 3 ? (showHelloTextindia ? <Image source={require('../../assets/uparrow.png')} style={{height:15,width:15,alignSelf:'center',marginLeft:5}}/> : <Image source={require('../../assets/downarrow.png')} style={{height:15,width:15,alignSelf:'center',marginLeft:5}}/>) : (showHelloTextAus ? <Image source={require('../../assets/uparrow.png')} style={{height:15,width:15,alignSelf:'center',marginLeft:5}}/> : <Image source={require('../../assets/downarrow.png')} style={{height:15,width:15,alignSelf:'center',marginLeft:5}}/>)}
                </View>
            </View>
        </View>
    </TouchableOpacity>
) : null}

            {teamid === 1 && showHelloTextNamibia &&   
            <View style={{backgroundColor:'#afeeee'}}>
               <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
              <Text style={{color:'black',width:'40%',}}>Batter</Text>
              <Text style={{color:'black',width:'12%'}}>R</Text>
              <Text style={{color:'black',width:'12%'}}>B</Text>
              <Text style={{color:'black',width:'12%'}}>4S</Text>
              <Text style={{color:'black',width:'12%'}}>6s</Text>
              <Text style={{color:'black',width:'12%'}}>SR</Text>
              </View>


              <View>
  {Object.keys(item.batTeamDetails.batsmenData).map((key) => {
    const batsman = item.batTeamDetails.batsmenData[key];
    if (batsman.runs !== 0 || batsman.balls !== 0 || batsman.strikeRate !== 0) {
      return (
        <View key={batsman.batId}>

          <View style={{backgroundColor:'#fff'}}>
            <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>


              
              
              <Text style={{color:'black',width:'40%',}}>{batsman.batName}</Text>
              <Text style={{color:'black',width:'12%'}}>{batsman.runs}</Text>
              <Text style={{color:'black',width:'12%'}}>{batsman.balls}</Text>
              <Text style={{color:'black',width:'12%'}}>{batsman.fours}</Text>
              <Text style={{color:'black',width:'12%'}}>{batsman.sixes}</Text>
              <Text style={{color:'black',width:'12%'}}>{batsman.strikeRate}</Text>
            </View>
          </View>

        </View>
      );
    } else {
      return null; // Do not render if runs, balls, and strikeRate are all zero
    }
  })}
</View>


<View style={{backgroundColor:'#fff'}}>
<View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',width:'48%',}}>Extras</Text>
            <Text style={{color:'black',width:'8%'}}>{item.extrasData.total}</Text>
            <Text style={{color:'black',width:'8%'}}>b {item.extrasData.byes}</Text>
            <Text style={{color:'black',width:'8%'}}>lb {item.extrasData.legByes}</Text>
            <Text style={{color:'black',width:'8%'}}>w {item.extrasData.wides}</Text>
            <Text style={{color:'black',width:'8%'}}>nb {item.extrasData.noBalls}</Text>
            <Text style={{color:'black',width:'8%'}}>p {item.extrasData.penalty}</Text>
            </View>


            <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10,justifyContent:'space-between'}}>
            <Text style={{color:'black',}}>Total</Text>
            <Text style={{color:'black', marginRight:10}}>{item.scoreDetails.runs}-{item.scoreDetails.wickets} ({item.scoreDetails.overs.toFixed(1)})</Text>
            
            </View>

            </View>      

              

              <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
              <Text style={{color:'black',width:'40%',}}>Bowler</Text>
              <Text style={{color:'black',width:'12%'}}>O</Text>
              <Text style={{color:'black',width:'12%'}}>M</Text>
              <Text style={{color:'black',width:'12%'}}>R</Text>
              <Text style={{color:'black',width:'12%'}}>W</Text>
              <Text style={{color:'black',width:'12%'}}>ER</Text>
              </View>


              
              <View>
    {Object.keys(item.bowlTeamDetails.bowlersData).map((key) => {
        const batsman = item.bowlTeamDetails.bowlersData[key];
        return (
            <View key={batsman.bowlerId}>

              <View style={{backgroundColor:'#fff'}}>
               <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
              <Text style={{color:'black',width:'40%',}}>{batsman.bowlName}</Text>
              <Text style={{color:'black',width:'12%'}}>{batsman.overs}</Text>
              <Text style={{color:'black',width:'12%'}}>{batsman.maidens}</Text>
              <Text style={{color:'black',width:'12%'}}>{batsman.runs}</Text>
              <Text style={{color:'black',width:'12%'}}>{batsman.wickets}</Text>
              <Text style={{color:'black',width:'12%'}}>{batsman.economy}</Text>
              </View>

              </View>
               </View>
        );
    })}

</View>

<View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
              <Text style={{color:'black',width:'50%',}}>Fall of Wickets </Text>
              <Text style={{color:'black',width:'25%'}}>Score</Text>
              <Text style={{color:'black',width:'25%'}}>Over</Text>
             
              </View>

              <View>
    {Object.keys(item.wicketsData).map((key) => {
        const batsman = item.wicketsData[key];
        return (
            <View key={batsman.batId}>

              <View style={{backgroundColor:'#fff'}}>
               <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
              <Text style={{color:'black',width:'50%',}}>{batsman.batName}</Text>
              <Text style={{color:'black',width:'25%'}}>{batsman.wktRuns}-{batsman.wktNbr}</Text>
              <Text style={{color:'black',width:'25%'}}>{batsman.wktOver}</Text>
              
              </View>

              </View>



              

               </View>
        );
    })}

</View>


<View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
              <Text style={{color:'black',width:'50%',}}>Powerplay</Text>
              <Text style={{color:'black',width:'25%'}}>Over</Text>
              <Text style={{color:'black',width:'25%'}}>Run</Text>
             
              </View>
              
              <View>
    {Object.keys(item.ppData).map((key) => {
        const batsman = item.ppData[key];
        return (
            <View key={batsman.ppId}>

              <View style={{backgroundColor:'#fff'}}>
               <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
              <Text style={{color:'black',width:'50%',}}>{batsman.ppType}</Text>
              <Text style={{color:'black',width:'25%'}}>{batsman.ppOversFrom}-{batsman.ppOversTo.toFixed(1)}</Text>
              <Text style={{color:'black',width:'25%'}}>{batsman.runsScored}</Text>
              
              </View>

              </View>



              

               </View>
        );
    })}

</View>




<View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
              <Text style={{color:'black',}}>Partnerships</Text>
               </View>
              
              <View>
    {Object.keys(item.partnershipsData).map((key) => {
        const batsman = item.partnershipsData[key];
        return (
            <View key={batsman.bat1Id}>

              <View style={{backgroundColor:'#fff'}}>
               <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
               <Text style={{ color: 'black', width: '50%' }}>{batsman.bat1Name} {batsman.bat1Runs === 0 ? `(${batsman.bat1Runs.toFixed(1)})` : batsman.bat1Runs}</Text>
            <Text style={{color:'black',width:'20%'}}>{batsman.totalRuns}({batsman.totalBalls})</Text>

            <Text style={{color:'black',width:'30%'}}>{batsman.bat2Name} {batsman.bat2Runs === 0 ? `(${batsman.bat2Runs.toFixed(1)})` : batsman.bat2Runs}</Text>
              
              </View>

              </View>



              

               </View>
        );
    })}

</View>


              </View>}
            {teamid === 2 && showHelloTextAustralia && 
             <View style={{backgroundColor:'#afeeee'}}>
             <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',width:'40%',}}>Batter</Text>
            <Text style={{color:'black',width:'12%'}}>R</Text>
            <Text style={{color:'black',width:'12%'}}>B</Text>
            <Text style={{color:'black',width:'12%'}}>4S</Text>
            <Text style={{color:'black',width:'12%'}}>6s</Text>
            <Text style={{color:'black',width:'12%'}}>SR</Text>
            </View>


            <View>
  {Object.keys(item.batTeamDetails.batsmenData).map((key) => {
    const batsman = item.batTeamDetails.batsmenData[key];
    if (batsman.runs !== 0 || batsman.balls !== 0 || batsman.strikeRate !== 0) {
      return (
        <View key={batsman.batId}>
          <View style={{backgroundColor:'#fff'}}>
            <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
              <Text style={{color:'black',width:'40%'}}>{batsman.batName}</Text>
              <Text style={{color:'black',width:'12%'}}>{batsman.runs}</Text>
              <Text style={{color:'black',width:'12%'}}>{batsman.balls}</Text>
              <Text style={{color:'black',width:'12%'}}>{batsman.fours}</Text>
              <Text style={{color:'black',width:'12%'}}>{batsman.sixes}</Text>
              <Text style={{color:'black',width:'12%'}}>{batsman.strikeRate}</Text>

            </View>
          </View>
        </View>
      );
    } else {
      return null; // Do not render if runs, balls, and strikeRate are all zero
    }
  })}

</View>



<View style={{backgroundColor:'#fff'}}>
<View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',width:'48%',}}>Extras</Text>
            <Text style={{color:'black',width:'8%'}}>{item.extrasData.total}</Text>
            <Text style={{color:'black',width:'8%'}}>b {item.extrasData.byes}</Text>
            <Text style={{color:'black',width:'8%'}}>lb {item.extrasData.legByes}</Text>
            <Text style={{color:'black',width:'8%'}}>w {item.extrasData.wides}</Text>
            <Text style={{color:'black',width:'8%'}}>nb {item.extrasData.noBalls}</Text>
            <Text style={{color:'black',width:'8%'}}>p {item.extrasData.penalty}</Text>
            </View>


            <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10,justifyContent:'space-between'}}>
            <Text style={{color:'black',}}>Total</Text>
            <Text style={{color:'black', marginRight:10}}>{item.scoreDetails.runs}-{item.scoreDetails.wickets} ({item.scoreDetails.overs.toFixed(1)})</Text>
            
            </View>

            </View>      

            <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',width:'40%',}}>Bowler</Text>
            <Text style={{color:'black',width:'12%'}}>O</Text>
            <Text style={{color:'black',width:'12%'}}>M</Text>
            <Text style={{color:'black',width:'12%'}}>R</Text>
            <Text style={{color:'black',width:'12%'}}>W</Text>
            <Text style={{color:'black',width:'12%'}}>ER</Text>
            </View>


            
            <View>
  {Object.keys(item.bowlTeamDetails.bowlersData).map((key) => {

      const batsman = item.bowlTeamDetails.bowlersData[key];
      return (
          <View key={batsman.bowlerId}>

            <View style={{backgroundColor:'#fff'}}>
             <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',width:'40%',}}>{batsman.bowlName}</Text>
            <Text style={{color:'black',width:'12%'}}>{batsman.overs}</Text>
            <Text style={{color:'black',width:'12%'}}>{batsman.maidens}</Text>
            <Text style={{color:'black',width:'12%'}}>{batsman.runs}</Text>
            <Text style={{color:'black',width:'12%'}}>{batsman.wickets}</Text>
            <Text style={{color:'black',width:'12%'}}>{batsman.economy}</Text>
            </View>

            </View>
             </View>
      );
  })}

</View>

<View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',width:'50%',}}>Fall of Wickets </Text>
            <Text style={{color:'black',width:'25%'}}>Score</Text>
            <Text style={{color:'black',width:'25%'}}>Over</Text>
           
            </View>

            <View>
  {Object.keys(item.wicketsData).map((key) => {
      const batsman = item.wicketsData[key];
      return (
          <View key={batsman.batId}>

            <View style={{backgroundColor:'#fff'}}>
             <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',width:'50%',}}>{batsman.batName}</Text>
            <Text style={{color:'black',width:'25%'}}>{batsman.wktRuns}-{batsman.wktNbr}</Text>
            <Text style={{color:'black',width:'25%'}}>{batsman.wktOver}</Text>
            
            </View>

            </View>



            

             </View>
      );
  })}

</View>


<View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',width:'50%',}}>Powerplay</Text>
            <Text style={{color:'black',width:'25%'}}>Over</Text>
            <Text style={{color:'black',width:'25%'}}>Run</Text>
           
            </View>
            
            <View>
  {Object.keys(item.ppData).map((key) => {
      const batsman = item.ppData[key];
      return (
          <View key={batsman.ppId}>

            <View style={{backgroundColor:'#fff'}}>
             <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',width:'50%',}}>{batsman.ppType}</Text>
            <Text style={{color:'black',width:'25%'}}>{batsman.ppOversFrom}-{batsman.ppOversTo.toFixed(1)}</Text>
            <Text style={{color:'black',width:'25%'}}>{batsman.runsScored}</Text>
            
            </View>

            </View>



            

             </View>
      );
  })}

</View>




<View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',}}>Partnerships</Text>
             </View>
            
            <View>
  {Object.keys(item.partnershipsData).map((key) => {
      const batsman = item.partnershipsData[key];
      return (
          <View key={batsman.bat1Id}>

            <View style={{backgroundColor:'#fff'}}>
             <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
             <Text style={{ color: 'black', width: '50%' }}>{batsman.bat1Name} {batsman.bat1Runs === 0 ? `(${batsman.bat1Runs.toFixed(1)})` : batsman.bat1Runs}</Text>
          <Text style={{color:'black',width:'20%'}}>{batsman.totalRuns}({batsman.totalBalls})</Text>

          <Text style={{color:'black',width:'30%'}}>{batsman.bat2Name} {batsman.bat2Runs === 0 ? `(${batsman.bat2Runs.toFixed(1)})` : batsman.bat2Runs}</Text>
            
            </View>

            </View>



            

             </View>
      );
  })}

</View>


            </View>}



            {teamid === 3 && showHelloTextindia && 
             <View style={{backgroundColor:'#afeeee'}}>
             <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',width:'40%',}}>Batter</Text>
            <Text style={{color:'black',width:'12%'}}>R</Text>
            <Text style={{color:'black',width:'12%'}}>B</Text>
            <Text style={{color:'black',width:'12%'}}>4S</Text>
            <Text style={{color:'black',width:'12%'}}>6s</Text>
            <Text style={{color:'black',width:'12%'}}>SR</Text>
            </View>


            <View>
  {Object.keys(item.batTeamDetails.batsmenData).map((key) => {
    const batsman = item.batTeamDetails.batsmenData[key];
    if (batsman.runs !== 0 || batsman.balls !== 0 || batsman.strikeRate !== 0) {
      return (
        <View key={batsman.batId}>
          <View style={{backgroundColor:'#fff'}}>
            <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
              <Text style={{color:'black',width:'40%'}}>{batsman.batName}</Text>
              <Text style={{color:'black',width:'12%'}}>{batsman.runs}</Text>
              <Text style={{color:'black',width:'12%'}}>{batsman.balls}</Text>
              <Text style={{color:'black',width:'12%'}}>{batsman.fours}</Text>
              <Text style={{color:'black',width:'12%'}}>{batsman.sixes}</Text>
              <Text style={{color:'black',width:'12%'}}>{batsman.strikeRate}</Text>

            </View>
          </View>
        </View>
      );
    } else {
      return null; // Do not render if runs, balls, and strikeRate are all zero
    }
  })}

</View>



<View style={{backgroundColor:'#fff'}}>
<View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',width:'48%',}}>Extras</Text>
            <Text style={{color:'black',width:'8%'}}>{item.extrasData.total}</Text>
            <Text style={{color:'black',width:'8%'}}>b {item.extrasData.byes}</Text>
            <Text style={{color:'black',width:'8%'}}>lb {item.extrasData.legByes}</Text>
            <Text style={{color:'black',width:'8%'}}>w {item.extrasData.wides}</Text>
            <Text style={{color:'black',width:'8%'}}>nb {item.extrasData.noBalls}</Text>
            <Text style={{color:'black',width:'8%'}}>p {item.extrasData.penalty}</Text>
            </View>


            <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10,justifyContent:'space-between'}}>
            <Text style={{color:'black',}}>Total</Text>
            <Text style={{color:'black', marginRight:10}}>{item.scoreDetails.runs}-{item.scoreDetails.wickets} ({item.scoreDetails.overs.toFixed(1)})</Text>
            
            </View>

            </View>      

            <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',width:'40%',}}>Bowler</Text>
            <Text style={{color:'black',width:'12%'}}>O</Text>
            <Text style={{color:'black',width:'12%'}}>M</Text>
            <Text style={{color:'black',width:'12%'}}>R</Text>
            <Text style={{color:'black',width:'12%'}}>W</Text>
            <Text style={{color:'black',width:'12%'}}>ER</Text>
            </View>


            
            <View>
  {Object.keys(item.bowlTeamDetails.bowlersData).map((key) => {

      const batsman = item.bowlTeamDetails.bowlersData[key];
      return (
          <View key={batsman.bowlerId}>

            <View style={{backgroundColor:'#fff'}}>
             <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',width:'40%',}}>{batsman.bowlName}</Text>
            <Text style={{color:'black',width:'12%'}}>{batsman.overs}</Text>
            <Text style={{color:'black',width:'12%'}}>{batsman.maidens}</Text>
            <Text style={{color:'black',width:'12%'}}>{batsman.runs}</Text>
            <Text style={{color:'black',width:'12%'}}>{batsman.wickets}</Text>
            <Text style={{color:'black',width:'12%'}}>{batsman.economy}</Text>
            </View>

            </View>
             </View>
      );
  })}

</View>

<View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',width:'50%',}}>Fall of Wickets </Text>
            <Text style={{color:'black',width:'25%'}}>Score</Text>
            <Text style={{color:'black',width:'25%'}}>Over</Text>
           
            </View>

            <View>
  {Object.keys(item.wicketsData).map((key) => {
      const batsman = item.wicketsData[key];
      return (
          <View key={batsman.batId}>

            <View style={{backgroundColor:'#fff'}}>
             <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',width:'50%',}}>{batsman.batName}</Text>
            <Text style={{color:'black',width:'25%'}}>{batsman.wktRuns}-{batsman.wktNbr}</Text>
            <Text style={{color:'black',width:'25%'}}>{batsman.wktOver}</Text>
            
            </View>

            </View>



            

             </View>
      );
  })}

</View>


<View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',width:'50%',}}>Powerplay</Text>
            <Text style={{color:'black',width:'25%'}}>Over</Text>
            <Text style={{color:'black',width:'25%'}}>Run</Text>
           
            </View>
            
            <View>
  {Object.keys(item.ppData).map((key) => {
      const batsman = item.ppData[key];
      return (
          <View key={batsman.ppId}>

            <View style={{backgroundColor:'#fff'}}>
             <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',width:'50%',}}>{batsman.ppType}</Text>
            <Text style={{color:'black',width:'25%'}}>{batsman.ppOversFrom}-{batsman.ppOversTo.toFixed(1)}</Text>
            <Text style={{color:'black',width:'25%'}}>{batsman.runsScored}</Text>
            
            </View>

            </View>



            

             </View>
      );
  })}

</View>




<View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',}}>Partnerships</Text>
             </View>
            
            <View>
  {Object.keys(item.partnershipsData).map((key) => {
      const batsman = item.partnershipsData[key];
      return (
          <View key={batsman.bat1Id}>

            <View style={{backgroundColor:'#fff'}}>
             <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
             <Text style={{ color: 'black', width: '50%' }}>{batsman.bat1Name} {batsman.bat1Runs === 0 ? `(${batsman.bat1Runs.toFixed(1)})` : batsman.bat1Runs}</Text>
          <Text style={{color:'black',width:'20%'}}>{batsman.totalRuns}({batsman.totalBalls})</Text>

          <Text style={{color:'black',width:'30%'}}>{batsman.bat2Name} {batsman.bat2Runs === 0 ? `(${batsman.bat2Runs.toFixed(1)})` : batsman.bat2Runs}</Text>
            
            </View>

            </View>



            

             </View>
      );
  })}

</View>


            </View>}



            {teamid === 4 && showHelloTextAus && 
             <View style={{backgroundColor:'#afeeee'}}>
             <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',width:'40%',}}>Batter</Text>
            <Text style={{color:'black',width:'12%'}}>R</Text>
            <Text style={{color:'black',width:'12%'}}>B</Text>
            <Text style={{color:'black',width:'12%'}}>4S</Text>
            <Text style={{color:'black',width:'12%'}}>6s</Text>
            <Text style={{color:'black',width:'12%'}}>SR</Text>
            </View>


            <View>
  {Object.keys(item.batTeamDetails.batsmenData).map((key) => {
    const batsman = item.batTeamDetails.batsmenData[key];
    if (batsman.runs !== 0 || batsman.balls !== 0 || batsman.strikeRate !== 0) {
      return (
        <View key={batsman.batId}>
          <View style={{backgroundColor:'#fff'}}>
            <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
              <Text style={{color:'black',width:'40%'}}>{batsman.batName}</Text>
              <Text style={{color:'black',width:'12%'}}>{batsman.runs}</Text>
              <Text style={{color:'black',width:'12%'}}>{batsman.balls}</Text>
              <Text style={{color:'black',width:'12%'}}>{batsman.fours}</Text>
              <Text style={{color:'black',width:'12%'}}>{batsman.sixes}</Text>
              <Text style={{color:'black',width:'12%'}}>{batsman.strikeRate}</Text>

            </View>
          </View>
        </View>
      );
    } else {
      return null; 
    }
  })}

</View>



<View style={{backgroundColor:'#fff'}}>
<View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',width:'48%',}}>Extras</Text>
            <Text style={{color:'black',width:'8%'}}>{item.extrasData.total}</Text>
            <Text style={{color:'black',width:'8%'}}>b {item.extrasData.byes}</Text>
            <Text style={{color:'black',width:'8%'}}>lb {item.extrasData.legByes}</Text>
            <Text style={{color:'black',width:'8%'}}>w {item.extrasData.wides}</Text>
            <Text style={{color:'black',width:'8%'}}>nb {item.extrasData.noBalls}</Text>
            <Text style={{color:'black',width:'8%'}}>p {item.extrasData.penalty}</Text>
            </View>


            <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10,justifyContent:'space-between'}}>
            <Text style={{color:'black',}}>Total</Text>
            <Text style={{color:'black', marginRight:10}}>{item.scoreDetails.runs}-{item.scoreDetails.wickets} ({item.scoreDetails.overs.toFixed(1)})</Text>
            
            </View>

            </View>      

            <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',width:'40%',}}>Bowler</Text>
            <Text style={{color:'black',width:'12%'}}>O</Text>
            <Text style={{color:'black',width:'12%'}}>M</Text>
            <Text style={{color:'black',width:'12%'}}>R</Text>
            <Text style={{color:'black',width:'12%'}}>W</Text>
            <Text style={{color:'black',width:'12%'}}>ER</Text>
            </View>


            
            <View>
  {Object.keys(item.bowlTeamDetails.bowlersData).map((key) => {

      const batsman = item.bowlTeamDetails.bowlersData[key];
      return (
          <View key={batsman.bowlerId}>

            <View style={{backgroundColor:'#fff'}}>
             <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',width:'40%',}}>{batsman.bowlName}</Text>
            <Text style={{color:'black',width:'12%'}}>{batsman.overs}</Text>
            <Text style={{color:'black',width:'12%'}}>{batsman.maidens}</Text>
            <Text style={{color:'black',width:'12%'}}>{batsman.runs}</Text>
            <Text style={{color:'black',width:'12%'}}>{batsman.wickets}</Text>
            <Text style={{color:'black',width:'12%'}}>{batsman.economy}</Text>
            </View>

            </View>
             </View>
      );
  })}

</View>

<View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',width:'50%',}}>Fall of Wickets </Text>
            <Text style={{color:'black',width:'25%'}}>Score</Text>
            <Text style={{color:'black',width:'25%'}}>Over</Text>
           
            </View>

            <View>
  {Object.keys(item.wicketsData).map((key) => {
      const batsman = item.wicketsData[key];
      return (
          <View key={batsman.batId}>

            <View style={{backgroundColor:'#fff'}}>
             <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',width:'50%',}}>{batsman.batName}</Text>
            <Text style={{color:'black',width:'25%'}}>{batsman.wktRuns}-{batsman.wktNbr}</Text>
            <Text style={{color:'black',width:'25%'}}>{batsman.wktOver}</Text>
            
            </View>

            </View>



            

             </View>
      );
  })}

</View>


<View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',width:'50%',}}>Powerplay</Text>
            <Text style={{color:'black',width:'25%'}}>Over</Text>
            <Text style={{color:'black',width:'25%'}}>Run</Text>
           
            </View>
            
            <View>
  {Object.keys(item.ppData).map((key) => {
      const batsman = item.ppData[key];
      return (
          <View key={batsman.ppId}>

            <View style={{backgroundColor:'#fff'}}>
             <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',width:'50%',}}>{batsman.ppType}</Text>
            <Text style={{color:'black',width:'25%'}}>{batsman.ppOversFrom}-{batsman.ppOversTo.toFixed(1)}</Text>
            <Text style={{color:'black',width:'25%'}}>{batsman.runsScored}</Text>
            
            </View>

            </View>



            

             </View>
      );
  })}

</View>




<View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:'black',}}>Partnerships</Text>
             </View>
            
            <View>
  {Object.keys(item.partnershipsData).map((key) => {
      const batsman = item.partnershipsData[key];
      return (
          <View key={batsman.bat1Id}>

            <View style={{backgroundColor:'#fff'}}>
             <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10}}>
             <Text style={{ color: 'black', width: '50%' }}>{batsman.bat1Name} {batsman.bat1Runs === 0 ? `(${batsman.bat1Runs.toFixed(1)})` : batsman.bat1Runs}</Text>
          <Text style={{color:'black',width:'20%'}}>{batsman.totalRuns}({batsman.totalBalls})</Text>

          <Text style={{color:'black',width:'30%'}}>{batsman.bat2Name} {batsman.bat2Runs === 0 ? `(${batsman.bat2Runs.toFixed(1)})` : batsman.bat2Runs}</Text>
            
            </View>

            </View>



            

             </View>
      );
  })}

</View>


            </View>}
          
          
           
          
        </View>
    );
};




  
  

  return (
    <ScrollView
      style={{ backgroundColor: '#4fa8b9' }}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
    >




      {submitLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
          <ActivityIndicator size='large' color='#4fa8b9' />
        </View>
      ) : (
        <View>
         {SeriesMatch ? (
            <Text style={{ color: '#8b0000', fontWeight: '500', marginLeft: 10, fontSize: 16, marginVertical: 10 }}>
              {SeriesMatch?.matchHeader.status}
            </Text>
          ) : null}
        <FlatList
          data={SeriesMatch ? SeriesMatch.scoreCard : []}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          renderItem={({ item }) => renderPlayerStats(item)}
        />
      </View>
      
       )}
    </ScrollView>
  );
}



function SQUADS() {
 
  const route= useRoute()


  const {matchid} = route.params

  // console.log('matchid>>>>>>>>>',matchid);


  const navigation = useNavigation ()

  const [SeriesMatch, setSeriesMatch] = useState(null);
  const [submitLoading, setSubmitLoading] = useState(false);

  const TopStoryData = async () => {
    setSubmitLoading(true);
    try {
      const token = await AsyncStorage.getItem("loginToken");
      const response = await fetch(`https://cricketwicket.biz/api/v1/matches/info/?matchId=${matchid}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const Data = await response.json();
      console.log('Data>>>>>>',Data);
      setSeriesMatch(Data);
     
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setSubmitLoading(false);
  };

  useEffect(() => {
    TopStoryData();
  }, []);

  const getImageUrl = (imageId) => {

    

    return `https://static.cricbuzz.com/a/img/v1/1080x608/i1/c${imageId}/i.jpg`; 
  };

  const renderPlayerDetails = (team) => {
    return (
        <View style={{ flex: 1 }}>
            {team.playerDetails.map((player, index) => (

              <TouchableOpacity onPress={()=>navigation.navigate('PlyerDetails',{itemid:player.id, itemname:player.name})}>
                <View key={player.id}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                        <Image 
                            source={{ uri: getImageUrl(player.faceImageId) }} 
                            style={{ width: 30, height: 30, borderRadius: 15, marginRight: 10 }} 
                        />
                        <Text style={{ color: 'black' }}>{player.name}</Text>
                    </View>
                    {/* Add a separator line between items */}
                    {index < team.playerDetails.length - 1 && (
                        <View style={{ height: 1, backgroundColor: '#ccc', marginVertical: 5 }} />
                    )}
                </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};




const renderMatchInfo = (matchInfo) => {
    if (!matchInfo) return null;

    return (
        <View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor:'#808080', marginVertical:10, }}>
                <Text style={{ color: 'black', fontWeight: '500', marginHorizontal:10,  marginVertical:5}}>{matchInfo.team1.name} Players</Text>
                <Text style={{ color: 'black', fontWeight: '500', marginHorizontal:10,marginVertical:5 }}>{matchInfo.team2.name} Players</Text>
            </View> 
            <Text style={{alignSelf:'center',marginVertical:10}}>Playing xi</Text>
          <View style={{ backgroundColor: '#fff',}}>

            
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,marginHorizontal:10}}>
                {renderPlayerDetails(matchInfo.team1)}
                {renderPlayerDetails(matchInfo.team2)}
            </View>

            </View>
        </View>
    );
};


  
  

  return (
    <ScrollView style={{ backgroundColor: '#4fa8b9' }}>


      {submitLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
          <ActivityIndicator size='large' color='#4fa8b9' />
        </View>
        
      ) : (
        <FlatList
          data={SeriesMatch ? [SeriesMatch] : []}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          renderItem={({ item }) => renderMatchInfo(item.matchInfo)}
        />
        )}  
    </ScrollView>
  );
}





function OVERS() {
  
  const route = useRoute();
  const { matchid } = route.params;
const navigation = useNavigation();
const [SeriesMatch, setSeriesMatch] = useState(null);
const [submitLoading, setSubmitLoading] = useState(false);

// console.log('SeriesMatchhello>>>>>>>>', SeriesMatch);


const TopStoryData = async () => {
  setSubmitLoading(true);
  try {
    const token = await AsyncStorage.getItem("loginToken");
    const response = await fetch(
      `https://cricketwicket.biz/api/v1/matches/overs/?matchId=${matchid}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const Data = await response.json();
    // console.log('Data>>>>>>>>>', Data);

    // Combine player data from momPlayers and mosPlayers
    const momPlayers = Data?.matchHeaders?.momPlayers?.player || [];
    const mosPlayers = Data?.matchHeaders?.mosPlayers?.player || [];

    // console.log('momPlayers>>>>>>>',momPlayers,mosPlayers);
    

    // Combine both arrays into one
    const combinedPlayers = [...momPlayers, ...mosPlayers];

    // Set the combined player data to the state
    setSeriesMatch({
      miniscore: Data?.miniscore || null,
      overSepList: Data?.overSepList?.overSep || [],
      matchHeadersPlayer: combinedPlayers,  // Combined players
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    setSubmitLoading(false);
  }
};


useEffect(() => {
  TopStoryData();
}, []);

const getImageUrl = (imageId) => {
  return `https://static.cricbuzz.com/a/img/v1/i1/c${imageId}/i.jpg`; // Adjust the URL pattern based on your server
};






const renderMatchInfo = ({ item }) => {
  if (!item || typeof item !== 'object') {
    return null;
  }

  const getBackgroundColor = (value) => {
    switch (value) {
      case "0":
        return "gray";
      case "W":
        return "red";
      case "1":
      case "2":
      case "3":
        return "#48d1cc";
      case "4":
        return "#4682b4";
      case "6":
        return "#ee82ee";
      case "Wd":
        return "#d2b48c";
      default:
        return "transparent";
    }
  };

  const renderOverSummary = (overSummary) => {
    if (!overSummary || typeof overSummary !== "string") {
      return null; // No content if invalid
    }

    const components = overSummary.trim().split(" ");
    // console.log("Components>>>>>>", components);

    return (
      <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 20, justifyContent:'center'}}>
        {components.map((value, index) => (
          <Text
            key={index}
            style={{
              color: "white",
              borderRadius: 20,
              fontSize: 10,
              backgroundColor: getBackgroundColor(value),
              paddingHorizontal: 10,
              paddingVertical: 5,
              marginRight: 5,
              marginBottom: 5, 
              
              
            }}
          >
            {value}
          </Text>
        ))}
      </View>
    );
  };

  return (
    <View>
      <View style={{ backgroundColor: "#fff", padding:10, flex:1 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "black", fontSize: 20,  }}>
            {`Ov: ${item.overNum}`}
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: 18,
              fontWeight: "600",
              marginLeft: "5%",
            }}
          >
            {`${item.ovrBowlNames} to`}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "gray", fontSize: 16, fontWeight: "600" }}>
            {`${item.runs} runs`}
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: 18,
              fontWeight: "600",
              marginLeft: "14%",
            }}
          >
            {item.ovrBatNames?.[0] || "N/A"}
          </Text>
          <Text style={{ color: "black", fontSize: 18, fontWeight: "600" }}>
            &
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: 18,
              fontWeight: "600",
              marginHorizontal: 10,
            }}
          >
            {item.ovrBatNames?.[1] || "N/A"}
          </Text>
        </View>

        {renderOverSummary(item.overSummary || "")}

       

        {/* <Text style={{ color: "black" }}>{`Batting Team: ${item.battingTeamName}`}</Text> */}

        {/* {SeriesMatch?.miniscore?.performance?.map((perf, index) => (
          <View key={index} style={{ marginTop: 5 }}>
            <Text style={{ color: "black" }}>{`${perf.label}: ${perf.runs} runs`}</Text>
          </View>
        ))} */}

        {/* <Text style={{ color: "black" }}>
          {`Partnership: ${SeriesMatch?.miniscore?.partnership || "N/A"}`}
        </Text> */}
      </View>
    </View>
  );
};






const renderHeader = () => {
  if (!SeriesMatch?.miniscore) return null;

  const { inningsScores, custStatus, crr } = SeriesMatch.miniscore;

  return (
    <View style={{  backgroundColor: '#fff', padding: 10, position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1 }}>
      {inningsScores.inningsScore.map((inning, index) => (
        <View key={index} style={{ marginBottom: 5 }}>
          <Text style={{ color: 'black', fontSize: 16 }}>
            {`${inning.batTeamShortName}: ${inning.runs}-${inning.wickets} (${inning.overs})`}
          </Text>
        </View>
      ))}
      <Text style={{ color: '#1e90ff', fontSize: 16, marginVertical: 5 }}>{custStatus}</Text>
      <Text style={{ color: 'black', fontSize: 16 }}>{`Current Run Rate: ${crr}`}</Text>
    </View>
  );
};



const players = SeriesMatch?.matchHeadersPlayer || [];

  
  const player1Name = players?.[0]?.name || 'N/A';
  const player2Name = players?.[1]?.name || 'N/A';
  const player1img = players?.[0]?.faceImageId || 'N/A';
  const player2img = players?.[1]?.faceImageId || 'N/A';

return (
 
  <View style={{ backgroundColor: '#fff', flex: 1 }}>
  {submitLoading ? (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  ) : SeriesMatch?.overSepList?.length > 0 ? (
    <>
     
     
      {renderHeader()}
   

      <ScrollView>
        <View style={{ backgroundColor: '#fff', flex: 1, padding: 10 }}>
          {/* Player of the Match */}
          
          {player1Name !== 'N/A' && player1img !== 'N/A' && (
  <View style={{ marginTop:'35%',backgroundColor: '#fff',}}>
    <Text style={{ fontSize: 16, color: '#808080' }}>PLAYER OF THE MATCH</Text>
    <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
      <Image
        source={{ uri: getImageUrl(player1img) }}
        style={{ width: 40, height: 40, borderRadius: 20 }}
      />
      <Text style={{ color: 'black', fontSize: 18, marginLeft: 10 }}>
        {player1Name}
      </Text>
    </View>
  </View>
)}

{player2Name !== 'N/A' && player2img !== 'N/A' && (
  <View style={{ marginBottom: 10,marginTop:'5%',backgroundColor: '#fff', }}>
    <Text style={{ fontSize: 16, color: '#808080' }}>PLAYER OF THE SERIES</Text>
    <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
      <Image
        source={{ uri: getImageUrl(player2img) }}
        style={{ width: 40, height: 40, borderRadius: 20 }}
      />
      <Text style={{ color: 'black', fontSize: 18, marginLeft: 10 }}>
        {player2Name}
      </Text>
    </View>
  </View>
)}

</View>

<View style={{flex:1,backgroundColor: '#fff',}}>

          {/* Match Details */}
          <FlatList
            data={SeriesMatch.overSepList}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => renderMatchInfo({ item })}
            contentContainerStyle={{ paddingVertical: 10 }}
          />
        </View>
      </ScrollView>
    </>
  ) : (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../../assets/nodata.png')} style={{ height: 200, width: 200 }} />
    </View>
  )}
</View>

  );
}



function HIGHLIGHTS() {
  const route= useRoute()


  const {matchid} = route.params

  


  const navigation = useNavigation ()

  const [SeriesMatch, setSeriesMatch] = useState(null);
  const [submitLoading, setSubmitLoading] = useState(false);

  const TopStoryData = async () => {
    setSubmitLoading(true);
    try {
      const token = await AsyncStorage.getItem("loginToken");
      const response = await fetch(`https://cricketwicket.biz/api/v1/matches/overs/?matchId=${matchid}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const Data = await response.json();
      setSeriesMatch(Data);
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

 


  const renderMatchInfo = ({ item }) => {
    // console.log('highlight>>>>>>>>', item);
  
    if (!item || !item.matchHeader || !item.miniscore) {
      return null;
    }
  
    return (
      <View>
        <View style={{ backgroundColor: '#fff' }}>
          {/* Display match details */}
          <Text style={{color:'black'}}>Match Description: {item.matchHeader.matchDescription}</Text>
          <Text>Match Type: {item.matchHeader.matchType}</Text>
          <Text>Match Format: {item.matchHeader.matchFormat}</Text>
          <Text>Match Status: {item.matchHeader.status}</Text>
          {/* Display miniscore details */}
          <Text>Batting Team: {item.miniscore.batTeam ? item.miniscore.batTeam.teamId : 'N/A'}</Text>
          <Text>Batting Team Score: {item.miniscore.batTeam ? `${item.miniscore.batTeam.teamScore}/${item.miniscore.batTeam.teamWkts}` : 'N/A'}</Text>
          <Text>Target: {item.miniscore.target}</Text>
          {/* Add more details as needed */}
        </View>
      </View>
    );
  };
  
  
  







  
  

  return (
    <ScrollView style={{ backgroundColor: '#4fa8b9' }}>




{submitLoading ? (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
    <ActivityIndicator size='large' color='#4fa8b9' />
  </View>
) : (
  // Check if SeriesMatch has data
  SeriesMatch && SeriesMatch.length > 0 ? (
    <FlatList
      data={SeriesMatch ? [SeriesMatch] : []}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      renderItem={renderMatchInfo}
    />
  ) : (
    // Show "No Data Available" message if there's no data
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:'50%' }}>
    <Image source={require('../../assets/nodata.png')} style={{ height: 200, width: 200 }} />
   </View>
  )
)}

    </ScrollView>
  );
} 





const InfoLiveScorecard = () =>{

  const route= useRoute()

  const {matchid,teamName1,teamName2,} = route.params


  

  return (
    <Tab.Navigator
tabBarOptions={{
labelStyle: { fontSize: 14, fontWeight: '600', color: '#fff' },
style: { backgroundColor: '#4fa8b9' },
indicatorStyle: { backgroundColor: '#fff' },
scrollEnabled: true, // Enable horizontal scrolling
}}
>
<Tab.Screen name="INFO" component={INFO} initialParams={{matchid,}} />
<Tab.Screen name="LIVE" component={LIVE} initialParams={{matchid,teamName1,teamName2,}} />
<Tab.Screen name="SCORECARD" component={SCROECARD} initialParams={{matchid,}}   />
<Tab.Screen name="SQUADS" component={SQUADS} initialParams={{matchid,}} />
<Tab.Screen name="OVERS" component={OVERS}  initialParams={{matchid,teamName1,teamName2,}} />
<Tab.Screen name="HIGHLIGHTS" component={HIGHLIGHTS} initialParams={{matchid}} />

</Tab.Navigator>

  
  );
}

export default InfoLiveScorecard;
