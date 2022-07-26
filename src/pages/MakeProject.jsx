import React from "react";
import Header from "../component/Header";
import NewProject from "../component/NewProject/NewProject";

const MakeProject = () => {
  return (
    <>
      {/* 상단바 */}
      <Header></Header>
      {/* 생성할 프로젝트 작성 */}
      <NewProject></NewProject>
    </>
  );
};

export default MakeProject;
