// ActionProvider starter code

import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleYear11 = () => {
    const botMessage = createChatBotMessage('You are currently studying toward NCEA Level 1 and your Dean is...');

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
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;