import './App.css';
import { NewsFeed } from "./pages/NewsFeed";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import ClientProvider from './components/provider';
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <ClientProvider>

          <Routes>
            <Route path="/" Component={NewsFeed} />
            <Route path="/signup" Component={SignUp} />
            <Route path="/Profile/:user" Component={Profile} />
          </Routes>

      </ClientProvider>
    </BrowserRouter>
  );
}

export default App;