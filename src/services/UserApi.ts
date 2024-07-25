import axios from 'axios';
import { API_BASE_URL } from '../const/AxoisBase';

export const TokenExpire = async () => {
  try {
    const response = await API_BASE_URL.get('/auth/reissue');
    const ACCESS_TOKEN = response.data.accessToken;
    localStorage.setItem('accessToken', ACCESS_TOKEN);
  } catch (error) {
    console.error('토큰 재요청 실패');
  }
};

export async function Logout() {
  const token = localStorage.getItem('accessToken');
  try {
    await axios.get('https://kapi.kakao.com/v1/user/logout', {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error('로그아웃 실패');
  }
}
