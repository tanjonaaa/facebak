import './App.css';
import { NewsFeed } from "./pages/NewsFeed";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import ClientProvider from './components/provider';
import Profile from "./pages/Profile";
import { Login } from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <ClientProvider>
          <Routes>
            <Route path="/" Component={NewsFeed} />
            <Route path="/sign-up" Component={SignUp} />
            <Route path="/Profile/:user" Component={Profile} />
            <Route path="/login" Component={Login}/>
          </Routes>
      </ClientProvider>
    </BrowserRouter>
  );
}

export default App;