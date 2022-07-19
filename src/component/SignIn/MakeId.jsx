import React from "react";
import styled from "styled-components";

// 상단바 밑에 부분 전체를 포함하고 있는 박스
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

// '회원가입' 텍스트 부분
const SignInText = styled.div`
  font-weight: 700;
  font-size: 24px;
`;

// 회원정보를 입력하는 부분을 포함하고 있는 박스
const MiddleContainer = styled.div`
  width: 570px;
  margin-top: 30px;
`;

// '* 필수 입력사항' 부분
const SmallNotice = styled.div`
  font-weight: 400;
  font-size: 12px;
  text-align: end;
`;

// 아이디 입력 부분
const InputId = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;

  /* input 태그에 대한 css */
  .inputId {
    width: 256px;
    height: 43px;
    left: 630px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    text-align: center;
  }

  /* 중복확인 부분에 대한 css */
  .checkId {
    width: 80px;
    height: 43px;
    background: #ffffff;
    border: 1px solid #073255;
    border-radius: 8px;
    color: #073255;
    font-weight: 400;
    font-size: 14px;
  }
`;

// 비밀번호 입력 부분
const InputPwd = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding-right: 165px;

  /* input 태그에 대한 css */
  .inputPwd {
    width: 256px;
    height: 43px;
    left: 630px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    text-align: center;
    margin-left: 55px;
  }
`;

// 비밀번호 확인 입력 부분
const CheckPwd = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding-right: 165px;

  /* input 태그에 대한 css */
  .inputPwd {
    width: 256px;
    height: 43px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    text-align: center;
    margin-left: 18px;
  }
`;

// 이름 입력 부분
const InputName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding-right: 165px;

  /* input 태그에 대한 css */
  .inputName {
    width: 256px;
    height: 43px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    text-align: center;
    margin-left: 18px;
  }
`;

// 이메일 입력 부분
const InputEmail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;

  /* input 태그에 대한 css */
  .inputEmail {
    width: 256px;
    height: 43px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    text-align: center;
  }

  /* 중복확인 부분에 대한 css */
  .checkEmail {
    width: 80px;
    height: 43px;
    background: #ffffff;
    border: 1px solid #073255;
    border-radius: 8px;
    color: #073255;
    font-weight: 400;
    font-size: 14px;
  }
`;

// 전화번호 입력 부분
const InputPhone = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;

  /* input 태그에 대한 css */
  .inputPhone {
    width: 256px;
    height: 43px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    text-align: center;
    margin-left: 24px;
  }

  /* 인증번호 받기 부분에 대한 css */
  .checkPhone {
    width: 102px;
    height: 43px;

    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 8px;
  }
`;

// 성별 선택 부분
const InputGender = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin-top: 15px;

  /* '성별' 텍스트 부분에 대한 css */
  .gendertext {
    flex-basis: 25%;
  }

  /* 선택지를 포함하고 있는 전체 박스에 대한 css */
  .radio {
    flex-basis: 55%;
    display: flex;
    justify-content: space-between;
  }
`;

// 생년월일 입력 부분
const InputBirth = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-right: 165px;

  /* input 태그에 대한 css */
  .inputBirth {
    width: 256px;
    height: 43px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    text-align: center;
    margin-left: 18px;
  }
`;

// 가입하기 버튼 부분
const JoinButton = styled.div`
  width: 190px;
  height: 43px;

  background: #073255;
  border-radius: 3px;

  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

// 상단바 밑에 부분 컴포넌트
const MakeId = () => {
  return (
    <>
      {/* 전체 박스 */}
      <Container>
        {/* '회원가입' 텍스트 부분 */}
        <SignInText>회원가입</SignInText>
        {/* 회원정보 입력부분 박스 */}
        <MiddleContainer>
          {/* '* 필수 입력사항' 텍스트 */}
          <SmallNotice>
            <span style={{ color: "red" }}>*</span> 필수 입력사항
          </SmallNotice>
          <hr></hr>
          {/* 아이디 입력 부분 */}
          <InputId>
            <div>
              아이디<span style={{ color: "red" }}>*</span>
            </div>
            <input
              class="inputId"
              type={"text"}
              placeholder={"6자 이상의 영문과 숫자를 조합"}
            ></input>
            <button class="checkId">중복확인</button>
          </InputId>
          {/* 비밀번호 입력 부분 */}
          <InputPwd>
            <div>
              비밀번호<span style={{ color: "red" }}>*</span>
            </div>
            <input
              class="inputPwd"
              type={"password"}
              placeholder={"비밀번호를 입력해주세요"}
            ></input>
          </InputPwd>
          {/* 비밀번호 확인 입력 부분 */}
          <CheckPwd>
            <div>
              비밀번호 확인<span style={{ color: "red" }}>*</span>
            </div>
            <input
              class="inputPwd"
              type={"text"}
              placeholder={"비밀번호를 한번 더 입력해주세요"}
            ></input>
          </CheckPwd>
          {/* 이름 입력 부분 */}
          <InputName>
            <div>
              이름<span style={{ color: "red" }}>*</span>
            </div>
            <input
              class="inputName"
              type={"text"}
              placeholder={"이름을 입력해주세요"}
            ></input>
          </InputName>
          {/* 이메일 입력 부분 */}
          <InputEmail>
            <div>
              이메일<span style={{ color: "red" }}>*</span>
            </div>
            <input
              class="inputEmail"
              type={"text"}
              placeholder={"예 : assemble@liklion.org"}
            ></input>
            <button class="checkEmail">중복확인</button>
          </InputEmail>
          {/* 휴대폰 번호 입력 부분 */}
          <InputPhone>
            <div>
              휴대폰<span style={{ color: "red" }}>*</span>
            </div>
            <input
              class="inputPhone"
              type={"text"}
              placeholder={"숫자만 입력해주세요"}
            ></input>
            <button class="checkPhone">인증번호 받기</button>
          </InputPhone>
          {/* 성별 선택 부분 */}
          <InputGender>
            <div class="gendertext">성별</div>
            <div class="radio">
              <div>
                <input type="radio" id="man" name="gender" value="man"></input>
                <label for="man">남자</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="woman"
                  name="gender"
                  value="woman"
                ></input>
                <label for="woman">여자</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="nothing"
                  name="gender"
                  value="nothing"
                ></input>
                <label for="nothing">선택안함</label>
              </div>
            </div>
          </InputGender>
          {/* 생년월일 입력 부분 */}
          <InputBirth>
            <div>생년월일</div>
            <input
              class="inputBirth"
              type={"text"}
              placeholder={"YYYY       /       MM       /       DD"}
            ></input>
          </InputBirth>
          <hr></hr>
        </MiddleContainer>
        {/* 가입하기 버튼 */}
        <JoinButton>가입하기</JoinButton>
      </Container>
    </>
  );
};

export default MakeId;
