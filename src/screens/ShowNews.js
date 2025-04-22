import { View, Text ,StyleSheet} from 'react-native'
import React, { useEffect,useState,FlatList } from 'react'
import AuthService from '../services/authService';


const ShowNews = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getNewsData = async () => {
      try {
        const response = await AuthService.createNews('infoNews');
        console.log("resData is ::",response?.data);
        setArticles(response?.data || []);
      } catch (error) {
        console.log("error is::", error);
        
      }
    }
    getNewsData();
  }, []);
  console.log("articles is ::" ,articles);
  
  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };
  

  return (
    <View>
      <Text >Latest News</Text>

      <FlatList
        data={articles}
        keyExtractor={(item) => item.title}
        renderItem={renderItem}
      />
    
    </View>
  )
}


const styles = StyleSheet.create({

});

export default ShowNews;

