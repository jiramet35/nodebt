import { BrowserRouter,Routes , Route } from "react-router-dom";
import NodebtBrn from "./nodebtBrn";
import Nodebtlist from "./nodebt_list";
import AppHeader from "./AppHeader";
import Auth from "./auth";
import { useEffect } from "react";
//import AppRouter from "./AppRouter";
function Main() {
  useEffect( ()=>{

  });

  /*if(!sessionStorage.getItem("PWAusr")){
    return(
      <div>
            <BrowserRouter basename={'/nodebt'}>
                  <Routes>
                      <Route path="/" element={<Auth/>}></Route>
                  </Routes>
              </BrowserRouter>
      </div>
    );
  }else{*/
    return (
      <div>
            
            <BrowserRouter basename={'/nodebt'}>
                  <Routes>
                      <Route path="/" element={<Auth/>}></Route>
                      <Route path="/nodebtlist" element={<><AppHeader /><Nodebtlist/></>}></Route>
                      <Route path="/nodebtBrn" element={<><AppHeader /><NodebtBrn/></>}></Route>
                  </Routes>
              </BrowserRouter>
      </div>
    );
 /* }*/
}

export default Main;
