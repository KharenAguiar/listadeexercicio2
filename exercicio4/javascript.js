let resultado = document.querySelector("#resultado");
let nome = document.querySelector("#nome");
let idade = document.querySelector("#idade");
let btSomar = document.querySelector("#btSomar");

function Somatoria(){
    let nomePessoa = String(nome.value);
    let idadeEmDias = Number(idade.value * 365);

    resultado.innerHTML = 
    "<br>"+ nomePessoa + " já viveu " + idadeEmDias + " dias.";

}

btSomar.onclick = function(){
    Somatoria();
}
