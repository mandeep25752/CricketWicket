import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View,Pressable,Image } from "react-native"
import { launchImageLibrary } from "react-native-image-picker";
import { moderateScale } from "react-native-size-matters";

const UpdateReport = () =>{
    const route = useRoute(); // Use the useRoute hook
    const { updateid } = route.params; 
  
    const navigation = useNavigation();
  
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [textError, setTextError] = useState('');
    const [titleError, setTitleError] = useState('');
    const [status, setStatus] = useState('pending'); // Default status to "pending"
    const [statusError, setStatusError] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [loginToken, setLoginToken] = useState();
    const [submitLoading, setSubmitLoading] = useState(false);
  
    // Function to fetch loginToken from AsyncStorage
    const fetchToken = async () => {
      try {
        const token = await AsyncStorage.getItem("loginToken");
        setLoginToken(token);
        console.log("Token fetched:", token);
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };
  
    useEffect(() => {
      fetchToken(); // Fetch token on component mount or when loginToken is needed
    }, []);
  
    const handleSubmitReport = async () => {
      if (!title) {
        setTitleError('Title cannot be empty');
        return;
      }
      setTitleError("");
  
      if (!text) {
        setTextError('Message cannot be empty');
        return;
      }
      setTextError("");
  
      setSubmitLoading(true);
  
      try {
        if (!loginToken) {
          throw new Error("Token not found");
        }
  
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "Bearer " + loginToken);
  
        const formdata = new FormData();
        formdata.append("title", title);
        formdata.append("message", text);
        formdata.append("status", status); // Ensure status value is correct
  
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: formdata,
          redirect: "follow"
        };
  
        const response = await fetch(`https://cricketwicket.biz/api/v1/reports/update/${updateid}`, requestOptions);
        const result = await response.json();
  
        if (response.ok && result.message === "Report submitted successfully") {
          ToastAndroid.showWithGravityAndOffset(
            'Report submitted successfully.',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50,
          );
          setTitle("");
          setText("");
          setStatus('pending'); // Reset status to default "pending"
          setSelectedImage(null);
          navigation.goBack();
        } else {
          ToastAndroid.showWithGravityAndOffset(
            'Report submission failed: ' + result.message,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50,
          );
        }
      } catch (error) {
        console.error("Error submitting report:", error);
        ToastAndroid.showWithGravityAndOffset(
          'Report submission failed.',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
      } finally {
        setSubmitLoading(false);
      }
    };
  
    const openGallery = async () => {
      const result = await launchImageLibrary({ mediaType: 'photo' });
      if (!result.didCancel) {
        setSelectedImage(result?.assets[0]?.uri);
      }
    };
  
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <TouchableOpacity style={styles.btn1} onPress={() => navigation.goBack()}>
            <Text style={styles.btnTxt}>Back</Text>
          </TouchableOpacity>
  
          <View style={styles.textInputContainer}>
            <TextInput
              multiline
              numberOfLines={1}
              placeholder="Enter Title"
              placeholderTextColor="#000"
              value={title}
              onChangeText={setTitle}
              style={styles.textInput}
            />
          </View>
          {titleError && <Text style={styles.errorText}>{titleError}</Text>}
  
          <View style={styles.textInputContainer}>
            <TextInput
              multiline
              numberOfLines={4}
              placeholder="Tell us what happened - the more details, the better"
              placeholderTextColor="#000"
              value={text}
              onChangeText={setText}
              style={styles.textInput}
            />
          </View>
          {textError && <Text style={styles.errorText}>{textError}</Text>}
  
          <View style={styles.textInputContainer}>
            <TextInput
              multiline
              numberOfLines={1}
              placeholder="Enter Status"
              placeholderTextColor="red"
              value={status}
              onChangeText={setStatus}
              style={styles.textInput}
              editable={false} 
            />
          </View>
          {statusError && <Text style={styles.errorText}>{statusError}</Text>}
  
          <TouchableOpacity style={styles.cont} onPress={openGallery}>
            <Text style={styles.txt}>Add attachment</Text>
          </TouchableOpacity>
  
          {selectedImage && (
            <View style={styles.imageContainer}>
              <Image
                resizeMode="cover"
                source={{ uri: selectedImage }}
                style={styles.image}
              />
              <TouchableOpacity style={{ backgroundColor: '#fff', width: 100, height: 50, justifyContent: 'center', borderRadius: 30 }} onPress={() => setSelectedImage(null)}>
                <Text style={{ color: 'black', alignSelf: 'center', fontWeight: '500' }}>Reupload</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
  
        <Pressable onPress={handleSubmitReport} style={styles.btn}>
          {submitLoading ? (
            <ActivityIndicator size="small" color="#000" />
          ) : (
            <Text style={styles.btnText}>Submit</Text>
          )}
        </Pressable>
      </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4fa8b9',
    },
    contentContainer: {
      flex: 1,
      margin: 20,
    },
    title: {
      fontSize: 22,
      color: '#fff',
      marginBottom: 20,
    },
    addPic: {
      width: moderateScale(30, 0.3),
      height: moderateScale(30, 0.3),
      marginRight: 10,
    },
    textInputContainer: {
      borderWidth: 1,
      borderRadius: 12,
      marginBottom: 10,
      borderColor: '#000',
      alignItems: 'flex-start',
      backgroundColor: '#fff',
    },
    textInput: {
      fontSize: moderateScale(14, 0.3),
      paddingVertical: 10,
      paddingHorizontal: 15,
      width: '100%',
      minHeight: moderateScale(60, 0.3),
      color:'black'
    },
    btn: {
      backgroundColor: '#fff',
      padding: 15,
      alignItems: 'center',
      borderRadius: 8,
      width: '80%',
      alignSelf: 'center',
      marginBottom: 20,
      elevation: 10,
    },
    btnText: {
      color: '#000',
      fontSize: 16,
      fontWeight: 'bold',
    },
    cont: {
      width: '100%',
      borderRadius: 10,
      marginBottom: 20,
      paddingVertical: 5,
      alignItems: 'center',
      borderColor: '#000',
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    image: {
      width: moderateScale(250, 0.3),
      height: moderateScale(250, 0.3),
      borderRadius: 20,
      marginBottom: 20,
      alignSelf: 'center',
    },
    txt: {
      fontSize: moderateScale(18, 0.3),
      color: '#000',
    },
    btn1: {
      width: '40%',
      alignItems: "center",
      alignSelf:"flex-end",
      justifyContent: 'center',
      height: moderateScale(40, 0.3),
      marginBottom: 10,
      borderRadius: 10,
      elevation: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      backgroundColor: '#70e000',
    },
    btnTxt: {
      color: '#fff',
      fontSize: moderateScale(16, 0.3),
      fontWeight: 'bold',
    },
  });

export default UpdateReport;