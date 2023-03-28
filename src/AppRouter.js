import { BrowserRouter,Routes , Route } from "react-router-dom";
import Nodebtlist from "./nodebt_list";

function AppRouter(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/nodebtlist" element={<Nodebtlist/>}></Route>
                    <Route path="/nodebtBrn" element={<nodebtByBranch/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;