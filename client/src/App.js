import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/home/HomePage";
import SignUpPage from "./Pages/auth/signup/SignUpPage";
import LogInPage from "./Pages/auth/login/LogInPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>
    </div>
  );
}

export default App;
