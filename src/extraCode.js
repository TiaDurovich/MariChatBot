
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

      ///////////////////////////

      //Button CSS

      button:hover {
        background-color: #a4997298;
        }
      
      button {
        margin: 5px;
        border-radius: 25px;
        padding: 8px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
      
        background: #FFFFFF;
        font-family: -apple-system, BlinkMacSystemFont;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      // Extra arrays
      const certificateEndorsement = ["Certificate Endorsement", "Certificate endorsement", "certificate endorsement"];
      const subjectEndorsement = ["Subject Endorsement", "Subject endorsement", "subject endorsement"];
      const generalEndorsement = ["Endorse", "endorse"];
      const approvedSubjects = ["Approved Subject", "Approved subject", "approved subject"];
      const subject = ["Subject", "subject"];