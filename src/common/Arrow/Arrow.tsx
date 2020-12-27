import React from "react";
import "./Arrow.scss";

function Arrow({ onClick }: { onClick: () => void }) {
  return (
    <div className="arrow-wrapper" onClick={onClick}>
      <div className="arrow-container">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Arrow;
