import React from 'react';

function TodoHeader() {
  const TITLE = 'TODO LIST';

  return (
    <header id="header">
      <div className="logo">
        <a href="#">{TITLE}</a>
      </div>
    </header>
  );
}

export default TodoHeader;
