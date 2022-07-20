import React from "react";
import styled from "styled-components";

// 상단바 밑에 부분 전체를 포함하고 있는 박스
const Container = styled.div`
  width: 100%;
  height: 100vh;

  /* 첫번째 hr 태그 css */
  .firsthr {
    position: absolute;
    width: 500px;
    height: 0px;
    left: 506px;
    top: 278px;
  }

  /* 두번째 hr 태그 css */
  .secondhr {
    position: absolute;
    width: 500px;
    height: 0px;
    left: 506px;
    top: 759px;

    border: 1px solid rgba(0, 0, 0, 0.5);
  }

  // 남자 선택지 css
  .manRadio {
    position: absolute;
    width: 70px;
    height: 16px;
    left: 634px;
    top: 661px;
  }

  // 여자 선택지 css
  .womanRadio {
    position: absolute;
    width: 70px;
    height: 16px;
    left: 745px;
    top: 661px;
  }

  // 선택안함 선택지 css
  .nothingRadio {
    position: absolute;
    width: 90px;
    height: 16px;
    left: 856px;
    top: 661px;
  }
`;

// '회원가입' 텍스트 부분
const SignInText = styled.div`
  position: absolute;
  width: 100px;
  height: 35px;
  left: 723px;
  top: 180px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
`;

// '* 필수 입력사항' 부분
const SmallNotice = styled.div`
  position: absolute;
  width: 90px;
  height: 17px;
  left: 921px;
  top: 250px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
`;

// '아이디' 텍스트 부분
const IdText = styled.div`
  position: absolute;
  width: 56px;
  height: 23px;
  left: 510px;
  top: 304px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
`;

// 아이디 입력 부분
const InputId = styled.input`
  box-sizing: border-box;

  position: absolute;
  width: 256px;
  height: 43px;
  left: 630px;
  top: 294px;

  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  text-align: center;
`;

// 아이디 중복확인 버튼
const IdCheck = styled.button`
  box-sizing: border-box;

  position: absolute;
  width: 80px;
  height: 43px;
  left: 910px;
  top: 294px;
  text-align: center;

  background: #ffffff;
  border: 1px solid #073255;
  border-radius: 8px;
`;

// '비밀번호' 텍스트
const PwdText = styled.div`
  position: absolute;
  width: 75px;
  height: 23px;
  left: 510px;
  top: 363px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
`;

// 비밀번호 입력 부분
const InputPwd = styled.input`
  box-sizing: border-box;

  position: absolute;
  width: 256px;
  height: 43px;
  left: 630px;
  top: 353px;
  text-align: center;

  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 3px;
`;

// '비밀번호 확인' 텍스트
const CheckPwdText = styled.div`
  position: absolute;
  width: 110px;
  height: 23px;
  left: 510px;
  top: 421px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
`;

// 비밀번호 확인 입력 부분
const InputCheckPwd = styled.input`
  box-sizing: border-box;

  position: absolute;
  width: 256px;
  height: 43px;
  left: 630px;
  top: 411px;
  text-align: center;

  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 3px;
`;

// '이름' 텍스트 부분
const NameText = styled.div`
  position: absolute;
  width: 40px;
  height: 23px;
  left: 510px;
  top: 481px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
`;

// 이름 입력 부분
const InputName = styled.input`
  box-sizing: border-box;

  position: absolute;
  width: 256px;
  height: 43px;
  left: 630px;
  top: 471px;
  text-align: center;

  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 3px;
`;

// '이메일' 텍스트 부분
const EmailText = styled.div`
  position: absolute;
  width: 55px;
  height: 23px;
  left: 510px;
  top: 540px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
`;

// 이메일 입력 부분
const InputEmail = styled.input`
  box-sizing: border-box;

  position: absolute;
  width: 256px;
  height: 43px;
  left: 630px;
  top: 530px;
  text-align: center;

  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 3px;
`;

// 이메일 중복확인 버튼
const CheckEmail = styled.button`
  box-sizing: border-box;

  position: absolute;
  width: 80px;
  height: 43px;
  left: 910px;
  top: 530px;
  text-align: center;

  background: #ffffff;

  border: 1px solid #073255;
  border-radius: 8px;
`;

// '휴대폰' 텍스트 부분
const PhoneText = styled.div`
  position: absolute;
  width: 55px;
  height: 23px;
  left: 510px;
  top: 599px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
`;

// 휴대폰 번호 입력 부분
const InputPhone = styled.input`
  box-sizing: border-box;

  position: absolute;
  width: 256px;
  height: 43px;
  left: 630px;
  top: 589px;
  text-align: center;

  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 3px;
`;

