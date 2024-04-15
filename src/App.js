import {useContext} from "react";
 import ThemeContext from "./context/Datacontext";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import ErrorPage from "./pages/ErrorPage";
import Html from "./pages/html";
import Css from "./pages/css";
import Mhome from "./pages/M_home"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import JavaScript from "./pages/javaScript";

function App() {
  const {clss} = useContext(ThemeContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
      errorElement: <ErrorPage />,
      // errorElement: <h1>this page not available</h1>
    },
    {
      path: "/SignIn",
      element: <SignIn />,
      errorElement: <ErrorPage />,
      // errorElement: <h1>this page not available</h1>
    },
    {
      path: "/SignUp",
      element: <SignUp />,
      errorElement: <ErrorPage />,
      // errorElement: <h1>this page not available</h1>
    },
    {
      path: "/home",
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








  return (
<div className={`${clss}`}>
<RouterProvider router={router} />  
</div>
)
}

export default App;