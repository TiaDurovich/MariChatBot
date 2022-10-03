import React from 'react';
import { Chatbot } from 'react-chatbot-kit'

import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import config from './config';

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
