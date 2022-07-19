import React from "react";
import Header from "../component/Header";
import LogIn from "../component/LogIn/Login";

// 로그인 페이지
const LoginPage = () => {
  return (
    <>
      {/* 헤더 */}
      <Header />
      {/* 로그인 부분 */}
      <LogIn />
    </>
  );
};

export default LoginPage;