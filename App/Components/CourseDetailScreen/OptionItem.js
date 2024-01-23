import { View, Text } from 'react-native'
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';

export default function OptionItem({ icon, value }) {
   return (
      <View style={{
         display: 'flex',
         flexDirection: 'row',
         alignItems: 'center',
         gap: 7,
         marginTop: 10,
      }}>
         <FontAwesome5 name={icon} size={27} color={Colors.dark_primary} />
         <Text style={{ fontFamily: 'serif', fontSize: 19, color: Colors.gray }}>{value}</Text>
      </View>
   )
}