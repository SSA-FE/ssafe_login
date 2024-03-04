import { Fragment } from "react";

import { HomePage } from "../pages/Home";
import { RegisterPage } from "../pages/Register";

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
];
