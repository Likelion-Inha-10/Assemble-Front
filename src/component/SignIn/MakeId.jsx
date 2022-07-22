import React from "react";
import styled from "styled-components";

// 상단바 밑에 부분 전체를 포함하고 있는 박스
const Container = styled.div`
  width: 100%;
  height: 100vh;

  font-family: "Noto Sans KR";
  font-style: normal;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 80px;

  hr {
    width: 500px;
  }
`;

const SignInText = styled.div`
  width: 100px;
  height: 35px;

  font-weight: 700;
  font-size: 24px;
  line-height: 35px;

  margin-bottom: 30px;
`;

const NoticeText = styled.div`
  width: 500px;
  height: 17px;

  font-weight: 400;
  font-size: 12px;
  line-height: 17px;

  text-align: end;
`;

const Box = styled.div`
  width: 500px;

  display: flex;
  align-items: center;

  margin-top: 18px;
`;

const Text = styled.div`
  width: 130px;
  height: 23px;

  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
`;

const Input = styled.input`
  width: 256px;
  height: 43px;

  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 3px;

  padding-left: 10px;
`;

const DupButton = styled.button`
  width: 80px;
  height: 43px;

  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #073255;
  border-radius: 8px;

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #073255;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 20px;
`;

const CertificButton = styled.button`
  width: 102px;
  height: 43px;

  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: rgba(0, 0, 0, 0.5);

  margin-left: 10px;
`;

const GenderBox = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

const JoinButton = styled.div`
  width: 190px;
  height: 43px;

  background: #073255;
  border-radius: 3px;

  font-weight: 400;
  font-size: 18px;
  line-height: 26px;

  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 30px;
`;

const MakeId = () => {
  return (
    <>
      <Container>
        <SignInText>회원가입</SignInText>
        <NoticeText>
          <span style={{ color: "rgba(253, 9, 9, 0.5)" }}>*</span> 필수 입력사항
        </NoticeText>
        <hr></hr>
        <Box>
          <Text>
            아이디 <span style={{ color: "rgba(253, 9, 9, 0.5)" }}>*</span>
          </Text>
          <Input
            type={"text"}
            placeholder="6자 이상의 영문과 숫자를 조합"
          ></Input>
          <DupButton>중복확인</DupButton>
        </Box>
        <Box>
          <Text>
            비밀번호 <span style={{ color: "rgba(253, 9, 9, 0.5)" }}>*</span>
          </Text>
          <Input type={"text"} placeholder="비밀번호를 입력해주세요"></Input>
        </Box>
        <Box>
          <Text>
            비밀번호 확인{" "}
            <span style={{ color: "rgba(253, 9, 9, 0.5)" }}>*</span>
          </Text>
          <Input
            type={"text"}
            placeholder="비밀번호를 한번 더 입력해주세요"
          ></Input>
        </Box>
        <Box>
          <Text>
            이름 <span style={{ color: "rgba(253, 9, 9, 0.5)" }}>*</span>
          </Text>
          <Input type={"text"} placeholder="이름을 입력해주세요"></Input>
        </Box>
        <Box>
          <Text>
            이메일 <span style={{ color: "rgba(253, 9, 9, 0.5)" }}>*</span>
          </Text>
          <Input type={"text"} placeholder="예 : assemble@liklion.org"></Input>
          <DupButton>중복확인</DupButton>
        </Box>
        <Box>
          <Text>
            휴대폰 <span style={{ color: "rgba(253, 9, 9, 0.5)" }}>*</span>
          </Text>
          <Input type={"text"} placeholder="숫자만 입력해주세요"></Input>
          <CertificButton>인증번호 받기</CertificButton>
        </Box>
        <Box>
          <Text>성별</Text>
          <GenderBox>
            <div class="manRadio">
              <input type="radio" id="man" name="gender" value="man"></input>
              <label for="man">남자</label>
            </div>
            <div class="womanRadio">
              <input
                type="radio"
                id="woman"
                name="gender"
                value="woman"
              ></input>
              <label for="woman">여자</label>
            </div>
            <div class="nothingRadio">
              <input
                type="radio"
                id="nothing"
                name="gender"
                value="nothing"
              ></input>
              <label for="nothing">선택안함</label>
            </div>
          </GenderBox>
        </Box>
        <Box style={{ marginBottom: "20px" }}>
          <Text>생년월일</Text>
          <Input
            type={"text"}
            placeholder="YYYY       /       MM       /       DD"
          ></Input>
        </Box>
        <hr></hr>
        <JoinButton>가입하기</JoinButton>
      </Container>
    </>
  );
};

export default MakeId;
