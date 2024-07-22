import React from 'react';
import { GlobalWrapper } from '../../styles/GlobalStyle';
import { MapContainer, MapWrapper, ShareButton } from './PlaceStyle';
import KakaoMap from '../../components/utils/KakaoMap';

function SearchPlace() {
  return (
    <GlobalWrapper>
      <MapWrapper>
        <MapContainer>
          <KakaoMap>
            <ShareButton>나의 장소 공유하기</ShareButton>
          </KakaoMap>
        </MapContainer>
      </MapWrapper>
    </GlobalWrapper>
  );
}

export default SearchPlace;
