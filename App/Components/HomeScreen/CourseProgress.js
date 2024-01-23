import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import SubHeading from '../SubHeading';
import Colors from '../../Utils/Colors';
import { GetAllProgressCourse } from '../../Services';
import { useUser } from '@clerk/clerk-expo';
import CourseItem from './CourseItem';
import { useNavigation } from '@react-navigation/native';

export default function CourseProgress() {
   const navigation = useNavigation();
   const { user } = useUser();
   const [progressCourseList, setProgressCourseList] = useState();
   useEffect(() => {
      user && GetAllProgressCourseList();
   }, [user, setProgressCourseList])
   const GetAllProgressCourseList = () => {
      GetAllProgressCourse(user.primaryEmailAddress.emailAddress).then((res) => {
         console.log(res, "\nGetAllEnrollProgressCourse:", res?.userEnrolledCourses);
         setProgressCourseList(res?.userEnrolledCourses);
      })
   }
   return progressCourseList&&(
      <View>
         <SubHeading text={"In Progress"} color={Colors.white} />
         <FlatList
            data={progressCourseList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
               <TouchableOpacity
                  onPress={() => navigation.navigate('course-detail', {
                     course: item.course
                  })}
               >
                  <CourseItem item={item.course}
                     completedChapter={item?.completedChapter?.length}
                  />
               </TouchableOpacity>
            )}
         />
      </View>
   )
}