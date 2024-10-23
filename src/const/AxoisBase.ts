import axios from 'axios';
import { TokenExpire } from '../services/UserApi';

export const API_BASE_URL = axios.create({
  baseURL: 'http://localhost:8090/gateway/user/hello', // 배포
});

//요청 인터셉터
API_BASE_URL.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },

  error => {
    return Promise.reject(error);
  },
);
//응답 인터셉터
API_BASE_URL.interceptors.response.use(
  //응답 데이터 그대로 반환
  response => {
    return response;
  },
  error => {
    // 오류 처리
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized or token expired');
      TokenExpire();
    }
    return Promise.reject(error);
  },
);
