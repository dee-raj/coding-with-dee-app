// ApiDataExample.js
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const ApiDataExample = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(jsonData => setData(jsonData));
  }, []);

  return (
    <View>
      <Text>API Data:</Text>
      {data.map(item => (
        <Text key={item.id}>{item.title}</Text>
      ))}
    </View>
  );
};

export default ApiDataExample;
