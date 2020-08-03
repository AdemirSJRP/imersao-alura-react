import { API_URL } from '../config/index.js';

const URL_CATEGORIAS = `${API_URL}/categorias`;

async function getAll() {
  return await getCategories(false);
}

async function getAllWithVideos() {
  return await getCategories();
}

async function getCategories(includeVideos = true) {
  return fetch(
    `${URL_CATEGORIAS}${includeVideos ? '?_embed=videos' : ''}`
  ).then(async (resp) => {
    if (resp.ok) {
      return await resp.json();
    }
    throw new Error(
      `Não foi possível carregar as categorias: ${resp.status}: ${resp.statusText}`
    );
  });
}

export default { getAll, getAllWithVideos };
