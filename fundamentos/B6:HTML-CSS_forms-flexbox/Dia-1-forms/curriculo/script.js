const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Paraná', 'Paraíba', 'Pará', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondonia', 'Roraima', 'Santa Catarina', 'Sergipe', 'São Paulo', 'Tocantins'];
const selectForEstados = document.getElementById('estados-br');
const buttonSubmit = document.querySelector('#submit-button');
const resumoLastJob = document.getElementById('resumo');
const cargo = document.getElementById('cargo');
const descriptionCargo = document.getElementById('desc-cargo');
const begginCargo = document.querySelector('#date-cargo')
const textCurriculum = document.getElementById('curriculum');

function listEstados () {
    for (let index = 0; index < estados.length; index++) {
        let eachEstado = document.createElement('option');
        eachEstado.name='estado';
        eachEstado.innerText = estados[index];
        selectForEstados.appendChild(eachEstado);
    }
}
listEstados();

buttonSubmit.addEventListener('click', function(event) {
    event.preventDefault();

    implementarCurriculum();
})

function implementarCurriculum() {
    if (resumoLastJob.value == '') {
        alert ("Erro: resumo inválido.");
        //console.log("Erro: alguma entrada do campo 'Último emprego' está inválida.");
    }
    else {
        textCurriculum.textContent = "Descrição do cargo: "+ resumoLastJob.value + "\nÚltimo cargo: " + cargo.value + "\nResumo do cargo: " + descriptionCargo.value + "\nData de início no cargo: " + begginCargo.value;
    }
}