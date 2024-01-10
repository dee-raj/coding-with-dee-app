import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import DetailSection from '../Components/CourseDetailScreen/DetailSection';

export default function CourseDetailScreen() {
  const natigation = useNavigation();
  const params = useRoute().params;
  useEffect(() => {
    console.log(params.course);
  }, [params.course]);

  return params.course && (
    <View style={{ padding: 10 }}>
      <TouchableOpacity onPress={() => natigation.goBack()}>
        <FontAwesome5 name="arrow-circle-left" size={35} color="black" />
      </TouchableOpacity>
      <DetailSection course={params.course} />
    </View>
  )
}