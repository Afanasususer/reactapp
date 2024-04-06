import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import ErrorPage from "./pages/ErrorPage";
import Html from "./pages/html";
import Css from "./pages/css";
import JavaScript from "./pages/javaScript";
// f smiya dyal import tedar tsemi li bghiti lmohim hiya li ghadi tdem biha f lfile kolo wdarouri ykon awel harf capital, w mn l2a7ssen semi b nefss smiya dyal lfunction li kayna f lfile li nta baghi thadar hit katweli dir auto import lrassha fach katkteb smiya f dak f dak element so mn l2a7ssen n5edmo b smiyat dyal lfunction dyalna
// import './mobile-screen.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    // errorElement: <h1>this page not available</h1>
  },

  {
    path: "/html",
    element: <Html />,
    errorElement: <ErrorPage />,
    // errorElement: <h1>this page not available</h1>
  },

  {
    path: "/css",
    element: <Css />,
    errorElement: <ErrorPage />,
    // errorElement: <h1>this page not available</h1>
  },

  {
    path: "/javascript",
    element: <JavaScript />,
    errorElement: <ErrorPage />,
    // errorElement: <h1>this page not available</h1>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
