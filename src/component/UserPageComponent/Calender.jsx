import React, {useState} from "react";
import styled from "styled-components";
import Modal from 'react-modal';

// Calender 전체 박스
const Container = styled.div`
  width: 860px;
  height: 950px;
`;

// 개인 캘린더
const Personal = styled.div`
  position: absolute;
  width: 130px;
  height: 35px;
  left: 649px;
  top: 165px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  color: #075995;
`;

// 캘린더 박스
const Box = styled.div`
  position: absolute;
  width: 860px;
  height: 848px;
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  top: 227px;
  left: 627px;
`;

// 날짜 선택
const SelectDate = styled.div`
  position: absolute;
  width: 110px;
  height: 29px;
  left: 31px;
  top: 24px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: #000000;
`;

// 날짜 선택 버튼
const Triangle = styled.img`
  position: absolute;
  width: 15px;
  height: 15px;
  left: 140px;
  top: 30px;
`;

// 요일(요일 only)
const Days = styled.div`
  position: absolute;
  width: 17px;
  height: 26px;
  left: ${(props) => props.length || "65px;"};
  top: ${(props) => props.height || "92px;"};

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: ${(props) => props.color || "#FF3C3C"};
`;

// 요일(7월 날짜 및 숫자)
const Days2 = styled.div`
  position: absolute;
  width: 17px;
  height: 26px;
  left: ${(props) => props.length || "65px;"};
  top: ${(props) => props.height || "92px;"};

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: ${(props) => props.color || "#FF3C3C"};

  :hover {
    background-color: #87ceeb;
    transition: 0.3s;
  }
  transition: 0.3s;
`;

// 스케쥴 일정1
const ScheduleBox1 = styled.img`
  position: absolute;
  background: #b282cc;
  border-radius: 6px;
  width: 104px;
  height: 23px;
  top: 392px;
  left: 305px;
`;

// 스케쥴 일정2
const ScheduleBox2 = styled.img`
  position: absolute;
  background: #b282cc;
  border-radius: 6px;
  width: 104px;
  height: 23px;
  top: 392px;
  left: 543px;
`;

// 스케쥴 일정3
const ScheduleBox3 = styled.img`
  position: absolute;
  background: #f6cbd1;
  border-radius: 6px;
  width: 342px;
  height: 23px;
  top: 507px;
  left: 185px;
`;

// 스케쥴 일정4
const ScheduleBox4 = styled.img`
  position: absolute;
  background: #f1a23e;
  border-radius: 6px;
  width: 104px;
  height: 23px;
  top: 305px;
  left: 187px;
`;

// 스케쥴 일정5
const ScheduleBox5 = styled.img`
  position: absolute;
  background: #f1a23e;
  border-radius: 6px;
  width: 104px;
  height: 23px;
  top: 418px;
  left: 543px;
`;

// 스케쥴 일정6
const ScheduleBox6 = styled.img`
  position: absolute;
  background: #ff3636;
  border-radius: 6px;
  width: 104px;
  height: 23px;
  top: 280px;
  left: 187px;
`;

// 스케쥴 일정7
const ScheduleBox7 = styled.img`
  position: absolute;
  background: #ff3636;
  border-radius: 6px;
  width: 104px;
  height: 23px;
  top: 280px;
  left: 665px;
`;

// 활동 내용1
const Schedule1 = styled.img`
  position: absolute;
  width: 47px;
  height: 15px;
  top: 283px;
  left: 200px;
`;

// 활동 내용2
const Schedule2 = styled.img`
  position: absolute;
  width: 47px;
  height: 15px;
  top: 284px;
  left: 677px;
`;

// 활동 내용3
const Schedule3 = styled.img`
  position: absolute;
  width: 65px;
  height: 17px;
  top: 308px;
  left: 198px;
`;

// 활동 내용4
const Schedule4 = styled.img`
  position: absolute;
  width: 65px;
  height: 17px;
  top: 421px;
  left: 556px;
`;

// 활동 내용5
const Schedule5 = styled.img`
  position: absolute;
  width: 65px;
  height: 15px;
  top: 396px;
  left: 316px;
`;

// 활동 내용6
const Schedule6 = styled.img`
  position: absolute;
  width: 65px;
  height: 15px;
  top: 396px;
  left: 555px;
`;

// 활동 내용7
const Schedule7 = styled.img`
  position: absolute;
  width: 100px;
  height: 17px;
  top: 510px;
  left: 240px;
`;

