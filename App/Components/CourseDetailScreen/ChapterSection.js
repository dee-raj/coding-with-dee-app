import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

export default function ChapterSection({ chapterList, userEnrolledcourse }) {
   const navigation = useNavigation();
   const OnChapterPress = (content)=>{
      if (userEnrolledcourse.length == 0){
         ToastAndroid.show("Please Enroll Course First!", ToastAndroid.LONG);
         return;
      }else{
         navigation.navigate('chapter-content', {
            content:content
         })
      }
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
            <TouchableOpacity style={[{
               padding: 11,
               borderWidth: 1,
               borderRadius: 10,
               marginTop: 10,
               }, styles.rowStyle]}
               onPress={()=>OnChapterPress(item.content)}>
               <View style={[{ gap: 4, }, styles.rowStyle]}>
                  <Text style={{ fontSize: 24 }}>{index + 1}.</Text>
                  <Text style={{ fontSize: 20 }}>{item.title}</Text>
               </View>
               {userEnrolledcourse?.length ==0? 
                  <FontAwesome5 name="user-lock" size={18} color={Colors.dark_primary} /> :
                  <FontAwesome5 name="play" size={20} color={Colors.light_green}/> 
               }
            </TouchableOpacity>
         ))}
      </View>
   )
}
const styles = StyleSheet.create({
   rowStyle: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      color: Colors.black,
      justifyContent: 'space-between',
   }
})