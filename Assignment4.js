import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text, AsyncStorage } from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    checkLoggedInStatus();
  }, []);

  const checkLoggedInStatus = async () => {
    const storedEmail = await AsyncStorage.getItem('email');
    const storedPassword = await AsyncStorage.getItem('password');

    if (storedEmail && storedPassword) {
      setLoggedIn(true);
    }
  };

  const handleLogin = async () => {
    // Perform login logic
    const storedEmail = await AsyncStorage.getItem('email');
    const storedPassword = await AsyncStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      setLoggedIn(true);
    }
  };

  const handleSignup = async () => {
    // Perform signup logic
    await AsyncStorage.setItem('email', email);
    await AsyncStorage.setItem('password', password);
    setLoggedIn(true);
  };

  const handleLogout = async () => {
    // Perform logout logic
    await AsyncStorage.removeItem('email');
    await AsyncStorage.removeItem('password');
    setLoggedIn(false);
  };

  if (loggedIn) {
    return (
      <View style={styles.container}>
        <Text>Welcome to your profile!</Text>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} />
        <Button title="Signup" onPress={handleSignup} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default App;


