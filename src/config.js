import { createChatBotMessage } from "react-chatbot-kit";

//Variable storing text data
const botName = 'Mari'

window.onload = function onload() {
  alert("Welcome to Marist College's virtual NCEA assistant. Please make sure your spelling is correct, otherwise, Mari may not understand what you are asking. Also note that the information provided is applicable to NCEA in 2022.") 
}

//Below are examples of object variables
const config = {
  botName: botName,
  
  initialMessages: [
    createChatBotMessage(`Hey, my name's Mari - Marist College's virtual NCEA assistant!`),
    createChatBotMessage(`I can provide info about endorsements, university entrance, subjects, departments, and more. Ask away!`) 
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