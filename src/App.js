import FirstPage from "./pages/FristPage";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
import ErrorPage from "./pages/ErrorPage";
import UserPage from "./pages/UserPage";
import MakeProject from "./pages/MakeProject";
import MakeToDo from "./component/UserPageComponent/MakeToDo";
import VersionToolPage from "./pages/VersionToolPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TeamPage from "./pages/TeamPage";
import Modal from "react-modal";

function App() {
  // api 주소
  const apiUrl = "http://172.104.68.149:8000";

  return (
    <BrowserRouter>
      <Routes>
        {/* 웹 서비스 소개 페이지 */}
        <Route path="/" element={<FirstPage />} />
        {/* <SignIn /> */}
        <Route path="/signin" element={<SignIn />} />
        {/* <LogIn /> */}
        <Route path="/login" element={<LogIn />} />
        {/* <Error /> */}
        <Route path="/error" element={<ErrorPage />} />
        {/* 유저 메인페이지 */}
        <Route path="/userpage" element={<UserPage apiUrl={apiUrl} />} />
        {/* 프로젝트 생성 페이지 */}
        <Route path="/makeproject" element={<MakeProject apiUrl={apiUrl} />} />
        {/* 투두리스트 생성 페이지 */}
        <Route path="/maketodo" element={<MakeToDo apiUrl={apiUrl} />} />
        {/* 버전 툴 페이지 */}
        <Route path="/vertool" element={<VersionToolPage />} />
        {/* 팀 페이지 */}
        <Route path="/teampage" element={<TeamPage />} />
      </Routes>
    </BrowserRouter>
  );
}

Modal.setAppElement("#root");

export default App;
