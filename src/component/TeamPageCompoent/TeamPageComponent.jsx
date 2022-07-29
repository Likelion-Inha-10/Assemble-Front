import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MiniCalendar from './MiniCalendar';
import { FiPlus } from "react-icons/fi";


// 메인 컨테이너
const Container =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// '메뉴 바' 랑 '새 게시물' 버튼 담는 위쪽 컨테이너
const UpperContainer = styled.div`
  height: 68px;

  margin-top: 14px;
  display: flex;
`;

// '메뉴 바'
const MenuBar = styled.div`
  width: 992px;
  height: 68px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  margin-right: 73px;
  margin-top: 14px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// '메뉴 텍스트'
const Menu = styled.div`
  font-size: 18px;
  font-weight: 700;

  color: #0A75BE;
`;

//'새 게시물' 버튼
const NewButton = styled.div`
  width: 151px;
  height: 68px;

  background-color: #075995;

  border-radius: 10px;
  margin-top: 15px;
 
  font-size: 18px;
  font-weight: 700;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

`;

// '공지사항', '최근 생성된 글' 박스
const ListBox = styled.div`
  width: 596px;
  height: 256px;  
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
`;

// '공지사항', '최근 생성된 글' 박스를 담는 컨테이너
const FirstContainer = styled.div`
  width: 1217px;
  height: 256px;
  margin-top: 52px;
  display: flex;
`;

// 게시물 컨테이너
const LineContainer = styled.div`
  width: 530px;
  height: 25px;

  margin-left: 40px;
  margin-top: 6px;
  display: flex;
`;

// 게시물 제목
const SmallTitle = styled.div`
  width: 310px;
  height: 25px;
  color: #706363;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// 게시물 날짜 및 시간
const SmallTime = styled.div`
  width: 100px;
  height: 25px;
  color: #706363;
  font-size: 16px;
`;
//시간 정보 묶는 컨테이너
const TimeContainer = styled.div`
  display: flex;
`;

// '그룹' 박스
const GroupBox = styled.div`
  width: 1217px;
  height:321px;

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  margin-top: 21px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

// 헤드 텍스트
const HeadText = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #075995;
`;

// 팀 컨테이너
const TeamContainer = styled.div`
  width: 1217px;
  height: 168px;

  margin-left: 37px;
  margin-top: 26px;
  display: flex;

`;

//팀 프사 박스
const TeamBox = styled.div`
  width: 168px;
  height: 168px;
  border-radius: 10px;
  background-color: #86b2c6;
  margin-right: 35px;
  color:#075995;

  font-size: 100px;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;

`;
// 캘린더 컨테이너
const CalenderContainer =styled.div`
  width: 1217px;

  margin-top: 30px;
  display: flex;
  flex-direction: column;

`;

// 미니 컨테이너
const MiniContainer = styled.div`
  display: flex;
  justify-content: center;
`;

// 캘린더 옆에 박스
const WhiteBox = styled.div`
  width: 317px;
  height:846px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  margin-left: 30px;  
`;

// 흰 박스 안의 날짜 텍스트
const DayText = styled.div`
  font-weight: 400;
  font-size: 18px;
`;

const TinyContainer = styled.div`
  display: flex;

  margin-top: 30px;
  margin-left: 24px;
`;




const TeamPageComponent = () => {

  const navigate = useNavigate();

  const goToVerpage = () =>{
    navigate('/vertool');
  }

  return (
    <div>
      <Container>
        <UpperContainer>
          <MenuBar>
            <Menu style={{marginLeft:'95px'}}>공지사항</Menu>
            <Menu>그룹</Menu>
            <Menu>Task</Menu>
            <Menu onClick={goToVerpage}>프로젝트</Menu>
            <Menu style={{marginRight:'95px'}}>일정</Menu>
          </MenuBar>
          <NewButton>새 게시물</NewButton>
        </UpperContainer>
        <FirstContainer>
            <ListBox style={{marginRight: '28px'}}>
              <HeadText style={{marginLeft:'26px', marginTop:'15px'}}>공지사항</HeadText>
              <LineContainer style={{marginTop:'17px'}}>
                <SmallTitle>속보 아무 일도 안 일어남</SmallTitle>
                <TimeContainer>
                  <SmallTime style={{marginRight: '10px'}}>2022-07-29</SmallTime>
                  <SmallTime>오후 7:49</SmallTime>
                </TimeContainer>
              </LineContainer>
                <LineContainer>
                <SmallTitle>인하대학교 7월 해커톤 공지사항 입니다.</SmallTitle>
                <TimeContainer>
                  <SmallTime style={{marginRight: '10px'}}>2022-07-29</SmallTime>
                  <SmallTime>오후 8:00</SmallTime>
                </TimeContainer>
              </LineContainer>
                <LineContainer>
                <SmallTitle>멋쟁이사자처럼 공지사항입니다.</SmallTitle>
                <TimeContainer>
                  <SmallTime style={{marginRight: '10px'}}>2022-07-30</SmallTime>
                  <SmallTime>오후 8:41</SmallTime>
                </TimeContainer>
              </LineContainer>
          </ListBox>

          <ListBox >
            <HeadText style={{marginLeft:'26px', marginTop:'15px'}}>최근 생성된 글</HeadText>
            <LineContainer  style={{marginTop:'17px'}}>
              <SmallTitle>Aseemble-FrontEnd</SmallTitle>
              <TimeContainer>
                <SmallTime style={{marginRight: '10px'}}>2022-07-29</SmallTime>
                <SmallTime>오후 7:49</SmallTime>
              </TimeContainer>
            </LineContainer>
            <LineContainer>
              <SmallTitle>Assemble-BackEnd</SmallTitle>
              <TimeContainer>
                <SmallTime style={{marginRight: '10px'}}>2022-07-30</SmallTime>
                <SmallTime>오후 6:12</SmallTime>
              </TimeContainer>
            </LineContainer>
            <LineContainer>
              <SmallTitle>Assemble-기획/디자인</SmallTitle>
              <TimeContainer>
                <SmallTime style={{marginRight: '10px'}}>2022-07-31</SmallTime>
                <SmallTime>오후 2:12</SmallTime>
              </TimeContainer>
            </LineContainer>
          </ListBox>
        </FirstContainer>
        <GroupBox>
          <HeadText style={{marginLeft:'23px', marginTop:'15px'}}>그룹</HeadText>
          <TeamContainer>
            <TeamBox>F</TeamBox>
            <TeamBox>B</TeamBox>
            <TeamBox>D</TeamBox>
          </TeamContainer>
        </GroupBox>
        <CalenderContainer>
          <HeadText style={{marginBottom:'21px'}}>캘린더</HeadText>
          <MiniContainer>
            <MiniCalendar />
            <WhiteBox>
              <TinyContainer>
                <DayText style={{marginRight:'200px'}}>22 일</DayText>
                <FiPlus style={{color:'#0763A4'}} size={30}/>
              </TinyContainer>
            </WhiteBox>
          </MiniContainer>
        </CalenderContainer> 
      </Container>
    </div>
  );
};

export default TeamPageComponent;