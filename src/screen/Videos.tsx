
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Alert,
  ImageBackground,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {moderateScale} from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Video from 'react-native-video';
import { ActivityIndicator } from 'react-native';


interface ImageItem {
  id: string;
  image: any;
  Title: string;
  Date: string;
  url: string;
}

interface VideosProps {
  navigation: any;
}

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const Videos = (props: VideosProps) => {
  const {navigation} = props;

  useEffect(() => {
    getToken();
    
  }, []);

  const [loginToken, setLoginToken] = useState<string | null>(null);
  const [userInfoState, setUserInfoState] = useState<any>(null);
 


  
  

  
  
  

  const getToken = async () => {
    const token = await AsyncStorage.getItem("loginToken");
    setLoginToken(token);
    console.log("token in  main Videos screen", token);
  };



  
  
  

 
  


  const Imagedata: ImageItem[] = [
    {
      id: '1',
      image: require('../../assets/529772-cricekt.jpg'),
      Title: 'England v India, 3rd ODI: Full Highlights',
      Date: 'Mon, 18 Jul 2024',
      url: 'https://vjs.zencdn.net/v/oceans.mp4',
    },
    {
      id: '2',
      image: require('../../assets/529772-cricekt.jpg'),
      Title: 'England v India, 3rd ODI: Full Highlights',
      Date: 'Mon, 18 Jul 2022',
      url: 'https://vjs.zencdn.net/v/oceans.mp4',
    },
    {
      id: '3',
      image: require('../../assets/529772-cricekt.jpg'),
      Title: 'England v India, 3rd ODI: Full Highlights',
      Date: 'Mon, 18 Jul 2022',
      url: 'https://vjs.zencdn.net/v/oceans.mp4',
    },
  ];

  const [selectedVideoId, setSelectedVideoId] = useState('1');


  

  const [videodata , setvideodata]=useState([])
  const [submitLoading, setSubmitLoading] = useState(false);

  
  

  


const fetchVideos = async () => {

  setSubmitLoading(true)
  try {
    const token = await AsyncStorage.getItem("loginToken");
    const myHeaders = new Headers();

    console.log('loginToken>>>>>>>>',token);
    

    myHeaders.append("Authorization", "Bearer " + token);

    const response = await fetch('https://cricketwicket.biz/api/v1/video', {
      method: 'GET',
      headers: myHeaders,
    });

    if (!response.ok) {
      throw new Error(`HTTP status ${response.status}`);
    }

    const responseData = await response.json();
    setvideodata(responseData.data)
    
    console.log('Video list:>>>>>', responseData.data);
  
  } catch (error) {
    console.error('Error fetching video list:', error);
   
  }
  setSubmitLoading(false)
};



  
 
  useEffect(() => {
    fetchVideos()
  }, []);




 

  const extractVideoId = (url) => {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  };


  const renderImageItem = ({item}: {item: any}) => {

    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      };
      return date.toLocaleDateString('en-GB', options);
    };

    const videoId = extractVideoId(item.video_url);
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

   return (
      <View
      style={{
        flex: 1,
    }}>



<View style={{flexDirection:'row',marginHorizontal:10}}>
<ImageBackground
        source={{ uri: thumbnailUrl }}
         style={{ width: 100, height: 100, borderRadius: 10, overflow: 'hidden',  justifyContent:'center',  marginVertical:10 }}
              >

           <Image
              source={require('../../assets/icons8-play-50.png')}
              style={{alignSelf:'center', }}
            />


         </ImageBackground>


      <Pressable onPress={() => navigation.navigate('Video',{videoid:item,category_id:item.category_id})}>
      <Text style={[styles.dateTxt, { marginBottom: 10,width:'40%', marginLeft:'3%',marginVertical:10 }]}>{item.title}</Text>
      <Text style={[styles.dateTxt, { marginBottom: 10, width: '40%',marginLeft:'3%',marginVertical:10 }]}>
            {formatDate(item.created_at)}
          </Text>

      

        </Pressable>

        </View>
       
        
    </View>
    );
  };
  
  

  
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/CricketLogo.png')}
          style={styles.logo}
        />
       
      </View>

      <View style={styles.buttonContainer}>
   

        </View>


        {submitLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', marginTop:'50%', alignItems: 'center', alignSelf: 'center' }}>
          <ActivityIndicator size='large' color='#0000ff' />
        </View>
      ):(
        
        <FlatList
        data={videodata}
        keyExtractor={(item, index) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        renderItem={renderImageItem}
      />)}
    </ScrollView>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
    backgroundColor: '#4FA8B9',
  },
  logoContainer: {
    flexDirection: 'row',
    height: moderateScale(70, 0.3),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    // backgroundColor: '#00b4d8',
    backgroundColor: '#4fa8b9',
    borderBottomColor: '#4fa8b9',
    borderBottomWidth: 1,
    elevation: 100,
  },
  logo: {
    width: moderateScale(60, 0.3),
    height: moderateScale(60, 0.3),
  },
  icon: {
    width: moderateScale(65, 0.3),
    height: moderateScale(100, 0.3),
    tintColor: '#fff',
    marginTop: 20,
  },
  SubTxt: {
    color: '#fff',
    fontSize: moderateScale(16, 0.3),
  },
  txt: {
    color: '#fff',
    // fontSize: moderateScale(14, 0.3),
    fontSize: moderateScale(14, 0.3),
  },
  dateTxt: {
    color: '#dee2e6',
    // fontSize: moderateScale(14, 0.3),
    fontSize: moderateScale(14, 0.3),
   
    
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginVertical:10
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical:10
  },
  selectedButton: {
    backgroundColor: '#006400',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  
});

export default Videos;
