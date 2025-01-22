// StyledComponent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StyledComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Styled Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: 'darkblue',
  },
});

export default StyledComponent;
