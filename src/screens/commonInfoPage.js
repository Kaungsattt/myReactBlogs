import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../store/dataSlice';
import Icon from 'react-native-vector-icons/FontAwesome';
import AuthService from '../services/authService';

const CommonInfoPage = ({ navigation, route }) => {
  const  category  = route.params;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const articles = useSelector(getData);

  useEffect(() => { 
    fetchData();
  }, [category]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await AuthService.newsByCategory(category);
      const responseData = response?.data?.articles;
      //console.log("respo Datais ;;" , responseData);
      setItems(responseData);
    } catch (error) {
      console.log("Error fetching data:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDetailsPress = (item) => {
    navigation.navigate('DetailsPage', { item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handleDetailsPress(item)}
    >
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>
          {item?.title}
        </Text>
        {item?.image && (
          <Image
            source={{ uri: item.image }}
            resizeMode="cover"
            style={styles.image}
          />
        )}
        <View style={styles.cardFooter}>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="youtube" size={20} color="#dc143c" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="info" size={20} color="#173153" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
        <TouchableOpacity onPress={fetchData} style={styles.retryButton}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Icon name="newspaper-o" size={30} color="#000" style={styles.icon} />
          {/*<Text style={styles.title}>{category.charAt(0).toUpperCase() + category.slice(1)} News</Text>*/}
        </View>
        
        <FlatList
          data={items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          scrollEnabled={false}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No articles found</Text>
            </View>
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  retryButtonText: {
    color: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    textAlign : "center",
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1d1d1d',
    marginLeft: 10,
    textAlign : "center"
  },
  icon: {
    marginRight: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 12,
    color: '#333',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
    padding: 5,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
});

export default CommonInfoPage;