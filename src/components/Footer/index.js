import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img
          src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
          alt="Logo Alura"
        />
      </a>
      <span>
        Orgulhosamente criado durante a{' '}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </span>
      <span>
        Desenvolvida por{' '}
        <a
          href="https://www.linkedin.com/in/ademir-rodrigues-da-silva-517a0b65/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ademir R. da Silva
        </a>
      </span>
    </FooterBase>
  );
}

export default Footer;
