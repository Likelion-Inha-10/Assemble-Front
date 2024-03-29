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
  width: 25px;
  height: 25px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: ${(props) => props.color || "#FF3C3C"};
  border-radius: 50%;

  :hover{
    background-color: #00FA9A;
    cursor: pointer;
    transition: 0.3s;
  }
  transition: 0.3s;
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

// 팝업 창 모임 큰 제목
const ModalContent = styled.div`
  position: absolute;
  left: 35px;
  top: 35px;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 17px;
  text-align: right;

  color: #706363;
`;

// 팝업 창 날짜
const ModalSchedule = styled.div`
position: absolute;
width: 193px;
height: 17px;
top: 70px;
left: 155px;

font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;

color: #000000;
`;

// 팝업 창 그룹
const ModalGroup = styled.div`
position: absolute;
width: 23px;
height: 17px;
top: 105px;
left: 37px;

font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;

color: #000000;
`

// 팝업 창 시계 이미지
const ModalTime = styled.img`
  position: absolute;
  left: 39px;
  top: 72px;
  width: 15px;
  height: 15px;
`;

// 팝업 창 모임 작성 칸
const ModalBox = styled.img`
  position: absolute;
  left: 155px;
  top: 100px;
  width: 172px;
  height: 25px;
`;

// 팝업 창 캘린더 하이라이트 색
const ModalColor = styled.img`
  position: absolute;
  left: 165px;
  top: 107px;
  width: 11px;
  height: 11px;
`;

// 팝업 창 그룹 이름
const ModalText = styled.div`
  position: absolute;
  left: 200px;
  top: 105px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #000000;
`;

// 팝업 창 삭제 칸
const ModalDelete = styled.div`
  position: absolute;
  left: 250px;
  top: 153px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;

  color: red;
`;

// 팝업 창 저장 버튼
const ModalSave = styled.img`
  position: absolute;
  left: 300px;
  top: 145px;
  width: 56px;
  height: 30px;
`;

const InputTitle = styled.div`
  /* 아이디 입력 박스에서 input 태그에 대한 css */
  .inputTitle {
    width: 100%;
    height: auto;

    padding-left: 20.02px;

    text-align: left;
  }
`;


