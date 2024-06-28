import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

// Define las props que acepta el componente Input
interface InputProps {
  valor: string;
  onChangeText: (texto: string) => void;
  placeholder?: string;
  // Puedes agregar más props para personalización:
  // esContraseña?: boolean;
  // tipoTeclado?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

// Componente Input
const Input: React.FC<InputProps> = ({ valor, onChangeText, placeholder }) => {
  return (
    <View style={styles.contenedor}>
      <TextInput
        style={styles.input}
        value={valor}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

// Estilos para el componente Input
const styles = StyleSheet.create({
  contenedor: {
    // Estilos para el contenedor del input
    // marginBottom: 10,
    // width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray', // Color del borde
    padding: 10, // Espaciado interno
    borderRadius: 5, // Bordes redondeados
    // Más estilos para personalizar:
    // fontSize: 16,
    // backgroundColor: 'white',
    // width: '100%',
  },
});

export default Input;
