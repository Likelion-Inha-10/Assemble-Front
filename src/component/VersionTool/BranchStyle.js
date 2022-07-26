import React from 'react';
import styled from 'styled-components';

// 하위 메뉴들 전부를 묶어줄 div
export const Sub = styled.div`
  overflow: hidden;
`;

// 하위 메뉴들 번호들을 보여주는 div
export const SubVerNum = styled.div`
  height: 26px;

  display: flex;
  align-items: center;

  {/* 단계가 넘어갈수록 안쪽으로 들어가도록  */}
  padding-left: ${props => (props.depth * 20)}px;

  &:hover {
    background-color: #f0f8ff;
    cursor: pointer;
    border-right: solid 5px #075995;
  }
`;
