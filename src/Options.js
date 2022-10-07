import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Certificate Achievement",
      handler: props.actionProvider.handleCertificateAchievement,
      id: 1,
    },
    { text: "Endorsement", handler: () => {}, id: 2 },
    { text: "University Entrance", handler: () => {}, id: 3 },
    { text: "Career Advisor", handler: () => {}, id: 4 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;