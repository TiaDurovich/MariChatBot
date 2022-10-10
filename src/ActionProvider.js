// ActionProvider handles instructions set by MessageParser
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  //Handling the initial user outcome
  const handleEndorsement = () => {
    const botMessage = createChatBotMessage("Type 'Certificate-E' or 'Subject-E' to learn about the different endorsements.");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleCertificateEndorsement = () => {
    const botMessage = createChatBotMessage("Cert. endorsement info...");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleSubjectEndorsement = () => {
    const botMessage = createChatBotMessage("Sub. endorsement info...");

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
            handleEndorsement,
            handleCertificateEndorsement,
            handleSubjectEndorsement,
            handleIncorrectResponse,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;