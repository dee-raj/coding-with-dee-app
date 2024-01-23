import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';


export default function CourseItem({ item }) {
   return (
      <View style={{
         padding: 10,
         backgroundColor: Colors.bgColor,
         marginRight: 15,
         borderRadius: 15
      }}>
         <Image source={{ uri: item?.banner?.url }}
            style={{
               width: "100%",
               height: 202,
               borderRadius: 15
            }} />
         <View style={{ padding: 7 }}>
            <Text style={{
               fontFamily: 'sans-serif-medium',
               fontSize: 18,
            }}>
               {item?.name}
            </Text>
            <View style={styles.rowStyles}>
               <View style={styles.rowStyles}>
                  <FontAwesome5 name="book-reader" size={27} color={Colors.dark_primary} />
                  <Text style={{ fontFamily: 'serif' }}>{item?.chapters?.length} Chapters</Text>
               </View>
               <View style={styles.rowStyles}>
                  <FontAwesome5 name="clock" size={19} color={Colors.dark_primary} />
                  <Text style={{ fontFamily: 'sans-serif-thin' }}>{item?.time}</Text>
               </View>
            </View>
            <View style={styles.feeStyle}>
               <FontAwesome5 name="rupee-sign" size={18} color={Colors.golden} />
               <Text style={{
                  color: Colors.golden,
                  fontFamily: 'notoserif',
                  fontWeight: 'bold'
               }}>{item.price == 0 ? "Free" : item?.price}</Text>
            </View>
         </View>
      </View>
   )
}
const styles = StyleSheet.create({
   rowStyles: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 7,
      marginTop: 5,
   },
   feeStyle: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      marginTop: 10,
   }
});