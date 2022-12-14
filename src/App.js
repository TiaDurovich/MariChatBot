import React from 'react';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import './App.css';

import config from './config.js';
import MessageParser from './MessageParser.js';
import ActionProvider from './ActionProvider.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot 
        config={config} 
        messageParser={MessageParser} 
        actionProvider={ActionProvider} />
      </header>
    </div>
  );
}

export default App;
