// MessageParser takes a mesage and determins a logical response
import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {

    if (
      message.includes('Certificate Endorsement') ||
      message.includes('Certificate endorsement') ||
      message.includes('certificate endorsement')) {
        actions.handleCertificateEndorsement();
    }
    else if (
      message.includes('Subject Endorsement') ||
      message.includes('Subject endorsement') ||
      message.includes('subject endorsement') ||
      message.includes('Subject endorsement')) {
        actions.handleSubjectEndorsement();
    }
    else if (
      message.includes('Endorse') ||
      message.includes('endorse') ||
      message.includes('Endorsement') ||
      message.includes('endorsement') ||
      message.includes('Endorsements') ||
      message.includes('endorsements')) {
        actions.handleEndorsement();
      }
    else if (
      message.includes('UE') ||
      message.includes('ue') ||
      message.includes('University entrance') ||
      message.includes('University Entrance') ||
      message.includes('university entrance') ||
      message.includes('Uni Entrance') ||
      message.includes('Uni entrance') ||
      message.includes('uni entrance') ||
      message.includes('Entrance') ||
      message.includes('entrance')) {
        actions.handleUE();
      }
    else if (
        message.includes('Approved subject') ||
        message.includes('Approved Subject') ||
        message.includes('Approved Subject') ||
        message.includes('approved subject') ||
        message.includes('approved subjects') ||
        message.includes('approved subjects') ||
        message.includes('Approved subjects') ||
        message.includes('Approved subjects') ||
        message.includes('Entrance approved') ||
        message.includes('entrance approved')) {
          actions.handleUEApproved();
      }
      else if (
        message.includes('Compulsory subject') ||
        message.includes('compulsory subject') ||
        message.includes('Compulsory') ||
        message.includes('compulsory')) {
          actions.handleCompulsorySubjects();
      }
      else if (
        message.includes('Subject') ||
        message.includes('subject') ||
        message.includes('Subjects') ||
        message.includes('subject')) {
          actions.handleSubjectOptions();
      }
      else if (
        message.includes('Pass') ||
        message.includes('pass') ||
        message.includes('Achieve') ||
        message.includes('achieve')) {
          actions.handlePass();
      }
      else if (
        message.includes('Career') ||
        message.includes('career') ||
        message.includes('Advisor') ||
        message.includes('advisor')) {
          actions.handleCareerAdvisor();
      }
      else if (
        message.includes('Gateway') ||
        message.includes('gateway') ||
        message.includes('Gate Way') ||
        message.includes('Gate way') ||
        message.includes('gate way')) {
          actions.handleGateway();
      }
      else if (
        message.includes('Business') ||
        message.includes('business')) {
          actions.handleBusiness();
      }
      else if (
        message.includes('English') ||
        message.includes('english') ||
        message.includes('Media') ||
        message.includes('media')) {
          actions.handleEnglishMedia();
      }
      else if (
        message.includes('Enhance') ||
        message.includes('enhance')) {
          actions.handleEnhance();
      }
      else if (
        message.includes('Language') ||
        message.includes('language') ||
        message.includes('Languages')||
        message.includes('languages')||
        message.includes('Māori') ||
        message.includes('māori') ||
        message.includes('Maori') ||
        message.includes('maori') ||
        message.includes('French') ||
        message.includes('french') ||
        message.includes('Chinese') ||
        message.includes('chinese')) {
          actions.handleLanguages();
      }
      else if (
        message.includes('Maths') ||
        message.includes('maths') ||
        message.includes('Mathematics') ||
        message.includes('mathematics') ||
        message.includes('Math') ||
        message.includes('math')) {
          actions.handleMath();
      }
      else if (
        message.includes('PE') ||
        message.includes('pe') ||
        message.includes('Health') ||
        message.includes('health')) {
          actions.handlePEHealth();
      }
      else if (
        message.includes('Performing') ||
        message.includes('performing') ||
        message.includes('Music') ||
        message.includes('music') ||
        message.includes('Drama') ||
        message.includes('drama') ||
        message.includes('Dance') ||
        message.includes('dance')) {
          actions.handlePerformingArts();
      }
      else if (
        message.includes('RE') ||
        message.includes('Religious Education') ||
        message.includes('Religious education') ||
        message.includes('religious education') ||
        message.includes('Religious Studies') ||
        message.includes('Religious studies') ||
        message.includes('religious studies')) {
          actions.handleRE();
      }
      else if (
        message.includes('Sciences') ||
        message.includes('sciences') ||
        message.includes('Science') ||
        message.includes('science') ||
        message.includes('Biology') ||
        message.includes('biology') ||
        message.includes('Bio') ||
        message.includes('bio') ||
        message.includes('Chemisty') ||
        message.includes('chemisty') ||
        message.includes('Chem') ||
        message.includes('chem') ||
        message.includes('Physics') ||
        message.includes('physics')) {
          actions.handleScience();
      }
      else if (
        message.includes('Social Studies') ||
        message.includes('Social studies') ||
        message.includes('social studies') ||
        message.includes('Social Sciences') ||
        message.includes('Social sciences') ||
        message.includes('social sciences') ||
        message.includes('Geography') ||
        message.includes('geography') ||
        message.includes('Geo') ||
        message.includes('geo') ||
        message.includes('Classical Studies') ||
        message.includes('Classical studies') ||
        message.includes('classical studies') ||
        message.includes('Clasics') ||
        message.includes('clasics') ||
        message.includes('History') ||
        message.includes('history') ||
        message.includes('Tourism') ||
        message.includes('tourism')) {
          actions.handleSocialStudies();
      }
      else if (
        message.includes('Technology') ||
        message.includes('technology') ||
        message.includes('Tech') ||
        message.includes('tech') ||
        message.includes('Food') ||
        message.includes('food') ||
        message.includes('Home Economics') ||
        message.includes('Home Eco') ||
        message.includes('Home economics') ||
        message.includes('Home eco') ||
        message.includes('home economics') ||
        message.includes('home eco') ||
        message.includes('Fabric') ||
        message.includes('fabric')) {
          actions.handleTechnology();
      }
      else if (
        message.includes('Visual Arts') ||
        message.includes('Visual arts') ||
        message.includes('visual arts') ||
        message.includes('Photography') ||
        message.includes('photography') ||
        message.includes('Art History') ||
        message.includes('Art history') ||
        message.includes('art history') ||
        message.includes('Design') ||
        message.includes('design') ||
        message.includes('Painting') ||
        message.includes('painting')) {
          actions.handleVisualArts();
      }
      else if (
        message.includes('Art') ||
        message.includes('art') ||
        message.includes('Arts') ||
        message.includes('arts')) {
          actions.handleArts();
      }
      else if (
        message.includes('Department') ||
        message.includes('department')) {
          actions.handleDepartment();
      }
      else if (
        message.includes('Exam timetable') ||
        message.includes('exam timetable') ||
        message.includes('when are exams') ||
        message.includes('When are exams') ||
        message.includes('time table') ||
        message.includes('Time Table') ||
        message.includes('Time table') ||
        message.includes('Timetable') ||
        message.includes('timetable')) {
          actions.handleExamTimetable();
      }
      else if (
        message.includes('results released') ||
        message.includes('results') ||
        message.includes('released') ||
        message.includes('Results released')) {
          actions.handleExamResultsRelease();
      }
      else if (
        message.includes('Rank Score') ||
        message.includes('Rank score') ||
        message.includes('rank score')) {
          actions.handleRankScore();
      }
      else if (
        message.includes('Literacy') ||
        message.includes('literacy') ||
        message.includes('Numeracy') ||
        message.includes('numeracy')) {
          actions.handleLiteracyNumeracy();
      }
      else if (
        message.includes('Credits') ||
        message.includes('credits') ||
        message.includes('Credit') ||
        message.includes('credit')) {
          actions.handleCredits();
      }
      else if (
        message.includes('Y11 Dean') ||
        message.includes('Y11 dean') ||
        message.includes('Y11 Dean') ||
        message.includes('y11 dean') ||
        message.includes('Year 11 Dean') ||
        message.includes('Year 11 dean') ||
        message.includes('year 11 dean') ||
        message.includes('Head of Year 11') ||
        message.includes('Head of year 11') ||
        message.includes('head of Year 11') ||
        message.includes('head of year 11')) {
          actions.handleYear11Dean();
      }
      else if (
        message.includes('Y12 Dean') ||
        message.includes('Y12 dean') ||
        message.includes('Y12 Dean') ||
        message.includes('y12 dean') ||
        message.includes('Year 12 Dean') ||
        message.includes('Year 12 dean') ||
        message.includes('year 12 dean') ||
        message.includes('Head of year 12') ||
        message.includes('Head of Year 12') ||
        message.includes('head of year 12') ||
        message.includes('head of Year 12')) {
          actions.handleYear12Dean();
      }
      else if (
        message.includes('Y13 Dean') ||
        message.includes('Y13 dean') ||
        message.includes('Y13 Dean') ||
        message.includes('y13 dean') ||
        message.includes('Year 13 Dean') ||
        message.includes('Year 13 dean') ||
        message.includes('year 13 dean') ||
        message.includes('Head of year 13') ||
        message.includes('head of year 13') ||
        message.includes('Head of Year 13') ||
        message.includes('head of Year 13')) {
          actions.handleYear13Dean();
      }
      else if (
        message.includes('Dean') ||
        message.includes('dean') ||
        message.includes('Deans') ||
        message.includes('deans') ||
        message.includes('Head of year') ||
        message.includes('head of year') ||
        message.includes('head of Year') ||
        message.includes('Head of Year')) {
          actions.handleDeans();
      }
      else if (
        message.includes('More info') ||
        message.includes('more info') ||
        message.includes('Further info') ||
        message.includes('further info')) {
          actions.handleMoreInfo();
        }
      else {
          actions.handleIncorrectResponse();
      }
      
  }
      
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;

