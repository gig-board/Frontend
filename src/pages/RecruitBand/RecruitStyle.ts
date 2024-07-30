import styled from 'styled-components';

export const FloatContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

export const TopRankContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2vw;
`;

export const AllRecruitContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2vw;
  margin-top: 2vw;
`;
//모집 상세보기

export const DetailContainer = styled.div`
  margin: 0 10%;
`;

export const BandImgContainer = styled.div<{ backgroundImageUrl: string }>`
  width: 100%;
  height: 40vw;
  background-image: url(${props => props.backgroundImageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

export const BandTitleContainer = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
`;
export const BandDetailContainer = styled.div`
  width: 100%;
  height: 45%;
  border: none;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const BandImg = styled.div<{ backgroundImageUrl: string }>`
  width: 13rem;
  height: 13rem;
  background-image: url(${props => props.backgroundImageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;
