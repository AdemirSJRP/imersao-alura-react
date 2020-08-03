import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        var newCategorias = await categoriasRepository.getAllWithVideos();
        setCategorias([...newCategorias]);
        console.log('categorias', newCategorias);
      } catch (error) {
        console.error(error);
        setCategorias([]);
      }
    }
    fetchData();
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {categorias.length === 0 && <h4>Carregando categorias...</h4>}
      {categorias.map((categoria, i) => (
        <div key={categoria.id}>
          {i === 0 && (
            <BannerMain
              videoTitle={categoria.videos[0].titulo}
              url={categoria.videos[0].url}
              videoDescription={
                'O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!'
              }
            />
          )}
          <Carousel ignoreFirstVideo={i === 0} category={categoria} />
        </div>
      ))}
    </PageDefault>
  );
}

export default Home;
