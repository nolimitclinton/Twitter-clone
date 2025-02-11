import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationsScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Notifications</Text>
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, fontWeight: 'bold', textTransform: 'uppercase' },
});