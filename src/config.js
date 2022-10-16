import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../src/Options.js";

//Variable storing text data
const botName = 'the Marist College NCEA Chatbot'

window.onload = function onload() {
  alert("Welcome to the Marist College NCEA Chatbot. Please note that the chatbot is spelling sensitive.") 
}

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Hello, I am here to help with your NCEA. Below are some topics to get you started.`, {
      widget: "options",
      }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
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