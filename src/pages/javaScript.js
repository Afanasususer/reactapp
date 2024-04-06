import Header from "../component/hearder";
import Footer from "../component/footer";
import Main from "../component/Main";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function JavaScript() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Javascript Page</title>
        </Helmet>
        <Header />
        <Main pageName="JavaScript" Disinger="abdelouahab" />

        <Footer devName="abdelouahab" />
      </HelmetProvider>
    </>
  );
}
