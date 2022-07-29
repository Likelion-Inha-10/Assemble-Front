import React from 'react';
import styled from 'styled-components';

// 내비게이션 박스
export const NavBarBox= styled.div`
  width: 1464px;
  height: 52px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  padding-left: 140px;
  margin-top: 6px;

  display: flex;
  align-items: center;
`;

// NavBar에 있는 링크버튼
export const NavLink = styled.div`
  font-size: 16px;
  font-weight: 700;
  color:grey;

  margin-right: 15px;
`;