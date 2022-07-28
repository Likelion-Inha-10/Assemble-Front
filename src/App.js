import FirstPage from "./pages/FristPage";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
import MyPage from "./pages/MyPage";
import ErrorPage from "./pages/ErrorPage";
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
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
