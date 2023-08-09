import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="chat-notification">
      <div className="chat-notification-logo-wrapper">
        <img className="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo" />
      </div>
      <div className="chat-notification-content">
        <h4 className="chat-notification-title">ChitChat</h4>
        <p className="chat-notification-message">You have a new message!</p>
      </div>
    </div>
  );
}

export default App;
