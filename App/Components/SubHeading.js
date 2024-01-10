import { View, Text } from 'react-native'
import React from 'react';
import Colors from '../Utils/Colors';

export default function SubHeading({text, color=Colors.dark_primary}) {
  return (
    <View>
      <Text style={{
         fontFamily:'monospace',
         fontSize:28,
         color:color
      }}> {text} </Text>
    </View>
  )
}