const REST_API_KEY = 'ae11385695952793834fa6be545ea908';
const REDIRECT_URI = 'http://localhost:3000/api/kakao/callback';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
