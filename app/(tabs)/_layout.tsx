import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './home';
import SearchScreen from './search';
import NotificationsScreen from './notifications';
import MessagesScreen from './messages';

const BottomTab = createBottomTabNavigator();

const BottomTabsLayout = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#1C87ED',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home-outline';

          if (route.name === 'Home') iconName = 'home-outline';
          if (route.name === 'Search') iconName = 'search-outline';
          if (route.name === 'Notifications') iconName = 'notifications-outline';
          if (route.name === 'Messages') iconName = 'mail-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Search" component={SearchScreen} />
      <BottomTab.Screen name="Notifications" component={NotificationsScreen} />
      <BottomTab.Screen name="Messages" component={MessagesScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabsLayout;