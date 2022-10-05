import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../src/Options";

const botName = 'the Marist College NCEA Chatbot'

const config = {
  initialMessages: [
    createChatBotMessage(`Hello, I am here to help with your NCEA.`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
  ],
  botName: botName,
  
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