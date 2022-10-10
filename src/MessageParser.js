// MessageParser takes a mesage and determins a logical response
import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {

    if (
      message.includes('Endorsement') ||
      message.includes('endorsement') ||
      message.includes('Endorsements') ||
      message.includes('endorsements')) {
        actions.handleEndorsement();
      }

    if (
      message.includes('Certificate-E') ||
      message.includes('Certificate-e') ||
      message.includes('certificate-E') ||
      message.includes('certificate-e')) {
        actions.handleCertificateEndorsement();
    }

    if (
      message.includes('Subject-E') ||
      message.includes('subject-e') ||
      message.includes('Subject-E') ||
      message.includes('subject-e')) {
        actions.handleSubjectEndorsement();
    }
  }
      
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