import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CounterButtonProps {
  title: string;
  onPress: () => void;
}

const CounterButton: React.FC<CounterButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#03741b',
    padding: 10,
    margin: 10,
    borderRadius: 8 ,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
  },
});

export default CounterButton;

