/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    FlatList,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



interface UpcomingStatProps {
    id: string;
    count: string;
    // image1: any;
    // image2: any;
    matchName: string;
    team1: string;
    time: string;
    team2: string;
    teamName1: string;
    teamName2: string;
    date: string;
    matchStatus: any;

}
interface navigationsPart {
    navigation: any;
}
const { width } = Dimensions.get('window');
const dataItem: UpcomingStatProps[] = [
    {
        id: '1',
        count: '1st T20I',
        matchName: 'NZW TO SL 2023',
        // image1: require('../../assets/instagram-removebg-preview.png'),
        team1: 'NZ-W',
        time: '20:00:00',
        team2: 'SL-W',
        // image2: require('../../assets/529772-cricekt.jpg'),
        teamName1: 'New Zealand Women',
        teamName2: 'Sri Lanka',
        date: '20-jul',
        matchStatus: require('../../assets/msd-removebg-preview.png')
    },
    {
        id: '2',
        count: '2st T20I',
        matchName: 'NZW TO SL 2023',
        // image1: require('../../assets/529772-cricekt.jpg'),
        team1: 'NZ-W',
        time: '20:00:00',
        team2: 'SL-W',
        // image2: require('../../assets/529772-cricekt.jpg'),
        teamName1: 'New Zealand Women',
        teamName2: 'Sri Lanka',
        date: '20-jul',
        matchStatus: require('../../assets/msd-removebg-preview.png')
    },
    {
        id: '3',
        count: '3st T20I',
        matchName: 'NZW TO SL 2023',
        // image1: require('../../assets/529772-cricekt.jpg'),
        team1: 'NZ-W',
        time: '20:00:00',
        team2: 'SL-W',
        // image2: require('../../assets/529772-cricekt.jpg'),
        teamName1: 'New Zealand Women',
        teamName2: 'Sri Lanka',
        date: '20-jul',
        matchStatus: require('../../assets/msd-removebg-preview.png')
    },
    {
        id: '4',
        count: '4st T20I',
        matchName: 'NZW TO SL 2023',
        // image1: require('../../assets/529772-cricekt.jpg'),
        team1: 'NZ-W',
        time: '20:00:00',
        team2: 'SL-W',
        // image2: require('../../assets/529772-cricekt.jpg'),
        teamName1: 'New Zealand Women',
        teamName2: 'Sri Lanka',
        date: '20-jul',
        matchStatus: require('../../assets/msd-removebg-preview.png')
    },
    {
        id: '5',
        count: '5st T20I',
        matchName: 'NZW TO SL 2023',
        // image1: require('../../assets/529772-cricekt.jpg'),
        team1: 'NZ-W',
        time: '20:00:00',
        team2: 'SL-W',
        // image2: require('../../assets/529772-cricekt.jpg'),
        teamName1: 'New Zealand Women',
        teamName2: 'Sri Lanka',
        date: '20-jul',
        matchStatus: require('../../assets/msd-removebg-preview.png')
    },
    {
        id: '6',
        count: '6st T20I',
        matchName: 'NZW TO SL 2023',
        // image1: require('../../assets/529772-cricekt.jpg'),
        team1: 'NZ-W',
        time: '20:00:00',
        team2: 'SL-W',
        // image2: require('../../assets/529772-cricekt.jpg'),
        teamName1: 'New Zealand Women',
        teamName2: 'Sri Lanka',
        date: '20-jul',
        matchStatus: require('../../assets/msd-removebg-preview.png')
    },
];

