import React from 'react';
import "./ResetButton.css";

export const ResetButton = ({resetBoard}) => {
  return (
    <button className="resetbutton" onClick={resetBoard}>Reset Game</button>
  )
}
