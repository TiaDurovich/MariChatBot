
import React from 'react';
import "./Options.css";

// ActionProvider handles instructions set by MessageParser, it's job is to update the state of the chatbot
const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  //Each 'handle' variable will return a chatbot message/s that correspond to words detected in the user input
  //For example, the 'handleHelp' variable will return three bot messages if the user inputs "Help" and/or "help"
  const handleHelp = () => {
    //createChatBotMessage is a function from the react-chatbot-kit third-party library
    //It assists in the process of calling other functions (found in MessageParser) in response to user input
    const botMessage = createChatBotMessage(<div><a onClick={handleCertificateEndorsement}>Certificate Endorsements</a></div>);
    const botMessage2 = createChatBotMessage(<div><a onClick={handleUE}>University Entrance</a></div>);
    const botMessage3 = createChatBotMessage(<div><a onClick={handleExamTimetable}>Exam Timetable</a></div>);
    const botMessage4 = createChatBotMessage(<div><a onClick={handleCareerAdvisor}>Career Advisor</a></div>);


    //seState is a function from the react-chatbot-kit third-party library
    // It is responsible for injecting functions into the internal chatbot state, therefore producing a chatbot output
    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, botMessage2, botMessage3, botMessage4],
    }));
  };

  const handlePass = () => {
    const botMessage = createChatBotMessage("For info on how NCEA works, visit the Marist College website. Here, you can find the NZQA Handbook and scholarship info:");
    const button = createChatBotMessage (<div><a href='http://www.maristcollege.school.nz/WebSpace/1291/' target={'_blank'}>MC Website</a></div>);

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, button],
    }));
  };

  const handleCertificateEndorsement = () => {
    const botMessage = createChatBotMessage("For an NCEA certificate to be endorsed with Excellence, a student must gain 46 credits at Excellence at the level of the certificate or above.");
    const botMessage2 = createChatBotMessage("Likewise, if a student gains 46 credits at Merit (or Merit and Excellence) at the level of the certificate or above, the certificate may be endorsed with Merit.");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, botMessage2],
    }));
  };

  const handleCourseEndorsement = () => {
    const botMessage = createChatBotMessage("Students will gain an endorsement for a course if, in a single school year, they achieve:");
    const botMessage2 = createChatBotMessage(<li>14 or more credits at Achieved, Merit or Excellence, and</li>);
    const botMessage3 = createChatBotMessage(<li>at least 3 of these credits from externally assessed standards and 3 credits from internally assessed standards. Note, this does not apply to PE, RE and level 3 Visual Arts.</li>);

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, botMessage2, botMessage3],
    }));
  };

  const handleEndorsement = () => {
    const botMessage = createChatBotMessage("Type 'Certificate endorsement' or 'Course endorsement' to learn about the different endorsements.");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleUEApproved = () => {
    const botMessage = createChatBotMessage("UE approved subjects offered at Marist College:");
    const botMessage2 = createChatBotMessage("Art History, Biology, Business Studies, Calculus, Chemistry, Chinese, Classical Studies, Dance, Design, Digital Technology, Drama, Economics, English, French, Geography, Health, History, Home Economics, Mathematics, Media, Music, Painting, Photography, PE, Physics, Science, RE, Social Studies, Statistics, Technology, Te Reo Māori.");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, botMessage2],
    }));
  };

  const handleSubjectOptions = () => {
    const botMessage = createChatBotMessage("Please email your dean or the Careers Advisor for information on subject options and clashes.");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleCompulsorySubjects = () => {
    const botMessage = createChatBotMessage("Year 11: RE, English, and Mathematics are compulsory.");
    const botMessage2 = createChatBotMessage("Year 12 and 13: RE is compulsory.");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, botMessage2],
    }));
  };

  const handleUE = () => {
    const botMessage = createChatBotMessage("To be awarded University Entrance you will need 14 credits in each of 2 UE Approved Subjects, and 12 credits in a third UE Approved Subject. You also need to attain NCEA Level 3 and meet literacy and numeracy requirements.");
    const botMessage2 = createChatBotMessage("Type 'approved subjects', 'literacy', or 'numeracy' for further info.");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, botMessage2],
    }));
  };

  const handleCareerAdvisor = () => {
    const botMessage = createChatBotMessage("The Marist College Careers Advisor is Ms Catley. You can find her in room 311, or email her:");
    const button = createChatBotMessage (<div><a href='mailto: gateway@maristcollege.school.nz' target={'_blank'}>gateway@maristcollege.school.nz</a></div>);

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, button],
    }));
  };

  const handleGateway = () => {
    const botMessage = createChatBotMessage("To find out about the Gateway program at Marist College, email the Careers Advisor (Ms Catley):");
    const button = createChatBotMessage (<div><a href='mailto: gateway@maristcollege.school.nz' target={'_blank'}>gateway@maristcollege.school.nz</a></div>);

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, button],
    }));
  };

  const handleBusiness = () => {
    const botMessage = createChatBotMessage("The Curriculum Leader of Business Studies is Mrs Judy Leman:");
    const button = createChatBotMessage (<div><a href='mailto: j.leman@maristcollege.school.nz' target={'_blank'}>j.leman@maristcollege.school.nz</a></div>);

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, button],
    }));
  };

  const handleEnglishMedia = () => {
    const botMessage = createChatBotMessage("The Curriculum Leader of English is Ms Shelly Masters:");
    const button = createChatBotMessage (<div><a href='mailto: s.masters@maristcollege.school.nz' target={'_blank'}>s.masters@maristcollege.school.nz</a></div>);

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, button],
    }));
  };

  const handleEnhance = () => {
    const botMessage = createChatBotMessage("The Head of Enhance Learning is Ms Gabrielle Smith:");
    const button = createChatBotMessage (<div><a href='mailto: s.smith@maristcollege.school.nz' target={'_blank'}>s.smith@maristcollege.school.nz</a></div>);

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, button],
    }));
  };

  const handleLanguages = () => {
    const botMessage = createChatBotMessage("The Curriculum Leader of Languages is Ms Viktoria Jonas:");
    const button = createChatBotMessage (<div><a href='mailto: v.jonas@maristcollege.school.nz' target={'_blank'}>v.jonas@maristcollege.school.nz</a></div>);

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, button],
    }));
  };

  const handleMath = () => {
    const botMessage = createChatBotMessage("The Curriculum Leader of Mathematics is Mrs Wid Al-Rahim:");
    const button = createChatBotMessage (<div><a href='mailto: w.al-rahim@maristcollege.school.nz' target={'_blank'}>w.al-rahim@maristcollege.school.nz</a></div>);

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, button],
    }));
  };

  const handlePEHealth = () => {
    const botMessage = createChatBotMessage("The Curriculum Leader of PE and Health is Ms Tess Murphy:");
    const button = createChatBotMessage (<div><a href='mailto: t.murphy@maristcollege.school.nz' target={'_blank'}>t.murphy@maristcollege.school.nz</a></div>);
    
    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, button],
    }));
  };

  const handlePerformingArts = () => {
    const botMessage = createChatBotMessage("The Curriculum Leader of Performing Arts is Ms Charlotte Nicklin:");
    const button = createChatBotMessage (<div><a href='mailto: c.nicklin@maristcollege.school.nz' target={'_blank'}>c.nicklin@maristcollege.school.nz</a></div>);
    
    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, button],
    }));
  };

  const handleRE = () => {
    const botMessage = createChatBotMessage("The Curriculum Leader of RE and the Assistant Principle Catholic Character is Mrs Katherine McGillivray:");
    const button = createChatBotMessage (<div><a href='mailto: k.mcgillivray@maristcollege.school.nz' target={'_blank'}>k.mcgillivray@maristcollege.school.nz</a></div>);

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, button],
    }));
  };

  const handleScience = () => {
    const botMessage = createChatBotMessage("The Curriculum Leader of Science is Mr Nigel Horne:");
    const button = createChatBotMessage (<div><a href='mailto: h.nigel@maristcollege.school.nz' target={'_blank'}>h.nigel@maristcollege.school.nz</a></div>);

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, button],
    }));
  };

  const handleSocialStudies = () => {
    const botMessage = createChatBotMessage("The Curriculum Leader of Social Studies is Ms Jane Foster:");
    const button = createChatBotMessage (<div><a href='mailto: j.foster@maristcollege.school.nz' target={'_blank'}>j.foster@maristcollege.school.nz</a></div>);
    
    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, button],
    }));
  };

  const handleTechnology = () => {
    const botMessage = createChatBotMessage("The Curriculum Leader of Technology is Ms Hilary Roy:");
    const button = createChatBotMessage (<div><a href='mailto: h.roy@maristcollege.school.nz' target={'_blank'}>h.roy@maristcollege.school.nz</a></div>);

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, button],
    }));
  };

  const handleVisualArts = () => {
    const botMessage = createChatBotMessage("The Curriculum Leader of Arts is Ms Jessica Jacobsen:");
    const button = createChatBotMessage (<div><a href='mailto: j.jacobsen@maristcollege.school.nz' target={'_blank'}>j.jacobsen@maristcollege.school.nz</a></div>);
    
    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, button],
    }));
  };
  
  const handleExamTimetable = () => {
    const botMessage = createChatBotMessage("Find the 2022 NCEA Exam Timetable here:");
    const button = createChatBotMessage (<div><a href='https://www.nzqa.govt.nz/assets/qualifications-and-standards/qualifications/ncea/exams-and-portfolios/2022-Exam-Timetable.pdf' target={'_blank'}>NCEA Exam Timetable</a></div>);

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, button],
    }));
  };

  const handleExamResultsRelease = () => {
    const botMessage = createChatBotMessage("NCEA exam and scholarship results are released in late Janurary the following year.");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleRankScore = () => {
    const botMessage = createChatBotMessage("Rank scores differ across different NZ universities. Please email the Marist Careers Advisor or your Dean for more info.");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleLiteracyNumeracy = () => {
    const botMessage = createChatBotMessage("Literacy and numeracy credits are required to achieve UE. Please visit the NZQA website for more info: ");
    const button = createChatBotMessage(<div><a href='https://www.nzqa.govt.nz/ncea/subjects/literacy-and-numeracy/level-1-requirements/' target={'_blank'}>NCEA Literacy and Numeracy Credits</a></div>);

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, button],
    }));
  };

  const handleCredits = () => {
    const botMessage = createChatBotMessage("To check your credit count visit the Marist College Portal:");
    const button = createChatBotMessage(<div><a href='https://portal.maristcollege.school.nz/' target={'_blank'}>MC Portal</a></div>);
    const botMessage2 = createChatBotMessage("For information on credits requried to achieve NCEA, please visit the NZQA website:");
    const button2 = createChatBotMessage(<div><a href='https://portal.maristcollege.school.nz/' target={'_blank'}>NZQA Website</a></div>);

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, button, botMessage2, button2],
    }));
  };

  const handleYear11Dean = () => {
    const botMessage = createChatBotMessage("The Year 11 Dean is Ms Sophia Schon:");
    const botMessage2 = createChatBotMessage("s.schon@maristcollege.school.nz");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, botMessage2],
    }));
  };

  const handleYear12Dean = () => {
    const botMessage = createChatBotMessage("The Year 12 Dean is Ms Kristie Finlay:");
    const botMessage2 = createChatBotMessage("k.finlay@maristcollege.school.nz");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, botMessage2],
    }));
  };

  const handleYear13Dean = () => {
    const botMessage = createChatBotMessage("The Year 13 Dean is Mrs Judy Leman:");
    const botMessage2 = createChatBotMessage("j.leman@maristcollege.school.nz");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, botMessage2],
    }));
  };

  const handleMoreInfo = () => {
    const botMessage = createChatBotMessage("For further information, please contact the Careers Advisor, Ms Jenny Catley:");
    const botMessage2 = createChatBotMessage("gateway@maristcollege.school.nz");

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, botMessage2],
    }));
  };

  //Chatbot response to empty user input
  const handleEmptyResponse = () => {
    const botMessage = createChatBotMessage('Please try typing a question.');

    setState( (prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  //Places the functions in the 'actions' object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHelp,
            handlePass,
            handleEndorsement,
            handleCourseEndorsement,
            handleCertificateEndorsement,
            handleUE,
            handleUEApproved,
            handleSubjectOptions,
            handleCompulsorySubjects,
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
            handleScience,
            handleExamTimetable,
            handleExamResultsRelease,
            handleRankScore,
            handleLiteracyNumeracy,
            handleCredits,
            handleYear11Dean,
            handleYear12Dean,
            handleYear13Dean,
            handleMoreInfo,
            handleEmptyResponse,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;