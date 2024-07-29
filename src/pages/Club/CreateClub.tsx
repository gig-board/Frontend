import React from 'react';
import {
  DetailText,
  GlobalContainer,
  GlobalWrapper,
  PlainText,
  ShortInput,
  SmallText,
  SubmitButton,
} from '../../styles/GlobalStyle';
import { InputWrapper } from '../BandPromotion/PromotionStyle';
import { CreateContainer, StyledCheckbox } from './ClubStyle';
import SessionIcon from '../../const/SelectSession';
import { useNavigate } from 'react-router-dom';

export default function CreateClub() {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(false);

  const handleCreate = async () => {
    navigate(`/createclub/${1}`);
  };

  return (
    <GlobalWrapper>
      <GlobalContainer>
        <InputWrapper>
          {page === false ? (
            <>
              <CreateContainer className="mt-[25vh]">
                <PlainText>동아리 등록하기</PlainText>
                <DetailText className="mb-3">내 동아리의 이름은 무엇인가요?</DetailText>
                <ShortInput />
              </CreateContainer>
              <span className="w-full flex justify-end mt-3">
                <SubmitButton onClick={() => setPage(true)}>커스텀 설정하기</SubmitButton>
              </span>
            </>
          ) : (
            <>
              <CreateContainer className="mt-[15vh]">
                <PlainText>세션을 선택해주세요</PlainText>
                <DetailText className="mb-4">내 동아리에 맞는 세션을 선택해주세요</DetailText>
                <SessionIcon />
                <DetailText className="my-4">우리 동아리의 실력을 세분화해주세요</DetailText>
                <span className="flex items-center gap-2 mb-2">
                  <StyledCheckbox /> <SmallText>우리 동아리는 HIGH, LOW 2단계로 실력을 구분하겠습니다.</SmallText>
                </span>
                <span className="flex items-center gap-2 mb-2">
                  <StyledCheckbox />
                  <SmallText>우리 동아리는 HIGH, MIDDLE, LOW 3단계로 실력을 구분하겠습니다.</SmallText>
                </span>
                <span className="flex items-center gap-2 mb-2">
                  <StyledCheckbox />
                  <SmallText>우리 동아리는 MASTER, HIGH, MIDDLE, LOW 4단계로 실력을 구분하겠습니다.</SmallText>
                </span>
              </CreateContainer>
              <span className="w-full flex justify-end mt-3 mb-1">
                <SubmitButton onClick={handleCreate}>팀원 구성하기</SubmitButton>
              </span>
            </>
          )}
        </InputWrapper>
      </GlobalContainer>
    </GlobalWrapper>
  );
}
