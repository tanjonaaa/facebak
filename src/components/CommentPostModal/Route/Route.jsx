import {BrowserRouter, Routes as Router , Route} from "react-router-dom"
import News from "../../../pages/Home/News"
import SignUp from "../../../pages/SignUp/SignUp";
export default function Routes(){
    return (
        <BrowserRouter>
            <Router>
                <Route path="/" Component={News}/>
                <Route path="/sign-up" Component={SignUp}/>
            </Router>
        </BrowserRouter>
    )
}