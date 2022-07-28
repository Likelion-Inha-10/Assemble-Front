import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { DesktopTower, HouseLine } from "phosphor-react";

// 팀 페이지 전체 박스
const Container = styled.div`
  width: 202px;
  height: 950px;

  font-family: "Noto Sans KR";
  font-style: normal;
`;

// '팀 페이지' 텍스트
const TeamPageText = styled.div`
  width: 202px;
  height: 31.53px;

  font-weight: 700;
  font-size: 24px;
  line-height: 35px;

  color: #075995;
  padding-left: 20px;
  /* 팀 페이지 텍스트 중앙 괜찮은지 체크 */
  /* text-align: center; */
`;

// '편집' 텍스트
const ModifyText = styled.div`
  width: 182px;
  height: 23.42px;

  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  color: #0a75be;
  text-align: end;

  padding-bottom: 5px;
`;

// 프로젝트 전체 박스
const ProjectBox = styled.div`
  width: 202px;
  height: 846px;

  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: auto;
`;

// 프로젝트 이미지 + 이름 포함한 각각의 박스
const Project = styled.div`
  width: 202px;
  height: 202px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

// 프로젝트 팀 이미지
const ProjectImage = styled.div`
  width: 166px;
  height: 166px;
  background-color: #86b2c6;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  // 편집 누르지 않았을 때 아이콘의 css
  .sumnailIcon {
    height: 140px;
    flex: none;
    order: 0;
    flex-grow: 0;
    color: #075995;
  }

  // 편집 버튼 눌렀을 때 아이콘의 css
  // 편집 버튼 눌렀을 경우 '-' 버튼 태그의 추가로 아이콘의 위치가 변하기 때문에 편집 눌렀을 때 안눌렀을 때 아이콘의 css 따로 작성함
  .sumnailIconEdit {
    height: 104px;
    padding-bottom: 31px;
    flex: none;
    order: 0;
    flex-grow: 0;
    color: #075995;
  }

  // 편집 눌렀을 때 '-' 아이콘
  #minusIcon {
    align-self: flex-end;
    padding-top: 5px;
    padding-right: 5px;
    width: 26px;
    height: 26px;
    color: red;
  }
`;

// 프로젝트 이름
const ProjectName = styled.div`
  width: 200px;
  height: 26px;
  text-align: center;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;

  flex: none;
  order: 1;
  flex-grow: 0;
  padding-top: 10px;
`;

// 플러스 박스
const PlusImage = styled.div`
  background-image: url("img/plusproject.png");
  background-size: cover;
  border-radius: 10px;
  flex: none;
  order: 0;
  flex-grow: 0;
  width: 166px;
  height: 166px;
`;

// '팀 페이지를 추가해주세요' 텍스트
const NoticeText = styled.div`
  width: 110px;
  height: 52px;
  padding-top: 20px;
  padding-bottom: 20px;

  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  text-align: center;

  color: rgba(0, 0, 0, 0.5);
`;

const ProjectSelect = () => {
  const [modify, setModify] = useState(false); // 편집 버튼 클릭 시 변경을 위한 변수

  const onClickModify = () => {
    setModify(!modify);
  };

  return (
    <>
      <Container>
        <TeamPageText>팀 페이지</TeamPageText>
        {/* modify가 참이면 저장 버튼으로 변경, modify가 거짓이면 편집 버튼이 나타남 */}
        <ModifyText onClick={onClickModify}>
          {modify ? "저장" : "편집"}
        </ModifyText>
        <ProjectBox>
          {modify ? (
            <Project>
              <ProjectImage>
                {/* modify가 참이면 '-' 버튼 나옴 */}
                <AiOutlineMinusCircle id="minusIcon" />
                <HouseLine className="sumnailIconEdit" size={80} />
              </ProjectImage>
              <ProjectName>인하대학교</ProjectName>
            </Project>
          ) : (
            <Project>
              <ProjectImage>
                <HouseLine className="sumnailIcon" size={80} />
              </ProjectImage>
              <ProjectName>인하대학교</ProjectName>
            </Project>
          )}

          {modify ? (
            <Project>
              <ProjectImage>
                <AiOutlineMinusCircle id="minusIcon" />
                <DesktopTower className="sumnailIconEdit" size={80} />
              </ProjectImage>
              <ProjectName>해커톤이성</ProjectName>
            </Project>
          ) : (
            <Project>
              <ProjectImage>
                <DesktopTower className="sumnailIcon" size={80} />
              </ProjectImage>
              <ProjectName>해커톤이성</ProjectName>
            </Project>
          )}
          <Project>
            {/* 플러스 박스 누르면 프로젝트 생성 페이지로 넘어감 */}
            <NavLink to={"/makeproject"}>
              <PlusImage></PlusImage>
            </NavLink>
            <NoticeText>팀 페이지를 추가해주세요</NoticeText>
          </Project>
        </ProjectBox>
      </Container>
    </>
  );
};

export default ProjectSelect;