// 현재 날짜 표시
const Circle = styled.img`
  position: absolute;
  width: 32px;
  height: 32px;
  left: 773px;
  top: 587px;
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

const Calender = ({ color, length, height }) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Container>
        <Personal>개인 캘린더</Personal>
        <Box>
          <SelectDate>2022년 7월</SelectDate>
          <Triangle src={"/img/triangle.png"} alt="triangle" />
          <Days>일</Days>
          <Days color={"black"} length={"184px"}>
            월
          </Days>
          <Days color={"black"} length={"303px"}>
            화
          </Days>
          <Days color={"black"} length={"422px"}>
            수
          </Days>
          <Days color={"black"} length={"541px"}>
            목
          </Days>
          <Days color={"black"} length={"660px"}>
            금
          </Days>
          <Days color={"blue"} length={"779px"}>
            토
          </Days>
          <Days
            color={"rgba(255, 59, 59, 0.3)"}
            length={"65px"}
            height={"140px"}
          >
            26
          </Days>
          <Days color={"rgba(0, 0, 0, 0.3)"} length={"184px"} height={"140px"}>
            27
          </Days>
          <Days color={"rgba(0, 0, 0, 0.3)"} length={"303px"} height={"140px"}>
            28
          </Days>
          <Days color={"rgba(0, 0, 0, 0.3)"} length={"422px"} height={"140px"}>
            29
          </Days>
          <Days color={"rgba(0, 0, 0, 0.3)"} length={"541px"} height={"140px"}>
            30
          </Days>
          <Days2 color={"black"} length={"660px"} height={"140px"}>
            1
          </Days2>
          <Days2 color={"blue"} length={"779px"} height={"140px"}>
            2
          </Days2>
          <Days2 color={"red"} length={"65px"} height={"253px"}>
            3
          </Days2>
          <Days2 color={"black"} length={"184px"} height={"253px"}>
            4
          </Days2>
          <Days2 color={"black"} length={"303px"} height={"253px"}>
            5
          </Days2>
          <Days2 color={"black"} length={"422px"} height={"253px"}>
            6
          </Days2>
          <Days2 color={"black"} length={"541px"} height={"253px"}>
            7
          </Days2>
          <Days2 color={"black"} length={"660px"} height={"253px"}>
            8
          </Days2>
          <Days2 color={"blue"} length={"779px"} height={"253px"}>
            9
          </Days2>
          <Days2 color={"red"} length={"65px"} height={"366px"}>
            10
          </Days2>
          <Days2 color={"black"} length={"184px"} height={"366px"}>
            11
          </Days2>
          <Days2 color={"black"} length={"303px"} height={"366px"}>
            12
          </Days2>
          <Days2 color={"black"} length={"422px"} height={"366px"}>
            13
          </Days2>
          <Days2 color={"black"} length={"541px"} height={"366px"}>
            14
          </Days2>
          <Days2 color={"black"} length={"660px"} height={"366px"}>
            15
          </Days2>
          <Days2 color={"blue"} length={"779px"} height={"366px"}>
            16
          </Days2>
          <Days2 color={"red"} length={"65px"} height={"479px"}>
            17
          </Days2>
          <Days2 color={"black"} length={"184px"} height={"479px"}>
            18
          </Days2>
          <Days2 color={"black"} length={"303px"} height={"479px"}>
            19
          </Days2>
          <Days2 color={"black"} length={"422px"} height={"479px"}>
            20
          </Days2>
          <Days2 color={"black"} length={"541px"} height={"479px"}>
            21
          </Days2>
          <Days2 color={"black"} length={"660px"} height={"479px"}>
            22
          </Days2>
          <Days2 color={"blue"} length={"779px"} height={"479px"}>
            23
          </Days2>
          <Days2 color={"red"} length={"65px"} height={"592px"}>
            24
          </Days2>
          <Days2 color={"black"} length={"184px"} height={"592px"}>
            25
          </Days2>
          <Days2 color={"black"} length={"303px"} height={"592px"}>
            26
          </Days2>
          <Days2 color={"black"} length={"422px"} height={"592px"}>
            27
          </Days2>
          <Days2 color={"black"} length={"541px"} height={"592px"}>
            28
          </Days2>
          <Days2 color={"black"} length={"660px"} height={"592px"}>
            29
          </Days2>
          <Days2 color={"blue"} length={"779px"} height={"592px"}>
            30
          </Days2>
          <Days2 color={"red"} length={"65px"} height={"705px"}>
            31
          </Days2>
          <Days color={"rgba(0, 0, 0, 0.3)"} length={"184px"} height={"705px"}>
            1
          </Days>
          <Days color={"rgba(0, 0, 0, 0.3)"} length={"303px"} height={"705px"}>
            2
          </Days>
          <Days color={"rgba(0, 0, 0, 0.3)"} length={"422px"} height={"705px"}>
            3
          </Days>
          <Days color={"rgba(0, 0, 0, 0.3)"} length={"541px"} height={"705px"}>
            4
          </Days>
          <Days color={"rgba(0, 0, 0, 0.3)"} length={"660px"} height={"705px"}>
            5
          </Days>
          <Days
            color={"rgba(7, 89, 149, 0.3)"}
            length={"779px"}
            height={"705px"}
          >
            6
          </Days>
          <ScheduleBox1 src={"/img/purple.png"} alt="purple" onClick={() => setModalIsOpen(true)}/>
          <ScheduleBox2 src={"/img/purple.png"} alt="purple" onClick={() => setModalIsOpen(true)}/>
          <ScheduleBox3 src={"/img/peach.png"} alt="peach" onClick={() => setModalIsOpen(true)}/>
          <ScheduleBox4 src={"/img/orange.png"} alt="orange" onClick={() => setModalIsOpen(true)}/>
          <ScheduleBox5 src={"/img/orange.png"} alt="orange" onClick={() => setModalIsOpen(true)}/>
          <ScheduleBox6 src={"/img/red.png"} alt="red" onClick={() => setModalIsOpen(true)}/>
          <ScheduleBox7 src={"/img/red.png"} alt="red" onClick={() => setModalIsOpen(true)}/>
          <Schedule1 src={"/img/content1.png"} alt="likelion" />
          <Schedule2 src={"/img/content1.png"} alt="likelion" />
          <Schedule3 src={"/img/content2.png"} alt="friends" />
          <Schedule4 src={"/img/content2.png"} alt="friends" />
          <Schedule5 src={"/img/content3.png"} alt="hackathon" />
          <Schedule6 src={"/img/content3.png"} alt="hackathon" />
          <Schedule7 src={"/img/content4.png"} alt="testtime" />
          <Circle src={"/img/circle.png"} alt="circle" />
          <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
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
            <ModalColor src={"/img/pulplebox.png"} alt="color" />
            <ModalText>해커톤 이성 TEAM</ModalText>
            <ModalDelete>삭제</ModalDelete>
            <ModalSave src={"/img/save.png"} alt="save" onClick={() => setModalIsOpen(false)}/>
          </Modal>
        </Box>
      </Container>
    </>
  );
};

export default Calender;
