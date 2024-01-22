import { View, Text, ToastAndroid } from 'react-native'
import React, { useContext, useEffect } from 'react'
import Content from '../Components/ChapterContent/Content'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MarkChapterCompleted } from '../Services';
import { CompleteChapterContext } from '../Context/CompletedChapterContex';

export default function ChapterContentScreen() {
   const param = useRoute().params;
   const navigation = useNavigation();
   const {isChapterComplete, setIsChapterComplete} = useContext(CompleteChapterContext);
   // ChapterId
   // RecordId
   useEffect(()=>{
      console.log("ChapterId: ", param.chapterId);
      console.log("RecordId: ", param.userCourseRecordId);
   }, [param])
   const onChapterFinish = ()=>{
      MarkChapterCompleted(param.chapterId, param.userCourseRecordId).then(res=>{
         if (res){
            ToastAndroid.show('Congratulation You have Completed This Chapter!!', ToastAndroid.LONG);
            setIsChapterComplete(true);
            navigation.goBack();
         }
         console.log(res);
      })
   }
   // console.log(param,'ChapterContentScreen: ',param.content)
   return param.content && (
      <View>
         <Content content={param.content} onChapterFinish={()=> onChapterFinish() }/>
      </View>
   )
}