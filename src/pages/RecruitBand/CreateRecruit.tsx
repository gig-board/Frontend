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
  SmallText,
  SubmitButton,
} from '../../styles/GlobalStyle';
import {
  BasicInputContainer,
  IconContainer,
  ImgInputContainer,
  InputContainer,
  InputWrapper,
} from '../BandPromotion/PromotionStyle';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import useImageInput from '../../hooks/useImageInput';
import SelectCalendar from '../../components/utils/Calendar';
import SessionIcon from '../../const/SelectSession';

function CreateRecruit() {
  const { newImg, fileInputRef, handleFileButtonClick, handleFileChange, handleDeleteFileClick } = useImageInput();

  return (
    <GlobalWrapper>
      <GlobalContainer>
        <BasicInputContainer>
          {newImg ? (
            <ImgInputContainer>
              <BandImgContainer src={URL.createObjectURL(newImg)} alt="Preview" />
              <DeleteRoundedIcon
                onClick={handleDeleteFileClick}
                fontSize="large"
                style={{ color: 'white' }}
                className="absolute cursor-pointer"
              />
            </ImgInputContainer>
          ) : (
            <ImgInputContainer onClick={handleFileButtonClick} className="bg-black">
              <PlainText className="text-white cursor-pointer"> 공연 포스터 등록하기</PlainText>
            </ImgInputContainer>
          )}
          <HiddenInput type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} />
          <InputContainer>
            <PlainText className="text-[#ff7417]">나의 밴드 등록하기</PlainText>
            <DetailText>모집 공고 제목을 적어주세요.</DetailText>
            <ShortInput />
            <DetailText>나의 밴드를 소개해주세요.</DetailText>
            <MultiInput />
          </InputContainer>
        </BasicInputContainer>
        <InputWrapper>
          <InputContainer>
            <DetailText>모집 기간을 선택해주세요.</DetailText>
            <SelectCalendar />
            <DetailText className="mt-6">상세 정보를 작성해주세요.</DetailText>
            <SmallText>모집 수준</SmallText>
            <ShortInput />
            <SmallText>모집 세션</SmallText>
            <IconContainer>
              <SessionIcon />
            </IconContainer>
            <SmallText>세션 별 모집 인원</SmallText>
            <span>
              <SmallText>공지 사항</SmallText>
              <NoticeText className="text-end">면접 일정이나 활동일 등의 공지사항을 적어주세요.</NoticeText>
            </span>
            <MultiInput />
          </InputContainer>
          <span className="w-full flex justify-end">
            <SubmitButton className="mt-5">제출하기</SubmitButton>
          </span>
        </InputWrapper>
      </GlobalContainer>
    </GlobalWrapper>
  );
}

export default CreateRecruit;
