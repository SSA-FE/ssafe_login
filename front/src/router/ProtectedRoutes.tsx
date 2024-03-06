import React from "react";
import {Outlet, Route, Navigate, RouteProps } from "react-router-dom";


const isAuthenticated = localStorage.getItem("user") !== null;

const ProtectedRoute: React.FC = () => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/"/>

};


export default ProtectedRoute;