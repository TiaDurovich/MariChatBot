import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../src/Options.js";

//Variable storing text data
const botName = 'the Marist College NCEA Chatbot'

window.onload = function onload() {
  alert("Welcome to the Marist College NCEA Chatbot. Please note that the chatbot is spelling sensitive.") 
}

/*
var timeout;
document.onmousemove = function(){
  clearTimeout(timeout);
  timeout = setTimeout(function(){alert("move your mouse");}, 45000);
}; */

const config = {
  botName: botName,
  
  initialMessages: [
    createChatBotMessage(`Hello, I am here to help with your NCEA. You can ask me about...`) 
  ],

  customStyles: {
    botMessageBox: {
      backgroundColor: '#A7986D',
    },
    chatButton: {
      backgroundColor: '#A7986D',
    },
  },
};

export default config;