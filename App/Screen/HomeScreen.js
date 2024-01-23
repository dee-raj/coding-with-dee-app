import { View, ScrollView } from 'react-native'
import React, { useContext, useEffect } from 'react'
import Header from '../Components/HomeScreen/Header'
import Colors from '../Utils/Colors';
import CourseList from '../Components/HomeScreen/CourseList';
import { useAuth, useUser } from '@clerk/clerk-expo';
import { createNewUser, getUserDetail } from '../Services';
import { UserPointsContext } from '../Context/UserPointsContext';
import CourseProgress from '../Components/HomeScreen/CourseProgress';

export default function HomeScreen() {
  const { isLoaded, signOut } = useAuth();
  const { user } = useUser();
  const { userPoints, setUserPoints } = useContext(UserPointsContext);
  useEffect(() => {
    user && createUser();
  }, [user])

  const createUser = () => {
    if (user) {
      createNewUser(user.fullName, user.primaryEmailAddress.emailAddress, user.imageUrl)
        .then(res => {
          if (res) GetUser()
        })
    }
  }

  const GetUser = () => {
    getUserDetail(user.primaryEmailAddress.emailAddress)
      .then(res => {
        console.log("--", res.userDetail?.point);
        setUserPoints(res.userDetail?.point)
      })
  }

  return (
    <View>
      <ScrollView>
        <View style={{
          flex: 1,
          backgroundColor: Colors.primary,
          height: 250,
          padding: 20,
        }}>
          <Header />
        </View>
        <View style={{ padding: 9 }}>
          <View style={{ marginTop: -90 }}>
            <CourseProgress />
            <CourseList level={"basic"} />
          </View>
          <View>
            <CourseList level={"advance"} />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}