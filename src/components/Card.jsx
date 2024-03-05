import React, { useState } from 'react';
import styled from 'styled-components';

const EditableCard = styled.div`
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: yellow;
`;

const EditableText = styled.div`
  outline: none;
  min-height: 20px;
  font-family: sans-serif;
  font-size: 16px;
`;

function CardEdit() {
  const [text, setText] = useState('Untitled');

  const handleTextChange = (event) => {
    setText(event.target.innerText);
  };

  return (
    <EditableCard>
      <EditableText
        contentEditable
        onInput={handleTextChange}
      >
        {text}
      </EditableText>
    </EditableCard>
  );
}

export default CardEdit;
