import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '../Utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '@clerk/clerk-expo';
import { GetAllProgressCourse } from '../Services';
import CourseItem from '../Components/HomeScreen/CourseItem';
import CourseProgressItem from '../Components/MyCourse/CourseProgressItem';

export default function MyCourse() {
  const navigation = useNavigation();
  const { user } = useUser();
  const [progressCourseList, setProgressCourseList] = useState();
  useEffect(() => {
    user && GetAllProgressCourseList();
  }, [user, setProgressCourseList])
  const GetAllProgressCourseList = () => {
    GetAllProgressCourse(user.primaryEmailAddress.emailAddress).then((res) => {
      // console.log(res, "\nGetAllEnrollProgressCourse:", res?.userEnrolledCourses);
      setProgressCourseList(res?.userEnrolledCourses);
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
        }}>Check Your Course Details</Text>
      </View>
      <FlatList
        data={progressCourseList}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 150, marginTop: -90 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ margin: 8, padding: 5 }}
            onPress={() => navigation.navigate('course-detail', {
              course: item.course
            })}
          >
            <CourseProgressItem item={item.course}
              completedChapter={item?.completedChapter?.length}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}