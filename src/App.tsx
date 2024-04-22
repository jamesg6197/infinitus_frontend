import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import Navbar from "./pages/Navbar";
import { AuthProvider } from "./pages/AuthContext";
import LoginPage from "./pages/LoginPage";

import './App.css';
import PDFChatPage from "./pages/PDFChatPage";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/pdfchatPage" element = {<PDFChatPage />} />
          </Routes>
        </div>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
