import './App.css';
import {NewsFeed} from "./pages/NewsFeed";
import {Navbar} from './components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <div className='h-12 pt-1'/>
        <Routes>
            <Route path="/" Component={NewsFeed}/>
            <Route path="/sign-up" Component={SignUp}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;