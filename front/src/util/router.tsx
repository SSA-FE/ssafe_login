import { Fragment } from "react";

import { HomePage } from "../pages/Home";
import RegisterPage from "../pages/Register";
import LoginPage from "../pages/Login/Page";

import GlobalNav from "../layout/GlobalNav";

export const routerInfo = [
  {
    path: "/",
    element: (
      <Fragment>
        <GlobalNav />
        <HomePage />
      </Fragment>
    ),
  },

  {
    path: "/join",
    element: (
      <Fragment>
        <GlobalNav />
        <RegisterPage />
      </Fragment>
    ),
  },

  {
    path: "/login",
    element: (
      <Fragment>
        <GlobalNav />
        <LoginPage />
      </Fragment>
    ),
  }
];