const Calender = ({ color, length, hight, changecolor }) => {

  const [modify, setModify] = useState(false);
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [modalIsOpen3, setModalIsOpen3] = useState(false);
  const [modalIsOpen4, setModalIsOpen4] = useState(false);
  const [modalIsOpen5, setModalIsOpen5] = useState(false);
  const [modalIsOpen6, setModalIsOpen6] = useState(false);

  const onClickModify = () => {
    setModify(!modify);
  };

  return (
    <>
      <Container>
        <ListText>개인 캘린더</ListText>
        <ModifyText onClick={onClickModify}>
          {modify ? "" : ""}
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
            <Dates color= "rgba(255, 59, 59, 0.3)" onClick={() => setModalIsOpen6(true)}>26</Dates>
            <Dates color= "rgba(0, 0, 0, 0.3)" onClick={() => setModalIsOpen6(true)}>27</Dates>
            <Dates color= "rgba(0, 0, 0, 0.3)" onClick={() => setModalIsOpen6(true)}>28</Dates>
            <Dates color= "rgba(0, 0, 0, 0.3)" onClick={() => setModalIsOpen6(true)}>29</Dates>
            <Dates color= "rgba(0, 0, 0, 0.3)" onClick={() => setModalIsOpen6(true)}>30</Dates>
            <Dates color= "black" onClick={() => setModalIsOpen6(true)}>1</Dates>
            <Dates color= "blue" onClick={() => setModalIsOpen6(true)}>2</Dates>
          </DateBox>
          <DateBox>
            <Dates color= "red" onClick={() => setModalIsOpen6(true)}>3</Dates>
            <Dates color= "black" onClick={() => setModalIsOpen6(true)}>4</Dates>
            <Dates color= "black" onClick={() => setModalIsOpen6(true)}>5</Dates>
            <Dates color= "black" onClick={() => setModalIsOpen6(true)}>6</Dates>
            <Dates color= "black" onClick={() => setModalIsOpen6(true)}>7</Dates>
            <Dates color= "black" onClick={() => setModalIsOpen6(true)}>8</Dates>
            <Dates color= "blue" onClick={() => setModalIsOpen6(true)}>9</Dates>
          </DateBox>
          <ScheduleBox color="#F1A23E" length="152px" hight="0px" changecolor="#FB8C00" onClick={() => setModalIsOpen3(true)}>
            <SceduleText>친구 약속</SceduleText>
          </ScheduleBox>
          <ScheduleBox color="#8280FF" length="670px" hight="0px" changecolor="#0500FF" onClick={() => setModalIsOpen4(true)}>
            <SceduleText>멋사 세션</SceduleText>
          </ScheduleBox>
          <DateBox>
            <Dates color= "red" onClick={() => setModalIsOpen6(true)}>10</Dates>
            <Dates color= "black" onClick={() => setModalIsOpen6(true)}>11</Dates>
            <Dates color= "black" onClick={() => setModalIsOpen6(true)}>12</Dates>
            <Dates color= "balck" onClick={() => setModalIsOpen6(true)}>13</Dates>
            <Dates color= "black" onClick={() => setModalIsOpen6(true)}>14</Dates>
            <Dates color= "black" onClick={() => setModalIsOpen6(true)}>15</Dates>
            <Dates color= "blue" onClick={() => setModalIsOpen6(true)}>16</Dates>
          </DateBox>
          <ScheduleBox color="#B282CC" length="280px" hight="0px" changecolor="#AC26F5" onClick={() => setModalIsOpen2(true)}>
            <SceduleText>해커톤 회의</SceduleText>
          </ScheduleBox>
          <ScheduleBox color="#B282CC" length="538px" hight="0px" changecolor="#AC26F5" onClick={() => setModalIsOpen1(true)}>
            <SceduleText>해커톤 회의</SceduleText>
          </ScheduleBox>
          <DateBox>
            <Dates color= "red" onClick={() => setModalIsOpen6(true)}>17</Dates>
            <Dates color= "black" onClick={() => setModalIsOpen6(true)}>18</Dates>
            <Dates color= "black" onClick={() => setModalIsOpen6(true)}>19</Dates>
            <Dates color= "balck" onClick={() => setModalIsOpen6(true)}>20</Dates>
            <Dates color= "black" onClick={() => setModalIsOpen6(true)}>21</Dates>
            <Dates color= "black" onClick={() => setModalIsOpen6(true)}>22</Dates>
            <Dates color= "blue" onClick={() => setModalIsOpen6(true)}>23</Dates>
          </DateBox>
          <ScheduleBox2 color="#F6CBD1" length="150px" hight="0px" changecolor="#FF647A" onClick={() => setModalIsOpen5(true)}>
            <SceduleText2>계절학기 시험기간</SceduleText2>
          </ScheduleBox2>
          <DateBox>
            <Dates color= "red" onClick={() => setModalIsOpen6(true)}>24</Dates>
            <Dates color= "black" onClick={() => setModalIsOpen6(true)}>25</Dates>
            <Dates color= "black" onClick={() => setModalIsOpen6(true)}>26</Dates>
            <Dates color= "balck" onClick={() => setModalIsOpen6(true)}>27</Dates>
            <Dates color= "black" onClick={() => setModalIsOpen6(true)}>28</Dates>
            <Dates color= "black" onClick={() => setModalIsOpen6(true)}>29</Dates>
            <Dates color= "blue" onClick={() => setModalIsOpen6(true)}>30</Dates>
          </DateBox>
          <DateBox>
            <Dates color= "red" onClick={() => setModalIsOpen6(true)}>31</Dates>
            <Dates color= "rgba(0, 0, 0, 0.3)" onClick={() => setModalIsOpen6(true)}>1</Dates>
            <Dates color= "rgba(0, 0, 0, 0.3)" onClick={() => setModalIsOpen6(true)}>2</Dates>
            <Dates color= "rgba(0, 0, 0, 0.3)" onClick={() => setModalIsOpen6(true)}>3</Dates>
            <Dates color= "rgba(0, 0, 0, 0.3)" onClick={() => setModalIsOpen6(true)}>4</Dates>
            <Dates color= "rgba(0, 0, 0, 0.3)" onClick={() => setModalIsOpen6(true)}>5</Dates>
            <Dates color= "rgba(7, 89, 149, 0.3)" onClick={() => setModalIsOpen6(true)}>6</Dates>
          </DateBox>
          
          <Modal isOpen={modalIsOpen1} onRequestClose={() => setModalIsOpen1(false)}
          style={{
            content: {
              position: 'absolute',
              top: '400px',
              left: '600px',
              width: '343px',
              height: '146px',
              border: '1px solid #075995',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '20px',
              outline: 'none',
              padding: '20px'
            }
          }}>
            <ModalContent>해커톤 회의</ModalContent>
            <ModalSchedule>7월 14일 (목요일) - 7월 14일 (목요일)</ModalSchedule>
            <ModalGroup>그룹</ModalGroup>
            <ModalTime src={"/img/time.png"} alt="time" />
            <ModalBox src={"/img/rectangle.png"} alt="rectangle" />
            <ModalColor src={"/img/teambox.png"} alt="color" />
            <ModalText>해커톤 이성 TEAM</ModalText>
            <ModalDelete>삭제</ModalDelete>
            <ModalSave src={"/img/save.png"} alt="save" onClick={() => setModalIsOpen1(false)}/>
          </Modal>

          <Modal isOpen={modalIsOpen2} onRequestClose={() => setModalIsOpen2(false)}
          style={{
            content: {
              position: 'absolute',
              top: '400px',
              left: '600px',
              width: '343px',
              height: '146px',
              border: '1px solid #075995',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '20px',
              outline: 'none',
              padding: '20px'
            }
          }}>
            <ModalContent>해커톤 회의</ModalContent>
            <ModalSchedule>7월 12일 (화요일) - 7월 12일 (화요일)</ModalSchedule>
            <ModalGroup>그룹</ModalGroup>
            <ModalTime src={"/img/time.png"} alt="time" />
            <ModalBox src={"/img/rectangle.png"} alt="rectangle" />
            <ModalColor src={"/img/teambox.png"} alt="color" />
            <ModalText>해커톤 이성 TEAM</ModalText>
            <ModalDelete>삭제</ModalDelete>
            <ModalSave src={"/img/save.png"} alt="save" onClick={() => setModalIsOpen2(false)}/>
          </Modal>

          <Modal isOpen={modalIsOpen3} onRequestClose={() => setModalIsOpen3(false)}
          style={{
            content: {
              position: 'absolute',
              top: '400px',
              left: '600px',
              width: '343px',
              height: '146px',
              border: '1px solid #075995',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '20px',
              outline: 'none',
              padding: '20px'
            }
          }}>
            <ModalContent>친구 약속</ModalContent>
            <ModalSchedule>7월 4일 (월요일) - 7월 4일 (월요일)</ModalSchedule>
            <ModalGroup>그룹</ModalGroup>
            <ModalTime src={"/img/time.png"} alt="time" />
            <ModalBox src={"/img/rectangle.png"} alt="rectangle" />
            <ModalColor src={"/img/teambox.png"} alt="color" />
            <ModalText>해커톤 이성 TEAM</ModalText>
            <ModalDelete>삭제</ModalDelete>
            <ModalSave src={"/img/save.png"} alt="save" onClick={() => setModalIsOpen3(false)}/>
          </Modal>

          <Modal isOpen={modalIsOpen4} onRequestClose={() => setModalIsOpen4(false)}
          style={{
            content: {
              position: 'absolute',
              top: '400px',
              left: '600px',
              width: '343px',
              height: '146px',
              border: '1px solid #075995',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '20px',
              outline: 'none',
              padding: '20px'
            }
          }}>
            <ModalContent>멋사 세션</ModalContent>
            <ModalSchedule>7월 8일 (화요일) - 7월 8일 (금요일)</ModalSchedule>
            <ModalGroup>그룹</ModalGroup>
            <ModalTime src={"/img/time.png"} alt="time" />
            <ModalBox src={"/img/rectangle.png"} alt="rectangle" />
            <ModalColor src={"/img/teambox.png"} alt="color" />
            <ModalText>해커톤 이성 TEAM</ModalText>
            <ModalDelete>삭제</ModalDelete>
            <ModalSave src={"/img/save.png"} alt="save" onClick={() => setModalIsOpen4(false)}/>
          </Modal>

          <Modal isOpen={modalIsOpen5} onRequestClose={() => setModalIsOpen5(false)}
          style={{
            content: {
              position: 'absolute',
              top: '400px',
              left: '600px',
              width: '343px',
              height: '146px',
              border: '1px solid #075995',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '20px',
              outline: 'none',
              padding: '20px'
            }
          }}>
            <ModalContent>계절학기 시험기간</ModalContent>
            <ModalSchedule>7월 18일 (월요일) - 7월 20일 (수요일)</ModalSchedule>
            <ModalGroup>그룹</ModalGroup>
            <ModalTime src={"/img/time.png"} alt="time" />
            <ModalBox src={"/img/rectangle.png"} alt="rectangle" />
            <ModalColor src={"/img/teambox.png"} alt="color" />
            <ModalText>해커톤 이성 TEAM</ModalText>
            <ModalDelete>삭제</ModalDelete>
            <ModalSave src={"/img/save.png"} alt="save" onClick={() => setModalIsOpen5(false)}/>
          </Modal>

          <Modal isOpen={modalIsOpen6} onRequestClose={() => setModalIsOpen6(false)}
          style={{
            content: {
              position: 'absolute',
              top: '400px',
              left: '600px',
              width: '343px',
              height: '146px',
              border: '1px solid #075995',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '20px',
              outline: 'none',
              padding: '20px'
            }
          }}>
            <ModalContent>
              <InputTitle>
                <input
                  class="inputId"
                  type={"text"}
                  placeholder={"일정명을 입력해주세요"}
                ></input>
              </InputTitle>
            </ModalContent>
            <ModalSchedule>7월 18일 (월요일) - 7월 20일 (수요일)</ModalSchedule>
            <ModalGroup>그룹</ModalGroup>
            <ModalTime src={"/img/time.png"} alt="time" />
            <ModalBox src={"/img/rectangle.png"} alt="rectangle" />
            <ModalColor src={"/img/teambox.png"} alt="color" />
            <ModalText>해커톤 이성 TEAM</ModalText>
            <ModalDelete>삭제</ModalDelete>
            <ModalSave src={"/img/save.png"} alt="save" onClick={() => setModalIsOpen6(false)}/>
          </Modal>
        </CalendarBox>
      </Container>
    </>
  );
};

export default Calender;
