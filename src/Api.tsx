import axios from 'axios';
const BASE_URL = 'https://test.textcode.co.in/api/';
// export const RegisterApi = BASE_URL + 'hello-gravity/api/register';
// export const LoginApi = BASE_URL + 'https://www.samajutkarsh.com/hello-gravity/api/sign_in';
// export const LoginApi = BASE_URL + 'hello-gravity/api/sign_in';
// export const ForgetPassApi = BASE_URL + 'hello-gravity/api/forgotPassword';

const api = axios.create({
  baseURL: BASE_URL,
});


export const getArticles = async () => {
    // console.log(data);
    const response = await api.get('articles'); // Use POST instead of GET
    console.log(response?.data, 'articles  data from api.tsx');
    return response?.data; // Assuming the response contains the desired data
};