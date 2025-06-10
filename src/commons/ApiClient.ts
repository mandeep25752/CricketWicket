/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosInstance} from 'axios';

const ApiClient = () => {
  const defaultOptions = {
    baseURL: 'https://unofficial-cricbuzz.p.rapidapi.com/',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': '1d2b58bd33mshce4ed7d839ab792p1a3301jsn4675d09e0f4e',
      'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com',
    },
  };

  const instance: AxiosInstance = axios.create(defaultOptions);

  instance.interceptors.request.use(async request => {
    const data: any = await AsyncStorage.getItem('access-token');
    const accessToken = data;
    console.log(accessToken);
    if (accessToken) {
      request.headers = {
        ...request.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }
    return request;
  });

  return instance;
};

export default ApiClient();
