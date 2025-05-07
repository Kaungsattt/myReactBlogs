import { View, Text, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import AuthService from '../services/authService';
import { getData, setData } from '../store/dataSlice';
import { useDispatch, useSelector } from 'react-redux';

const ShowNews = ({ navigation }) => {
  const [item, setItem] = useState([]);
  const dispatch = useDispatch();
  const articles = useSelector(getData);

  useEffect(() => {
    newsByCategory();
    //fetchNewsData();
  }, [dispatch]);

  //const fetchNewsData = async () => {
  //  try {
  //    const response = await AuthService.createNews('query');
  //    const newsArticles = response.data.articles || [];
  //    //console.log("new articles are::" , newsArticles);
  //    // dispatch the list Dta
  //    dispatch(setData(newsArticles));
  //    //console.log("setData is::" ,setData(newsArticles));
  //    
  //  } catch (error) {
  //    console.log('Error fetching news:', error);
  //  }
  //};

  const newsByCategory = async () => {

    const response = await AuthService.newsByCategory("sports");
    //console.log("newsByCategory articles ::", response?.data?.articles);
    setItem(response.data?.articles)
  
  }

  //to Details Page
  const handleDetailsPress = (item) => {
    navigation.navigate('DetailsPage', {item})
  }

  console.log("set item is", item);
  

  const renderItem = ({ item }) => (
    
    <View style={styles.itemContainer}>
      
      <Text style={styles.title}>{item?.content}</Text>
      <Text style={styles.title}>{item?.description}</Text>
      <Text style={styles.title}>{item.title}</Text>
  
      <View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => handleDetailsPress(item)}
      >
        <Text style={styles.btnText}>Details</Text>
      </TouchableOpacity>
      {/*<TouchableOpacity
        style={styles.btn}
        onPress={() => handleDetailsPress(item)}
      >
        <Text style={styles.btnText}>Delete</Text>
      </TouchableOpacity>*/}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Latest News</Text>
      <FlatList
        data={item}
        keyExtractor={( item ,index) => item.index } 
        renderItem={renderItem}
      />

      

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  noData: {
    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
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
    textAlign : "center",
  },
});

export default ShowNews;
