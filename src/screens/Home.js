import { View, Text, StyleSheet, Button,TouchableOpacity,Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../store/dataSlice';
import { SafeAreaView ,ScrollView} from 'react-native';
import AuthService from '../services/authService';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
  const toPage = (category) => {
    console.log("updateitem::" , category);
    navigation.navigate('commonInfoPage',{ category });
  } 
  return (
    <SafeAreaView>
      <View contentContainerStyle={styles.container}>
        <Text style={styles.title}>
        <Icon
          name="home"
            size={30} color="black" 
            style={styles.icon} />
          Home Page</Text>
        {/*card */}
        <TouchableOpacity
          onPress={toPage("business")}
        >
          <Text>Business</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toPage("health")}
        >
          <Text>Health</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toPage("entertainment")}
        >
          <Text>Entertainment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toPage("nation")}
        >
          <Text>Nation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toPage("science")}
        >
          <Text>Science</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toPage("technology")}
        >
          <Text>Technology</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={toPage("world")}
        >
          <Text>World</Text>
        </TouchableOpacity>  
      </View>
    </SafeAreaView>

  )
}
export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    marginBottom : 50,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#1d1d1d",
    marginBottom: 12,
    textAlign: "center",
    marginVertical : 20,
  },

  icon: {
    marginHorizontal: 10,
    
  },

  Image: {
    width: "100%",
    height: 200,
    borderRadius : 20,
  },

  card: {
    borderBottomWidth: 1,
    marginBottom: 16,
    borderColor: "#e3e3e3",
   
  },

  cardTitle: {
    fontWeight: "700",
    fontSize: 21,
    lineHeight : 24,
  },

  cardbody: {
    paddingVertical : 16,
  },

  cardRow: {
    flexDirection: "row",
    marginHorizontal: 15,
    justifyContent: "space-evenly",
    alignItems : "center"
    
  },

  cardRowItem: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop : 15,
    justifyContent: 'space-between',
    alignItems : "center",
  }
  
})