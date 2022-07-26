import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

// '회원가입' 텍스트
const SignInText = styled.div`
  width: 100px;
  height: 35px;

  font-weight: 700;
  font-size: 24px;
  line-height: 35px;

  margin-bottom: 30px;
`;

// '* 필수 입력사항' 텍스트
const NoticeText = styled.div`
  width: 500px;
  height: 17px;

  font-weight: 400;
  font-size: 12px;
  line-height: 17px;

  text-align: end;
`;

// 입력사항 전체 박스 (ex) 아이디 텍스트 + 아이디 input + 중복확인)
const Box = styled.div`
  width: 500px;

  display: flex;
  align-items: center;

  margin-top: 18px;
`;

// 각 입력사항 텍스트
const Text = styled.div`
  width: 130px;
  height: 23px;

  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
`;

// 각 입력사항 input
const Input = styled.input`
  width: 256px;
  height: 43px;

  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 3px;

  padding-left: 10px;
`;

// 중복확인 버튼
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

// 인증번호 받기 버튼
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

// 성별 선택 박스
const GenderBox = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

// 가입하기 버튼
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
  const [id, setId] = useState(""); // 아이디
  const [pwd, setPwd] = useState(""); // 비밀번호
  const [name, setName] = useState(""); // 이름
  const [email, setEmail] = useState(""); // 이메일
  const [phone, setPhone] = useState(""); // 핸드폰 번호
  const [birth, setBirth] = useState(""); // 생년월일
  const [gender, setGender] = useState(""); // 성별

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePwd = (e) => {
    setPwd(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangeGender = (e) => {
    setGender(e.target.value);
  };

  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/");
  };

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
            onChange={onChangeId}
            value={id}
          ></Input>
          <DupButton>중복확인</DupButton>
        </Box>
        <Box>
          <Text>
            비밀번호 <span style={{ color: "rgba(253, 9, 9, 0.5)" }}>*</span>
          </Text>
          <Input
            type={"text"}
            placeholder="비밀번호를 입력해주세요"
            onChange={onChangePwd}
            value={pwd}
          ></Input>
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
          <Input
            type={"text"}
            placeholder="이름을 입력해주세요"
            onChange={onChangeName}
            value={name}
          ></Input>
        </Box>
        <Box>
          <Text>
            이메일 <span style={{ color: "rgba(253, 9, 9, 0.5)" }}>*</span>
          </Text>
          <Input
            type={"text"}
            placeholder="예 : assemble@liklion.org"
            onChange={onChangeEmail}
            value={email}
          ></Input>
          <DupButton>중복확인</DupButton>
        </Box>
        <Box>
          <Text>
            휴대폰 <span style={{ color: "rgba(253, 9, 9, 0.5)" }}>*</span>
          </Text>
          <Input
            type={"text"}
            placeholder="숫자만 입력해주세요"
            onChange={onChangePhone}
            value={phone}
          ></Input>
          <CertificButton>인증번호 받기</CertificButton>
        </Box>
        <Box>
          <Text>성별</Text>
          <GenderBox onChange={onChangeGender}>
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
            onChange={onChangeBirth}
            value={birth}
          ></Input>
        </Box>
        <hr></hr>
        <JoinButton onClick={goToMain}>가입하기</JoinButton>
      </Container>
    </>
  );
};

export default MakeId;
