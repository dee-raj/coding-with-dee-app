import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function CourseProgressBar({ totalChapter, completedChapter }) {
   // console.log(`\n\ntotal=${totalChapter}\t completedChapter=${completedChapter}`)
   const width = (completedChapter / totalChapter) * 79 + "%";
   return (
      <View style={{
         width: '97%',
         height: 7,
         backgroundColor: Colors.gray,
         borderRadius: 99
      }}>
         <View style={{
            width: width,
            height: 7,
            backgroundColor: Colors.primary,
            borderRadius: 99
         }}>
         </View>
      </View>
   )
}