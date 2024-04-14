import { useContext } from "react";
import ThemeContext from "../context/Datacontext";

import Footer from "../component/footer";
import { NavLink, Link } from "react-router-dom";

import "../component/Header.css";

export default function M_home() {
  const { clss, changeTheme } = useContext(ThemeContext);

  return (
    <div className="header">
      <header className="hide-when-mobile">
        <Link to="/">
          <h1>
            Coding <span className="numb">4</span> Life
          </h1>
        </Link>

        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/SignIn">
              Sign In
            </NavLink>
          </li>

          <li className="main-list">
            <NavLink className="main-link" to="/SignUp">
              Sign Up
            </NavLink>
          </li>

          {/* Dark & light mode button  */}
          <li className="main-list">
            <div
              onClick={() => {
                changeTheme(clss === "light" ? "dark" : "light");
              }}
            >
              <i className="fa-solid fa-sun"></i>
              <i class="fa-solid fa-moon"></i>
            </div>
          </li>
          {/* end of dark and light mode codes */}
        </ul>
      </header>

      <main className="Mmain">
        <p>welcome to signIn page</p>
        <form id="form">
          <input id="email" type="email" placeholder=" Email : "/>
          <input id="password" type="password" placeholder=" Password : "/>
          <button onClick={(eo) => { eo.preventDefault()  }}>Sign in</button>
          <p className="Tosignup">Don't have an accout <Link to="/SignUp">Sing Up</Link> </p>
        </form>
      </main>

      <Footer devName="Abdelouahab" />   
    </div>
  );
}

// 3la m afhamt houa anah fch kandir send data l local storage hna f onclick kisendiha qbel ma ybedlha, soit dert send f start or end
