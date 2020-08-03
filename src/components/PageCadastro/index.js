import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding: 0 15px;
`;
export default function PageCadastro({ children }) {
  return (
    <>
      <Menu showButtonNovoVideo={false} />
      <Main>{children}</Main>
      <Footer marginBottom={0} />
    </>
  );
}
