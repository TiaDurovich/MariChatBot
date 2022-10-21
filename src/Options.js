//This code was tested for button implementation
//My final outcome uses a different method (Option.js is not implemented in the final code)
import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Certificate Achievement",
      handler: props.actionProvider.handleEndorsement,
      id: 1,
    },
    { text: "Endorsement", handler: () => {}, id: 2 },
    { text: "University Entrance", handler: () => {}, id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;