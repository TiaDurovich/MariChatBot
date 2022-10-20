// MessageParser takes a mesage and determins a logical response
import React from 'react';

const compulsorySubjects = ["Compulsory", "compulsory"];
const universityEntrance = ["UE", "ue", "University Entrance", "University entrance", "university entrance", "Uni Entrance", "Uni entrance", "uni entrance"];
const careerAdvisor = ["Career Advisor", "Career advisor", "career advisor"];
const gateway = ["Gate", "gate"];
const business = ["Business", "business"];
const english = ["English", "english", "Media", "media"];
const enhance = ["Enhance", "enhance"];
const languages = ["Language", "language", "Māori", "māori", "Maori", "maori", "French", "french", "Chinese", "chinese"];
const math = ["Math", "math"];
const peHealth = ["Physical Education", "Physical education", "physical education", "PE", "Health", "health"];
const performingArts = ["Perform", "perform", "Music", "music", "Drama", "drama", "Dance", "dance"];
const religiousEducation = ["Religious", "religious", "RE"];
const science = ["Science", "science", "Chem", "chem", "Bio", "bio", "Physics", "physics"];
const socialStudies = ["Social Studies", "Social studies", "social studies", "Geo", "geo", "Classic", "classic", "History", "history", "Tourism", "tourism"];
const technology = ["Tech", "tech", "Digi", "digi", "Food", "food", "Home Eco", "Home eco", "home eco", "Fabric", "fabric"];
const visualArts = ["Art", "art", "Photography", "photography", "Design", "design", "Painting", "painting"];
const examTimetable = ["Timetable", "timetable", "When are exams", "when are exams"];
const examResultsReleased = ["Released", "released"];
const rankScore = ["Rank Score", "Rank score", "rank score"];
const literacyNumeracy = ["Literacy", "literacy", "Numeracy", "numeracy"];
const credits = ["Credit", "credit"];
const year11Dean = ["Y11 Dean", "Y11 dean", "y11 Dean", "y11 dean", "Year 11 Dean", "Year 11 dean", "year 11 Dean", "year 11 dean", "Dean of Year 11", "dean of Year 11", "dean of Year 11", "dean of year 11"];
const year12Dean = ["Y12 Dean", "Y12 dean", "y12 Dean", "y12 dean", "Year 12 Dean", "Year 12 dean", "year 12 Dean", "year 12 dean", "Dean of Year 12", "dean of Year 12", "dean of Year 12", "dean of year 12"];
const year13Dean = ["Y13 Dean", "Y13 dean", "y13 Dean", "y13 dean", "Year 13 Dean", "Year 13 dean", "year 13 Dean", "year 13 dean", "Dean of Year 13", "dean of Year 13", "dean of Year 13", "dean of year 13"];
const help = ["Help", "help", "Moro Info", "More info", "more info", "Further Info", "Further info", "further info"];


