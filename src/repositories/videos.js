import { API_URL } from '../config/index.js';

const URL_VIDEOS = `${API_URL}/videos`;

async function create(data) {
  return fetch(`${URL_VIDEOS}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  }).then(async (resp) => {
    if (resp.ok) {
      return await resp.json();
    }
    throw new Error(
      `Não foi possível cadastrar o vídeo: ${resp.status}: ${resp.statusText}`
    );
  });
}

export default { create };
