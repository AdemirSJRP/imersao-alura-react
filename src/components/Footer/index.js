import React from 'react';
import { FooterBase, FooterLink } from './styles';
import * as imgLogo from '../../assets/logodegracaflix.png';
import { LogoImage } from '../Menu/style';

function Footer({ marginBottom = 50 }) {
  return (
    <FooterBase marginBottom={marginBottom}>
      <a href="https://www.alura.com.br/">
        <LogoImage src={imgLogo} alt="Logotipo" />
        {/* <img
          src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
          alt="Logo Alura"
        /> */}
      </a>
      <span>
        Orgulhosamente criado durante a{' '}
        <FooterLink href="https://www.alura.com.br/">
          Imersão React da Alura
        </FooterLink>
      </span>
      <span>
        Desenvolvido por{' '}
        <FooterLink
          href="https://www.linkedin.com/in/ademir-rodrigues-da-silva-517a0b65/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ademir R. da Silva
        </FooterLink>
      </span>
    </FooterBase>
  );
}

export default Footer;
