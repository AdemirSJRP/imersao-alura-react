import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin-top: 20px;
  width: 100%;
  background: white;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  transition: opacity 0.3s;
  & > input[type='text'],
  > textarea {
    width: 100%;
    max-width: 100%;
    border: none;
    &:focus {
      outline: 0;
    }
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

  const handleBlur = (event) => {
    document
      .getElementById(`label-${event.target.name}`)
      .setAttribute('style', 'box-shadow: none;');
  };

  const handleFocus = (event) => {
    document
      .getElementById(`label-${event.target.name}`)
      .setAttribute(
        'style',
        'box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); '
      );
  };

  const input =
    type === 'textarea' ? (
      <textarea
        name={name}
        value={value}
        autoFocus={autofocus}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        autoFocus={autofocus}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    );

  return (
    <Label id={`label-${name}`}>
      {label}:{input}
    </Label>
  );
}
