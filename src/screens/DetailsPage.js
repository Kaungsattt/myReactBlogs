import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const NewsDetails = ({ route }) => {
  const article = route?.params;
  //console.log("item are ::", article);
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Details Page </Text>
      <Text style={styles.title}>Title : {article.item.title}</Text>
      <Text style= {styles.description}>Description : {article.item.description}</Text>
      <Text style={styles.content}>Contenet : {article.item.content}</Text>
      {/*to ask about image */}
      {/*<Image source={{uri: article.item.urlToImage || article.item.image }} style={styles.image} />*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop : 20 ,
    flex: 1,
    padding: 30,
    backgroundColor: '#121212',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f1f1f1',
    marginBottom: 12,
    color : '#deb887'
  },
  description: {
    fontSize: 16,
    color: '#cccccc',
    marginBottom: 15,
    lineHeight: 22,
  },
  content: {
    fontSize: 15,
    color: '#bbbbbb',
    lineHeight: 22,
    marginTop: 5,
  },
});

export default NewsDetails;
