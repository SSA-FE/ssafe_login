import { Fragment } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routerInfo } from "./util/router";
import { Provider } from "react-redux";

import store from "./store";

const router = createBrowserRouter(routerInfo);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Fragment>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </Fragment>
);
