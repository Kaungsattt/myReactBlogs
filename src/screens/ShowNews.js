import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native'
import React, { useEffect,useState,FlatList } from 'react'
import AuthService from '../services/authService';
import { getData, setData } from '../store/dataSlice';
import { useDispatch, useSelector } from 'react-redux';



const ShowNews = () => {
  const [articles, setArticles] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector(getData);

  useEffect(() => {
    const getNewsData = async () => {
      try {
        const response = await AuthService.createNews('infoNews');
        //console.log("resData is ::",response?.data);
        setArticles(response?.data.data);
      } catch (error) {
        console.log("error is::", error);
      }
    }
    getNewsData();
  }, []);
  //console.log("articles is ::", articles);

  /*DataSlice*/
  const fetchDataSlice = () => {
    if (index) {
      console.log("data have");
      
      dispatch(setData({ index, setArticles }))
      
    } else {

    }
  }
  
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

