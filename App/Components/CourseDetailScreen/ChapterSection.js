import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useContext } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { CompleteChapterContext } from '../../Context/CompletedChapterContex';
import { UserPointsContext } from '../../Context/UserPointsContext';

export default function ChapterSection({ chapterList, userEnrolledcourse }) {
   const navigation = useNavigation();
   // console.log("Completed Chapter? ", userEnrolledcourse[0]?.completedChapter);
   const { isChapterComplete, setIsChapterComplete } = useContext(CompleteChapterContext);
   const OnChapterPress = (chapter) => {
      if (userEnrolledcourse.length == 0) {
         ToastAndroid.show("Please Enroll Course First!", ToastAndroid.LONG);
         return;
      } else {
         setIsChapterComplete(false);
         navigation.navigate('chapter-content', {
            content: chapter.content,
            chapterId: chapter.id,
            userCourseRecordId: userEnrolledcourse[0]?.id
         })
      }
   }
   const checkIsChapterCompleted = (chapterId) => {
      if (userEnrolledcourse[0]?.completedChapter?.length <= 0) {
         return false;
      }
      const resp = userEnrolledcourse[0]?.completedChapter
         .find(item => item.chapterId == chapterId)
      return resp;
   }
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
            <TouchableOpacity style={[checkIsChapterCompleted(item.id)
               ? styles.CompleteChapter
               : styles.inCompleteChapter]}
               onPress={() => OnChapterPress(item)}>
               <View style={{
                  gap: 4,
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
               }}>
                  {checkIsChapterCompleted(item.id)
                     ? <FontAwesome5 name="check-circle" size={24} color="green" />
                     : <Text style={{ fontSize: 27, color: Colors.gray }}>{index + 1}.</Text>}
                  <Text style={{ fontSize: 15, color: Colors.gray }}>{item.title}</Text>
               </View>
               {userEnrolledcourse?.length == 0 ?
                  <FontAwesome5 name="user-lock" size={18} color={Colors.dark_primary} /> :
                  <FontAwesome5 name="play" size={20} color={checkIsChapterCompleted(item.id) ? 'green' : Colors.gray} />
               }
            </TouchableOpacity>
         ))}
      </View>
   )
}
const styles = StyleSheet.create({
   inCompleteChapter: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 12,
      borderWidth: 3,
      borderRadius: 10,
      marginTop: 10,
      borderBlockColor: Colors.gray
   },
   CompleteChapter: {
      backgroundColor: Colors.light_green,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 11,
      borderWidth: 3,
      borderRadius: 10,
      marginTop: 10,
      borderBlockColor: Colors.dark_primary
   },
})