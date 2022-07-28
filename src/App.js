import FirstPage from "./pages/FristPage";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
import UserPage from "./pages/UserPage";
import MakeProject from "./pages/MakeProject";
import MakeToDo from "./component/UserPageComponent/MakeToDo";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const apiUrl = "http://127.0.0.1:8000";

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
        <Route path="/userpage" element={<UserPage apiUrl={apiUrl} />} />
        {/* 프로젝트 생성 페이지 */}
        <Route path="/makeproject" element={<MakeProject apiUrl={apiUrl} />} />
        <Route path="/maketodo" element={<MakeToDo apiUrl={apiUrl} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
