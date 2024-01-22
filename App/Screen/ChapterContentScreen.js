import { View, Text, ToastAndroid } from 'react-native'
import React, { useContext, useEffect } from 'react'
import Content from '../Components/ChapterContent/Content'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MarkChapterCompleted, getUserDetail } from '../Services';
import { CompleteChapterContext } from '../Context/CompletedChapterContex';
import { useUser } from '@clerk/clerk-expo';
import { UserPointsContext } from '../Context/UserPointsContext';

export default function ChapterContentScreen() {
   const param = useRoute().params;
   const navigation = useNavigation();
   const {user} = useUser()
   const {isChapterComplete, setIsChapterComplete} = useContext(CompleteChapterContext);
   const {userPoints, setUserPoints} = useContext(UserPointsContext);
   // ChapterId
   // RecordId
   useEffect(()=>{
      console.log("ChapterId: ", param.chapterId);
      console.log("RecordId: ", param.userCourseRecordId);
   }, [param])
   const onChapterFinish = ()=>{
      const totalPoints = Number(userPoints)+param.content?.length *10;
      MarkChapterCompleted(param.chapterId, param.userCourseRecordId, 
         user.primaryEmailAddress.emailAddress, totalPoints).then(res=>{
         if (res){
            ToastAndroid.show('Congratulation You have Completed This Chapter!!', ToastAndroid.LONG);
            setIsChapterComplete(true);
            navigation.goBack();
         }
         // console.log("\nupdated Points",res.updateUserDetail?.point);
         console.log(res);
      })
      getUserDetail(user.primaryEmailAddress.emailAddress)
      .then(res=>{
      //   console.log("Total points", res.userDetail?.point);
        setUserPoints(res.userDetail?.point)
      })
   }
   // console.log(param,'ChapterContentScreen: ',param.content)
   return param.content && (
      <View>
         <Content content={param.content} onChapterFinish={()=> onChapterFinish() }/>
      </View>
   )
}