// ColorChangeButton.tsx

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ColorScreenButtonProps {
  onChangeBackgroundColor: () => void; // Función para cambiar el color de fondo
}

const ColorScreenButton: React.FC<ColorScreenButtonProps> = ({ onChangeBackgroundColor }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onChangeBackgroundColor}>
      <Text style={styles.buttonText}>Cambiar Color de Fondo</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ColorScreenButton;

