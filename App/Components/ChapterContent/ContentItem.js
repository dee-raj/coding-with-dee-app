import { View, Text, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import RenderHtml from 'react-native-render-html';
import Colors from '../../Utils/Colors';

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
         {output != null ? <TouchableOpacity
            onPress={() => setIsRun(true)}
            style={{ marginTop: -10, flexDirection: 'row-reverse', marginRight: 206 }}
         >
            <Text style={{
               padding: 12,
               backgroundColor: Colors.primary,
               borderRadius: 10,
               fontFamily: 'Roboto',
               fontSize: 18,
               color: Colors.white,
               textAlign: 'center',
               width: 100,
            }}>Run</Text>
         </TouchableOpacity>
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
   }
}