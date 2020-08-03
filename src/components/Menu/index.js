import React from 'react';
import { Link } from 'react-router-dom';
import * as imgLogo from '../../assets/logodegracaflix.png';

import { MenuWrapper, ButtonLink, LogoImage } from './style';
export default function Menu({ showButtonNovoVideo }) {
  return (
    <MenuWrapper>
      <Link to="/">
        <LogoImage src={imgLogo} alt="Logotipo" />
      </Link>
      {showButtonNovoVideo && (
        <ButtonLink as={Link} to="/cadastro/video">
          Novo Vídeo
        </ButtonLink>
      )}
    </MenuWrapper>
  );
}
