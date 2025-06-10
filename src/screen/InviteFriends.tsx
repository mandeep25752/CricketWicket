import React from "react";
import { StyleSheet } from "react-native";
import { Text, View, Image } from 'react-native'
import { moderateScale } from "react-native-size-matters";
const InviteFriends = () => {
    return (
        <View style={{ backgroundColor: '#4fa8b9', height: '100%' }}>



            <View style={styles.subContainers}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../../assets/whatsapp-removebg-preview.png')} style={styles.imgs}></Image>
                    <Text style={styles.texts}>whatsapp</Text>
                </View>
                <View>
                    <Image source={require('../../assets/icons8-play-50.png')} style={styles.arrowimgs}></Image>
                </View>
            </View>

            <View style={styles.subContainers}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../../assets/instadark-removebg-preview.png')} style={styles.imgs}></Image>
                    <Text style={styles.texts}>Instagram</Text>
                </View>
                <View>
                    <Image source={require('../../assets/icons8-play-50.png')} style={styles.arrowimgs}></Image>
                </View>
            </View>

            <View style={styles.subContainers}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../../assets/fbdark-removebg-preview.png')} style={[styles.imgs, { height: 40, width: 30 }]}></Image>
                    <Text style={[styles.texts, {marginTop:5}]}>Facebook</Text>
                </View>
                <View>
                    <Image source={require('../../assets/icons8-play-50.png')} style={[styles.arrowimgs, {marginTop:8}]}></Image>
                </View>
            </View>

            <View style={styles.subContainers}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../../assets/twitterdark-removebg-preview.png')} style={[styles.imgs]}></Image>
                    <Text style={styles.texts}>Twitter</Text>
                </View>
                <View>
                    <Image source={require('../../assets/icons8-play-50.png')} style={styles.arrowimgs}></Image>
                </View>
            </View>


            <View style={styles.subContainers}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../../assets/emaildark-removebg-preview.png')} style={styles.imgs}></Image>
                    <Text style={styles.texts}>Support Email</Text>
                </View>
                <View>
                    <Image source={require('../../assets/icons8-play-50.png')} style={styles.arrowimgs}></Image>
                </View>
            </View>






        </View>
    )
}

const styles = StyleSheet.create({
    subContainers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginHorizontal: 10,
        // height:'100%',

    },
    imgs: {
        height: 30,
        width: 30,
        marginHorizontal: 15,
        // tintColor: '#fff'
    },
    texts: {
        fontSize: 18,
        color: '#fff'

    },
    arrowimgs: {
        height: 20,
        width: 20,
        tintColor: '#fff'
    }

})
export default InviteFriends;