import styled from 'styled-components';

const ButtonLink = styled.a`
  border: 1px solid var(--white);
  border-radius: 5px;
  box-sizing: border-box;
  color: var(--white);
  cursor: pointer;
  display: inline-block;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  padding: 16px 24px;
  outline: none;
  text-decoration: none;
  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export default ButtonLink;

// import React from 'react';

// export default function ButtonLink({ className, href, children }) {
//   return (
//     <a className={className} href={href}>
//       {children}
//     </a>
//   );
// }
