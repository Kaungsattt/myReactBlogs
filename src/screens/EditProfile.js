import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'


const EditProfile = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('userInfo');
        if (storedData) {
          const user = JSON.parse(storedData);
          setName(user.name);
          setEmail(user.email);
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to load user info.');
      }
    };
    
    loadUserData();
  }, []);

  // Save updated data to AsyncStorage
  const handleSave = async () => {
    if (!name || !email) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    try {
      const updatedUser = { name, email };
      await AsyncStorage.setItem('userInfo', JSON.stringify(updatedUser));
      Alert.alert('Success', 'Profile updated successfully!');
      navigation.goBack(); 
    } catch (error) {
      Alert.alert('Error', 'Failed to update profile.');
    }
  };
  return (
    <View>
      <Text>EditProfile Page </Text>

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

      <TextInput
        style={styles.input}
        value={password}
        placeholder='Enter your Name'
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity
        //style={styles.btn}
        onPress={handleSave}
      >  
          <Text >Update . .</Text>
      </TouchableOpacity>
    </View>
  )
}

export default EditProfile