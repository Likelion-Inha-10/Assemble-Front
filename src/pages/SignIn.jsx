import React from "react";
import Header from "../component/Header";
import MakeId from "../component/SignIn/MakeId";

// 회원가입 페이지
const SignIn = () => {
  return (
    <>
      {/* 상단바 */}
      <Header></Header>
      {/* 회원가입 작성 부분 */}
      <MakeId></MakeId>
    </>
  );
};

export default SignIn;
