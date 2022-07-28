import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Warning = styled.img`
  position: absolute;
  width: 128px;
  height: 128px;
  left: 692px;
  top: 338px;
`;

const BigText = styled.div`
  position: absolute;
  width: 181px;
  height: 29px;
  left: 675px;
  top: 501px;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  
  color: #494141;
`;

const SmallText = styled.div`
  position: absolute;
  width: 335px;
  height: 40px;
  left: 592px;
  top: 540px;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;

  color: #706363;
`;

const BackPage = styled.img`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;

  position: absolute;
  width: 156px;
  height: 40px;
  left: 665px;
  top: 604px;
`;

const Error = () => {

  const navigate = useNavigate();

  const goToBack = () => {
    navigate("/");
  }
  return (
    <>
      <Warning src={"/img/warning.png"} alt="warning"/>
      <BigText>서비스 준비중 입니다</BigText>
      <SmallText>보다 나은 서비스 제공을 위하여 페이지 준비중에 있습니다. 빠른시일 내에 준비하여 찾아뵙겠습니다.</SmallText>
      <BackPage src={"/img/backpage.png"} alt="backpage" onClick={goToBack}/>
    </>
  );
};

export default Error;