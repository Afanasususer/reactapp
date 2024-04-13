import Header from "../component/hearder";
import Footer from "../component/footer";
import Main from "../component/Main";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Css() {
  return (
    <div>
      <>
        <HelmetProvider>
          <Helmet>
            <title>Css Page</title>

            <style type="text/css">{`
        body {
            background-color: gray;
            
        }
 
        .tst {
            color: red
        }

        .parag {
            color: red
        }
          `}</style>
          
          </Helmet>
          <Header></Header>
          {/* <p className="parag">this style only for css page using helmet style</p> */}
          <Main pageName="css" Disinger="abdelouahab" />
          <Footer devName="abdelouahab" />
        </HelmetProvider>
      </>
    </div>
  );
}


// dak test commentito f lcomponenet dyal lmain
// darori t7tarm ay espace west mn dok backtick `    ` 5ossossan bin kola calss w tanya khali ster khawi