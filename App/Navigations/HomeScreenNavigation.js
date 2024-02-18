import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screen/HomeScreen';
import CourseDetailScreen from '../Screen/CourseDetailScreen';
import ChapterContentScreen from '../Screen/ChapterContentScreen';
import Membership from '../Screen/Membership';

const Stack = createStackNavigator();
export default function HomeScreenNavigation() {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name='back-home' component={HomeScreen} />
         <Stack.Screen name='course-detail' component={CourseDetailScreen} />
         <Stack.Screen name='chapter-content' component={ChapterContentScreen} />
         <Stack.Screen name='make-member' component={Membership} />
      </Stack.Navigator>
   )
}