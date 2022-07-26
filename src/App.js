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
