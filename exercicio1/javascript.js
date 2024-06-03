let resultado = document.querySelector("#resultado");
let altura = document.querySelector("#altura");
let largura = document.querySelector("#largura");
let btSomar = document.querySelector("#btSomar");

function Somatoria(){
    let alturaValor = altura.value;
    let larguraValor = largura.value;
    let area = altura.value * largura.value;

   
    let terrenoHTML = "<br><div style='width: " + larguraValor + 
    "0px; height: " + alturaValor + 
    "0px; background-color: #228B22; align-self: center; color: white; text-align: center;'>" 
    + area + " m² </div>";


    resultado.innerHTML = terrenoHTML;
}

btSomar.onclick = function(){
    Somatoria();
}
