import React from "react";
import "./App.css";
import SignUpHome from "./pages/SignUpHome";
import SignUpMain from "./pages/SignUpMain";
import SignUpTest from "./pages/SignUpTest";
import ProtectedRoute from "./router/ProtectedRoutes";
import { createGlobalStyle } from "styled-components";
import { Route, Routes,Navigate } from "react-router-dom";
import { Reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Interop;
  }
`;

function App() {
  const isAuthenticated = localStorage.getItem("user") !== null;
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignUpHome />} />
        <Route path="/main" element={<SignUpMain />} />
        <Route path="/test" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SignUpTest/></ProtectedRoute>} />
      </Routes>
    </>
  );
}

export default App;
