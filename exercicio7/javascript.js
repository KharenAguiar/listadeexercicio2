let resultado = document.querySelector("#resultado");
let dias = document.querySelector("#dias");
let meses = document.querySelector("#meses");
let btSomar = document.querySelector("#btSomar");

function Somatoria(){
    let diasMes = Number(meses.value * 30);
    let Dias = Number(dias.value);

    let totalDias = Dias+diasMes;

    resultado.innerHTML = 
    "Já se passaram "+ totalDias + " Dias. ";

}

btSomar.onclick = function(){
    Somatoria();
}
