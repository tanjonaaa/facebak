import {BrowserRouter, Routes as Router , Route} from "react-router-dom"
import News from "../../../pages/Home/News"
export default function Routes(){
    return (
        <BrowserRouter>
            <Router>
                <Route path="/" Component={News}/>
            </Router>
        </BrowserRouter>
    )
}