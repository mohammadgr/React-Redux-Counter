import React from "react";

import "./ConterControl.css";

const ConterControl = (props) => (
  <div className="counter-control" onClick={props.clicked}>
    {props.label}
  </div>
);

export default ConterControl;
