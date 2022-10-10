// ActionProvider handles instructions set by MessageParser
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  //Handling the initial user outcome
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

  const handleDepartment = () => {
    const botMessage = createChatBotMessage("Type 'subject department' (e.g. English department) to find the contact details for each HOD.");
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
            handleUE,
            handleUEApproved,
            handleSubjectOptions,
            handleCompulsorySubjects,
            handlePass,
            handleCareerAdvisor,
            handleDepartment,
            handleScience,
            handleExamTimetable,
            handleExamResultsRelease,
            handleRankScore,
            handleIncorrectResponse,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;