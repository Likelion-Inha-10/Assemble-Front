import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// todo 리스트 생성 컴포넌트
// 수정 필요 (페이지 연결 식으로 하는 방법도 고려중)

//전체 페이지 박스
const Body = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

// 전체 박스
const Container = styled.div`
  width: 280px;
  height: 350px;

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

// 제목 적는 부분
const Input = styled.input`
  width: 200px;
  height: 30px;

  border: 0px;
  border-bottom: 1px solid #073255;
  /* box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25); */

  font-weight: 400;
  font-size: 18px;
  line-height: 26px;

  opacity: 0.3;
  text-align: center;

  margin-top: 20px;
`;

// 내용 적는 부분
const TextArea = styled.textarea`
  width: 200px;
  height: 150px;

  border: 1px solid #073255;
  /* box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25); */

  font-weight: 400;
  font-size: 18px;
  line-height: 26px;

  opacity: 0.3;
  text-align: center;

  margin-top: 20px;

  resize: none;
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

const MakeToDo = ({ apiUrl }) => {
  const [title, setTitle] = useState(""); // 제목 값 담는 변수
  const [body, setBody] = useState(""); // 내용 값 담는 변수
  const navigate = useNavigate();

  // 제목 값 저장
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    // console.log(e.target.value);
  };

  // 내용 값 저장
  const onChangeBody = (e) => {
    setBody(e.target.value);
  };

  // 취소 버튼 클릭 시 userpage로 돌아감
  const onClickCancel = () => {
    navigate("/userpage");
  };

  // 저장 버튼 클릭 시 데이터 저장되고 userpage로 돌아감
  const onClickSave = () => {
    axios
      .post(`${apiUrl}/create_tdl/`, {
        title: title,
        body: body,
      })
      .then(() => {
        navigate("/userpage");
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  return (
    <>
    <Body>
      <Container>
        <TopBox>
          <Top />
          <XButton>X</XButton>
        </TopBox>
        <Input
          type={"text"}
          placeholder={"제목"}
          onChange={onChangeTitle}
          value={title}
        />
        <TextArea
          placeholder="내용"
          onChange={onChangeBody}
          value={body}
        ></TextArea>
        <ButtonBox>
          <CancelButton onClick={onClickCancel}>취소</CancelButton>
          <SaveButton onClick={onClickSave}>저장</SaveButton>
        </ButtonBox>
      </Container>
    </Body>
    </>
  );
};

export default MakeToDo;
