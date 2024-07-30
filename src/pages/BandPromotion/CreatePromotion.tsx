import React from 'react';
import {
  BandImgContainer,
  DetailText,
  GlobalContainer,
  GlobalWrapper,
  HiddenInput,
  MultiInput,
  NoticeText,
  PlainText,
  ShortInput,
  SubmitButton,
} from '../../styles/GlobalStyle';
import { BasicInputContainer, InputContainer, InputWrapper, MapContainer, PromotionImgInput } from './PromotionStyle';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import useImageInput from '../../hooks/useImageInput';
import SelectCalendar from '../../components/utils/Calendar';
import KakaoMap from '../../components/utils/KakaoMap';

function CreatePromotion() {
  const { newImg, fileInputRef, handleFileButtonClick, handleFileChange, handleDeleteFileClick } = useImageInput();
  return (
    <GlobalWrapper>
      <GlobalContainer>
        <BasicInputContainer>
          {newImg ? (
            <PromotionImgInput>
              <BandImgContainer src={URL.createObjectURL(newImg)} alt="Preview" />
              <DeleteRoundedIcon
                onClick={handleDeleteFileClick}
                fontSize="large"
                style={{ color: 'white' }}
                className="absolute cursor-pointer"
              />
            </PromotionImgInput>
          ) : (
            <PromotionImgInput onClick={handleFileButtonClick} className="bg-black">
              <PlainText className="text-white cursor-pointer"> 공연 포스터 등록하기</PlainText>
            </PromotionImgInput>
          )}
          <HiddenInput type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} />
          <InputContainer>
            <PlainText className="text-[#ff7417]">나의 공연 등록하기</PlainText>
            <DetailText>공연 제목을 적어주세요.</DetailText>
            <ShortInput />
            <DetailText>나의 밴드를 소개해주세요.</DetailText>
            <ShortInput />
            <DetailText>나의 공연을 소개해주세요</DetailText>
            <MultiInput />
          </InputContainer>
        </BasicInputContainer>
        <InputWrapper>
          <InputContainer>
            <DetailText>공연 기간을 선택해주세요.</DetailText>
            <SelectCalendar />
            <DetailText className="mt-6">공연 장소를 작성해주세요.</DetailText>
            <NoticeText className="text-end">지도에서 찾기</NoticeText>
            <ShortInput />
            <MapContainer>
              <KakaoMap />
            </MapContainer>
          </InputContainer>
          <span className="w-full flex justify-end">
            <SubmitButton className="mt-5">제출하기</SubmitButton>
          </span>
        </InputWrapper>
      </GlobalContainer>
    </GlobalWrapper>
  );
}

export default CreatePromotion;
