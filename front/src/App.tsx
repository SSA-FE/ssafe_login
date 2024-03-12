import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import AuthCreate from "./Pages/AuthCreate";
import CreateForm from "./Pages/CreateForm";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/AuthCreate" element={<AuthCreate />} />
        <Route path="/CreateForm" element={<CreateForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
