import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { NewsFeed } from './pages/NewsFeed';

function App() {
  return (
    <>
      <Navbar></Navbar>

      <div className="h-12"></div>

      <div className="contentBody mt-3 flex w-full">
        <aside className="asideEmpty w-3/12 flex-shrink-0 p-2 h-screen">
          <div className="asidePadded w-100"></div>
        </aside>

        <main className="mainPage flex flex-col gap-4">
          <NewsFeed />
        </main>


        <aside className="asideEmpty w-3/12 flex-shrink-0 p-2 h-screen">
          <div className="asidePadded w-100"></div>
        </aside>
      </div>
    </>
  );
}

export default App;
