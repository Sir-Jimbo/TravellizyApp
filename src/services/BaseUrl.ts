import axios from 'axios';

export function BaseURL() {
   return (axios.defaults.baseURL = 'https://fakestoreapi.com');
}