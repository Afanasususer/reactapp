import { useContext } from "react";
import ThemeContext from "../context/Datacontext";

import { NavLink, Link } from "react-router-dom";
import "./Header.css";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import {signOut } from "firebase/auth";

export default function Hearder() {
  const [user, loading, error] = useAuthState(auth);
  const { clss, changeTheme } = useContext(ThemeContext);

  return (
    // <div className= "header">
    <div className="header">

      <header className="hide-when-mobile">
        {/* had l3onwan redo ilnk dyal lhome */}
        <Link to="/home">
          <h1>
            Coding <span className="numb">4</span> Life
          </h1>
        </Link>

        <ul className="flex">
          {user && 
            <li onClick={() => { signOut(auth).then(() => {
              // Sign-out successful.
            }).catch((error) => {
              // An error happened.
            }); }} className="main-list">
              <NavLink className="main-link" to="/SignIn">
                Log out
              </NavLink>
            </li>
          }

          {!user && (
            <>
              {/* det parent 5awi bch ma t5assarlich flexbox dyal lheader */}
              <li
                onClick={() => {
                  signOut(auth)
                    .then(() => {
                      // Sign-out successful.
                    })
                    .catch((error) => {
                      // An error happened.
                    });
                }}
                className="main-list"
              >
                <NavLink className="main-link" to="/SignIn">
                  Sign In
                </NavLink>
              </li>

              <li className="main-list">
                <NavLink className="main-link" to="/SignUp">
                  Sign Up
                </NavLink>
              </li>
            </>
          )}

      {  user && <>
            <li className="main-list">
              <NavLink className="main-link" to="/html">
                HTML
              </NavLink>
              {/* <ul className="sub-ul">
                <li>
                  <a href="">Full Course</a>
                </li>
                <li>
                  <a href="">Crash Course</a>
                </li>
                <li>
                  <a href="">learn in 1h</a>
                </li>
              </ul> */}
            </li>
            <li className="main-list">
              <NavLink className="main-link" to="/css">
                CSS
              </NavLink>
              {/* <ul className="sub-ul">
                <li>
                  <a href="">Full Course</a>
                </li>
                <li>
                  <a href="">CSS Examples</a>
                </li>
                <li className="mini-projects">
                  <a href="">mini projects + </a>
                  <ul className="sub-sub-ul">
                    <li>
                      <a href="">project 1</a>
                    </li>
                    <li>
                      <a href="">project 2</a>
                    </li>
                    <li>
                      <a href="">project 3</a>
                    </li>
                  </ul>
                </li>
              </ul> */}
            </li>
            <li className="main-list">
              <NavLink className="main-link" to="/javascript">
                JavaScript
              </NavLink>
              {/* <ul className="sub-ul sub-of-js">
                <li>
                  <a href="">coming soon🔥</a>
                </li>
              </ul> */}
            </li>
        </>}

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
    </div>
  );
}

// 3la m afhamt houa anah fch kandir send data l local storage hna f onclick kisendiha qbel ma ybedlha, soit dert send f start or end
