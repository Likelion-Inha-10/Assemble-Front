import FirstPage from "./pages/FristPage";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
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
        <Route path="/vertool" element={<VersionToolPage />} />
        </Routes>
        
    </BrowserRouter> 
    
    
  );
}

export default App;
