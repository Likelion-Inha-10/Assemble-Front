import React from 'react';
import LogInHeader from '../component/LogInHeader';
import Error from '../component/Error';


const ErrorPage = () => {
  return (
    <div>
      {/* 상단바 */}
      <LogInHeader />
      {/* 에러페이지 */}
      <Error />
    </div>
  );
};

export default ErrorPage;