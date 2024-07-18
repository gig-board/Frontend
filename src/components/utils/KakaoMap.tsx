import React, { useEffect } from 'react';
import styled from 'styled-components';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    window.kakao.maps.load(() => {
      const container = document.getElementById('map');
      if (container) {
        const options = {
          center: new window.kakao.maps.LatLng(37.49671009920956, 126.95356743986663),
          level: 4,
        };
        const map = new window.kakao.maps.Map(container, options);
        const addMarker = () => {
          const markerPosition = new window.kakao.maps.LatLng(37.49671009920956, 126.95356743986663);
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });
          marker.setMap(map); // 여기서 map을 사용하여 마커를 지도에 추가합니다.
        };

        addMarker();
      }
    });
  }, []);

  return <MapContainer id="map"></MapContainer>;
}

export default KakaoMap;
