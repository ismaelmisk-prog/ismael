import React from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  const handleLogin = () => {
    // Logic for logging in
    console.log('Login button pressed');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default App;