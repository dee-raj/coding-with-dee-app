import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getCourseList } from '../../Services'
import SubHeading from '../SubHeading';
import Colors from '../../Utils/Colors';

export default function CourseList({level}) {
   const [courseList, setCouseList] = useState([]);
   useEffect(()=>{
      getCourses();
   }, [])

   const getCourses = ()=>{
      getCourseList(level)
      .then(res=>{
         console.log(`Response`, res);
         setCouseList(res?.courses);
      })
   }
  return (
    <View>
      <SubHeading text={'Basic Courses'} />
      <FlatList
         data={courseList}
         key={courseList.id}
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         renderItem={({item})=> (
            <View style={{
               padding:10,
               backgroundColor:Colors.bgColor,
               marginRight:15,
               borderRadius:15
            }}>
               <Image source={{uri:item?.banner?.url}}
               style={{
                  width:210, height:210,
                  borderRadius:15
               }} />
            </View>
         )}
      />
    </View>
  )
}