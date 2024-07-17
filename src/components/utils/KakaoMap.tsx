import React, { useEffect } from 'react';
import styled from 'styled-components';

declare global {
  interface Window {
    kakao: any;
  }
}

export const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
`;

function KakaoMap() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=40845df7f07ad894386db842b037579d&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
      });
    };
  }, []);

  return <MapContainer id="map"></MapContainer>;
}

export default KakaoMap;
