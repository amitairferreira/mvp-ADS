const apiPsicologosUrl = 'http://localhost:8000/psicologos/all';
const apiConsultaUrl = 'http://localhost:8000/consultas/create';

async function fetchPsychologists() {
    try {
        const response = await axios.get(apiPsicologosUrl);
        const psychologists = response.data;

        const selectProfissional = document.getElementById('profissional');

        psychologists.forEach(psychologist => {
            const option = document.createElement('option');
            option.value = psychologist._id;
            option.textContent = psychologist.nome + " - " + psychologist.espec;
            selectProfissional.appendChild(option);
        });
    } catch (error) {
        console.error('Erro ao buscar psicólogos:', error);
    }
}


document.getElementById('consulta-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const profissionalId = document.getElementById('profissional').value;
    const dataHorario = document.getElementById('data-horario').value;
    console.log(document.getElementById('profissional'))

    const body = {
        paciente: '65fa37d09ad0f966c814cd4e',
        psicologo: profissionalId,
        dataConsulta: dataHorario
    };

    try {
        const response = await axios.post(apiConsultaUrl, body);
        console.log('Consulta agendada com sucesso:', response.data);
        
        window.location.href = 'pagina_inicial.html';
    } catch (error) {
        console.error('Erro ao agendar consulta:', error);
    }
});


fetchPsychologists();
