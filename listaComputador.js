let dados;

function carregarDados(cb){
    fetch("http://3tdsn-3tec.atwebpages.com/ListarComputador.php")
        .then(conteudo => conteudo.text())
        .then((texto) => {
            dados = JSON.parse(texto);
            cb();
        });
}

function exibirTabela(){
    console.log(dados);
    let tabela = '';
    for(let linha in dados){
        tabela += '<tr>';
        tabela += `<td>${dados[linha].Processador}</td>`;
        tabela += `<td>${dados[linha].USB}</td>`;
        tabela += `<td>${dados[linha].Atualizacao ? "Sim" : "Não"}</td>`;
        tabela += `<td>${dados[linha].DataAtualizacao}</td>`;
        tabela += '</tr>';
    }
    document.getElementsByTagName('tbody')[0].innerHTML = tabela;
    
}

function iniciar(){
    carregarDados(exibirTabela)
}

window.onload = iniciar;