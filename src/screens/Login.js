import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation, route }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setName(route?.params?.name);
    setEmail(route?.params?.email);
  }, []);

  const handleLogin = async () => {
    try {
      const getUser = await AsyncStorage.getItem('userInfo');
      if (getUser) {
        const dataUser = JSON.parse(getUser);
        if (dataUser.email === email && dataUser.password === password) {
          Alert.alert('Success', 'Login successful!');
          navigation.navigate('Home', { name, email });
          return;
        }
      }
      Alert.alert('Error', 'Invalid email or password');
    } catch (error) {
      Alert.alert('Error', 'Could not log in');
    }

    if (!name || !email) {
      Alert.alert('Error', 'Need to fill required fields');
    }
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        resizeMode="cover"
        source={require('../../image/download.jpg')}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>ReactBlogs!</Text>
          <TextInput
            style={styles.input}
            value={email}
            placeholder="Enter your Email"
            placeholderTextColor="gray"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your Password"
            placeholderTextColor="gray"
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
          />
          <View style={styles.linkContainer}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.linkText}> Create an account</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btn} onPress={handleLogin}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    width: '90%',
    backgroundColor: 'rgba(103, 101, 101, 0.9)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  linkContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  linkText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#006400',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
