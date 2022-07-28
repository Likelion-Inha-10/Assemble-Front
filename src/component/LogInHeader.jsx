import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';

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
  left: 1296px;
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

const ModalContent = styled.div`
  position: absolute;
  left: 105px;
  top: 30px;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  text-align: right;

  color: #706363;
`;



// 상단바 컴포넌트
const LogInHeader = () => {

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  }

  const[IsOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Bar>
        <Logo onClick={goToHome} src={"/img/logo.png"} alt="ASSEMBLE" />
        <Content>최재오 님 환영합니다</Content>
        <Alarm1 src={"/img/alarm.png"} alt="alarm" onClick={() => setIsOpen(true)}/>
        <Alarm2 src={"/img/alarm_ring.png"} alt="alarm" />
        <Alarm3 src={"/img/alarm_bar.png"} alt="alarm" />
        <Profile src={"/img/profile.png"} alt="profile" />
        <Modal isOpen={IsOpen} onRequestClose={() => setIsOpen(false)}
        style={{
          content: {
            position: 'absolute',
            top: '80px',
            left: '1120px',
            width: '300px',
            height: '35px',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '10px',
            outline: 'none',
            padding: '20px'
          }
        }}>
          <ModalContent>새 알림이 없습니다</ModalContent>
        </Modal>
      </Bar>
    </div>
  );
};

export default LogInHeader;