// 휴대폰 번호 인증번호 버튼
const CheckPhone = styled.button`
  box-sizing: border-box;

  position: absolute;
  width: 102px;
  height: 43px;
  left: 902px;
  top: 589px;
  text-align: center;

  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`;

// '성별' 텍스트 부분
const GenderText = styled.div`
  position: absolute;
  width: 35px;
  height: 23px;
  left: 510px;
  top: 658px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
`;

// '생년월일' 텍스트 부분
const BirthText = styled.div`
  position: absolute;
  width: 65px;
  height: 23px;
  left: 510px;
  top: 707px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
`;

// 생년월일 입력 부분
const InputBirth = styled.input`
  box-sizing: border-box;

  position: absolute;
  width: 256px;
  height: 43px;
  left: 630px;
  top: 697px;
  text-align: center;

  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 3px;
`;

// 가입하기 버튼
const JoinButton = styled.button`
  position: absolute;
  width: 190px;
  height: 43px;
  left: 661px;
  top: 793px;
  text-align: center;
  margin-bottom: 50px;

  background: #073255;
  border-radius: 3px;
  color: white;
`;

const MakeId = () => {
  return (
    <>
      {/* 전체 박스 */}
      <Container>
        {/* 회원가입 텍스트 */}
        <SignInText>회원가입</SignInText>
        {/* 필수 입력사항 텍스트 */}
        <SmallNotice>
          <span style={{ color: "rgba(253, 9, 9, 0.5)" }}>*</span> 필수 입력사항
        </SmallNotice>
        <hr className="firsthr"></hr>
        {/* 아이디 입력 부분 */}
        <IdText>
          아이디<span style={{ color: "rgba(253, 9, 9, 0.5)" }}>*</span>
        </IdText>
        <InputId
          type={"text"}
          placeholder={"6자 이상의 영문과 숫자를 조합"}
        ></InputId>
        <IdCheck>중복확인</IdCheck>
        {/* 비밀번호 입력 부분 */}
        <PwdText>
          비밀번호<span style={{ color: "rgba(253, 9, 9, 0.5)" }}>*</span>
        </PwdText>
        <InputPwd
          type={"password"}
          placeholder={"비밀번호를 입력해주세요"}
        ></InputPwd>
        {/* 비밀번호 확인 입력 부분 */}
        <CheckPwdText>
          비밀번호 확인<span style={{ color: "rgba(253, 9, 9, 0.5)" }}>*</span>
        </CheckPwdText>
        <InputCheckPwd
          type={"password"}
          placeholder={"비밀번호를 한번 더 입력해주세요"}
        ></InputCheckPwd>
        {/* 이름 입력 부분 */}
        <NameText>
          이름<span style={{ color: "rgba(253, 9, 9, 0.5)" }}>*</span>
        </NameText>
        <InputName
          type={"text"}
          placeholder={"이름을 입력해주세요"}
        ></InputName>
        {/* 이메일 입력 부분 */}
        <EmailText>
          이메일<span style={{ color: "rgba(253, 9, 9, 0.5)" }}>*</span>
        </EmailText>
        <InputEmail
          type={"text"}
          placeholder={"예 : assemble@liklion.org"}
        ></InputEmail>
        <CheckEmail>중복확인</CheckEmail>
        {/* 휴대폰 번호 입력 부분 */}
        <PhoneText>
          휴대폰<span style={{ color: "rgba(253, 9, 9, 0.5)" }}>*</span>
        </PhoneText>
        <InputPhone
          type={"text"}
          placeholder={"숫자만 입력해주세요"}
        ></InputPhone>
        <CheckPhone>인증번호 받기</CheckPhone>
        {/* 성별 선택 부분 */}
        <GenderText>성별</GenderText>
        <div class="radio">
          <div class="manRadio">
            <input type="radio" id="man" name="gender" value="man"></input>
            <label for="man">남자</label>
          </div>
          <div class="womanRadio">
            <input type="radio" id="woman" name="gender" value="woman"></input>
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
        </div>
        {/* 생년월일 입력 부분 */}
        <BirthText>생년월일</BirthText>
        <InputBirth
          type={"text"}
          placeholder={"YYYY       /       MM       /       DD"}
        ></InputBirth>
        <hr className="secondhr"></hr>
        {/* 가입하기 버튼 */}
        <JoinButton>가입하기</JoinButton>
      </Container>
    </>
  );
};

export default MakeId;
