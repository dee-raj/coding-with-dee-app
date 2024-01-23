import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { GetAllUser } from '../Services';
import Colors from '../Utils/Colors';
import first from '../../assets/images/first.png';
import second from '../../assets/images/second.png';
import third from '../../assets/images/third.png';

export default function LeaderBoard() {
  const [userList, setUserList] = useState([]);
  console.log('User List: ', userList);
  useEffect(() => {
    getAllUserDetails();
  }, [])

  const getAllUserDetails = () => {
    GetAllUser().then(res => {
      console.log('\n\n\nleaderBoard:', res);
      setUserList(res?.userDetails);
    })
  }
  return (
    <View>
      <View style={{
        height: 160,
        backgroundColor: Colors.primary,
        padding: 10
      }}>
        <Text style={{
          fontFamily: 'sans-serif',
          color: Colors.dark_primary,
          fontWeight: 800,
          fontSize: 27,
        }}>Check Your LeaderBoard</Text>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingRight: 10
        }}>
          <Text style={styles.labelStyle}>Rank</Text>
          <Text style={styles.labelStyle}>Name</Text>
          <Text style={styles.labelStyle}>Points</Text>
          <Text style={styles.labelStyle}>Remark</Text>
        </View>
      </View>
      <View style={{
        marginTop: -50,
        height: "84%",
      }}>
        <FlatList
          data={userList}
          key={userList.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: Colors.bgColor,
              padding: 20,
              margin: 8,
              marginLeft: 15,
              marginRight: 15,
              borderRadius: 15,
            }}>
              <View style={styles.rankStyle}>
                <Text style={{
                  fontFamily: 'serif',
                  fontSize: 26,
                  color: Colors.gray,
                }}>{index + 1}</Text>
                <Image source={{ uri: item?.profileImage }} style={styles.userImg} />
                <View>
                  <Text style={{
                    fontFamily: 'Roboto',
                    fontSize: 21,
                    color: Colors.gray,
                  }}>{item?.userName}</Text>
                  <Text style={{
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    color: Colors.gray,
                  }}>{item?.point} Points</Text>
                </View>
              </View>
              {index < 3 ?
                <Image source={
                  index + 1 == 1 ? first
                    : index + 1 == 2 ? second
                      : third
                } style={{ width: 60, height: 60, backgroundColor: Colors.light_white, borderRadius: 22, }} />
                : null}
            </View>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rankStyle: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  userImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.light_primary,
    marginLeft: 20,
    marginRight: 20,
  },
  labelStyle: {
    fontFamily: 'serif',
    marginTop: 20,
    fontSize: 23,
    padding: 2,
    backgroundColor: Colors.light_white,
    color: Colors.golden,
    borderRadius: 10,
  }
})
