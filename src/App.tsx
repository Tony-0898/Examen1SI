import React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/CounterScreen';




const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <HomeScreen />
    </View>
  );
};

export default App;

