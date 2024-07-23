import React, { useEffect } from 'react';
import { Loading } from '../../components/utils/Loading';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function KakaoAuth() {
  const navigate = useNavigate();
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    if (code) {
      const FetchData = async () => {
        try {
          const response = await axios.post(`http://배포주소:8080/v1/auth/login/kakao?code=${code}`);
          console.log(response.data);

          const ACCESS_TOKEN = response.data.accessToken;
          const REFRESH_TOKEN = response.data.refreshToken;
          localStorage.setItem('accessToken', ACCESS_TOKEN);
          localStorage.setItem('refreshToken', REFRESH_TOKEN);
          navigate('/main');
        } catch (error) {
          console.error('카카오 로그인 실패', error);
          navigate('/');
        }
      };
      FetchData();
    }
  }, []);
  return <Loading />;
}
