import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import AuthService from '../services/authService';
import { getData, setData } from '../store/dataSlice';

const DetailsPage = ({ route, navigation }) => {
  //const showItem = route;
  //console.log("item::" , showItem);

  const [item, setItem] = useState([]);
  const dispatch = useDispatch();
  const articles = useSelector(getData);
  
  //fetching Data 
  useEffect(() => {
    
    fetchData();
  }, [dispatch])
  
  const fetchData = async () => {
    try {
      const response = await AuthService.newsByCategory("sports");
      console.log("detailsRespo:" , response?.data?.articles);
      
      const responseData = response?.data?.articles;
      setItem(responseData);
      
    } catch (error) {
      console.log("Error is::" , error);
    }
  }

  //render Item
  //const renderItem = ({item}) => 
  //   (
  //    <View style={styles.card}>
  //      <Text>{ item.content}</Text>
  //    </View>
  //  )
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>News Details</Text>
      <Text
      >
        {item?.title}
      </Text>
      <Image
        source={{ uri: item?.image  }} 
        style={styles.image}
        resizeMode="cover"
      />
      
      {item.map(({ title, description }, index) => {
        
      } )}

      {/*<FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(item,index) => {item.index}}
      />
      <Text style={styles.title}>{item.title}</Text>*/}

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
    alignItems: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#f1f1f1',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#deb887',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#006400',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DetailsPage;
