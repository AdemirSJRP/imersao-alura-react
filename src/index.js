import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import { LogoImage } from './components/Menu/style';
import * as imgLogo from './assets/logodegracaflix.png';
import { Page404, Menu404 } from './pages/Page404/styles';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route
        component={() => (
          <Page404>
            <Menu404>
              <Link to="/">
                <LogoImage src={imgLogo} alt="logo" title={imgLogo} />
              </Link>
              <h3>Página não encontrada</h3>
            </Menu404>
            <iframe
              title="AngryBirds"
              src="https://mariosouto.com/flappy-bird-devsoutinho/"
              width="340px"
              height="600px"
              scrolling="no"
              border="0"
            ></iframe>
          </Page404>
        )}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
