import React from "react";
import styled from "styled-components";
import Header from "../component/Header";
import ProjectSelect from "../component/UserPageComponent/ProjectSelect";
import TodoList from "../component/UserPageComponent/TodoList";
import Calender from "../component/UserPageComponent/Calender";

// 캘린더는 임시
// 프로젝트 컴포넌트와 투두리스트 컴포넌트에서 편집 누른 경우는 아직 구현 안함

// 프로젝트, 투두리스트, 캘린더를 포함하는 박스
const Container = styled.div`
  padding-top: 70px;
  padding-left: 30px;
  padding-right: 30px;

  display: flex;
  justify-content: space-between;
`;

const UserPage = () => {
  return (
    <>
      {/* 상단바 */}
      <Header></Header>
      <Container>
        {/* 프로젝트 선택 부분 */}
        <ProjectSelect></ProjectSelect>
        {/* 투두리스트 부분 */}
        <TodoList></TodoList>
        {/* 캘린더 부분 */}
        <Calender></Calender>
      </Container>
    </>
  );
};

export default UserPage;
