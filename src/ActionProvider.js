// ActionProvider handles instructions set by MessageParser
import React from 'react';


const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  //Handling the initial user outcome

  const handleOptions = () => {
    const botMessage = createChatBotMessage('Here are some topic ideas:');
    const botMessage2 = createChatBotMessage('Certificate Endorsements');
    const botMessage3 = createChatBotMessage('Career Advisor');
    const botMessage4 = createChatBotMessage('Univserity Entrance');


    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, botMessage2, botMessage3, botMessage4],
    }));
  };

  const handleEndorsement = () => {
    const botMessage = createChatBotMessage("Type 'Certificate endorsement' or 'Subject endorsement' to learn about the different endorsements.");

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

  const handleUE = () => {
    const botMessage = createChatBotMessage("UE info... type 'approved subjects' to find out about uni approved subjects.");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleUEApproved = () => {
    const botMessage = createChatBotMessage("UE approved subjects info...");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleSubjectOptions = () => {
    const botMessage = createChatBotMessage("Subject option info...");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleCompulsorySubjects = () => {
    const botMessage = createChatBotMessage("Compulsory subjects are...");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handlePass = () => {
    const botMessage = createChatBotMessage("To pass NCEA you need...");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleCareerAdvisor = () => {
    const botMessage = createChatBotMessage("The Marist College Careers Advisor is Ms Catley. You can find her in room 123, or email her:");
    const botMessage2 = createChatBotMessage("gateway@maristcollege.school.nz");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, botMessage2],
    }));
  };

  const handleGateway = () => {
    const botMessage = createChatBotMessage("To find out about the Gateway program at Marist College, email the Careers Advisor (Ms Catley):");
    const botMessage2 = createChatBotMessage("gateway@maristcollege.school.nz");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, botMessage2],
    }));
  };

  const handleBusiness = () => {
    const botMessage = createChatBotMessage("Business info...");
    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleEnglishMedia = () => {
    const botMessage = createChatBotMessage("English/Media info...");
    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleEnhance = () => {
    const botMessage = createChatBotMessage("Enhance info...");
    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleLanguages = () => {
    const botMessage = createChatBotMessage("Languages info...");
    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleMath = () => {
    const botMessage = createChatBotMessage("Math info...");
    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handlePEHealth = () => {
    const botMessage = createChatBotMessage("PE/Health info...");
    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handlePerformingArts = () => {
    const botMessage = createChatBotMessage("Performing Arts info...");
    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleRE = () => {
    const botMessage = createChatBotMessage("RE info...");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleScience = () => {
    const botMessage = createChatBotMessage("The Head of Science is Mr Nigel Horne:");
    const botMessage2 = createChatBotMessage("h.nigel@maristcollege.school.nz");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, botMessage2],
    }));
  };

  const handleSocialStudies = () => {
    const botMessage = createChatBotMessage("Social Studies info...");
    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleTechnology = () => {
    const botMessage = createChatBotMessage("Technology info...");
    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleVisualArts = () => {
    const botMessage = createChatBotMessage("Visual Arts info...");
    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleArts = () => {
    const botMessage = createChatBotMessage("Type 'Visual Arts' or 'Performing Arts'.");
    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDepartment = () => {
    const botMessage = createChatBotMessage("Type 'subject department' (e.g. English department) to find the contact details for each HOD.");
    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleExamTimetable = () => {
    const botMessage = createChatBotMessage("To find your exam timtable visit...");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleExamResultsRelease = () => {
    const botMessage = createChatBotMessage("Exam release date info...");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleRankScore = () => {
    const botMessage = createChatBotMessage("Rank scores differ across different universities. You can email the Marist Careers Advisor or your Dean to find out more.");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleLiteracyNumeracy = () => {
    const botMessage = createChatBotMessage("Link to literacy and numeracy info...");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleCredits = () => {
    const botMessage = createChatBotMessage("To find credit information visit... To check your credit count visit...");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleYear11Dean = () => {
    const botMessage = createChatBotMessage("Year 11 Dean info...");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleYear12Dean = () => {
    const botMessage = createChatBotMessage("Year 12 Dean info...");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleYear13Dean = () => {
    const botMessage = createChatBotMessage("Year 13 Dean info...");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDeans = () => {
    const botMessage = createChatBotMessage("Type 'Year 11/12/13 Dean' to find information about each dean.");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleMoreInfo = () => {
    const botMessage = createChatBotMessage("For further information, please contact the Careers Advisor, Ms Catley:");
    const botMessage2 = createChatBotMessage("gateway@maristcollege.school.nz");

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
            handleOptions,
            handleEndorsement,
            handleCertificateEndorsement,
            handleSubjectEndorsement,
            handleUE,
            handleUEApproved,
            handleSubjectOptions,
            handleCompulsorySubjects,
            handlePass,
            handleCareerAdvisor,
            handleGateway,
            handleBusiness,
            handleEnglishMedia,
            handleEnhance,
            handleLanguages,
            handleMath,
            handlePEHealth,
            handlePerformingArts,
            handleRE,
            handleScience,
            handleSocialStudies,
            handleTechnology,
            handleVisualArts,
            handleArts,
            handleDepartment,
            handleScience,
            handleExamTimetable,
            handleExamResultsRelease,
            handleRankScore,
            handleLiteracyNumeracy,
            handleCredits,
            handleYear11Dean,
            handleYear12Dean,
            handleYear13Dean,
            handleDeans,
            handleMoreInfo,
            handleIncorrectResponse,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;