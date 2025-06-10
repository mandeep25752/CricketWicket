import React from "react";
import { Alert, PermissionsAndroid, Platform, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View, Image,Linking } from 'react-native'
import { moderateScale } from "react-native-size-matters";
const ConnectWithUs = () => {


   
   
    
    const openUrl = async (appUrl) => {
        try {
          
         const supported = await Linking.canOpenURL(appUrl);
           if (supported) {
                await Linking.openURL(appUrl); 
            } else {
                  await Linking.openURL(appUrl)
            }
        } catch (err) {
          await Linking.openURL(appUrl)
        }
    };

    return (
        <View style={{ backgroundColor: '#4fa8b9', height: '100%' }}>
        <TouchableOpacity onPress={() => openUrl('https://www.instagram.com/cricketwicketin?igsh=MTI2NzNoem01cDBueg==')}>
            <View style={styles.subContainers}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../../assets/instagram-removebg-preview.png')} style={styles.imgs}></Image>
                    <Text style={styles.texts}>Instagram</Text>
                </View>
                <View>
                    <Image source={require('../../assets/icons8-play-50.png')} style={styles.arrowimgs}></Image>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openUrl('https://www.facebook.com/profile.php?id=61555865963434')}>
            <View style={styles.subContainers}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../../assets/fb-removebg-preview.png')} style={[styles.imgs, { height: 35, width: 30 }]}></Image>
                    <Text style={styles.texts}>Facebook</Text>
                </View>
                <View>
                    <Image source={require('../../assets/icons8-play-50.png')} style={styles.arrowimgs}></Image>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openUrl('https://x.com/cricketwicketin?t=XMBo03WQIwg3DwrUnMAXYg&s=08')}>
            <View style={styles.subContainers}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../../assets/twitter-removebg-preview.png')} style={[styles.imgs]}></Image>
                    <Text style={styles.texts}>Twitter</Text>
                </View>
                <View>
                    <Image source={require('../../assets/icons8-play-50.png')} style={styles.arrowimgs}></Image>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openUrl('mailto:cricketwicketaniket16@gmail.com')}>
            <View style={styles.subContainers}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../../assets/mail-removebg-preview.png')} style={styles.imgs}></Image>
                    <Text style={styles.texts}>Support Email</Text>
                </View>
                <View>
                    <Image source={require('../../assets/icons8-play-50.png')} style={styles.arrowimgs}></Image>
                </View>
            </View>
        </TouchableOpacity>
    </View>
    )
}
const styles = StyleSheet.create({
    subContainers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical:20,
        marginHorizontal:10,
        // height:'100%',

    },
    imgs: {
        height: 30,
        width: 30,
        marginHorizontal: 15,
        tintColor:'#fff'
    },
    texts: {
        fontSize: 18,
        color: '#fff'

    },
    arrowimgs:{
        height:20,
        width:20,
        tintColor:'#fff'
    }

})
export default ConnectWithUs;