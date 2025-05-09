import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity,Dimensions } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather';
import React from 'react'

const { width } = Dimensions.get('window');
const CIRCLE_SIZE = width / 2;

const StartingPage = ({navigation}) => {
  

  const items = [
    {
      img: require('../../image/dailyoneNews.jpg'),
      text: 'Daily',
      position: [0, 0],
    },
    {
      img: require('../../image/footballOne.jpg'),
      text: 'Football',
      position: [120, 120],
    },
    {
      img: require('../../image/crimeOne.jpg'),
      text: 'Crime',
      position: [240, 0],
    },
    {
      img: require('../../image/policticalOne.jpg'),
      text: 'Politics',
      position: [360, 120],
    },
  ];
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.content}>
        <Text style ={styles.title}>New Blogs</Text>
        <View style={styles.quoteContainer}>
          <Text style={styles.modernSubtitle}>
            "Journalism without a moral position is impossible."
          </Text>
          <Text style={styles.modernSubtitle}>
            "It's not the destination, it's the journey."
          </Text>
        </View>
      </View>

      <View style={styles.circles}>
        {items.map(({ img, text, position: [top, left] }, index) => {
          return (
            <View
              key={index}
              style={[
                styles.circle,
                { top, left, zIndex: items.length - index },
              ]}>
              <Image source={img} style={styles.circleImage} />
              <Text style={styles.circleText}>{text}</Text>
            </View>
          );
        })}
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home')
        }}>
        <View style={styles.button}>
         
          <FeatherIcon name="arrow-right" color="#fff" size={24} />
        </View>
      </TouchableOpacity>

      {/*<TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <FeatherIcon name="arrow-right" color="#fff" size={24} />
        <Text style={styles.buttonText}>Read more news...</Text>
      </TouchableOpacity>*/}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }, 
  content: {
    justifyContent: "center",
    padding: 24,
    
  },
  title: {
    fontSize: 40,
    fontWeight: "800",
    color: '#1a1a1a',
    textAlign: "center",
    marginVertical: 20,
    letterSpacing : 2,
  },
  quoteContainer: {
    borderLeftWidth: 3,
    borderLeftColor: '#ff4757',
    paddingLeft: 16,
  },

  modernSubtitle: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
    lineHeight: 22,
    marginBottom: 8,
  },

  circles: {
    position: 'relative',
    flex: 1,
    marginHorizontal: 24,
  },

  button: {
    position: 'absolute',
    left: width / 2 - 60 / 2,
    bottom: 0,
    width: 60,
    height: 60,
    borderRadius: 9999,
    backgroundColor: '#323141',
    alignItems: 'center',
    justifyContent: 'center',
  },

  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    backgroundColor: 'white',
    borderRadius: 9999,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  circleImage: {
    width: '100%',
    height: '100%',
    borderRadius: 9999,
  },
  circleText: {
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    textTransform: 'uppercase',
    top: CIRCLE_SIZE / 2 - 20 / 2,
    fontSize: 20,
    lineHeight: 20,
    fontWeight: '900',
    color: '#dc143c',
  },

})
export default StartingPage