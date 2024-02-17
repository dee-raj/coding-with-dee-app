import { View, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getCourseList } from '../../Services'
import SubHeading from '../SubHeading';
import Colors from '../../Utils/Colors';
import CourseItem from './CourseItem';
import { useNavigation } from '@react-navigation/native';

export default function CourseList({ level }) {
   const navigation = useNavigation();
   const [courseList, setCouseList] = useState([]);
   useEffect(() => {
      getCourses();
   }, [])

   const getCourses = () => {
      getCourseList(level)
         .then(res => {
            // console.log(`\nCourse List Response: ${res}`);
            setCouseList(res?.courses);
         })
   }
   return (
      <View>
         <SubHeading text={level + ' Courses'} color={level == 'basic' && Colors.dark_primary} />
         <FlatList
            data={courseList}
            key={courseList.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
               <TouchableOpacity onPress={() => navigation.navigate('course-detail', {
                  course: item
               })}>
                  <CourseItem item={item} />
               </TouchableOpacity>
            )}
         />
      </View>
   )
}