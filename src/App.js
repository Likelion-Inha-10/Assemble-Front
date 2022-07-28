import FirstPage from "./pages/FristPage";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
import UserPage from "./pages/UserPage";
import MakeProject from "./pages/MakeProject";
import VersionToolPage from "./pages/VersionToolPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TeamPage from "./pages/TeamPage";

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
        {/* 버전 툴 페이지 */}
        <Route path="/vertool" element={<VersionToolPage />} />
        {/* 팀 페이지 */}
        <Route path="/teampage" element={<TeamPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
