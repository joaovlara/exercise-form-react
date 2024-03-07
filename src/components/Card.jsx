import React, { useState } from 'react';

function CardEdit() {
  const [text, setText] = useState('Untitled');

  const handleTextChange = (event) => {
    setText(event.target.innerText);
  };

  return (
    <div
      style={{
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '10px',
        backgroundColor: 'yellow',
      }}
    >
      <div
        contentEditable
        style={{
          outline: 'none',
          minHeight: '20px',
          fontFamily: 'sans-serif',
          fontSize: '16px',
        }}
        onClick={handleTextChange}
      >
        {text}
      </div>
    </div>
  );
}

export default CardEdit;
