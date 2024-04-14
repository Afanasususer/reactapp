import { useContext } from "react";
import { useState } from "react";
import ThemeContext from "../context/Datacontext";
import Footer from "../component/footer";
import Header from "../component/hearder";


import { NavLink, Link } from "react-router-dom";
import "../component/Header.css";
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function M_home() {
  const { clss, changeTheme } = useContext(ThemeContext);
  const [ email , setEmail ] = useState("")
  const [ password , setPassword ] = useState("")

  return (
    <div className="header">
  


    <Header/>

      <main className="Mmain">
        <p>welcome to signUp page</p>
        <form id="form">
          <input onChange={(eo) => { setEmail(eo.target.value) }} id="email" type="email" placeholder=" Email : " />
          <input onChange={(eo) => { setPassword(eo.target.value) }} id="password" type="password" placeholder=" Password : " />
          <button
            onClick={(eo) => {
              eo.preventDefault();
              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed up
                  const user = userCredential.user;
                  console.log("doooone");
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorMessage);
                  // ..
                });
            }}
          >
            Sign up
          </button>
          <p className="Tosignup">
            Alraedy ahve an account <Link to="/SignIn">Sing In</Link>{" "}
          </p>
        </form>
      </main>
      <Footer devName="Abdelouahab" />
    </div>
  );
}

// 3la m afhamt houa anah fch kandir send data l local storage hna f onclick kisendiha qbel ma ybedlha, soit dert send f start or end























