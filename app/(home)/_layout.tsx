import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ForYouScreen from './ForYou';
import FollowingScreen from './Following';
import ReactNativeScreen from './ReactNative';

const TopTab = createMaterialTopTabNavigator();

const TopTabsLayout = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#131620',
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
        tabBarIndicatorStyle: { backgroundColor: '#1C87ED', height: 3 },
      }}
    >
      <TopTab.Screen name="ForYou" component={ForYouScreen} options={{ title: 'For You' }} />
      <TopTab.Screen name="Following" component={FollowingScreen} options={{ title: 'Following' }} />
      <TopTab.Screen name="ReactNative" component={ReactNativeScreen} options={{ title: 'Team Alpha' }} />
    </TopTab.Navigator>
  );
};

export default TopTabsLayout;