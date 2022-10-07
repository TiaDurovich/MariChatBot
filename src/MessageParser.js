// MessageParser is responsible for taking a mesage and determining a logical response
import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('Certificate') || 
    message.includes('certificate')) {
      actions.handleCertificateAchievement();
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