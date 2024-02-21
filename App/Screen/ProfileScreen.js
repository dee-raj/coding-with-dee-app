import { MaterialIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import myImage from './../../assets/adaptive-icon.png'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useClerk, useUser } from '@clerk/clerk-expo';
import Colors from '../Utils/Colors';
import { useContext, useEffect, useState } from 'react';
import { UserPointsContext } from '../Context/UserPointsContext';
import { useNavigation } from '@react-navigation/native';
import { GetAllProgressCourse } from '../Services';

export default function ProfileScreen() {
  const { userPoints, setUserPoints } = useContext(UserPointsContext);
  const { isLoaded, user } = useUser();
  const { signOut } = useClerk();
  const navigation = useNavigation();

  const [progressCourseList, setProgressCourseList] = useState();
  useEffect(() => {
    user && GetAllProgressCourseList();
  }, [user, setProgressCourseList])
  const GetAllProgressCourseList = () => {
    GetAllProgressCourse(user.primaryEmailAddress.emailAddress).then((res) => {
      // console.log(res, "\nGetAllEnrollProgressCourse:", res?.userEnrolledCourses);
      // console.log("\n\nProgressCourse:", progressCourseList[0].course);
      setProgressCourseList(res?.userEnrolledCourses);
    })
  };

  // console.log(`Progress course:${progressCourseList} \n ${progressCourseList?.course}`);

  const Ranking = () => {
    return (
      <View >
        <TouchableOpacity onPress={() => navigation.navigate('leaderboard')}
          style={styles.touchBtn}>
          <Entypo name="bar-graph" size={24} color="black" />
          <Text style={styles.textStyle}>My Ranking</Text>
        </TouchableOpacity>
      </View>
    )
  };
  const MyCourse = () => {
    return (
      <View >
        <TouchableOpacity onPress={() => navigation.navigate('my-course')}
          style={styles.touchBtn}>
          <MaterialIcons name="library-books" size={24} color="black" />
          <Text style={styles.textStyle}>My Coueses</Text>
        </TouchableOpacity>
      </View>
    )
  };

  const SignOutButtonView = () => {
    return (
      <View>
        <TouchableOpacity onPress={handleSignOut} style={styles.touchBtn}>
          <Text style={{ ...styles.textStyle, color: Colors.red_ }}>Sign Out</Text>
          <Entypo name="log-out" size={24} color="black" />
        </TouchableOpacity>
      </View>
    )
  };

  const AboutUs = () => {
    return (
      <View>
        <TouchableOpacity style={styles.boxBtn}
        onPress={()=> navigation.navigate('about-dee')}
        >
          <Entypo name="code" size={27} color={Colors.black} />
          <Text style={styles.boxTextStyle}>
            About Dee
          </Text>
        </TouchableOpacity>
      </View>
    )
  };

  const YourActivity = () => {
    return (
      <View>
        <TouchableOpacity style={styles.boxBtn}
          onPress={() => navigation.navigate('course-detail', {
            course: progressCourseList[0]?.course
          })}
        >
          <MaterialIcons name='timeline' size={30} color={Colors.black} />
          <Text style={styles.boxTextStyle}>
            Your Activity
          </Text>
        </TouchableOpacity>
      </View>
    )
  };

  const MakeMeMember = () => {
    return (
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.golden,
            padding: 8,
            borderRadius: 15,
            width: "100%",
            height: 55,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={() => navigation.navigate('home')}
        >
          <Text style={{
            fontFamily: "monospace",
            fontWeight: '800',
            fontSize: 25,
            fontSize: 17,
            color: Colors.white
          }}> Membership only at ₹199/month</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return isLoaded && (
    <View>
      <Text style={styles.barText}>MY PROFILE</Text>
      <View style={styles.userBar}>
        <View style={styles.rowStyles}>
          <Image
            source={{ uri: user?.imageUrl }}
            style={styles.profImg}
          />
          <Text style={styles.textStyle}>{user?.fullName}</Text>
        </View>
        <Text style={{
          paddingLeft: 132,
          marginBottom: -10,
          color: Colors.white,
          ...styles.textStyle
        }}>Points:{userPoints}</Text>
      </View>
      <View style={{
        flexDirection: 'column',
        paddingVertical:20
      }}>
        <View style={styles.menuStyle}>
          <Ranking />
          <MyCourse />
          <Image
            style={styles.imageStyle}
            source={myImage}
          />
          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: "90%",
            left:-10,
            gap:7,
            paddingVertical:30
          }}>
            <YourActivity />
            <AboutUs />
          </View>
          {/* <MakeMeMember /> */}
          <SignOutButtonView />
        </View>
      </View>
      <View style={[styles.menuStyle, styles.deeboxStyle]}>
        <Text style={{
          fontFamily: 'monospace',
          fontSize: 16,
          fontWeight: 'bold',
          color: Colors.primary
        }}>
          from
        </Text>
        <Text style={{
          fontFamily: 'serif',
          fontSize: 14,
          color: Colors.dark_primary
        }}>
          De-Coding With Dee: Conquer The Code
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profImg: {
    width: 70,
    height: 70,
    borderRadius: 50,
    objectFit: 'contain'
  },
  rowStyles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 50,
  },
  textStyle: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '800',
    color: Colors.dark_primary
  },
  touchBtn: {
    backgroundColor: Colors.light_white,
    padding: 10,
    margin: 10,
    borderRadius: 9,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-evenly',
    width: '70%'
  },
  imageStyle: {
    width: 100,
    height: 120,
    objectFit: 'contain',
    marginLeft: -10
  },
  barText: {
    paddingLeft: 100,
    fontFamily: "monospace",
    fontWeight: '600',
    fontSize: 25,
    height: 32,
  },
  userBar: {
    padding: 10,
    backgroundColor: Colors.navBar_bg,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center'
  },
  menuStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.light_primary,
    borderRadius: 24,
    width: '89%'
  },
  deeboxStyle:{
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginTop: -15,
    paddingVertical: 10
  },
  boxBtn:{
    backgroundColor: Colors.light_green,
    flexDirection:'row',
    padding:10,
    margin:1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
  },
  boxTextStyle:{
    fontFamily:'Roboto',
    fontWeight:'bold',
    fontSize:19,
    left:4
  }
});
