import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../../hooks/useForm.js';
import { FormField, FormInputContainer } from '../../../components/FormField';
import PageCadastro from '../../../components/PageCadastro';
import ButtonDark from '../../../components/ButtonDark/style';
import categoriasRepository from '../../../repositories/categorias';
export default function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    link: '',
    cor: '#000000',
  };

  const { values, clearForm, handleChange } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        var categorias = await categoriasRepository.getAllWithVideos();
        setCategorias([...categorias]);
      } catch (error) {
        setCategorias([]);
        console.error(error);
      }
    }
    getData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategorias([...categorias, values]);
    clearForm();
  };

  const { titulo, nome, link, cor } = values;

  return (
    <PageCadastro>
      <h1>Cadastro de Categoria: {nome}</h1>
      <FormInputContainer onSubmit={handleSubmit}>
        <FormField
          label="Título da Categoria"
          name="titulo"
          value={titulo}
          onChange={handleChange}
          autofocus={true}
        />
        <FormField
          label="Link da categoria"
          name="link"
          value={link}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          name="cor"
          type="color"
          value={cor}
          onChange={handleChange}
        />
        <ButtonDark type="submit">Cadastrar</ButtonDark>
      </FormInputContainer>
      {categorias.length === 0 && <div>Carregando categorias...</div>}
      <ul>
        {categorias.map((categoria) => {
          return (
            <li key={`${categoria.id}`}>
              {categoria.id} - {categoria.titulo}
            </li>
          );
        })}
      </ul>
      <Link to="/">Ir para home</Link>
    </PageCadastro>
  );
}
