import React from 'react';
import styled from 'styled-components';
import { DesktopTower } from "phosphor-react";

// 팀 페이지 프사 있는 박스
const TeamInfoContainer = styled.div`
  width: 100%;

  margin-top: 72px;
  
  border-radius : 10px;
  
  display: flex;
  align-items: center;
  
`;

// 팀 프사 박스
const TeamPicBox =styled.div`
  width: 114px;
  height: 114px;

  border-radius: 40px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  background-color: #86b2c6;

  margin: 0px 0px 28px 146px;

  display: flex;
  align-items: center;
  justify-content: center;

  .sumnailIcon {
    height: 140px;
    flex: none;
    order: 0;
    flex-grow: 0;
    color: #075995;
  }

`;


// 팀 이름 텍스트
const TeamName = styled.div`
  font-size: 24px;
  font-weight: 700;

  margin-left: 40px;
  margin-bottom: 25px;
`;


const TeamProfile = () => {
  return (
    <div>
        <TeamInfoContainer>
          <TeamPicBox><DesktopTower className='sumnailIcon' size={100} /></TeamPicBox>
          <TeamName>해커톤 이성팀</TeamName>
      </TeamInfoContainer>
    </div>
  );
};

export default TeamProfile;