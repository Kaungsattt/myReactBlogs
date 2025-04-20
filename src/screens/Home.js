import { View, Text,StyleSheet,Button } from 'react-native'
import React, { useState } from 'react'

const Home = ({ navigation }) => {
  const [user, setUser] = useState('');

  
  return (
    <View style={styles.container}>
      <Button style={styles.profileBtn}
        title="Edit Profile"
        onPress={() => navigation.navigate('EditProfile')} />
      <Text>Home</Text>

      

    </View>

    
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    backgroundColor : 'rgba(0, 0, 0, 0.6)'
  },

  profileBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  }
})