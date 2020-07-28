import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import styled from 'styled-components';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

const Page404 = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route
        component={() => (
          <div>
            <Page404>Página não encontrada</Page404>
          </div>
        )}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
