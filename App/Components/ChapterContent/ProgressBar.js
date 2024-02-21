import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors';

export default function ProgressBar({ contentLength, contentIndex }) {
  // console.log('\ncontentLength: ', contentLength)
  const arraySize = Array.from({ length: contentLength }, (_, idx) => idx + 1);
  const width = 100 / contentLength;
  return (
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    }}>
      {arraySize.map((item, index) => (
        <View key={index} // Using index as the key for simplicity
          style={{
            backgroundColor: `${index <= contentIndex ? Colors.primary : Colors.gray}`,
            width: width + "%",
            height: 10,
            borderRadius: 10,
            margin: 5,
            flex: 1
          }}></View>
      ))}
    </View>
  )
}