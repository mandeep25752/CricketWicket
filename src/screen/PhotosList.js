import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { View,Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";


const PhotosList = () =>{

  const [PhotosData, setPhotosData] = useState([]);
  const [loading, setLoading] = useState(true); // State to track the loading state
  const route = useRoute();
  const { galleryId, PhtosName } = route.params;
  const navigation = useNavigation();

  // Fetch photos from API
  const fetchPhotosList = async () => {
    try {
      const response = await fetch(`https://cricketwicket.biz/api/v1/photos/gallery/?galleryId=${galleryId}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const photosData = await response.json();
      
      // Set fetched data and turn off loading state
      setPhotosData(photosData.photoGalleryDetails);
      setLoading(false);  // Data fetched, stop the loader
    } catch (error) {
      console.error('Error fetching photos list:', error);
      setLoading(false);  // Stop loader even if there's an error
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchPhotosList();
  }, []);

  // Helper function to build image URL
  const getImageUrl = (imageId) => {
    return `https://static.cricbuzz.com/a/img/v1/1080x608/i1/c${imageId}/i.jpg`;
  };

  // Render item for FlatList
  const renderItem = ({ item }) => (
    <View style={{ margin: 2 }}>
      <TouchableOpacity onPress={() => navigation.navigate('PhotosView', { imageId: item.imageId, caption: item.caption })}>
        <Image
          source={{ uri: getImageUrl(item.imageId) }}
          style={styles.imageBackground}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#4fa8b9" />
        </View>
      ) : (
        <FlatList
          data={PhotosData}
          numColumns={3}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
    )
}
const styles = StyleSheet.create({
    imageBackground: {
      width:120,
      height: 120,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageStyle: {
      resizeMode: 'cover',
    },
   
   
   
  
  });
  
export default PhotosList;