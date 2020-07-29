import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import PageCadastro from '../../../components/PageCadastro';

const FormInputContainer = styled.form`
  display: flex;
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
          type="text"
          value={nome}
          onChange={handleChange}
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
        <Button>Cadastrar</Button>
      </FormInputContainer>
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
