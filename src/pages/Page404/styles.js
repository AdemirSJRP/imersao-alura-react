import styled from 'styled-components';

export const Page404 = styled.div`
  background: var(--black);
  display: flex;
  flex: column;
  align-items: center;
  justify-content: center;
  & > iframe {
    overflow: hidden;
    border: none;
    margin-top: -40px;
  }
`;

export const Menu404 = styled.nav`
  width: 100%;
  height: 94px;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background: var(--black);

  & > h3 {
    color: var(--white);
    font-size: 20px;
  }
  @media (max-width: 800px) {
    height: 40px;
  }
`;
