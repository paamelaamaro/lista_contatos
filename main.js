const form = document.getElementById('form-contato');
const contato = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
});

function adicionarLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroTelefone = document.getElementById('numero-telefone');


    if (!inputNomeContato.value || !inputNumeroTelefone.value) {
        alert("Por favor, preencha tanto o nome do contato quanto o número de telefone.");
        return;
    }


    if (contato.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi inserido.`);
    } else {

        contato.push(inputNomeContato.value);
        telefone.push(inputNumeroTelefone.value);

  
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    // Limpando os campos de entrada
    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
