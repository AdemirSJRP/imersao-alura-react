import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FormField from '../../../components/FormField';
import PageCadastro from '../../../components/PageCadastro';
import ButtonDark from '../../../components/ButtonDark/style';

const FormInputContainer = styled.form`
  display: block;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  & > a {
    margin-top: 20px;
  }
`;

export default function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categoria, setCategoria] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function getData() {
      var data = await fetch(
        window.location.hostname.includes('localhost')
          ? 'http://localhost:8080/categorias'
          : 'https://degracaflix.herokuapp.com/categorias'
      );
      var categorias = await data.json();
      setCategorias([...categorias]);
    }
    getData();
  }, []);

  const setFieldValue = (fieldName, value) => {
    setCategoria({ ...categoria, [fieldName]: value });
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setFieldValue(target.getAttribute('name'), value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategorias([...categorias, categoria]);
    setCategoria(valoresIniciais);
  };

  const { nome, descricao, cor } = categoria;
  return (
    <PageCadastro>
      <h1>Cadastro de Categoria: {nome}</h1>
      <FormInputContainer onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          name="nome"
          value={nome}
          onChange={handleChange}
          autofocus={true}
        />
        <FormField
          label="Descrição"
          name="descricao"
          type="textarea"
          value={descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          name="cor"
          type="color"
          value={cor}
          onChange={handleChange}
        />
        <ButtonDark>Cadastrar</ButtonDark>
      </FormInputContainer>
      {categorias.length === 0 && <div>Carregando categorias...</div>}
      <ul>
        {categorias.map((categoria, i) => (
          <li key={`${categoria}${i}`}>
            {categoria.nome} | {categoria.descricao} | {categoria.cor}
          </li>
        ))}
      </ul>
      <Link to="/">Ir para home</Link>
    </PageCadastro>
  );
}
