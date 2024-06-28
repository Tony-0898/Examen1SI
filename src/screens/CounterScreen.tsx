import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CounterButton from '../components/CounterButton';
import temperature from '../hooks/useCounter';

const CounterScreen: React.FC = () => {
  const { count, increment, decrement } = temperature();

  return (
    <View style={styles.container}>
      <Text style={styles.count}> Temperatura APP</Text>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttonContainer}>
        <CounterButton title="Disminuir" onPress={decrement} />
        <CounterButton title="Aumentar" onPress={increment} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    fontSize: 38,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default CounterScreen;




