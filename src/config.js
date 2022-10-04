// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

const botName = 'the Marist College NCEA Chatbot'

const config = {
  initialMessages: [
    createChatBotMessage(`Hello, I am here to help with your NCEA. What year level are you in?`),
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