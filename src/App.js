import './App.css';
import { NewsFeed } from "./pages/NewsFeed";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import ClientProvider from './components/provider';
import Profile from "./pages/Profile";
import { Login } from './pages/Login';
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <BrowserRouter>
      <ClientProvider>
          <Routes>
            <Route path="/login" Component={Login}/>
            <Route path="/sign-up" Component={SignUp} />

            <Route path="/" element={
                <ProtectedRoute>
                    <NewsFeed/>
                </ProtectedRoute>
            } />

            <Route path="/Profile/:user" element={
                <ProtectedRoute>
                    <Profile/>
                </ProtectedRoute>
            } />

          </Routes>
      </ClientProvider>
    </BrowserRouter>
  );
}

export default App;