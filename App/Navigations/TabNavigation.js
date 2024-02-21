import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LeaderBoard from '../Screen/LeaderBoard';
import ProfileScreen from '../Screen/ProfileScreen';
import MyCourse from '../Screen/MyCourse';
import { Text, View } from 'react-native';
import { FontAwesome5, MaterialIcons, Ionicons } from '@expo/vector-icons';
import HomeScreenNavigation from './HomeScreenNavigation';
import AboutDeeScreen from '../Screen/AboutDeeScreen';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <Tab.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Tab.Screen
          name="home"
          component={HomeScreenNavigation}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="leaderboard"
          component={LeaderBoard}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="leaderboard" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="my-course"
          component={MyCourse}
          options={{
            tabBarLabel: 'My Course',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="book" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="about-dee"
          component={AboutDeeScreen}
          options={{
            tabBarLabel: 'About Dee',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="info" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="user-graduate" size={size} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </View>
  )
}