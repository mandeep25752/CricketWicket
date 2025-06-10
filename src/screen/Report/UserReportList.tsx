import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image } from 'react-native';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


interface reportProps {
    navigation: any;
}

const UserReportList = (props: reportProps) => {

    const route = useRoute(); // Use the useRoute hook
    const { reportsid } = route.params; 

    console.log('reportsid>>>>>>>>>',reportsid);

    const navigation = useNavigation()
    
   
    const reports = [{
        title: "ankit",
        message: "report",
        userName: "abhishek",
        reportNumber: "8"

    }]
    useEffect(() => {
        getToken();
    }, []);
    const [userId, setUserID] = useState<string | null>(null);
    const [loginToken, setLoginToken] = useState<string | null>(null);
    const [reportListsState, setReportListsState] = useState<[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    
    const [userInfoState, setUserInfoState] = useState<any>(null);

    console.log("token in Report Lists screen", loginToken);

    const getToken = async () => {
        const token = await AsyncStorage.getItem("loginToken");
        const userid = await AsyncStorage.getItem("userID");
        console.log("userid in HOME", userid);
        setUserID(userid)
        setLoginToken(token);
        console.log("token in Report Lists screen", token);
    };
    useEffect(() => {
        if (loginToken) {
            getReportList()
        }
    }, [loginToken])
    useFocusEffect(
        React.useCallback(() => {
            getReportList
        }, [])
      );
      const getReportList = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "Bearer " + loginToken);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        setLoading(true); // Start loading
        try {
            const response = await fetch(`https://cricketwicket.biz/api/v1/reports/${reportsid}`, requestOptions);
            const result = await response.json();
            console.log("User Report Lists Response>>>>>>", result);
            setReportListsState(result);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <View style={styles.container}>

<View style={styles.reportContainer}>
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff"  />
                ) : (
                    reportListsState?.data ? (
                        <>


<TouchableOpacity onPress={()=>{
                        navigation.navigate("UpdateReport",{updateid:reportListsState.data.id})
                      }}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={styles.reportTitle}>{reportListsState.data.title}</Text>
                           

                            
                            <Image source={require('../../../assets/edit.png')} style={{width:30,height:25}}/>
                            
                                    </View>

                                    </TouchableOpacity>

                            <Text style={styles.reportMessage}>{reportListsState.data.message}</Text>
                            <Text style={styles.reportUserName}>{reportListsState.data.status}</Text>
                        </>
                    ) : (
                        <Text style={{ color: 'black', alignSelf: 'center' }}>
                            {reportListsState?.message || "Loading..."}
                        </Text>
                    )
                )}
            </View>   


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4fa8b9',
        padding: 5,
    },
    title: {
        fontSize: moderateScale(20, 0.1),
        fontWeight: 'bold',
        marginBottom: 10,
    },
    reportContainer: {
        borderWidth: 1,
        backgroundColor: "#fff",
        borderColor: '#000',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    reportTitle: {
        fontSize: moderateScale(16, 0.1),
        fontWeight: 'bold',
        color: "black"
    },
    reportMessage: {
        fontSize: moderateScale(16, 0.1),
        marginTop: 5,
        color: "#000"
    },
    reportUserName: {
        fontSize: moderateScale(16, 0.1),
        marginTop: 5,
        // fontStyle: 'italic',
        color: "#000"
    },
    reportNumber: {
        fontSize: moderateScale(16, 0.1),
        marginTop: 5,
        color: '#000',
    },
    btn1: {
        width: '40%',
        alignItems: "center",
        alignSelf: "flex-end",
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

export default UserReportList;
