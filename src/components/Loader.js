// components/Loader.js
import React from 'react';
import './Loader.css'; // Import CSS for styling the loader

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="emoji">😂</div>
        <div className="emoji">🤣</div>
        <div className="emoji">😆</div>
      </div>
    </div>
  );
};

export default Loader;