const UpdateMatches = (props: navigationsPart) => {
    const { navigation } = props;
    const handlerBandVsAfgStats = () => {
        navigation.navigate('BanVsAfgStat');
    };

    const renderItem = ({ item }: { item: UpcomingStatProps }) => {
        return (
            <TouchableOpacity onPress={handlerBandVsAfgStats}>
                <View
                    style={{
                        flex: 1,
                        width: width,
                        backgroundColor: '#fff',
                        // elevation: 100,
                        maxWidth: 'auto',
                        marginVertical: 2,
                        padding: 5,
                        // borderWidth: 2,
                        elevation: 10,

                    }}>
                    <View style={styles.viewRow1}>
                        <Text style={styles.textStyle1}>{item.count} , </Text>
                        <Text style={[styles.textStyle1, { marginHorizontal:10 }]}>
                            {item.matchName}
                        </Text>
                    </View>
                    <Text style={[styles.textStyle1, {marginHorizontal:25}]}>{item.date}</Text>

                    <View style={styles.viewRow2}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Image
                                    source={require('../../assets/whatsapp-removebg-preview.png')}
                                    style={styles.imageStyle}
                                />
                                <Text style={styles.textStyle2}>{item.team1}</Text>
                            </View>
                            <View style={{ marginHorizontal: 15 }}>
                                <Text style={{ color: '#CC7722', fontSize: 18 }}>33-1</Text>
                                <Text style={{ color: 'red', fontSize: 18 }}>4</Text>
                            </View>
                        </View>
                        {/* <Text style={{ color: 'red', fontSize: 18 }}>{item.time}</Text> */}
                        <View>
                            <Image source={item.matchStatus} style={{ height: 30, width: 30, marginHorizontal: 10 }} />

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <MaterialCommunityIcons name='circle-medium' size={moderateScale(20, 0.4)} color={'red'} />
                                <Text style={{ color: 'red', fontSize: 18 }}>Live</Text>
                            </View>
                        </View>

                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{marginRight:20}}>
                                    <Text style={{ color: '#CC7722', fontSize: 18 }}>33-1</Text>
                                    <Text style={{ color: 'red', fontSize: 18 }}>4</Text>
                                </View>
                                <View>
                                    <Image
                                        source={require('../../assets/whatsapp-removebg-preview.png')}
                                        style={styles.imageStyle}
                                    />
                                    <Text style={styles.textStyle2}>{item.team1}</Text>
                                </View>

                            </View>
                        </View>

                    </View>
                    <View style={styles.viewRow3}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', borderRadius: 6, marginHorizontal: 5, fontSize: 16, backgroundColor: '#6D6D6D', padding: 5 }}>View Polls</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', borderRadius: 6, marginHorizontal: 5, fontSize: 16, backgroundColor: '#6D6D6D', padding: 5 }}>IND</Text>
                            <Text style={{ color: '#fff', fontWeight: 'bold', borderRadius: 6, marginHorizontal: 5, fontSize: 16, backgroundColor: '#ADD8E6', padding: 5 }}>IND</Text>
                            <Text style={{ color: '#fff', fontWeight: 'bold', borderRadius: 6, marginHorizontal: 5, fontSize: 16, backgroundColor: '#7B3F00', padding: 5 }}>IND</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <ScrollView style={{ backgroundColor: '#4fa8b9' }}>
            {/* <Pressable
                        onPress={() => {
                            navigation.goBack();
                        }}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <Image
                            source={require('../../assets/back.png')}
                            style={styles.backBtn}
                        />
                        <Text style={styles.notificationText}>Back</Text>
                    </Pressable> */}

            {/* <SafeAreaView > */}
            <TouchableOpacity>
                <FlatList
                    data={dataItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    renderItem={renderItem}
                />
            </TouchableOpacity>
            {/* </SafeAreaView> */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    viewRow1: {
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal:25
    },
    viewRow2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 5,
    },

    viewRow3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    textStyle1: {
        color: '#000',
        fontSize: 15,
    },
    textStyle2: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    textStyle3: {
        color: '#000',
        fontSize: 15,
    },
    imageStyle: {
        height: 30,
        width: 30,
        borderRadius: 40
    },
    notificationText: {
        color: '#fff',
        fontSize: moderateScale(16, 0.3),
        fontWeight: '500',
    },
    backBtn: {
        height: moderateScale(20),
        width: moderateScale(20),
        resizeMode: 'contain',
        tintColor: '#fff',
        margin: moderateScale(10),
    },
});
export default UpdateMatches;
