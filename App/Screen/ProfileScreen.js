import { MaterialIcons, Entypo } from '@expo/vector-icons';
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

export default function ProfileScreen() {
  const { userPoints, setUserPoints } = useContext(UserPointsContext);
  const { isLoaded, user } = useUser();
  const { signOut } = useClerk();
  const navigation = useNavigation();

  const Ranking = () => {
    return (
      <View >
        <TouchableOpacity onPress={() => navigation.navigate('leaderboard')}
          style={styles.touchBtn}>
          <Entypo name="bar-graph" size={24} color="black" />
          <Text style={styles.textStyle}>my Ranking?</Text>
        </TouchableOpacity>
      </View>
    )
  }
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
  }

  const SignOutButtonView = () => {
    return (
      <View>
        <TouchableOpacity onPress={handleSignOut} style={styles.touchBtn}>
          <Text style={styles.textStyle}>Sign Out</Text>
          <Entypo name="log-out" size={24} color="black" />
        </TouchableOpacity>
      </View>
    )
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return isLoaded && (
    <View>
      <Text style={{
        paddingLeft: 100,
        fontFamily: "monospace",
        fontWeight: '600',
        fontSize: 25,
        height: 32
      }}>MY PROFILE</Text>
      <View style={{ padding: 10, backgroundColor: Colors.navBar_bg, margin: 10 }}>
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
      <ScrollView style={{ paddingLeft: 50 }}>
        <Ranking />
        <MyCourse />
        <Image
          style={styles.imageStyle}
          source={myImage}
        />
        <SignOutButtonView />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  profImg: {
    width: 70,
    height: 70,
    borderRadius: 40
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
    color: Colors.red_
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
  rankingStyle: {
    backgroundColor: Colors.bgColor,
    height: 56,
    color: Colors.black,
    alignItems: 'center',
    padding: 10,
    margin: 10
  },
  courseStyle: {
    backgroundColor: Colors.light_white,
    height: 78,
    alignItems: 'center',
    margin: 10
  },
  imageStyle: {
    width: 320,
    height: 320,
    objectFit: 'contain'
  }
});