import React from 'react';
import { GlobalWrapper, ShortInput } from '../../styles/GlobalStyle';
import { AddPlaceWrpper, MapContainer, MapFloatContainer, MapWrapper, ShareButton, TitleText } from './PlaceStyle';
import KakaoMap from '../../components/utils/KakaoMap';

function SearchPlace() {
  const [shareMode, setShareMode] = React.useState(false);
  const ResistPlace = () => {
    setShareMode(false);
  };
  return (
    <GlobalWrapper>
      <MapWrapper>
        <MapContainer>
          <KakaoMap>
            <MapFloatContainer>
              <span className="flex h-full justify-end items-end w-full">
                {shareMode ? <></> : <ShareButton onClick={() => setShareMode(true)}>나의 장소 공유하기</ShareButton>}
              </span>
              <AddPlaceWrpper open={shareMode}>
                <TitleText>공유하고 싶은 장소명</TitleText>
                <ShortInput />
                <TitleText>내 장소를 나타내는 키워드</TitleText>
                <ShortInput />
                <TitleText>대표 전화 번호</TitleText>
                <ShortInput />
                <TitleText>예약 링크/대표 사이트</TitleText>
                <ShortInput />
                <TitleText>주소</TitleText>
                <ShortInput />
                <TitleText>영업 시간</TitleText>
                <ShortInput />
                <span className="flex w-full justify-end mt-[1rem]">
                  <ShareButton onClick={ResistPlace}>등록하기</ShareButton>
                </span>
              </AddPlaceWrpper>
            </MapFloatContainer>
          </KakaoMap>
        </MapContainer>
      </MapWrapper>
    </GlobalWrapper>
  );
}

export default SearchPlace;
