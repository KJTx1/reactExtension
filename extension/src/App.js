import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={signIn}>Sign In</button>
          Main Content
        </div>
      </header>
    </div>
  );
}

function signIn() {
  window.open('http://www.google.com/','_newtab');
}

export default App;
