import { View, Text, StyleSheet, Button,TouchableOpacity,Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../store/dataSlice';
import { SafeAreaView ,ScrollView} from 'react-native';
import AuthService from '../services/authService';
import Icon from 'react-native-vector-icons/FontAwesome';




const Home = ({ navigation }) => {

  const [item, setItem] = useState([]);
  const dispatch = useDispatch();
  const articles = useSelector(getData);

  useEffect(() => { 

    fetchData();

  },[dispatch]);

  const fetchData = async () => {
    try {
      const response = await AuthService.newsByCategory("sports");
      const responseData = response?.data?.articles;
      setItem(responseData);
      
    } catch (error) {
      console.log("Error is::" , error);
    }
  }
  //showDetails 
  const handleDetailsPress = (item) => {
    //console.log("handlebeforepress::" , {item});
    navigation.navigate('DetailsPage', { item });
  }
  //flat list render item 
  const renderItem = ({ item }) => 
     (
    <TouchableOpacity
      onPress={handleDetailsPress(item)}
    >
      <View> 
      <Text style={styles.cardTitle}>
        {item?.title}
      </Text>
      <View style={styles.cardbody} >
      <Image
        source = {{uri: item?.image}}
        resizemode = "contain"
        style = {styles.Image}
        />
      {/*card body && Icon*/}
      <View style={styles.cardRow}>
          <View style={styles.cardRowItem}>
            
            <TouchableOpacity><Icon name="youtube"
              size={20} color="#dc143c" />
            </TouchableOpacity>

            <TouchableOpacity><Icon name="info"
              size={20} color="#173153" />
            </TouchableOpacity>
            
          </View>
      </View>
      </View>
    </View>
    </TouchableOpacity>
    )
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>
        <Icon
          name="home"
            size={30} color="black" 
            style={styles.icon} />
          Home Page</Text>
        {/*card */}
        <View style= {styles.card}>
            <FlatList
              data={item}
              keyExtractor={( item ,index) => item.index } 
              renderItem={renderItem}
            />
        </View>
        {/*{<View style={styles.buttonContainer}>
        <Button
          title='showNews'
          onPress={()=> navigation.navigate('ShowNews')}
        />
        </View>}*/}

      </ScrollView>
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