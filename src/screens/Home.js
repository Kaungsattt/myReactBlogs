import { View, Text,StyleSheet,Button } from 'react-native'
import React, { useState } from 'react'
import EditProfile from './EditProfile';

const Home = ({ navigation, route }) => {
  
  const name = route?.params?.name;
  //const email = route.params.email;
  
  return (
    <View style={styles.container}>
      {/*<View style={styles.buttonContainer}>
        <Button
          title={EditProfile}
          onPress={() => navigation.navigate('EditProfile')}
        />
      </View>*/}

      <View style={styles.buttonContainer}>
        <Button
          title='showNews'
          onPress={()=> navigation.navigate('ShowNews')}
        />
      </View>
      <Text>Home</Text>
    </View>    
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    backgroundColor : 'rgba(0, 0, 0, 0.6)'
  },

  buttonContainer: {
    position: 'absolute',
    top: 40,
    right: 10,
    zIndex: 1,
  }
})