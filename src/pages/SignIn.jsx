import { useContext } from "react";
import ThemeContext from "../context/Datacontext";

import Footer from "../component/footer";
import Header from "../component/hearder";
import { NavLink, Link } from "react-router-dom";

import "../component/Header.css";

export default function M_home() {
  const { clss, changeTheme } = useContext(ThemeContext);

  return (
    <div className="header">
      <Header/>

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
