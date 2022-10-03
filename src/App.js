import React from 'react';
import { Chatbot } from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import config from './config.js';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot config={config} MessageParser={MessageParser} ActionProvider={ActionProvider}/>
      </header>
    </div>
  );
}

export default App;
