let resultado = document.querySelector("#resultado");
let qtddCavalo = document.querySelector("#qtddCavalo");
let btSomar = document.querySelector("#btSomar");

function Somatoria(){
    let cavalo = Number(qtddCavalo.value);
    let ferraduras = cavalo * 4;

    resultado.textContent = "Vai precisa de: " + ferraduras + " Ferraduras";
}

btSomar.onclick = function(){
    Somatoria();
}
