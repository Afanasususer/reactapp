import { useContext } from "react";
import { useState } from "react";
import ThemeContext from "../context/Datacontext";

import Footer from "../component/footer";
import Header from "../component/hearder";
import { NavLink, Link } from "react-router-dom";

import "../component/Header.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

export default function M_home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { clss, changeTheme } = useContext(ThemeContext);

  return (
    <div className="header">
      <Header />

      <main className="Mmain">
        <p>welcome to signIn page</p>
        <form id="form">
          <input
            onChange={(eo) => {
              setEmail(eo.target.value);
            }}
            id="email"
            type="email"
            placeholder=" Email : "
          />
          <input
            onChange={(eo) => {
              setPassword(eo.target.value);
            }}
            id="password"
            type="password"
            placeholder=" Password : "
          />
          <button
            onClick={(eo) => {
              eo.preventDefault();
              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                });
            }}
          >
            Sign in
          </button>
          <p className="Tosignup">
            Don't have an accout <Link to="/SignUp">Sing Up</Link>{" "}
          </p>
        </form>
      </main>

      <Footer devName="Abdelouahab" />
    </div>
  );
}

// 3la m afhamt houa anah fch kandir send data l local storage hna f onclick kisendiha qbel ma ybedlha, soit dert send f start or end
