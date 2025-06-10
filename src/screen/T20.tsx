/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {PieChart} from 'react-native-svg-charts';

interface DonutChartProps {
  widthAndHeight: number;
  series: number[];
  sliceColor: string[];
}

// interface t20performanceProps {
//   navigation: any;
// }

const DonutChart: React.FC<DonutChartProps> = ({
  widthAndHeight,
  series,
  sliceColor,
}) => {
  const donutData = series.map((value: number, index: number) => ({
    value,
    svg: {fill: sliceColor[index]},
    key: `donut-${index}`,
  }));

  const centerX = widthAndHeight / 3;
  const centerY = widthAndHeight / 3;

  return (
    <View>
      <PieChart
        style={{height: widthAndHeight / 2, width: widthAndHeight / 2}}
        data={donutData}
        innerRadius={'70%'}
        outerRadius={'90%'}>
        <Text
          style={[
            styles.textInside,
            {
              position: 'absolute',
              top: centerY - 50, // Adjust the position of the text as needed
              left: centerX - 27, // Adjust the position of the text as needed
            },
          ]}>
          6
        </Text>
        <Text
          style={[
            styles.textInside2,
            {
              position: 'absolute',
              top: centerY - 20, // Adjust the position of the text as needed
              left: centerX - 52, // Adjust the position of the text as needed
            },
          ]}>
          Matches
        </Text>
      </PieChart>
    </View>
  );
};

const T20 = () => {
  const widthAndHeight = 250;
  const series = [500, 500];
  const sliceColor = ['#14fb03', '#ff3c00'];

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.viewOne}>
          <Text style={styles.textOne}>Based On</Text>

          {/* <TouchableOpacity  style={{flexDirection: 'row', justifyContent: 'space-between'}} onPress={handlerT20Performance}>
            <Text
              style={[styles.textOne, {color: 'blue', marginHorizontal: 5}]}>
              All Time
            </Text>
            <MaterialCommunityIcons
              name="menu-right"
              size={moderateScale(28, 2)}
              color={'blue'}
            />
          </TouchableOpacity> */}
        </View>

        <View style={styles.viewTwo}>
          <DonutChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
          />
          <View style={{width: '45%'}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.textTwo}>win bat First</Text>
              <Text style={[styles.textTwo, {color: '#14fb03'}]}>50%</Text>
            </View>
            <View style={styles.horizontalLine} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.textTwo}>win Bowl First</Text>
              <Text style={[styles.textTwo, {color: '#ff3c00'}]}>50%</Text>
            </View>
          </View>
        </View>

        <View style={styles.viewThree}>
          <View>
            <Text style={styles.textThree}>Avg 1st Innings</Text>
            <Text style={[styles.textThree, {fontWeight: 'bold'}]}>181</Text>
          </View>
          <View>
            <Text style={styles.textThree}>Avg 2dn Innings</Text>
            <Text style={[styles.textThree, {fontWeight: 'bold'}]}>148</Text>
          </View>
        </View>

        <View style={styles.viewThree}>
          <View>
            <Text style={styles.textThree}>Highest Total</Text>
            <Text style={[styles.textThree, {fontWeight: 'bold'}]}>
              234-4 (20 Ovr) by IND
            </Text>
          </View>
          <View>
            <Text style={styles.textThree} />
            <Text style={[styles.textThree, {fontWeight: 'bold'}]}>
              IND vs NZ
            </Text>
          </View>
        </View>

        <View style={styles.viewThree}>
          <View>
            <Text style={styles.textThree}>Lowest Total</Text>
            <Text style={[styles.textThree, {fontWeight: 'bold'}]}>
              234-4 (20 Ovr) by IND
            </Text>
          </View>
          <View>
            <Text style={styles.textThree} />
            <Text style={[styles.textThree, {fontWeight: 'bold'}]}>
              IND vs NZ
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: moderateScale(18, 0.3),
              alignSelf: 'flex-start',
              color: '#000',
              fontWeight: 'bold',
            }}>
            Avg Pitch Behavior{' '}
          </Text>
          <Text
            style={{
              fontSize: moderateScale(16, 0.3),
              alignSelf: 'flex-start',
              color: '#000',
              fontWeight: '400',
            }}>
            (Last 6 Matches)
          </Text>
        </View>
        <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
          <Image
            source={require('../../assets/Pitch-image.png')}
            style={{width: '100%', height: 150, borderRadius: 12}}
            resizeMode="contain"
          />
        </View>
        <View style={{paddingHorizontal: 20, flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: moderateScale(18, 0.3),
              alignSelf: 'flex-start',
              color: '#000',
              fontWeight: 'bold',
            }}>
            Pace vs Spin
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 10,
            paddingVertical: 10,
            backgroundColor: '#fff',
            borderRadius: 12,
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 30,
              paddingTop: 10,
              paddingBottom: 5,
            }}>
            <Text style={{fontSize: moderateScale(16, 0.3), color: '#000'}}>
              Pace
            </Text>
            <View style={{width: '70%', flexDirection: 'row'}}>
              <View
                style={{
                  backgroundColor: '#14fb03',
                  width: '72%',
                  height: 10,
                  borderTopLeftRadius: 12,
                  borderBottomLeftRadius: 12,
                }}
              />
              <View
                style={{
                  backgroundColor: '#ff3c00',
                  width: '28%',
                  height: 10,
                  borderTopRightRadius: 12,
                  borderBottomRightRadius: 12,
                }}
              />
            </View>
            <Text style={{fontSize: moderateScale(16, 0.3), color: '#000'}}>
              Spin
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: moderateScale(16, 0.3),
                  color: '#14fb03',
                  marginRight: 10,
                }}>
                88 Wkts
              </Text>
              <Text style={{fontSize: moderateScale(14, 0.3), color: '#000'}}>
                72%
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: moderateScale(14, 0.3), color: '#000'}}>
                28%
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(16, 0.3),
                  color: '#ff3c00',
                  marginLeft: 10,
                }}>
                35 Wkts
              </Text>
            </View>
          </View>
          <Image
            source={require('../../assets/Pitch-image.png')}
            style={{width: '100%', height: 150, borderRadius: 12}}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  viewOne: {
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    backgroundColor: '#fff',
    padding: 6,
  },
  textOne: {
    color: '#000',
    fontSize: 17,
    marginVertical: 5,
  },
  viewTwo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 6,
    marginVertical: 5,
    margin: 8,
    borderRadius: 12,
  },
  textTwo: {
    color: '#000',
    fontSize: 17,
    marginVertical: 5,
  },
  viewThree: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    padding: 6,
    marginVertical: 5,
    margin: 8,
    borderRadius: 12,
  },
  textThree: {
    color: '#000',
    fontSize: 15,
    marginVertical: 5,
  },
  textInside: {
    fontSize: moderateScale(24, 0.3),
    fontWeight: 'bold',
    color: '#000',
  },
  textInside2: {
    fontSize: moderateScale(16, 0.3),
    color: '#000',
  },
  horizontalLine: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 5,
  },
});
export default T20;
