/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Login from '../auth/Login';
import Otp from '../auth/Otp';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Matches from '../screen/Matches';
import {Image} from 'react-native';
import Videos from '../screen/Videos';
import More from '../screen/More';
import News from '../screen/News';
import Settings from '../screen/Settings';
import Details from '../screen/Details';
import Series from '../screen/Series';
import Stadium from '../screen/Stadium';

// import ProfilePage from '@/screen/ProfilePage';
import ProfilePage from '../screen/More';
import RateUs from '../screen/RateUs';
import ConnectWithUs from '../screen/ConnetWithUs';
import CheckForUpdate from '../screen/CheckForUpdate';
import ReportProblem from '../screen/ReportProblem';
import InviteFriends from '../screen/InviteFriends';
import AboutUs from '../screen/AboutUs';
import TermsConditions from '../screen/TermsConditions';
import PrivacyPolicy from '../screen/PrivacyPolicy';
import EditProfile from '../screen/EditProfile';
import MushFiqurRahim from '../screen/MushfiqurRahim';
import BANvsAFG from '../screen/BANvsAFG';
import BanVsAfgStat from '../screen/BanVsAfgStat';
import PlayerRecentMatches from '../screen/PlayerRecentMatches';
import Squad from '../screen/Squad';
import FourOptionsInSeries from '../screen/FourOptionsInSeries';
import UpcomingMatches from '../screen/UpcomingMatches';
import PointsTable from '../screen/PointsTable';
import Teams from '../screen/Teams';
import RecentMatchess from '../screen/RecentMatchess';
import TeamsOptions from '../screen/TeamsOptions';
import TeamSquad from '../screen/TeamSquad';
import TeamBattle from '../screen/TeamBattle';
import TeamStatStadium from '../screen/TeamStatStadium';
import StadiumOptions from '../screen/StadiumOptions';
import PlayerOptions from '../screen/PlayerOption';
import PlayerStats from '../screen/PlayerStats';
import AboutPlayer from '../screen/AboutPlayer';
import AboutVenue from '../screen/AboutVenue';
import T20 from '../screen/T20';
import ODI from '../screen/ODI';
import TEST from '../screen/TEST';
import UpcomingStat from '../screen/UpcomingStat';
import T20Performance from '../screen/T20Performance';
import TESTPerformance from '../screen/TESTPerformance';
import ODIPerformance from '../screen/ODIPerformance';
import InfoLiveScorecard from '../screen/InfoLiveScorecard';
import RecentInfoLiveScorecard from '../screen/RecentInfoLiveScorecard';
import EditProfile2 from '../screen/EditProfile2';
import VideoPlay from '../screen/Video';
import SignUp from '../auth/SignUp';
import NewsDetails from '../screen/News/NewsDetails';
import CreatePassword from '../screen/ForgotPassword/CreatePassword';
import ForgetPassword from '../screen/ForgotPassword/ForgetPassword';
import PasswordOTP from '../screen/ForgotPassword/PasswordOTP';
import ReportLists from '../screen/Report/ReportLists';
import UserReportList from '../screen/Report/UserReportList';
import Browse_SeriesList from '../screen/Browse_SeriesList';
import Browse_Team from '../screen/Browse_Team';
import Browse_player from '../screen/Browse_player';
import Schedule from '../screen/Schedule';
import SeriesMatches from '../screen/SeriesMatches';
import SquadTeam from '../screen/SquadTeam';
import VenuesList from '../screen/VenuesList';
import StatsList from '../screen/StatsList';
import BrowseTeamlist from '../screen/BrowseTeamlist';
import BrowerteamStatslist from '../screen/BrowerteamStatslist';
import Photos from '../screen/Photos';
import PhotosList from '../screen/PhotosList';
import PhotosView from '../screen/PhotosView';
import Newscategorylist from '../screen/Newscategorylist';
import NewsTopicList from '../screen/NewsTopicList';
import PlyerDetails from '../screen/Report/PlyerDetails';
import IccRakings from '../screen/IccRakings';
import IccWorldTestCha from '../screen/IccWorldTestCha';
import UpdateReport from '../screen/Report/UpdateReport';

