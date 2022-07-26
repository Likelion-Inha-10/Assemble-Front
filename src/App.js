import FirstPage from "./pages/FristPage";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
import UserPage from "./pages/UserPage";
import MakeProject from "./pages/MakeProject";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 웹 서비스 소개 페이지 */}
        <Route path="/" element={<FirstPage />} />
        {/* <SignIn /> */}
        <Route path="/signin" element={<SignIn />} />
        {/* <LogIn /> */}
        <Route path="/login" element={<LogIn />} />
        {/* 유저 메인페이지 */}
        <Route path="/userpage" element={<UserPage />} />
        {/* 프로젝트 생성 페이지 */}
        <Route path="/makeproject" element={<MakeProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
변경사항
* react 아이콘 설치
* phosphor icons 설치
NewProject 파일
- NewProject.jsx : 새로운 프로젝트 팀 생성 컴포넌트
SignIn 파일
- MakeId.jsx 
  1. 각각의 입력사항 값 변수에 저장해놓도록 설정 (백에 넘기기 위함)
UserPage 파일
- Calender.jsx : 임시 캘린더 박스 (위치 조정을 위함)
- MakeTodo.jsx : 투두리스트 추가
- ProjectSelect.jsx : 유저 메인페이지에서 프로젝트 선택 부분
- TodoList.jsx : 유저 메인페이지에서 투두리스트 부분
Pages 파일
- MakeProject.jsx : 프로젝트 팀 생성 페이지
- UserPage.jsx : 유저 메인페이지
*/
