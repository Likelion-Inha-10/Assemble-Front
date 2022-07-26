import React from 'react';
import LogInHeader from '../component/LogInHeader';
import Calender from '../component/Calender';

//마이 페이지
const MyPage = () => {
  return (
    <>
      {/* 헤더 */}
      <LogInHeader />
      {/* 마이 페이지 중 달력파트 */}
      <Calender />
    </>
  );
};

export default MyPage;