const MessageParser = ({ children, actions }) => {
  const parse = (message) => {

    if (
      message.includes('Certificate Endorse') ||
      message.includes('Certificate endorse') ||
      message.includes('certificate endorse')) {
        actions.handleCertificateEndorsement();
    } else if (
      message.includes('Course Endorse') ||
      message.includes('Course endorse') ||
      message.includes('course endorse')  ||
      message.includes('Subject Endorse') ||
      message.includes('Subject endorse') ||
      message.includes('subject endorse')) {
        actions.handleCourseEndorsement();
    } else if (
      message.includes('Endorse') ||
      message.includes('endorse')) {
        actions.handleEndorsement();
    } else if (
      message.includes('Approved subject') ||
      message.includes('Approved Subject') ||
      message.includes('approved subject') ||
      message.includes('Entrance approved') ||
      message.includes('entrance approved')) {
        actions.handleUEApproved();
    } else if (
      message.includes('Compulsory') ||
      message.includes('compulsory')) {
        actions.handleCompulsorySubjects();
    }else if (
      message.includes('Subject') ||
      message.includes('subject') ||
      message.includes('Subjects') ||
      message.includes('subject')) {
        actions.handleSubjectOptions();
    } else if (
      message == ("")) {
        actions.handleEmptyResponse();
      }

    for(var i = 0, size = universityEntrance.length; i < size ; i++){
      var item = universityEntrance[i];
      if (message.includes(item)){
        actions.handleUE(item);
      }
    }

    for(var i = 0, size = careerAdvisor.length; i < size ; i++){
      var item = careerAdvisor[i];
      if (message.includes(item)){
        actions.handleCareerAdvisor(item);
      }
    }

    for(var i = 0, size = gateway.length; i < size ; i++){
      var item = gateway[i];
      if (message.includes(item)){
        actions.handleGateway(item);
      }
    }

    for(var i = 0, size = business.length; i < size ; i++){
      var item = business[i];
      if (message.includes(item)){
        actions.handleBusiness(item);
      }
    }

    for(var i = 0, size = english.length; i < size ; i++){
      var item = english[i];
      if (message.includes(item)){
        actions.handleEnglishMedia(item);
      }
    }

    for(var i = 0, size = enhance.length; i < size ; i++){
      var item = enhance[i];
      if (message.includes(item)){
        actions.handleEnhance(item);
      }
    }

    for(var i = 0, size = languages.length; i < size ; i++){
      var item = languages[i];
      if (message.includes(item)){
        actions.handleLanguages(item);
      }
    }

    for(var i = 0, size = math.length; i < size ; i++){
      var item = math[i];
      if (message.includes(item)){
        actions.handleMath(item);
      }
    }

    for(var i = 0, size = peHealth.length; i < size ; i++){
      var item = peHealth[i];
      if (message.includes(item)){
        actions.handlePEHealth(item);
      }
    }

    for(var i = 0, size = performingArts.length; i < size ; i++){
      var item = performingArts[i];
      if (message.includes(item)){
        actions.handlePerformingArts(item);
      }
    }

    for(var i = 0, size = religiousEducation.length; i < size ; i++){
      var item = religiousEducation[i];
      if (message.includes(item)){
        actions.handleRE(item);
      }
    }

    for(var i = 0, size = science.length; i < size ; i++){
      var item = science[i];
      if (message.includes(item)){
        actions.handleScience(item);
      }
    }

    for(var i = 0, size = socialStudies.length; i < size ; i++){
      var item = socialStudies[i];
      if (message.includes(item)){
        actions.handleSocialStudies(item);
      }
    }

    for(var i = 0, size = technology.length; i < size ; i++){
      var item = technology[i];
      if (message.includes(item)){
        actions.handleTechnology(item);
      }
    }

    for(var i = 0, size = visualArts.length; i < size ; i++){
      var item = visualArts[i];
      if (message.includes(item)){
        actions.handleVisualArts(item);
      }
    }

    for(var i = 0, size = examTimetable.length; i < size ; i++){
      var item = examTimetable[i];
      if (message.includes(item)){
        actions.handleExamTimetable(item);
      }
    }

    for(var i = 0, size = examResultsReleased.length; i < size ; i++){
      var item = examResultsReleased[i];
      if (message.includes(item)){
        actions.handleExamResultsRelease(item);
      }
    }

    for(var i = 0, size = rankScore.length; i < size ; i++){
      var item = rankScore[i];
      if (message.includes(item)){
        actions.handleRankScore(item);
      }
    }

    for(var i = 0, size = literacyNumeracy.length; i < size ; i++){
      var item = literacyNumeracy[i];
      if (message.includes(item)){
        actions.handleLiteracyNumeracy(item);
      }
    }

    for(var i = 0, size = credits.length; i < size ; i++){
      var item = credits[i];
      if (message.includes(item)){
        actions.handleCredits(item);
      }
    }

    for(var i = 0, size = year11Dean.length; i < size ; i++){
      var item = year11Dean[i];
      if (message.includes(item)){
        actions.handleYear11Dean(item);
      }
    }

    for(var i = 0, size = year12Dean.length; i < size ; i++){
      var item = year12Dean[i];
      if (message.includes(item)){
        actions.handleYear12Dean(item);
      }
    }

    for(var i = 0, size = year13Dean.length; i < size ; i++){
      var item = year13Dean[i];
      if (message.includes(item)){
        actions.handleYear13Dean(item);
      }
    }

    for(var i = 0, size = help.length; i < size ; i++){
      var item = help[i];
      if (message.includes(item)){
        actions.handleMoreInfo(item);
      }
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

