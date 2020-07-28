import React from 'react';
import * as imgLogo from '../../assets/logodegracaflix.png';
import './Menu.css';
import Button from '../Button';
export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={imgLogo} className="Logo" alt="Logotipo" />
      </a>
      <Button className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
}
