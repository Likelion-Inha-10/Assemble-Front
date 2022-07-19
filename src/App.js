import FirstPage from "./pages/FristPage";
import SignIn from "./pages/SignIn";
import {Routes, Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>    
        {/* 웹 서비스 소개 페이지 */}
        <Route path="/" element={<FirstPage/>}/>
        {/* 회원가입 페이지 / 페이지로 연결해야되서 일단은 SignIn 페이지를 화면에 확인하기 위해 Firstpage 주석처리 함 */}
        <Route path="/signin" element={<SignIn/>}/>
        { /* <SignIn /> */ }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
