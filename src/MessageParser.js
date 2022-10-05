// MessageParser starter code
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('Year 11') 
    || message.includes('year 11')
    || message.includes('11')
    || message.includes('eleven')
    || message.includes('Eleven')) {
      actions.handleYear11();
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