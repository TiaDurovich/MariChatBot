// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

const botName = 'the Marist College NCEA Chatbot'

const config = {
  initialMessages: [
    createChatBotMessage(`Hello! I'm ${botName}`),
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