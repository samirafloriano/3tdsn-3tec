window.onload = iniciar;

var formulario;

function iniciar() {
    formulario = document.getElementsByTagName('form')[0];
    formulario.addEventListener(submit, 'enviar');
}

function enviar(event){
        cadastrar();
        event.preventDefault();
}

function cadastrar(formulario){
    let formData = new FormData(formulario);
    fetch("http://3tdsn-3tec.atwebpages.com/ListarComputador.php", {
        method: "Post",
        body:formData
    }).then(resposta => resposta.text()).then(texo => console.log(texto));
    return false;
}