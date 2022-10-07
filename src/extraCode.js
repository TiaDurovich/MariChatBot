//Handling the response for specific year levels...

//MessageParser js
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

    //ActionProvider js
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