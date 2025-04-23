import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native'
import React, { useEffect,useState,FlatList } from 'react'
import AuthService from '../services/authService';


const ShowNews = () => {
  const [articles, setArticles] = useState([]);
  const [selectedId, setselectedId] = useState();

  useEffect(() => {
    const getNewsData = async () => {
      try {
        const response = await AuthService.createNews('infoNews');
        //console.log("resData is ::",response?.data);
        setArticles(response?.data || []);
      } catch (error) {
        console.log("error is::", error);
        
      }
    }
    getNewsData();
  }, []);
  console.log("articles is ::", articles);
  
  //const renderItem = ({ item }) => {
  //  <View>
  //    <Text>{item.title} </Text>
  //  </View>
  //  
  //}
  
  return (
    <View style={styles.container}>
      <Text >Latest News</Text>

      {/*<FlatList
      data={articles}
        keyExtractor={(item) => item.title.toString()}
        extraData={selectedId}
        renderItem = {renderItem}
      />*/}
    
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    backgroundColor : 'rgba(0, 0, 0, 0.6)'
  },
});

export default ShowNews;