// import {moderateScale} from 'react-native-size-matters';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation({ isLoggedIn }) {
  return (
    <Stack.Navigator
    initialRouteName={isLoggedIn ? "MyTab" : "AuthStack"}
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        headerStyle: {backgroundColor: '4fa8b9'},
      }}>

        
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="MyTab" component={MyTabs} />
      <Stack.Screen name="MySecondTab" component={MySecondTabs} />

     

      <Stack.Screen
        name="UpcomingStat"
        component={UpcomingStat}
        options={{
          headerTitle: 'Upcoming',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />

      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: '#4fa8b9'},
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          headerShown: true,
          headerTintColor: '#fff',
          headerTitle: 'Profile',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />

      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: '#4fa8b9'},
          headerTintColor: '#fff',
          headerTitle: 'Account',
          headerTitleAlign: 'center',
        }}
      />


<Stack.Screen
  name="Newscategorylist"
  component={Newscategorylist}
  options={({ route }) => ({
    headerShown: true,
    headerStyle: { backgroundColor: '#4fa8b9' },
    headerTintColor: '#fff',
    headerTitle: `News - ${route.params.itemname}`, // Set dynamic header title
    headerTitleAlign: 'center',
  })}
/>



<Stack.Screen
  name="NewsTopicList"
  component={NewsTopicList}
  options={({ route }) => ({
    headerShown: true,
    headerStyle: { backgroundColor: '#4fa8b9' },
    headerTintColor: '#fff',
    headerTitle: `News - ${route.params.itemname}`, // Set dynamic header title
    headerTitleAlign: 'center',
  })}
/>

      <Stack.Screen
        name="RateUs"
        component={RateUs}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: '#4fa8b9'},
          headerTintColor: '#fff',
          headerTitle: 'Rate Us',
        }}
      />


<Stack.Screen
        name="IccRakings"
        component={IccRakings}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: '#4fa8b9'},
          headerTintColor: '#fff',
          headerTitle: "ICC Men's Rankings",
        }}
      />



    <Stack.Screen
        name="IccWorldTestCha"
        component={IccWorldTestCha}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: '#4fa8b9'},
          headerTintColor: '#fff',
          headerTitle: 'ICC World Test Championship',
        }}
      />



        <Stack.Screen
        name="UpdateReport"
        component={UpdateReport}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: '#4fa8b9'},
          headerTintColor: '#fff',
          headerTitle: 'Update Report',
        }}
      />


<Stack.Screen
  name="PlyerDetails"
  component={PlyerDetails}
  options={({ route }) => ({
    headerShown: true,
    headerStyle: { backgroundColor: '#4fa8b9' },
    headerTintColor: '#fff',
    headerTitle: ` ${route.params.itemname}`, // Set dynamic header title
    headerTitleAlign: 'center',
  })}
