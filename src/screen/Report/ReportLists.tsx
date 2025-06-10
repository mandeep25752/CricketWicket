import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


interface reportProps {
    navigation: any;
  }

const ReportLists = (props : reportProps) => {
    const {navigation} = props;
    const reports = [{
        title: "ankit",
        message: "report",
        userName: "abhishek",
        reportNumber: "8"

    }]
    useEffect(() => {
        getToken();
    }, []);

    const [loginToken, setLoginToken] = useState<string | null>(null);
    const [reportListsState, setReportListsState] = useState<[] | null>(null);
    console.log("report list dta in state" , reportListsState);
    const [userInfoState, setUserInfoState] = useState<any>(null);

    console.log("token in Report Lists screen", loginToken);

    const getToken = async () => {
        const token = await AsyncStorage.getItem("loginToken");
        setLoginToken(token);
        console.log("token in Report Lists screen", token);
    };
    useEffect(() => {
        if(loginToken){
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

        await fetch("https://cricketwicket.biz/api/v1/reports", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log("Report Lists Response", result?.data)
                setReportListsState(result?.data)

            })
            .catch((error) => console.error(error));
    }

    return (
        <View style={styles.container}>

{/* <TouchableOpacity style={styles.btn1} onPress={()=>{
        navigation.navigate("UserReportList")
      }}>
        <Text style={styles.btnTxt}>User Report</Text>
      </TouchableOpacity> */}

            <FlatList
                data={reportListsState}
                renderItem={({ item }) => (

                    <TouchableOpacity onPress={()=>{
                        navigation.navigate("UserReportList",{reportsid:item.id})
                      }}>
                    <View style={styles.reportContainer}>



                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>

                        
                        <Text style={styles.reportTitle}>{item?.title}</Text>
                       

                             </View>
                        <Text style={styles.reportMessage}>{item?.message}</Text>
                        <Text style={styles.reportUserName}>{item?.status}</Text>
                        {/* <Text style={styles.reportNumber}>Report Number: {item.reportNumber}</Text> */}

                        
                    </View>

                    </TouchableOpacity>
                    

                    
                )}
                keyExtractor={item => item?.id}
            />
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
        fontSize: moderateScale(20,0.1),
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
        fontSize: moderateScale(16,0.1),
        fontWeight: 'bold',
        color: "#000"
    },
    reportMessage: {
        fontSize: moderateScale(16,0.1),
        marginTop: 5,
        color: "#000"
    },
    reportUserName: {
        fontSize: moderateScale(16,0.1),
        marginTop: 5,
        // fontStyle: 'italic',
        color: "#000"
    },
    reportNumber: {
        fontSize: moderateScale(16,0.1),
        marginTop: 5,
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

export default ReportLists;
