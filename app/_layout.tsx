import React from 'react';
import { Stack } from 'expo-router';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen 
        name="(tabs)" 
        options={{
          headerLeft: () => (
            <Image
              source={{
                uri: 'https://pbs.twimg.com/profile_images/1719429222320443393/I41tGdR8_400x400.jpg'
              }}
              style={{ width: 30, height: 30, borderRadius: 20 }}
            />
          ),
          headerRight: () => <Ionicons name="settings-outline" size={24} color="black" />,
          headerTitle: () => (
            <Image
              source={{
                uri: 'https://about.x.com/content/dam/about-twitter/x/large-x-logo.png.twimg.1920.png'
              }}
              style={{ width: 24, height: 24, resizeMode: 'contain' }}
            />
          ),
        }}
      />
      <Stack.Screen name="details" options={{ headerTitle: 'Details', headerBackTitle: 'Back' }} />
    </Stack>
  );
};

export default _layout;