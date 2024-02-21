import { View, Text, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import RenderHtml from 'react-native-render-html';
import Colors from '../../Utils/Colors';
import { MaterialIcons } from '@expo/vector-icons';

export default function ContentItem({ description, output }) {
   const { width } = useWindowDimensions();
   const [isRun, setIsRun] = useState(false);
   const descriptionSource = {
      html: description
   }
   const outputSource = {
      html: output
   }
   return description && (
      <ScrollView style={{ marginBottom: 10, borderRadius: 15 }} showsVerticalScrollIndicator={false}>
         <RenderHtml
            contentWidth={width}
            source={descriptionSource}
            tagsStyles={tagsStyles}
         />
         {output != null ?
            <View style={tagsStyles.runBtn}>
               <TouchableOpacity
                  onPress={() => setIsRun(true)}
                  style={{
                     marginTop: -10,
                     flexDirection: 'row-reverse',
                     marginRight: 206,
                     backgroundColor: Colors.primary,
                     justifyContent: 'space-around',
                     alignItems: 'center',
                     borderRadius: 10,
                     padding: 12,
                  }}>
                  <Text style={{
                     fontFamily: 'Roboto',
                     fontSize: 22,
                     color: Colors.white,
                     textAlign: 'center',
                  }}>Run</Text>
                  <MaterialIcons name="play-circle-outline" size={24} color={isRun ? Colors.white : Colors.gray} />
               </TouchableOpacity>
            </View>
            : null}
         {isRun ?
            <>
               <Text style={{
                  fontFamily: 'monospace',
                  fontSize: 21,
               }}>Expected Output:-</Text>
               <RenderHtml
                  contentWidth={width}
                  source={outputSource}
                  tagsStyles={tagsStyles}
               />
            </>
            : null}
      </ScrollView>
   )
}

const tagsStyles = {
   body: {
      fontFamily: 'Roboto',
      fontSize: 15,
   },
   code: {
      backgroundColor: Colors.black,
      color: Colors.white,
      padding: 15,
      fontSize: 13,
      borderRadius: 15
   },
   runBtn: {

   }
}