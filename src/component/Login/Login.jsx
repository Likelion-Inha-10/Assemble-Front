import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Header 밑 공간
const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 213px;
`;

// '로그인' 텍스트
const LogInText = styled.div`
  font-size: 24px;
  font-weight: 700;

  font-family: "Noto Sans KR";
  font-style: normal;
`;

// 박스들을 포함하고 있는 박스
const MiddleContainer = styled.div`
  width: 435px;

  margin-top: 29px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 아이디 입력 박스
const InputId = styled.div`
  /* 아이디 입력 박스에서 input 태그에 대한 css */
  .inputId {
    width: 435px;
    height: 61.67px;

    padding-left: 20.02px;

    box-sizing: border-box;
    border: 1px solid #000000;
    border-radius: 10px;

    text-align: left;
  }
`;

// 비밀번호 입력 박스
const InputPw = styled.div`
  /* 비밀번호 입력 박스에서 input 태그에 대한 css */
  .inputPw {
    width: 435px;
    height: 61.67px;

    margin-top: 11.08px;
    padding-left: 20.02px;

    box-sizing: border-box;
    border: 1px solid #000000;
    border-radius: 10px;

    text-align: left;
  }
`;

// '아이디찾기 | 비밀번호 찾기' 있는 부분 박스
const FindContainer = styled.div`
  width: 435px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;

  margin-top: 12.6px;
`;

// '아이디 찾기' 텍스트
const FindId = styled.div`
  font-size: 12px;
  font-weight: 400;

  font-family: "Noto Sans KR";
  font-style: normal;
`;

// 아이디 찾기와 비밀번호 찾기 사이의 bar ' | ' 텍스트
const SmallBar = styled.div`
  font-size: 12px;
  font-weight: 400;

  font-family: "Noto Sans KR";
  font-style: normal;
`;

// '비밀번호 찾기' 텍스트
const FindPw = styled.div`
  font-size: 12px;
  font-weight: 400;

  font-family: "Noto Sans KR";
  font-style: normal;
`;

// 파란색 로그인 버튼
const LoginButton = styled.div`
  width: 435px;
  height: 61.67px;

  margin-top: 50px;

  background-color: #073255;
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

// 회원가입 버튼
const SignInButton = styled.div`
  width: 435px;
  height: 61.67px;

  margin-top: 12.4px;

  background-color: #f5f5f5;
  color: #073255;
  border: 1px solid #073255;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

// Header 밑 컴포넌트

const LogIn = () => {
  const navigate = useNavigate();

  const goToSign = () => {
    navigate("/SignIn");
  }

  return (
    <>
      {/* 전체 박스 */}
      <Container>
        {/* 로그인 텍스트 */}
        <LogInText>로그인</LogInText>
        {/* 박스들을 포함하고 있는 박스 */}
        <MiddleContainer>
          {/* 아이디 입력 박스 */}
          <InputId>
            <input
              class="inputId"
              type={"text"}
              placeholder={"아이디를 입력해주세요"}
            ></input>
          </InputId>
          {/* 비밀번호 입력 박스 */}
          <InputPw>
            <input
              class="inputPw"
              type={"password"}
              placeholder={"비밀번호를 입력해주세요"}
            ></input>
          </InputPw>
          <FindContainer>
            <FindId>아이디 찾기</FindId>
            <SmallBar>&nbsp;|&nbsp;</SmallBar>
            <FindPw>비밀번호 찾기</FindPw>
          </FindContainer>
          <LoginButton>로그인</LoginButton>
          <SignInButton onClick={goToSign}>회원가입</SignInButton>
        </MiddleContainer>
      </Container>
    </>
  );
};

export default LogIn;
