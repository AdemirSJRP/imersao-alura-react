import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  color: var(--white);
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
