import Header from "../component/hearder";
import Footer from "../component/footer";
import Main from "../component/Main";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home Page</title>
        </Helmet>
        
        <Header></Header>
        <Main pageName="home" Disinger="malik" />
        <Footer devName="abdelouahab" />
      </HelmetProvider>
    </>
  );
}


// donc ila bghina nessqo ayi haja f lfolder li smito page : home.js .. html.js .. javascript.js .. css.js : ya ima kan5admo style dyal lhelmet wla n5admo css file li kayna f src (index.css)