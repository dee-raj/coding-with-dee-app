import { View, Text } from 'react-native'
import React from 'react';
import Colors from '../Utils/Colors';

export default function SubHeading({ text, color = Colors.dark_primary }) {
  return (
    <View style={{paddingVertical:10}}>
      <Text style={{
        fontFamily: 'monospace',
        fontSize: 28,
        color: color,
        textTransform:"capitalize",
        width:'auto'
      }}> {text} </Text>
      <View style={{
        backgroundColor:Colors.light_green, 
        height:5, width:"70%", marginLeft:10
      }}></View>
    </View>
  )
}