import {BrowserRouter, Route, Routes as Router} from "react-router-dom";
import CommentPostModal from "../CommentPostModal";

export default function Routes(){
    return (
        <BrowserRouter>
            <Router>
                <Route path="/" Component={CommentPostModal}/>
            </Router>
        </BrowserRouter>
    )
}