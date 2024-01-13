import { View, Text, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import DetailSection from '../Components/CourseDetailScreen/DetailSection';
import ChapterSection from '../Components/CourseDetailScreen/ChapterSection';
import { enrollCourse, getUserEnrolledCourse } from '../Services';
import { useUser } from '@clerk/clerk-expo';

export default function CourseDetailScreen() {
  const natigation = useNavigation();
  const params = useRoute().params;
  const [userEnrolledcourse, setUserEnrolledCourse] = useState([]);
  const {user} = useUser();

  useEffect(() => {
    console.log(params.course)
    if(user && params.course){
      GetUserEnrolledCourses();
    }
  }, [params.course, user]);

  const UserEnrollCourse = () =>{
    enrollCourse(params.course.id, user.primaryEmailAddress.emailAddress)
    .then(res =>{
      // console.log('created: ',res);
      if (res){
        ToastAndroid.show("Course Enrolled successfully!", ToastAndroid.LONG)
        GetUserEnrolledCourses();
      }
    })
  };
  
  const GetUserEnrolledCourses = ()=>{
    getUserEnrolledCourse(params.course.id, user.primaryEmailAddress.emailAddress)
    .then(res =>{
      console.log(res, "get: ",res.userEnrolledCourses);
      setUserEnrolledCourse(res.userEnrolledCourses)
    })
  }
  return params.course && (
    <View>
      <TouchableOpacity onPress={() => natigation.goBack()} style={{ 
        margin:5,
        padding: 5,
        width:'12.8%',
        height:'6%',
        borderRadius:40
      }}>
        <FontAwesome5 name="arrow-circle-left" size={35} color="black" />
      </TouchableOpacity>
    <ScrollView style={{ padding: 10 }}>
      <DetailSection course={params.course} 
        userEnrolledcourse={userEnrolledcourse}
        enrollCourse={()=>UserEnrollCourse()} 
      />
      <ChapterSection chapterList={params.course.chapters} 
        userEnrolledcourse={userEnrolledcourse}
      />
    </ScrollView>
    </View>
  )
}
