import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getCourseList } from '../../Services'
import SubHeading from '../SubHeading';
import Colors from '../../Utils/Colors';
import { FontAwesome5 } from '@expo/vector-icons';

export default function CourseList({ level }) {
   const [courseList, setCouseList] = useState([]);
   useEffect(() => {
      getCourses();
   }, [])

   const getCourses = () => {
      getCourseList(level)
         .then(res => {
            console.log(`Response`, res);
            setCouseList(res?.courses);
         })
   }
   return (
      <View>
         <SubHeading text={level+' Courses'} color={level=='basic' && Colors.white}/>
         <FlatList
            data={courseList}
            key={courseList.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
               <View style={{
                  padding: 10,
                  backgroundColor: Colors.bgColor,
                  marginRight: 15,
                  borderRadius: 15
               }}>
                  <Image source={{ uri: item?.banner?.url }}
                     style={{
                        width: 204, height: 205,
                        borderRadius: 15
                     }} />
                  <View style={{ padding: 7 }}>
                     <Text style={{
                        fontFamily: 'sans-serif-medium',
                        fontSize: 18,
                     }}>{item?.name}</Text>
                     <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent:'space-between',
                     }}>
                        <View style={{
                           display: 'flex',
                           flexDirection: 'row',
                           alignItems: 'center',
                           gap: 7,
                           marginTop: 10,
                        }}>
                           <FontAwesome5 name="book-reader" size={27} color={Colors.dark_primary} />
                           <Text style={{fontFamily:'serif'}}>{item?.chapters?.length} Chapters</Text>
                        </View>
                        <View style={{
                           display: 'flex',
                           flexDirection: 'row',
                           alignItems: 'center',
                           gap: 7,
                           marginTop: 10,
                        }}>
                           <FontAwesome5 name="clock" size={19} color={Colors.dark_primary} />
                           <Text style={{fontFamily:'sans-serif-thin'}}>{item?.time}</Text>
                        </View>
                     </View>
                        <View style={{
                           display: 'flex',
                           flexDirection: 'row',
                           alignItems: 'center',
                           gap: 7,
                           marginTop: 10,
                        }}>
                           <FontAwesome5 name="rupee-sign" size={18} color={Colors.golden} />
                           <Text style={{
                              color:Colors.golden,
                              fontFamily:'notoserif',
                              fontWeight:'bold'
                           }}>{item.price==0? "Free": item?.price}</Text>
                        </View>
                  </View>
               </View>
            )}
         />
      </View>
   )
}