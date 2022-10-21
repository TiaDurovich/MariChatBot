//Config is responsible for controlling every configurable aspect of the chatbot

import { createChatBotMessage } from "react-chatbot-kit";

//Defines the name of the chatbot
const botName = 'Mari'

//Alert displays when window is loaded
window.onload = function onload() {
  alert("Welcome to Marist College's virtual NCEA assistant. Please make sure your spelling is correct, otherwise, Mari may not understand what you are asking. The information provided is applicable to NCEA, 2022.") 
}

const config = {
  botName: botName,
  
  //Renders the initial messages that are displayed upon loading the React app
  initialMessages: [
    createChatBotMessage(`Hey, my name's Mari - Marist College's virtual NCEA assistant!`),
    createChatBotMessage(`Type 'help' for topics we can talk about, or ask away!`), 

  ],

  //customStyles is an object that defines custom styles for different elements
  //This is used to alter the React App colours to match the Marist College logo by replacing some of the stock components from react-chatbot-kit
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