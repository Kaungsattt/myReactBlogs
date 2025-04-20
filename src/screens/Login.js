import { View, Text, TextInput, StyleSheet,Alert,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation,route}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  //useEffect(() => {
  //  setName(route?.params?.name)
  //  setEmail(route?.params?.email)
  //},)

  //{toRegPage}

  //{submitBtn}
  const handleLogin = async() => {
    if (!name || !email) {
      Alert.alert("Need to fill require fields");
    }
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Welcome to ReactBlogs!</Text>
      
      <TextInput
        style={styles.input}
        value={name}
        placeholder='Enter your Name'
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.input}
        value={email}
        placeholder='Enter your Name'
        onChangeText={(text) => setEmail(text)}
      />

      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={{ color: 'blue', fontWeight: 'bold' }}>Create an account</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
          style={styles.btn}
          onPress={handleLogin}
      >  
        <Text style= {styles.btnText}>Login...</Text>
      </TouchableOpacity>
    
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    backgroundColor : 'rgba(0, 0, 0, 0.6)'

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Inline style example
  },
  image: {
      width: 100,
      height: 100,
      marginVertical: 20,
  },
  input: {
      width: '80%',
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
  },

  btn: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 10,
    marginTop : 20,
  },

  btnText: {
    color: "white"
  },

})