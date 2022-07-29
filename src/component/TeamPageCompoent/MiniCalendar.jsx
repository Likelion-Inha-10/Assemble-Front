import React from "react";
import styled from "styled-components";
import { useState } from "react";
import {TiArrowSortedDown} from "react-icons/ti";
import Modal from 'react-modal';

// Calender 전체 박스
const Container = styled.div`
  width: 860px;
  height: 950px;

  font-family: "Noto Sans KR";
  font-style: normal;
`;

// '개인 캘린더' 텍스트
const ListText = styled.div`
  width: 310px;
  height: 31.53px;

  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  color: #075995;
  padding-left: 20px;
`;

// '편집' 텍스트
const ModifyText = styled.div`
  width: 830px;
  height: 23.42px;

  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  color: #0a75be;
  text-align: end;
  padding-bottom: 5px;
`;

// 캘린더 박스
const CalendarBox = styled.div`
  width: 860px;
  height: 825px;
  
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding-top: 25px;
  padding-left: 20px;
`;

// 날짜 선택 박스
const SelectDateBox = styled.div`
  display: flex;
`;

const Text = styled.div`
  width: 100px;
  height: 29px;

  font-weight: 400;
  font-size: 20px;
  line-height: 29px;

  padding-bottom: 15px;

  color: black;
`;

const DayBox = styled.div`
  display: flex;
  width: 800px;
  height: 30px;
  margin-top: 10px;
  margin-left: 15px;

  align-items: center;
  justify-content: space-between;
`;

const DateBox = styled.div`
  display: flex;
  width: 800px;
  height: 35px;
  margin-top: 80px;
  margin-left: 15px;

  align-items: center;
  justify-content: space-between;
`;

// 요일(요일 only)
const Days = styled.div`
  width: 17px;
  height: 26px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: ${(props) => props.color || "#FF3C3C"};
`;

// 요일(7월 날짜 숫자)
const Dates = styled.div`
  width: 17px;
  height: 26px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: ${(props) => props.color || "#FF3C3C"};
`;

// 스케쥴 짧은 박스 
const ScheduleBox = styled.div`
  position: absolute;
  width: 104px;
  height: 23px;
  border-radius: 6px;
  background-color: ${(props) => props.color || "#B282CC"};
  margin-left: ${(props) => props.length || "100px"};
  padding-top: ${(props) => props.hight || "0px"};

  :hover{
    background-color: ${(props) => props.changecolor || "red"};
    transition: 0.3s;
  }
  transition: 0.3s;
`;

// 스케쥴 긴 박스 
const ScheduleBox2 = styled.div`
  position: absolute;
  width: 370px;
  height: 23px;
  border-radius: 6px;
  background-color: ${(props) => props.color || "#B282CC"};
  margin-left: ${(props) => props.length || "100px"};
  padding-top: ${(props) => props.hight || "0px"};

  :hover{
    background-color: ${(props) => props.changecolor || "red"};
    transition: 0.3s;
  }
  transition: 0.3s;
`;

// 스케쥴 내용 작성 (짧은 박스)
const SceduleText = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;

  padding-left: 17px;
  padding-top: 3px;
`;

// 스케쥴 내용 작성 (긴 박스)
const SceduleText2 = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;

  padding-left: 100px;
  padding-top: 3px;
`;

