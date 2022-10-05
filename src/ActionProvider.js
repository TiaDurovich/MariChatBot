// ActionProvider starter code

import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  //Handling the initial user outcome
  const handleYear11 = () => {
    const botMessage11 = createChatBotMessage('You are currently studying toward NCEA Level 1 and your Dean is...');

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage11],
    }));
  };
  const handleYear12 = () => {
    const botMessage12 = createChatBotMessage('You are currently studying toward NCEA Level 2 and your Dean is...');

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage12],
    }));
  };
  const handleYear13 = () => {
    const botMessage13 = createChatBotMessage('You are currently studying toward NCEA Level 3 and your Dean is...');

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage13],
    }));
  };

  const handleHello = () => {
    const botMessage = createChatBotMessage('You are currently studying toward NCEA Level 1 and your Dean is...');

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  //Response to unexpected user input
  const handleIncorrectResponse = () => {
    const botMessage = createChatBotMessage('Please try typing a different response');

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleYear11,
            handleYear12,
            handleYear13,
            handleHello,
            handleIncorrectResponse,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;