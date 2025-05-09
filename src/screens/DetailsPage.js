import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

const DetailsPage = ({ route, navigation }) => {
  const {item} = route.params; 
  const [loading, setLoading] = useState(false);

  if (!item) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.errorText}>No article data available</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {item.image && (
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="cover"
        />
      )}

      <Text style={styles.title}>{item.title}</Text>

      <View style={styles.metaContainer}>
        {item.author && (
          <View style={styles.metaItem}>
            <Icon name="user" size={16} color="#666" />
            <Text style={styles.metaText}>{item.author}</Text>
          </View>
        )}
        
        {item.publishedAt && (
          <View style={styles.metaItem}>
            <Icon name="calendar" size={16} color="#666" />
            <Text style={styles.metaText}>
              {new Date(item.publishedAt).toLocaleDateString()}
            </Text>
          </View>
        )}
        
        {item.source?.name && (
          <View style={styles.metaItem}>
            <Icon name="newspaper-o" size={16} color="#666" />
            <Text style={styles.metaText}>{item.source.name}</Text>
          </View>
        )}
      </View>

      <Text style={styles.description}>{item.description}</Text>
      
      {item.content && (
        <Text style={styles.content}>{item.content.replace(/\[\+\d+ chars\]/g, '')}</Text>
      )}

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>
          <Icon name="arrow-left" size={16} /> Back to News
        </Text>
      </TouchableOpacity>

      {loading && (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop : 20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    lineHeight: 30,
  },
  metaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    gap: 15,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  metaText: {
    fontSize: 14,
    color: '#666',
  },
  description: {
    fontSize: 18,
    color: '#444',
    marginBottom: 20,
    lineHeight: 26,
  },
  content: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#1e88e5',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    marginBottom: 20,
  },
  loader: {
    marginVertical: 20,
  },
});

export default DetailsPage;