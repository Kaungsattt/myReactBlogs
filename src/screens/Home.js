import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
  const categories = [
    'business',
    'health',
    'entertainment',
    'nation',
    'science',
    'technology',
    'world'
  ];

  const toPage = (category) => {
    //console.log("updateitem::", category);
    navigation.navigate('commonInfoPage', { category });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>
          <Icon
            name="home"
            size={30}
            color="red"
            style={styles.icon}
          />
          Categories for News 
        </Text>
        
        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={styles.categoryButton}
              onPress={() => toPage(category)}
            >
              <Text style={styles.categoryText}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 20,
    textAlign: 'center',
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 10,
  },
  categoriesContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  categoryButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
});