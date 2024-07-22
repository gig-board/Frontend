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
          const response = await axios.get(`http://배포주소:8080/api/kakao/callback?code=${code}`);

          console.log(response.data);
          // 사용자 정보를 로컬 스토리지에 저장하거나 상태 관리
          const ACCESS_TOKEN = response.data.accessToken;
          localStorage.setItem('token', ACCESS_TOKEN);
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
