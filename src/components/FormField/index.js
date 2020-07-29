import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin-top: 20px;
  width: 100%;
  & > input[type='text'],
  > textarea {
    width: 80%;
  }
`;

export default function FormField({
  label,
  type,
  name,
  value,
  autofocus,
  onChange,
}) {
  const handleChange = (event) => {
    onChange(event);
  };

  const handleFocus = (event) => {
    console.log('foco no controle', event.target.name);
  };

  const input =
    type === 'textarea' ? (
      <textarea
        name={name}
        value={value}
        autoFocus={autofocus}
        onChange={handleChange}
        onFocus={handleFocus}
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        autoFocus={autofocus}
        onFocus={handleFocus}
      />
    );

  return (
    <Label>
      {label}:{input}
    </Label>
  );
}
