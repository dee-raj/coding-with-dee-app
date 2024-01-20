import { View, Text, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';
import OptionItem from './OptionItem';

export default function DetailSection({ course, enrollCourse, userEnrolledcourse }) {
   return course && (
      <View style={{
         backgroundColor: Colors.white,
         padding: 10,
         borderRadius: 15,
      }}>
         <Image source={{ uri: course?.banner?.url }}
            style={{
               width: Dimensions.get('screen').width * 0.9,
               height: 222,
               backgroundColor: Colors.bgColor,
               borderRadius: 15,
            }} />
         <View style={{ padding: 5 }}>
            <Text style={{
               fontSize: 22,
               fontFamily: 'Roboto',
               marginTop: 10
            }}>{course.name}</Text>
            <View style={styles.container}>
               <View style={styles.rowStyle}>
                  <OptionItem icon={'tasks'} value={course?.chapters?.length + " Chapters"} />
                  <OptionItem icon={'clock'} value={course?.time} />
               </View>
               <View style={styles.rowStyle}>
                  <OptionItem icon={'user-tie'} value={course?.author} />
                  <OptionItem icon={'route'} value={course?.level} />
               </View>
            </View>
         </View>
         <View>
            <Text style={styles.desc}> Description </Text>
            <Text style={styles.detail}>{course?.description?.markdown}</Text>
         </View>
         <View style={styles.rowStyle}>
            {userEnrolledcourse?.length ==0?
            <TouchableOpacity 
               onPress={()=>enrollCourse()} 
               style={ [{ backgroundColor: Colors.dark_primary }, styles.btn] }>
               <Text style={styles.btnText}>Enroll for Free</Text>
            </TouchableOpacity> :null}
            <TouchableOpacity style={[{ backgroundColor: Colors.golden }, styles.btn]}>
               <Text style={styles.btnText}>Membership ₹199/month</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   rowStyle: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 5,
   },
   desc: {
      fontFamily: 'normal',
      fontSize: 25,
      color: Colors.golden,
      backgroundColor: Colors.bgColor,
      paddingLeft: 16,
      margin: 3,
      borderRadius: 10
   },
   detail: {
      fontFamily: 'notoserif',
      fontSize: 18,
      color: Colors.gray,
      lineHeight: 23,
      textAlign: 'justify'
   },
   btn: {
      padding: 8,
      borderRadius: 15,
      marginRight: 5
   },
   btnText: {
      fontFamily: 'Roboto',
      textAlign: 'center',
      color: Colors.light_white,
      fontSize: 17
   }
});