import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';

export default function ChapterSection({ chapterList, userEnrolledcourse }) {
   return (
      <View style={{
         padding: 5,
         marginTop: 10,
         backgroundColor: Colors.light_white,
         borderRadius: 10,
         marginBottom: 70
      }}>
         <Text style={{
            fontFamily: 'serif',
            fontWeight: "600",
            fontSize: 22
         }}>Chapters</Text>
         {chapterList.map((item, index) => (
            <View style={[{
               padding: 11,
               borderWidth: 1,
               borderRadius: 10,
               marginTop: 10,
            }, styles.rowStyle]}>
               <View style={[{ gap: 4, }, styles.rowStyle]}>
                  <Text style={{ fontSize: 24 }}>{index + 1}</Text>
                  <Text style={{ fontSize: 20 }}>{item.title}</Text>
               </View>
               {userEnrolledcourse?.length ==0? 
                  <FontAwesome5 name="lock" size={18} color="black" /> :
                  <FontAwesome5 name="play-circle" size={24} color="black" /> 
               }
            </View>
         ))}
      </View>
   )
}
const styles = StyleSheet.create({
   rowStyle: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      color: Colors.black,
      justifyContent: 'space-between',
   }
})