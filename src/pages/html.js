

import Header from "../component/hearder";
import Footer from "../component/footer";
import Main from "../component/Main";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Html() {






  return (
    <div>
        <HelmetProvider>
          <Helmet>
            <title>Html Page</title>
          </Helmet> 
          <Header></Header>
          <Main pageName="html" Disinger="Reem" />
          <Footer devName="Abdelouahab" />
        </HelmetProvider>
    </div>
  );
}
