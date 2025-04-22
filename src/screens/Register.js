import { View, Text,StyleSheet,TextInput ,TouchableOpacity, Alert} from 'react-native';
import { useState } from 'react';
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({navigation}) => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password,setPassword ] = useState();
  const [password_confirmation, setPassword_confirmation] = useState();

  const handleRegister = async () => {

    if (!name ||!phone || !email || !password || !password_confirmation) {
      Alert.alert('fail to Register:');
      return 
    }
    //{taking Userinfo}
    const userInfo = {
      name,
      phone,
      email,
      password,
      password_confirmation,
    };

    try {
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      Alert.alert('Registered successfully');
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Registration failed');
      console.log(error);
    }

  }
  return (
    <View style={styles.container}>
      
        {/*{FormLogin}*/}
        <View style={styles.viewContainer}>
          <Text style={styles.header}> Form Login </Text>
          <Text style={styles.label}>Name :</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter your Name here ....'
            placeholderTextColor="green"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Phone :</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter your Phone here ....'
            placeholderTextColor="green"
            value={phone}
            onChangeText={setPhone}
          />

          <Text style={styles.label}>Email :</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter your Email here ....'
            placeholderTextColor="green"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Password :</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter your Password here ....'
            placeholderTextColor="green"
            value={password}
            onChangeText={setPassword}
          />
          <Text style={styles.label}>password_confirmation :</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter your password_confirmation here ....'
            placeholderTextColor="green"
            value={password_confirmation}
            onChangeText={setPassword_confirmation}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={handleRegister}
          >
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Register

  export const styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",    
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },

    viewContainer: {
      width: '85%',
      padding: 30,
      backgroundColor: 'rgba(255, 255, 255, 0.1)', 
      alignItems: "center",
      borderRadius: 10,
    },
  
    header: {
      fontSize: 24,
      color: '#fff',
      textAlign: 'center',
      marginBottom: 20,
    },
  
    label: {
      fontSize: 16,
      color: '#fff',
      marginBottom: 5,
    },
  
    input: {
      width: '100%',
      height: 40,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      color: '#90ee90',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 15,
    },
  
    btn: {
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      padding: 10,
      width: '100%',
      borderRadius: 5,
    },
  
    btnText: {
      color: "white",
      fontWeight: "bold"
    },
  

  })