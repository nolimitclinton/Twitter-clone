import { Link } from 'expo-router';
import { Button, View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ForYouScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>For You</Text>
      <Link href={'/details'} asChild>
        <Button title="Open Details Page" />
      </Link>
    </View>
  );
};

export default ForYouScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 20 },
});