// CounterApp.js
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <Button title="Decrease" onPress={() => setCount(count - 1)} />
    </View>
  );
};

export default CounterApp;
