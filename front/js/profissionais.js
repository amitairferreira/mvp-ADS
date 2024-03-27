const apiUrl = 'http://localhost:8000/psicologos/all';

async function fetchPsychologists() {
  try {
    const response = await axios.get(apiUrl);

   
    if (response.data && Array.isArray(response.data)) {
      const profissionaisSection = document.getElementById('profissionais');
      
      response.data.forEach(psicologo => {
        const profissionalHTML = `
          <div class="profissional">
            <h2>${psicologo.nome}</h2>
            <p>${psicologo.espec}</p>
            <div class="avaliacao">
              <p>${geraAvaliacaoAleatoria()}</p>
            </div>
            <button onclick="location.href='perfil.html?id=${psicologo._id}'">Saiba mais</button>
          </div>
        `;
        profissionaisSection.innerHTML += profissionalHTML;
      });
    }
  } catch (error) {
    console.error('Erro ao buscar psicólogos:', error);
  }
}

function geraAvaliacaoAleatoria() {
  const avaliacoes = ['★☆☆☆☆', '★★☆☆☆', '★★★☆☆', '★★★★☆', '★★★★★'];
  return avaliacoes[Math.floor(Math.random() * avaliacoes.length)];
}


fetchPsychologists();

