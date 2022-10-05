import React from "react";

import "./Options.css";

const Options = (props) => {
    const options = [
        {
            text: "Option 1",
            handler: props.actionProvider.handleOption1,
            id: 1,
        },
        {text: "Option 2", handler: () => {},id: 2},
        {text: "Option 3", handler: () => {},id: 3},
    ];
}