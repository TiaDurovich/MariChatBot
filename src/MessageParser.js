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

      if (
        message.includes('Pass') ||
        message.includes('pass') ||
        message.includes('Achieve') ||
        message.includes('achieve')
        ) {
          actions.handlePass();
      }
    }

      if (
        message.includes('Career') ||
        message.includes('career') ||
        message.includes('Advisor') ||
        message.includes('advisor')
        ) {
          actions.handleCareerAdvisor();
      }

      if (
        message.includes('Department') ||
        message.includes('department')) {
          actions.handleDepartment();
      }
      else if (
        message.includes('Science Department') ||
        message.includes('science deparment') ||
        message.includes('Head of Science') ||
        message.includes('Head of science') ||
        message.includes('head of science') ||
        message.includes('Science HOD') ||
        message.includes('science HOD')) {
          actions.handleScience();
      }

      if (
        message.includes('Exam timetable') ||
        message.includes('exam timetable') ||
        message.includes('when are exams') ||
        message.includes('When are exams') ||
        message.includes('time table') ||
        message.includes('Time Table') ||
        message.includes('Time table') ||
        message.includes('Timetable') ||
        message.includes('timetable')
        ) {
          actions.handleExamTimetable();
      }

      if (
        message.includes('results released') ||
        message.includes('released') ||
        message.includes('Results released')) {
          actions.handleExamResultsRelease();
      }

      if (
        message.includes('Rank Score') ||
        message.includes('rank score')) {
          actions.handleRankScore();
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