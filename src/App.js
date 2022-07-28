import FirstPage from "./pages/FristPage";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
import MyPage from "./pages/MyPage";
import ErrorPage from "./pages/ErrorPage";
import UserPage from "./pages/UserPage";
import MakeProject from "./pages/MakeProject";
import VersionToolPage from "./pages/VersionToolPage";
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
        {/* <Calender /> */}
        <Route path="/calendar" element={<MyPage />} />
        {/* <Error /> */}
        <Route path="/error" element={<ErrorPage />} />
        {/* 유저 메인페이지 */}
        <Route path="/userpage" element={<UserPage />} />
        {/* 프로젝트 생성 페이지 */}
        <Route path="/makeproject" element={<MakeProject />} />
        {/* 버전 툴 페이지 */}
        <Route path="/vertool" element={<VersionToolPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
