import React, { useState } from "react";

const Popup = ({ trigger, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>{trigger}</button>
      {isOpen && (
        <div className="popup">
          <button onClick={() => setIsOpen(false)}>Close</button>
          <div>{content}</div>
        </div>
      )}
    </div>
  );
};

export default Popup;
