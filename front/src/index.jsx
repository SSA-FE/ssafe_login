import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routerInfo } from "./util/router";

const router = createBrowserRouter(routerInfo);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <RouterProvider router={router} />
  </Fragment>
);
