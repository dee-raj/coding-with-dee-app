import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';
import Colors from '../Utils/Colors';

import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { enrollCourse, getUserEnrolledCourse } from '../Services';
import { useUser } from '@clerk/clerk-expo';
import { CompleteChapterContext } from '../Context/CompletedChapterContex';

export default function Membership() {
   const natigation = useNavigation();
   const params = useRoute().params;
   const [userEnrolledcourse, setUserEnrolledCourse] = useState([]);
   const { user } = useUser();
   const { isChapterComplete, setIsChapterComplete } = useContext(CompleteChapterContext);

   useEffect(() => {
      if (user && params.course) {
         GetUserEnrolledCourses();
      }
   }, [params.course, user]);

   useEffect(() => {
      isChapterComplete && GetUserEnrolledCourses();
   }, [isChapterComplete])

   const UserEnrollCourse = () => {
      enrollCourse(params.course.id, user.primaryEmailAddress.emailAddress)
         .then(res => {
            if (res) {
               ToastAndroid.show("Course Enrolled successfully!", ToastAndroid.LONG)
               GetUserEnrolledCourses();
            }
         })
   };

   const GetUserEnrolledCourses = () => {
      getUserEnrolledCourse(params.course.id, user.primaryEmailAddress.emailAddress)
         .then(res => {
            setUserEnrolledCourse(res.userEnrolledCourses)
         })
   }
   return (
      <View>
         <View>
            <TouchableOpacity onPress={() => natigation.goBack()} style={{
               margin: 5,
               padding: 5,
               width: "12.5%",
               height: 'auto',
               borderRadius: 40,
               backgroundColor: Colors.bgColor
            }}>
               <FontAwesome5 name="arrow-circle-left" size={35} color="black" />
            </TouchableOpacity>
         </View>
         <Text>
            Lets make you a
            Membership
            of this app.
         </Text>
         <TouchableOpacity
            onPress={() => {
               UserEnrollCourse()
               natigation.goBack();
            }}
            style={[{ backgroundColor: Colors.dark_primary }, styles.btn]}>
            <Text style={styles.btnText}>Enroll now</Text>
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create({
   btn: {
      padding: 10,
      marginTop: 23,
      width: "100%",
      height: 'auto',
      backgroundColor: Colors.bgColor
   },
   btnText: {
      color: Colors.black,
      fontSize: 34
   }
})