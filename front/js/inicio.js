const apiUrl = 'http://localhost:8000/consultas/all';


async function getAgendamento() {

    axios.get(apiUrl)
    .then(function (response) {
        
        
        const consultas = response.data.filter(e=>{
            return e.paciente?._id == '65fa37d09ad0f966c814cd4e';
        });
        const servicosSection = document.querySelector('.servicos');

        consultas.forEach(function (consulta) {
        const divProfissional = document.createElement('div');
        divProfissional.classList.add('profissional');

        const h5 = document.createElement('h5');
        h5.textContent = 'Consulta';

        const h3Profissional = document.createElement('h3');
        h3Profissional.textContent = 'Profissional: ' + consulta.psicologo.nome;

        const h3DataHora = document.createElement('h3');
        h3DataHora.textContent = 'Data/Hora: ' + new Date(consulta.dataConsulta).toLocaleString('pt-BR');

        divProfissional.appendChild(h5);
        divProfissional.appendChild(h3Profissional);
        divProfissional.appendChild(h3DataHora);

        servicosSection.appendChild(divProfissional);
        });
    })
    .catch(function (error) {
        console.log(error);
    });
}

getAgendamento();
