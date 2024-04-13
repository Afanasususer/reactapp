import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// f smiya dyal import tedar tsemi li bghiti lmohim hiya li ghadi tdem biha f lfile kolo wdarouri ykon awel harf capital, w mn l2a7ssen semi b nefss smiya dyal lfunction li kayna f lfile li nta baghi thadar hit katweli dir auto import lrassha fach katkteb smiya f dak f dak element so mn l2a7ssen n5edmo b smiyat dyal lfunction dyalna
// import './mobile-screen.css'
import { HelmetProvider } from "react-helmet-async";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { DataProvider } from "./context/Datacontext";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <DataProvider>
        <App/>
      </DataProvider>
    </HelmetProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
