import React from "react";
import styled from "styled-components";
import { useState } from "react";

// todo 리스트 생성 컴포넌트
// 수정 필요 (페이지 연결 식으로 하는 방법도 고려중)

// 전체 박스
const Container = styled.div`
  width: 280px;
  height: 160px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-family: "Noto Sans KR";
  font-style: normal;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 20px;
`;

// 파란색 상단 + x 버튼
const TopBox = styled.div`
  width: 280px;
  height: 33px;

  display: flex;
  align-items: center;
`;

// 파란 상단
const Top = styled.div`
  width: 280px;
  height: 33px;

  background: #075995;

  z-index: 100;
`;

// x 버튼
const XButton = styled.button`
  height: 33px;
  z-index: 200;
  border: 0;
  background: #075995;
  color: white;
  padding-right: 15px;
`;

// 일정 적는 부분
const Input = styled.input`
  width: 200px;
  height: 30px;

  border: 0px;
  border-bottom: 1px solid #073255;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);

  font-weight: 400;
  font-size: 18px;
  line-height: 26px;

  opacity: 0.3;
  text-align: center;

  margin-top: 20px;
`;

// 취소 & 저장 버튼 박스
const ButtonBox = styled.div`
  padding-top: 20px;
  width: 100%;
  text-align: end;
  padding-right: 40px;
`;

// 취소 버튼
const CancelButton = styled.button`
  width: 65px;
  height: 35px;

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #706363;
  background-color: white;

  flex: none;
  order: 0;
  flex-grow: 0;

  border: 0;
  padding-top: 10px;
  padding-bottom: 10px;
`;

// 저장 버튼
const SaveButton = styled.button`
  padding: 5px 15px;
  gap: 10px;

  width: 65px;
  height: 35px;

  background: #075995;
  border-radius: 10px;

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #ffffff;

  flex: none;
  order: 0;
  flex-grow: 0;

  border: 0;
`;

const MakeToDo = () => {
  const [out, setOut] = useState(false);

  const onClickOut = () => {
    setOut(!out);
  };

  return (
    <>
      {out ? (
        ""
      ) : (
        <Container>
          <TopBox>
            <Top />
            <XButton onClick={onClickOut}>X</XButton>
          </TopBox>
          <Input type={"text"} placeholder={"제목 및 시간 추가"} />
          <ButtonBox>
            <CancelButton>취소</CancelButton>
            <SaveButton>저장</SaveButton>
          </ButtonBox>
        </Container>
      )}
    </>
  );
};

export default MakeToDo;
