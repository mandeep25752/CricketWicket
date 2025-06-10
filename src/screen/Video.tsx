/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
  Text,
  Animated,
  Pressable,
  FlatList,
  StatusBar,
} from 'react-native';

import Orientation from 'react-native-orientation-locker';
import Slider from '@react-native-community/slider';
import { moderateScale } from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RateUs from './RateUs';
import { useRoute } from '@react-navigation/native';
import Video from 'react-native-video';
import YoutubeIframe from 'react-native-youtube-iframe';

const ICONS = {
  play: require('../../assets/icons8-play-50.png'),
  pause: require('../../assets/icons8-pause-50.png'),
  backward: require('../../assets/icons8-replay-10-50.png'),
  forward: require('../../assets/icons8-forward-10-50.png'),
  fullscreen: require('../../assets/icons8-full-screen-50.png'),
  normal: require('../../assets/icons8-normal-screen-50.png'),
};

interface ImageItem {
  id: string;
  image: any;
  Title: string;
  Date: string;
  url: string;
}

interface VideoProps {
  navigation: any;
}

const VideoPlay = (props: VideoProps) => {
  const { navigation } = props;
  const route = useRoute();
  const { videoid } = route.params; // Main video data from route
  const [isPlaying, setIsPlaying] = useState(false);
  const [loginToken, setLoginToken] = useState(null);
  const [videodata, setVideodata] = useState([]);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(videoid); // Initialize with main video

  // Fetch login token
  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await AsyncStorage.getItem('loginToken');
        setLoginToken(token);
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };
    getToken();
  }, []);

  // Fetch suggested videos
  useEffect(() => {
    const fetchVideos = async () => {
      setSubmitLoading(true);
      try {
        const token = await AsyncStorage.getItem('loginToken');
        const myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`);

        const response = await fetch(
          `https://cricketwicket.biz/api/v1/related/video/?video_id=${videoid.category_id}`,
          {
            method: 'GET',
            headers: myHeaders,
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }

        const responseData = await response.json();
        setVideodata(responseData);
      } catch (error) {
        console.error('Error fetching video list:', error);
      }
      setSubmitLoading(false);
    };

    fetchVideos();
  }, [videoid.category_id]);

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };
    return date.toLocaleDateString('en-GB', options);
  };

  // Extract YouTube video ID
  const extractVideoId = (url) => {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };

  // Render suggested videos
  const renderImageItem = ({ item }) => {
    const videoId = extractVideoId(item.video_url);
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

    return (
      <Pressable
        onPress={() => {
          setCurrentVideo(item); // Update current video
          setIsPlaying(false); // Pause current video
          setTimeout(() => setIsPlaying(true), 100); // Play new video with slight delay
        }}
        style={{
          paddingTop: 10,
          backgroundColor: '#fff',
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            paddingHorizontal: 10,
            paddingBottom: 10,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '40%',
            }}>
            <Image
              source={{ uri: thumbnailUrl }}
              style={{
                width: Dimensions.get('window').width / 2.5,
                height: 100,
              }}
              resizeMode="stretch"
            />
            <Image
              source={require('../../assets/icons8-play-50.png')}
              style={{ position: 'absolute' }}
            />
          </View>
          <View
            style={{
              width: '60%',
              paddingHorizontal: 15,
              justifyContent: 'space-between',
            }}>
            <Text style={[styles.txt]}>{item.title}</Text>
            <Text style={[styles.dateTxt]}>{formatDate(item.created_at)}</Text>
          </View>
        </View>
        <View style={styles.horizontalLine} />
      </Pressable>
    );
  };

  // Toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        {submitLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : currentVideo ? (
          <Pressable onPress={togglePlayPause}>
            <YoutubeIframe
              height={200}
              play={isPlaying}
              videoId={extractVideoId(currentVideo.video_url)}
              onError={(e) => console.error('YouTube Player Error:', e)}
            />
          </Pressable>
        ) : (
          <View style={styles.loadingContainer}>
            <Text style={styles.noVideoText}>No video available</Text>
          </View>
        )}
      </View>
      <View style={styles.headerTxtContainer}>
        {currentVideo && (
          <>
            <Text style={styles.headerTxt}>{currentVideo.title}</Text>
            <Text style={[styles.dateTxt]}>{formatDate(currentVideo.created_at)}</Text>
          </>
        )}
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.suggestedCContainer}>
        <Text style={styles.suggestedTxt}>Suggested Videos</Text>
      </View>

      {submitLoading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <FlatList
          data={videodata}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderImageItem}
        />
      )}
    </View>
  );
 
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  video: {
    width: Dimensions.get('window').width,
    height: 200,
  },
  fullScreenVideo: {
    width: Dimensions.get('window').height,
    height: Dimensions.get('window').width,
  },
  bufferingIndicator: {
    width: 50,
    height: 50,
    tintColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controls: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
  },
  slider: {
    flex: 1,
    marginHorizontal: 5,
  },
  playPauseContainer: {
    height: '10%',
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  playPauseButton: {
    width: 50,
    height: 50,
    tintColor: '#FFF',
    alignSelf: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  fullScreenButton: {
    width: 20,
    height: 20,
    tintColor: '#FFF',
  },
  durationContainer: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  durationText: {
    color: '#FFF',
    marginHorizontal: 10,
  },
  headerTxtContainer: {
    padding: 10,
  },
  headerTxt: {
    color: '#000',
    fontSize:18,
    fontWeight:'500'
  },
  headerTimeTxt: {
    marginTop: 5,
    color: 'gray',
    fontSize: moderateScale(14, 0.3),
    fontWeight:'600'
  },
  horizontalLine: {
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    width: '100%',
  },
  suggestedCContainer: {
    backgroundColor: '#ccc',
    padding: 10,
  },
  suggestedTxt: {
    color: '#000',
    fontSize: moderateScale(18, 0.3),
  },
  txt: {
    color: '#000',
    fontSize: moderateScale(16, 0.3),
  },
  dateTxt: {
    color: '#000',
    fontSize: moderateScale(14, 0.3),
  },

 
  unsupportedFormat: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
});

export default VideoPlay;