/>




      <Stack.Screen
        name="ConnectWithUs"
        component={ConnectWithUs}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: '#4fa8b9'},
          headerTintColor: '#fff',
          headerTitle: 'Connect With Us',
        }}
      />

      <Stack.Screen
        name="CheckForUpdate"
        component={CheckForUpdate}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: '#4fa8b9'},
          headerTintColor: '#fff',
          headerTitle: 'Check For Updates',
        }}
      />

      <Stack.Screen
        name="ReportProblem"
        component={ReportProblem}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: '#4fa8b9'},
          headerTintColor: '#fff',
          headerTitle: 'Report a Problem',
        }}
      />

      <Stack.Screen
        name="InviteFriends"
        component={InviteFriends}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: '#4fa8b9'},
          headerTintColor: '#fff',
          headerTitle: 'Invite Friends',
        }}
      />

      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: '#4fa8b9'},
          headerTintColor: '#fff',
          headerTitle: 'About Us',
        }}
      />

      <Stack.Screen
        name="TermsConditions"
        component={TermsConditions}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: '#4fa8b9'},
          headerTintColor: '#fff',
          headerTitle: 'Terms & Conditions',
        }}
      />

      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: '#4fa8b9'},
          headerTintColor: '#fff',
          headerTitle: 'Privacy Policy',
        }}
      />
      <Stack.Screen
        name="ReportLists"
        component={ReportLists}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: '#4fa8b9'},
          headerTintColor: '#fff',
          headerTitle: 'Report Lists',
        }}
      />
      <Stack.Screen
        name="UserReportList"
        component={UserReportList}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: '#4fa8b9'},
          headerTintColor: '#fff',
          headerTitle: 'User Reports',
        }}
      />

      <Stack.Screen
        name="MushFiqurRahim"
        component={MushFiqurRahim}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: '#4fa8b9'},
          headerTintColor: '#fff',
          headerTitle: 'Mushtafijur Rahim',
        }}
      />

      <Stack.Screen
        name="BANvsAFG"
        component={BANvsAFG}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: '#4fa8b9'},
          headerTintColor: '#fff',
          headerTitle: 'BAN vs AFG',
        }}
      />

      <Stack.Screen
        name="BanVsAfgStat"
        component={BanVsAfgStat}
        options={{
          headerTitle: 'BAN Vs AFG',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />

      <Stack.Screen
        name="PlayerRecentMatches"
        component={PlayerRecentMatches}
        options={{
          headerTitle: 'Player Recent Matches',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />

      <Stack.Screen
        name="Squad"
        component={Squad}
        options={{
          headerTitle: 'Squad',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />

      <Stack.Screen
        name="FourOptionsInSeries"
        component={FourOptionsInSeries}
        options={{
          headerTitle: 'FourOptionsInSeries',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />

      <Stack.Screen
        name="UpcomingMatches"
        component={UpcomingMatches}
        options={{
          headerTitle: 'Upcoming Matches',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />

      <Stack.Screen
        name="PointsTable"
        component={PointsTable}
        options={{
          headerTitle: 'Points Table',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />

      <Stack.Screen
        name="Teams"
        component={Teams}
        options={{
          headerTitle: 'Teams',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />

      <Stack.Screen
        name="RecentMatchess"
        component={RecentMatchess}
        options={{
          headerTitle: 'Recent Matches',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />

      <Stack.Screen
        name="TeamsOptions"
        component={TeamsOptions}
        options={{
          headerTitle: 'Teams Options',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />

      <Stack.Screen
        name="TeamSquad"
        component={TeamSquad}
        options={{
          headerTitle: 'Team Squad',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />

      <Stack.Screen
        name="TeamBattle"
        component={TeamBattle}
        options={{
          headerTitle: 'Team Battle',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />

      <Stack.Screen
        name="TeamStatStadium"
        component={TeamStatStadium}
        options={{
          headerTitle: 'TeamStatStadium',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />

      <Stack.Screen
        name="StadiumOptions"
        component={StadiumOptions}
        options={{
          headerTitle: 'Stadium Options',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />

      <Stack.Screen
        name="PlayerOptions"
        component={PlayerOptions}
        options={{
          headerTitle: 'PlayerOptions',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />
      <Stack.Screen
        name="PlayerStats"
        component={PlayerStats}
        options={{
          headerTitle: 'PlayerStats',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />
      <Stack.Screen
        name="AboutPlayer"
        component={AboutPlayer}
        options={{
          headerTitle: 'About Player',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />

      <Stack.Screen
        name="AboutVenue"
        component={AboutVenue}
        options={{
          headerTitle: 'About Venue',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />
      <Stack.Screen
        name="T20"
        component={T20}
        options={{
          headerTitle: 'T20',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />
      <Stack.Screen
        name="ODI"
        component={ODI}
        options={{
          headerTitle: 'ODI',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />
      <Stack.Screen
        name="TEST"
        component={TEST}
        options={{
          headerTitle: 'TEST',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />
      <Stack.Screen
        name="TESTPerformance"
        component={TESTPerformance}
        options={{
          headerTitle: 'TESTPerformance',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />
      <Stack.Screen
        name="T20Performance"
        component={T20Performance}
        options={{
          headerTitle: 'T20Performance',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />
      <Stack.Screen
        name="ODIPerformance"
        component={ODIPerformance}
        options={{
          headerTitle: 'ODIPerformance',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />
     
      <Stack.Screen
        name="RecentInfoLiveScorecard"
        component={RecentInfoLiveScorecard}
        options={{
          headerTitle: '',
          headerShown: true,
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />

      <Stack.Screen
        name="EditProfile2"
        component={EditProfile2}
        options={{
          headerTitle: 'Edit Profile',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#4fa8b9'},
        }}
      />
      <Stack.Screen
        name="Video"
        component={VideoPlay}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{
          headerShown: false,
        }}
      />

<Stack.Screen
        name="Browse_SeriesList"
        component={Browse_SeriesList}
        options={{
          headerTintColor: '#fff',
          headerShown: true,
         
          headerTitle: 'Browse Series',
          headerStyle: {
            backgroundColor: '#4fa8b9',
            elevation: 100,
            
          },
          headerTitleStyle: {
            fontSize: 20,  
          },
         
        }}
      />




<Stack.Screen
        name="Browse Teams"
        component={Browse_Team}
        options={{
          headerTintColor: '#fff',
          headerShown: true,
         
         
          headerStyle: {
            backgroundColor: '#4fa8b9',
            elevation: 100,
            
          },
          headerTitleStyle: {
            fontSize: 20,  
          },
         
        }}
      />




<Stack.Screen
        name="Browse player"
        component={Browse_player}
        options={{
          headerTintColor: '#fff',
          headerShown: true,
         headerStyle: {
            backgroundColor: '#4fa8b9',
            elevation: 100,
            
          },
          headerTitleStyle: {
            fontSize: 20,  
          },
         
        }}
      />


<Stack.Screen
  name="Photos"
  component={Photos}
  options={{
    headerTintColor: '#fff',
    headerShown: true,
    headerStyle: {
      backgroundColor: '#4fa8b9',
      elevation: 100,
    },
    headerTitleStyle: {
      fontSize: 20,
    },
    headerTitle: 'Photos Galleries', // Set the header title here
  }}
/>






<Stack.Screen
  name="PhotosList"
  component={PhotosList}
  options={({ route }) => ({
    headerTintColor: '#fff',
    headerShown: true,
    headerStyle: {
      backgroundColor: '#4fa8b9',
      elevation: 100,
    },
    headerTitle: route.params?.PhtosName ?? 'Series Matches', // Ensure seriesName is passed correctly
    headerTitleStyle: {
      fontSize: 20,
    },
  })}
/>



<Stack.Screen
  name="PhotosView"
  component={PhotosView}
  options={{
    headerTintColor: '#fff',
    headerShown: false,
    headerStyle: {
      backgroundColor: '#4fa8b9',
      elevation: 100,
    },
    headerTitleStyle: {
      fontSize: 20,
    },
    // Set the header title here
  }}
/>



<Stack.Screen
  name="SeriesMatches"
  component={SeriesMatches}
  options={({ route }) => ({
    headerTintColor: '#fff',
    headerShown: true,
    headerStyle: {
      backgroundColor: '#4fa8b9',
      elevation: 100,
    },
    headerTitle: route.params?.seriesName ?? 'Series Matches', // Ensure seriesName is passed correctly
    headerTitleStyle: {
      fontSize: 20,
    },
  })}
/>


<Stack.Screen
  name="BrowseTeamlist"
  component={BrowseTeamlist}
  options={({ route }) => ({
    headerTintColor: '#fff',
    headerShown: true,
    headerStyle: {
      backgroundColor: '#4fa8b9',
      elevation: 100,
    },
    headerTitle: route.params?.TeamName ?? 'BrowseTeamlist', // Ensure seriesName is passed correctly
    headerTitleStyle: {
      fontSize: 20,
    },
  })}
/>


<Stack.Screen
  name="InfoLiveScorecard"
  component={InfoLiveScorecard}
  options={({ route }) => ({
    headerTintColor: '#fff',
    headerShown: true,
    headerStyle: {
      backgroundColor: '#4fa8b9',
      elevation: 100,
    },
    headerTitle: `${route.params?.teamName1} vs ${route.params?.teamName2 ?? 'Series Matches'}`, // Display "Team1 vs Team2"
    headerTitleStyle: {
      fontSize: 20,
    },
  })}
/>





<Stack.Screen
  name="SquadTeam"
  component={SquadTeam}
  options={({ route }) => ({
    headerTintColor: '#fff',
    headerShown: true,
    headerStyle: {
      backgroundColor: '#4fa8b9',
      elevation: 100,
    },
    headerTitle: route.params?.teamName ?? 'SquadTeam', // Ensure seriesName is passed correctly
    headerTitleStyle: {
      fontSize: 20,
    },
  })}
/>


<Stack.Screen
  name="VenuesList"
  component={VenuesList}
  options={({ route }) => ({
    headerTintColor: '#fff',
    headerShown: true,
    headerStyle: {
      backgroundColor: '#4fa8b9',
      elevation: 100,
    },
    headerTitle: route.params?.GroundName ?? 'VenuesList', // Ensure seriesName is passed correctly
    headerTitleStyle: {
      fontSize: 20,
    },
  })}
/>



<Stack.Screen
  name="StatsList"
  component={StatsList}
  options={({ route }) => ({
    headerTintColor: '#fff',
    headerShown: true,
    headerStyle: {
      backgroundColor: '#4fa8b9',
      elevation: 100,
    },
    headerTitle: route.params?.statsList ?? 'StatsList', // Ensure seriesName is passed correctly
    headerTitleStyle: {
      fontSize: 20,
    },
  })}
/>



<Stack.Screen
  name="BrowerteamStatslist"
  component={BrowerteamStatslist}
  options={({ route }) => ({
    headerTintColor: '#fff',
    headerShown: true,
    headerStyle: {
      backgroundColor: '#4fa8b9',
      elevation: 100,
    },
    headerTitle: route.params?.statsList ?? 'BrowerteamStatslist', // Ensure seriesName is passed correctly
    headerTitleStyle: {
      fontSize: 20,
    },
  })}
/>




<Stack.Screen
        name="Schedule"
        component={Schedule}
        options={{
          headerTintColor: '#fff',
          headerShown: true,
         headerStyle: {
            backgroundColor: '#4fa8b9',
            elevation: 100,
            
          },
          headerTitleStyle: {
            fontSize: 20,  
          },
         
        }}
      />

<Stack.Screen name="Login" component={Login} />
<Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen
        name="OTP"
        component={Otp}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Verify OTP',
          headerStyle: {
            backgroundColor: '#005d6f',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#005d6f',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="CreatePassword"
        component={CreatePassword}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#005d6f',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="PasswordOTP"
        component={PasswordOTP}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#005d6f',
          },
          headerTintColor: '#fff',
        }}
      />


    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>




      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen
        name="OTP"
        component={Otp}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Verify OTP',
          headerStyle: {
            backgroundColor: '#005d6f',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#005d6f',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="CreatePassword"
        component={CreatePassword}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#005d6f',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="PasswordOTP"
        component={PasswordOTP}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#005d6f',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#343a40',
        tabBarItemStyle: {
          marginBottom: 5,
        },
        tabBarStyle: {backgroundColor: '#4fa8b9'},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            // <MaterialCommunityIcons
            //   name="home-outline"
            //   color={color}
            //   size={size}
            // />
            <Image
              source={require('../../assets/icons8-home-50.png')}
              style={{
                width: size,
                height: size,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Matches"
        component={Matches}
        options={{
          headerTintColor: '#fff',
          headerShown: true,
          tabBarLabel: 'Matches',
          headerTitle: 'Matches',
          headerStyle: {
            backgroundColor: '#4fa8b9',
            elevation: 100,
          },
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/icons8-cricket-50.png')}
              style={{
                width: size,
                height: size,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Videos"
        component={Videos}
        options={{
          headerShown: false,
          tabBarLabel: 'Videos',
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#00b4d8',
          },
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/icons8-video-50.png')}
              style={{
                width: size,
                height: size,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          headerShown: true,
          tabBarLabel: 'News',
          headerTitle: 'News',
          headerTintColor: '#fff',
          headerStyle: {
            // backgroundColor: '#00b4d8',
            backgroundColor: '#4fa8b9',
          },
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/icons8-news-50.png')}
              style={{
                width: size,
                height: size,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          headerShown: true,
          tabBarLabel: 'Profile',
          headerTitle: 'More',
          headerStyle: {
            // backgroundColor: '#00b4d8',
            backgroundColor: '#4fa8b9',
          },
          headerTitleStyle:{
color:'#fff'
          },
          tabBarIcon: ({color, size}) => (
            <Image
              // source={require('../../assets/icons8-more-50.png')}
              source={require('../../assets/profile.png')}
              style={{
                width: size,
                height: size,
                tintColor: color,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const MySecondTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Details"
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#343a40',
        tabBarItemStyle: {
          marginBottom: 5,
        },
        tabBarStyle: {backgroundColor: '#00b4d8'},
      }}>
      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({color, size}) => (
            // <MaterialCommunityIcons
            //   name="home-outline"
            //   color={color}
            //   size={size}
            // />
            <Image
              source={require('../../assets/icons8-statistics-50.png')}
              style={{
                width: size,
                height: size,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Series"
        component={Series}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          headerStyle: {
            backgroundColor: '#00b4d8',
          },
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/icons8-calendar-50.png')}
              style={{
                width: size,
                height: size,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Stadium"
        component={Stadium}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#00b4d8',
          },
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/icons8-location-50.png')}
              style={{
                width: size,
                height: size,
                tintColor: color,
              }}
            />
          ),
        }}
      />
    
    </Tab.Navigator>
  );
};

export default Navigation;
