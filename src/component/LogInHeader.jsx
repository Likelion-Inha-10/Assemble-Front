import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 상단바 전체 박스
const Bar = styled.div`
  height: 90px;
  width: 100%;
  background-color: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
`;
// 상단바 로고
const Logo = styled.img`
  position: absolute;
  width: 227px;
  height: 69px;
  left: 145px;
  top: 19px;
`;

// 상단바 환영 문구
const Content = styled.div`
  position: absolute;
  left: 1052px;
  top: 42px;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #000000;
`;

// 알람 기능1
const Alarm1 = styled.img`
  position: absolute;
  width: 25px;
  height: 23px;
  left: 1290px;
  top: 38px;
`;

// 알람 기능2
const Alarm2 = styled.img`
  position: absolute;
  width: 8px;
  height: 8px;
  left: 1289px;
  top: 35px;
`;

// 알람 기능3
const Alarm3 = styled.img`
  position: absolute;
  width: 12px;
  height: 3px;
  left: 1297px;
  top: 63px;
`;

// 프로필 기능
const Profile = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 1372px;
  top: 26px;
`;


// 상단바 컴포넌트
const LogInHeader = () => {

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  }

  return (
    <div>
      <Bar>
        <Logo onClick={goToHome} src={"/img/logo.png"} alt="ASSEMBLE" />
        <Content>최재오 님 환영합니다</Content>
        <Alarm1 src={"/img/alarm.png"} alt="alarm" />
        <Alarm2 src={"/img/alarm_ring.png"} alt="alarm" />
        <Alarm3 src={"/img/alarm_bar.png"} alt="alarm" />
        <Profile src={"/img/profile.png"} alt="profile" />
      </Bar>
    </div>
  );
};

export default LogInHeader;
