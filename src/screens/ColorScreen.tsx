

import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const ColorScreen: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); 

  const changeBackgroundColor = () => {
    
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TouchableOpacity style={styles.button} onPress={changeBackgroundColor}>
        <Text style={styles.buttonText}>Cambiar Color</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default ColorScreen;

