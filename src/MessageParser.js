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

    if (
      message.includes('UE') ||
      message.includes('ue') ||
      message.includes('University entrance') ||
      message.includes('University Entrance') ||
      message.includes('university entrance') ||
      message.includes('Uni Entrance') ||
      message.includes('Uni entrance') ||
      message.includes('uni entrance') ||
      message.includes('Entrance') ||
      message.includes('entrance')) {
        actions.handleUE();
      }
    else if (
        message.includes('Approved subject') ||
        message.includes('Approved Subject') ||
        message.includes('Approved Subject') ||
        message.includes('approved subject') ||
        message.includes('approved subjects') ||
        message.includes('approved subjects') ||
        message.includes('Approved subjects') ||
        message.includes('Approved subjects') ||
        message.includes('Entrance approved') ||
        message.includes('entrance approved')) {
          actions.handleUEApproved();
      }
      else if (
        message.includes('Subject') ||
        message.includes('subject') ||
        message.includes('Subjects') ||
        message.includes('subject')
        ) {
          actions.handleSubject();
      }

      if (
        message.includes('Pass') ||
        message.includes('pass') ||
        message.includes('Achieve') ||
        message.includes('achieve')
        ) {
          actions.handlePass();
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