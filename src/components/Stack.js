import React from 'react';
import '../App.css';
import './Stack.css';

function Stack() {
  return (
    <div className="stack-container">
      <h1 className="stack-title">My Stack and tools</h1>
      <div className="stack-wrapper">
        <img
          src="/images/css.svg"
          alt="CSS3"
          className="stack-icon"
        />
        <img
          src="/images/html-5.svg"
          alt="HTML5"
          className="stack-icon"
        />
        <img
          src="/images/js.svg"
          alt="JavaScript"
          className="stack-icon"
        />
        <img
          src="/images/nodejs.svg"
          alt="NodeJs"
          className="stack-icon"
        />
        <img
          src="/images/react.svg"
          alt="ReactJs"
          className="stack-icon"
        />
        <img
          src="/images/ruby.svg"
          alt="Ruby"
          className="stack-icon"
        />
        <img
          src="/images/sql-server.svg"
          alt="SQL"
          className="stack-icon"
        />
        <img
          src="/images/linux.svg"
          alt="Linux"
          className="stack-icon"
        />
      </div>
    </div>
  );
}

export default Stack;
