import styled, { css } from 'styled-components';

export const FooterBase = styled.footer`
  font-size: 14px;
  background: var(--black);
  border-top: 2px solid var(--primary);
  color: var(--white);
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
  text-align: center;
  & > a {
    color: red;
  }
  /* @media (max-width: 800px) {
    margin-bottom: 50px;
  } */
  ${({ marginBottom }) => css`
    @media (max-width: 800px) {
      margin-bottom: ${marginBottom}px;
    }
  `}
`;
export const FooterLink = styled.a`
  font-weight: bold;
  color: var(--primary);
  cursor: pointer;
  text-decoration: none;
`;
