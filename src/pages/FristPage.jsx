import React from "react";
import Header from "../component/Header";
import Introduce from "../component/FirstPage/Introduce";

// 웹 서비스 소개 페이지
const FirstPage = () => {
  return (
    <div>
      {/* 상단바 */}
      <Header />
      {/* 웹 서비스 소개 페이지 메인 부분 */}
      <Introduce />
    </div>
  );
};

export default FirstPage;
