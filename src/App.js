import './App.css';
import Routes from './components/CommentPostModal/Route/Route';
import {Navbar} from '../src/components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className='h-12'/>
      <Routes />
    </>
  );
}

export default App;