import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 상단바 전체 박스
const Bar = styled.div`
  height: 90px;
  width: 100%;
  background-color: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
`;

// 상단바 로고
const Logo = styled.img`
  position: absolute;
  width: 227px;
  height: 69px;
  left: 145px;
  top: 12px;
`;

// 상단바 컴포넌트
const Header = () => {

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  }

  return (
    <div>
      <Bar>
        <Logo onClick={goToHome} src={"/img/logo.png"} alt="ASSEMBLE" />
      </Bar>
    </div>
  );
};

export default Header;
