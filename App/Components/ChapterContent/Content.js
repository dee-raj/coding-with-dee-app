import { View, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import ContentItem from './ContentItem'
import Colors from '../../Utils/Colors'
import { useNavigation } from '@react-navigation/native'

export default function Content({content}) {
  let contentRef;
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const OnNextBtnPress = (index)=>{
    if (content?.length <= index+1){
      navigation.goBack();
      return;
    }
    setActiveIndex(index+1);
    contentRef.scrollToIndex({animated: true, index:index+1})
  }
  return (
    <View style={{padding:17}}>
      <ProgressBar 
        contentLength={content?.length} 
        contentIndex={activeIndex}
      />
      <FlatList
        data={content}
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={(ref)=>{
          contentRef= ref
        }}
        renderItem={({item, index})=>(
          <View style={{
            width: Dimensions.get('screen').width*0.909,
            padding:10
            }}>
            <Text style={{
              fontFamily:'Roboto',
              fontSize:22,
              marginTop:7,
              marginBottom:5,
              borderBottomColor:Colors.gray,
              borderBottomWidth:4,
            }}
            >{item.heading}</Text>
            <ContentItem 
              description={item?.description?.html}
              output={item?.output?.html}
            />
            <TouchableOpacity style={{marginBottom:60}} onPress={()=>OnNextBtnPress(index)}>
              <Text style={{
                padding:10,
                backgroundColor:Colors.primary,
                color:Colors.white,
                borderRadius:15,
                fontFamily:'monospace',
                fontSize:18,
                textAlign:'center',
              }}>
                { content?.length > index+1? "Next" :"Finish" }
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}