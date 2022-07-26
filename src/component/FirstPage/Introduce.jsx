import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 전체 배경
const Background = styled.div`
  width: 100%;
  height: 919px;

  background: linear-gradient(
    250.94deg,
    #d7efff 10.7%,
    rgba(255, 255, 255, 0) 89.72%
  );
`;

// 오른쪽 배경 이미지 감싸는 박스
const BackImageBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: flex-end;
`;

// 오른쪽 배경 이미지
const BackImage = styled.img`
  width: 700px;
  height: 650px;
  padding-bottom: 150px;
`;

// 텍스트 부분 전체 감싸는 박스
const TextBox = styled.div`
  position: absolute;
  width: 698px;
  height: 362px;
  left: 71px;
  top: 120px;
`;

// 큰 글씨
const BigText = styled.div`
  position: absolute;
  width: 698px;
  height: 192px;
  left: 71px;
  top: 202px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 65px;
  letter-spacing: 0.1em;

  color: #000000;
`;

// 작은 글씨
const SmallText = styled.div`
  position: absolute;
  width: 420px;
  height: 52px;
  left: 71px;
  top: 400px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;

  color: #000000;
`;

// 회원가입 버튼
const SignIn = styled.div`
  box-sizing: border-box;
    
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 10px 20px;
  gap: 10px;

  position: absolute;
  width: 129px;
  height: 55px;
  left: 71px;
  top: 509px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border: 1px solid rgba(0, 0, 0, 0.6);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

// 로그인 버튼
const Login = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 10px 20px;
  gap: 10px;

  position: absolute;
  width: 129px;
  height: 55px;
  left: 242px;
  top: 509px;
  color: white;

  background: #075995;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;


// 웹 서비스 소개 페이지 메인 부분
// 회원가입 버튼을 누르면 회원가입 페이지로 이동
const Introduce = () => {
  const navigate = useNavigate();

  const goToSign = () => {
    navigate("/SignIn");
  }

  const goToLogIn = () => {
    navigate("/LogIn");
  }

  return (
    <>
      <Background>
        <TextBox>
          <BigText>
            효율적인 협업관리{" "}
            <span style={{ color: "#073255", fontSize: "65px" }}>ASSEMBLE</span>{" "}
            과 함께
          </BigText>
          <SmallText>
            ASSEMBLE은 쉽고, 편리한 협업을 지원하는 서비스입니다 지금 바로
            ASSEMBLE 을 시작하세요
          </SmallText>
          <SignIn onClick={goToSign}>회원가입</SignIn>
          <Login onClick={goToLogIn}>로그인</Login>
        </TextBox>
        <BackImageBox>
          <BackImage src={"/img/background.png"}></BackImage>
        </BackImageBox>
      </Background>
    </>
  );
};

export default Introduce;
