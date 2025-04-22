import {  Alert } from 'react-native'
import NetInfo from "@react-native-community/netinfo";
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { BASE_URL } from '../../utilis/constant/constant'

export const defaultAxios = axios.create({
  //import base url 
  baseURL: BASE_URL,
  headers: {
    "Content-Type": 'application/json'
  }
});

defaultAxios.interceptors.request.use(
  async (config) => {
    const access_token = await AsyncStorage.getItem('auth');
    //console.log("AcessTokenIs ::",access_token);
    config.headers.Authorization = `Bearer ${access_token}`;
    // Check network connectivity
    const isConnected = await isNetworkConnect();
    if (!isConnected) {
      Alert.alert("Network Error", "No internet Connection");
      throw new axios.Cancel('No internet Connections')
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export const isNetworkConnect = async () => {
  const state = await NetInfo.fetch();
  return state.isConnected;
}