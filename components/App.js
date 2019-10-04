import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <Button title="This is a button"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
