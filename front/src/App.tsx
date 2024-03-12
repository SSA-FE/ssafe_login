import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Test from "./pages/Test";
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
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/test" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Test/></ProtectedRoute>} />
      </Routes>
    </>
  );
}

export default App;
