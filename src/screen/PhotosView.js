import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View,Text, FlatList, StyleSheet, TouchableOpacity, Image, Share } from "react-native";


const PhotosView = () =>{

const [PhotosData,setPhotosData]= useState('')
const route = useRoute();
const { imageId, caption } = route.params;
console.log('galleryId:', imageId); 
console.log('PhtosName:', caption); 

const navigation = useNavigation()


  const handleShare = async () => {
     try {
       const result = await Share.share({
         message: `Check out the latest cricket Photos and updates! Download the app now: https://play.google.com/store/apps/details?id=com.cricketwickets&pcampaignid=web_share`,
         title: "Cricket Wickets App",
       });
       if (result.action === Share.sharedAction) {
         if (result.activityType) {
           console.log('Shared with activity type:', result.activityType);
         } else {
           console.log('Shared successfully');
         }
       } else if (result.action === Share.dismissedAction) {
         console.log('Share dismissed');
       }
     } catch (error) {
       console.error('Error sharing app link:', error);
     }
   };


    
      

     

      const getImageUrl = (imageId) => {
        return `https://static.cricbuzz.com/a/img/v1/1080x608/i1/c${imageId}/i.jpg`; 
      };

  return (

        <View style={{ flex: 1, backgroundColor:'black'}}>

        

             <View style={{flexDirection:'row',marginHorizontal:15,justifyContent:'space-between'}}>

                <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={require('../../assets/icons8-back-50.png')}
            
            style={{height:30,width:30,tintColor: '#fff',}}
            />

</TouchableOpacity>

     <TouchableOpacity onPress={handleShare}>
              <Image source={require('../../assets/icons8-share-50.png')}
            
            style={{height:30,width:30,tintColor: '#fff',}}
            />
            </TouchableOpacity>

               </View>

            <View style={{justifyContent:'center',flex:1}}>
        <Image
      source={{ uri: getImageUrl(imageId) }}
      style={styles.imageBackground}
      imageStyle={styles.imageStyle}
        />
        </View>
        <View>
            <Text style={{color:'#fff',marginHorizontal:10}}>{caption}</Text>
        </View>
      </View>
    )
}
const styles = StyleSheet.create({
    imageBackground: {
      width:"100%",
      height: 200,
    
    },
    imageStyle: {
      resizeMode: 'cover',
    },
   
   
   
  
  });
  
export default PhotosView;