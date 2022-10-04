// MessageParser starter code
import React from 'react';

var introductions = ['Hello', 'hello', 'Hi', 'hi', 'Hey', 'hey']

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message = (introductions)) {
      actions.handleHello();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;