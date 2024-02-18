import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import React, { useContext } from 'react';
import { useUser } from '@clerk/clerk-expo';
import Colors from '../../Utils/Colors';
import ruCoin from '../../../assets/images/rucoin.png';
import { UserPointsContext } from '../../Context/UserPointsContext';
import SearchBar from './SearchBar';

export default function Header() {
  const { userPoints, setUserPoints } = useContext(UserPointsContext);
  // console.log("User Points: ", userPoints);
  const { isLoaded, isSignedIn, user } = useUser();
  return isLoaded && (
    <View>
      <View style={[{ justifyContent: 'space-between' }, styles.rowStyle]}>
        <View style={styles.rowStyle}>
          <Image source={{ uri: user?.imageUrl }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 99,
            }}
          />
          <View>
            <Text style={{ color: Colors.white, fontFamily: 'serif' }}> Welcome </Text>
            <Text style={styles.mainText}> {user?.fullName} </Text>
          </View>
        </View>
        <View style={[{ padding: 0 }, styles.rowStyle]}>
          <Image source={ruCoin} style={{ width: 35, height: 35, }} />
          <Text style={styles.mainText}>{userPoints}</Text>
        </View>
      </View>
      </View>
  )
}

const styles = StyleSheet.create({
  mainText: {
    color: Colors.white,
    fontSize: 20,
    fontFamily: 'sans-serif'
  },
  rowStyle: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  }
})