const MiniCalendar = ({ color, length, hight, changecolor }) => {
  const [modify, setModify] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onClickModify = () => {
    setModify(!modify);
  };

  return (
    <>
      <Container>
        <ListText>개인 캘린더</ListText>
        <ModifyText onClick={onClickModify}>
          {modify ? "저장" : "편집"}
        </ModifyText>
        <CalendarBox>
          <SelectDateBox>
            <Text style={{ width: "110px" }}>2022년 7월</Text>
              <TiArrowSortedDown
                style={{ paddingTop: "0px" }}
                size={30}>
              </TiArrowSortedDown>
          </SelectDateBox>
          <DayBox>
            <Days color="red">일</Days>
            <Days color="black">월</Days>
            <Days color="black">화</Days>
            <Days color="black">수</Days>
            <Days color="black">목</Days>
            <Days color="black">금</Days>
            <Days color="blue">토</Days>
          </DayBox>
          <DateBox>
            <Dates color= "rgba(255, 59, 59, 0.3)">26</Dates>
            <Dates color= "rgba(0, 0, 0, 0.3)">27</Dates>
            <Dates color= "rgba(0, 0, 0, 0.3)">28</Dates>
            <Dates color= "rgba(0, 0, 0, 0.3)">29</Dates>
            <Dates color= "rgba(0, 0, 0, 0.3)">30</Dates>
            <Dates color= "black">1</Dates>
            <Dates color= "blue">2</Dates>
          </DateBox>
          <DateBox>
            <Dates color= "red">3</Dates>
            <Dates color= "black">4</Dates>
            <Dates color= "black">5</Dates>
            <Dates color= "black">6</Dates>
            <Dates color= "black">7</Dates>
            <Dates color= "black">8</Dates>
            <Dates color= "blue">9</Dates>
          </DateBox>
          <ScheduleBox color="#F1A23E" length="148px" hight="0px" changecolor="#FB8C00">
            <SceduleText>친구 약속</SceduleText>
          </ScheduleBox>
          <ScheduleBox color="#8280FF" length="670px" hight="0px" changecolor="#0500FF">
            <SceduleText>멋사 세션</SceduleText>
          </ScheduleBox>
          <DateBox>
            <Dates color= "red">10</Dates>
            <Dates color= "black">11</Dates>
            <Dates color= "black">12</Dates>
            <Dates color= "balck">13</Dates>
            <Dates color= "black">14</Dates>
            <Dates color= "black">15</Dates>
            <Dates color= "blue">16</Dates>
          </DateBox>
          <ScheduleBox color="#B282CC" length="278px" hight="0px" changecolor="#AC26F5">
            <SceduleText>해커톤 회의</SceduleText>
          </ScheduleBox>
          <ScheduleBox color="#B282CC" length="538px" hight="0px" changecolor="#AC26F5">
            <SceduleText>해커톤 회의</SceduleText>
          </ScheduleBox>
          <DateBox>
            <Dates color= "red">17</Dates>
            <Dates color= "black">18</Dates>
            <Dates color= "black">19</Dates>
            <Dates color= "balck">20</Dates>
            <Dates color= "black">21</Dates>
            <Dates color= "black">22</Dates>
            <Dates color= "blue">23</Dates>
          </DateBox>
          <ScheduleBox2 color="#F6CBD1" length="145px" hight="0px" changecolor="#FF647A">
            <SceduleText2>계절학기 시험기간</SceduleText2>
          </ScheduleBox2>
          <DateBox>
            <Dates color= "red">24</Dates>
            <Dates color= "black">25</Dates>
            <Dates color= "black">26</Dates>
            <Dates color= "balck">27</Dates>
            <Dates color= "black">28</Dates>
            <Dates color= "black">29</Dates>
            <Dates color= "blue">30</Dates>
          </DateBox>
          <DateBox>
            <Dates color= "red">31</Dates>
            <Dates color= "rgba(0, 0, 0, 0.3)">1</Dates>
            <Dates color= "rgba(0, 0, 0, 0.3)">2</Dates>
            <Dates color= "rgba(0, 0, 0, 0.3)">3</Dates>
            <Dates color= "rgba(0, 0, 0, 0.3)">4</Dates>
            <Dates color= "rgba(0, 0, 0, 0.3)">5</Dates>
            <Dates color= "rgba(7, 89, 149, 0.3)">6</Dates>
          </DateBox>
          </CalendarBox>
      </Container>
    </>
  );
};

export default MiniCalendar;