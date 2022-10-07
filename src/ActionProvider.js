

import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  //Handling the initial user outcome
  const handleCertificateAchievement = () => {
    const botMessage = createChatBotMessage('To gain your NCEA certificate at Level 1 you need... at Level 2 you need... at Level 3 you need...');
    const botMessage2 = createChatBotMessage("Type 'endorsements' to learn about certificate and course endorsements, or refer back to the list above.");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, botMessage2],
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
            handleCertificateAchievement,
            handleIncorrectResponse,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;