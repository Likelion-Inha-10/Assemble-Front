import React from "react";
import styled from "styled-components";
import { useState } from "react";
import {
  MusicNotes,
  Buildings,
  PersonSimpleRun,
  Globe,
  PencilLine,
  DesktopTower,
  FilmSlate,
  Dog,
  Hamburger,
  HouseLine,
} from "phosphor-react";

// 전체 박스
const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 100px;
  padding-bottom: 100px;

  hr {
    width: 424px;
  }
`;

// '새로운 팀 페이지 생성' 텍스트
const TopText = styled.div`
  width: 424px;
  height: 29px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 20.354px;
  line-height: 29px;
  text-align: center;

  padding-bottom: 50px;
`;

// '* 필수 입력사항' 텍스트
const NoticeText = styled.div`
  width: 424px;
  height: 15px;

  text-align: end;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 10.177px;
  line-height: 15px;
`;

// 각각의 입력 박스 (ex)팀이름 + 이름 입력란)
const Box = styled.div`
  width: 424px;
  display: flex;
  align-items: center;
  padding-top: 20px;
`;

// 입력할 사항 텍스트
const Text = styled.div`
  width: 100px;
  height: 20px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13.5693px;
  line-height: 20px;
`;

// 입력 부분
const Input = styled.input`
  box-sizing: border-box;

  width: 217.11px;
  height: 36.47px;

  padding-left: 10px;

  background: #ffffff;
  border: 0.848082px solid rgba(0, 0, 0, 0.5);
  border-radius: 2.54425px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 11.8732px;
  line-height: 17px;

  color: rgba(10, 10, 10, 0.5);
`;

// 프로젝트 아이콘 전체 박스
const SumnailBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 6.55689px;
  gap: 6.12px;

  width: 219px;
  height: 91.8px;

  background: #ffffff;
  box-shadow: 0px 0.874251px 0.874251px rgba(0, 0, 0, 0.25);
  border-radius: 2.18563px;

  /* 각 아이콘 css */
  .sumnailIcon {
    color: #075995;
    box-shadow: 0px 3px 3px lightgray;
    border-radius: 5px;
  }
`;

// 팀원 아이디 추가되는 큰 박스
const TextArea = styled.textarea`
  box-sizing: border-box;
  resize: none;

  width: 217.11px;
  height: 225.59px;

  padding-left: 10px;
  padding-top: 10px;

  background: #ffffff;
  border: 0.848082px solid rgba(0, 0, 0, 0.5);
  border-radius: 2.54425px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 11.8732px;
  line-height: 17px;

  color: rgba(10, 10, 10, 0.5);
`;

// 추가할 팀원의 아이디 입력하는 부분
const IdsBox = styled.div`
  box-sizing: border-box;

  width: 217.11px;
  height: 56.9px;

  background: #ffffff;
  border: 0.848082px solid rgba(0, 0, 0, 0.5);
  border-radius: 2.54425px;
`;

const MakeButton = styled.button`
  width: 161.14px;
  height: 36.47px;

  background: #073255;
  border-radius: 8.48082px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 15.2655px;
  line-height: 22px;

  color: #ffffff;

  margin-top: 20px;
`;

const NewProject = () => {
  const [name, setName] = useState(""); // 이름
  const [intro, setIntro] = useState(""); // 팀 설명

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeIntro = (e) => {
    setIntro(e.target.value);
  };
  return (
    <>
      <Container>
        <TopText>새로운 팀 페이지 생성</TopText>
        <NoticeText>
          <span style={{ color: "rgba(253, 9, 9, 0.5)" }}>*</span> 필수 입력사항
        </NoticeText>
        <hr></hr>
        <Box>
          <Text>
            팀이름<span style={{ color: "rgba(253, 9, 9, 0.5)" }}>*</span>
          </Text>
          <Input
            type={"type"}
            placeholder={"팀 이름을 입력해주세요"}
            onChange={onChangeName}
            value={name}
          ></Input>
        </Box>
        <Box>
          <Text>팀소개</Text>
          <TextArea
            placeholder="팀에 대한 정보를 입력해주세요"
            onChange={onChangeIntro}
            value={intro}
          ></TextArea>
        </Box>
        <Box>
          <Text>썸네일 설정</Text>
          <SumnailBox>
            <MusicNotes className="sumnailIcon" size={32} />
            <Buildings className="sumnailIcon" size={32} />
            <PersonSimpleRun className="sumnailIcon" size={32} />
            <Globe className="sumnailIcon" size={32} />
            <PencilLine className="sumnailIcon" size={32} />
            <DesktopTower className="sumnailIcon" size={32} />
            <FilmSlate className="sumnailIcon" size={32} />
            <Dog className="sumnailIcon" size={32} />
            <Hamburger className="sumnailIcon" size={32} />
            <HouseLine className="sumnailIcon" size={32} />
          </SumnailBox>
        </Box>
        <Box>
          <Text>팀원초대</Text>
          <div>
            <IdsBox></IdsBox>
            <Input
              type={"text"}
              placeholder={"팀원의 아이디를 입력해주세요"}
            ></Input>
          </div>
        </Box>
        <hr style={{ marginTop: "20px" }}></hr>
        <MakeButton>팀 페이지 생성</MakeButton>
      </Container>
    </>
  );
};

export default NewProject;
