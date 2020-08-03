import React, { useState, useEffect } from 'react';
import PageCadastro from '../../../components/PageCadastro';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import { FormInputContainer, FormField } from '../../../components/FormField';
import ButtonDark from '../../../components/ButtonDark/style';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
export default function CadastroVideo() {
  const [categorias, setCategorias] = useState([]);
  const categoriasNames = categorias.map(({ titulo }) => titulo);

  const history = useHistory();
  const valoresIniciais = {
    titulo: 'Título padrão de video',
    url: 'https://www.youtube.com/watch?v=hhQ3RtvmfEg&feature=youtu.be',
    categoria: 'Front End',
  };

  useEffect(() => {
    const fetchCategorias = async () => {
      var apiCategorias = await categoriasRepository.getAll();
      setCategorias([...apiCategorias]);
    };
    fetchCategorias();
  }, []);

  const { values, clearForm, handleChange } = useForm(valoresIniciais);
  const { titulo, url, categoria } = values;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const categoriaId = categorias.find((c) => c.titulo === categoria).id;
      var result = await videosRepository.create({ categoriaId, ...values });
      clearForm();
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PageCadastro>
      <h1>Cadastro de Vídeo</h1>
      <FormInputContainer onSubmit={handleSubmit}>
        <FormField
          label="Título do vídeo"
          name="titulo"
          value={titulo}
          onChange={handleChange}
          autofocus={true}
        />
        <FormField
          label="Url do video"
          name="url"
          value={url}
          onChange={handleChange}
        />
        <FormField
          label="Categoria do video"
          name="categoria"
          value={categoria}
          onChange={handleChange}
          selectOptions={categoriasNames}
        />
        <ButtonDark type="submit">Cadastrar</ButtonDark>
      </FormInputContainer>
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageCadastro>
  );
}
