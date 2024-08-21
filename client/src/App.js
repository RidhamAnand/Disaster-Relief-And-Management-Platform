import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/home/HomePage";
import SignUpPage from "./Pages/auth/signup/SignUpPage";
import LogInPage from "./Pages/auth/login/LogInPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignUpPage />} />
        <Route path="/sign-up" element={<LogInPage />} />
      </Routes>
    </>
  );
}

export default App;
