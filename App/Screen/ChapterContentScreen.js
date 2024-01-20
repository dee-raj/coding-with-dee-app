import { View, Text } from 'react-native'
import React from 'react'
import Content from '../Components/ChapterContent/Content'
import { useRoute } from '@react-navigation/native'

export default function ChapterContentScreen() {
   const param = useRoute().params;
   console.log(param,'ChapterContentScreen: ',param.content)
   return param.content && (
      <View>
         <Text >Course content</Text>
         <Content content={param.content}/>
      </View>
   )
}