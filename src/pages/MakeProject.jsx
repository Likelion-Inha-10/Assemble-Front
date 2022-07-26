import React from "react";
import LogInHeader from "../component/LogInHeader";
import NewProject from "../component/NewProject/NewProject";

const MakeProject = () => {
  return (
    <>
      {/* 로그인 후 헤더 */}
      <LogInHeader />
      {/* 생성할 프로젝트 작성 */}
      <NewProject></NewProject>
    </>
  );
};

export default MakeProject;
