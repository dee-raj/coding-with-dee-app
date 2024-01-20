import { View, Text } from 'react-native'
import React from 'react'
import ProgressBar from './ProgressBar'

export default function Content({content}) {
   console.log("Content: ",content, content?.length);
  return (
    <View style={{padding:17}}>
      <ProgressBar 
        contentLength={content?.length} 
        contentIndex={1}
      />
      <Text>Content</Text>
    </View>
  )
}