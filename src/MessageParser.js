// MessageParser is responsible for taking a mesage and determining a logical response
import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('Year 11') || 
    message.includes('year 11') || 
    message.includes('11') || 
    message.includes('eleven') || 
    message.includes('Eleven')) {
      actions.handleYear11();
    }
    else if (message.includes('Year 12') || 
    message.includes('year 12') || 
    message.includes('12') || 
    message.includes('twelve') || 
    message.includes('Twelve')) {
      actions.handleYear12();
    }
    else if (message.includes('Year 13') || 
    message.includes('year 13') || 
    message.includes('13') || 
    message.includes('thirteen') || 
    message.includes('Twelve')) {
      actions.handleYear13();
    }
    else
      actions.handleIncorrectResponse();  
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;