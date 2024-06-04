let resultado = document.querySelector("#resultado");
let quilos = document.querySelector("#quilos");
let btSomar = document.querySelector("#btSomar");

function Somatoria(){
    let valorPreco = Number(quilos.value * 12);
    let quilosPego = Number(quilos.value);

    resultado.innerHTML = 
    "Com a quantidade de quilos de "+ quilosPego + " será pago o valor de: "+ valorPreco + " Reais. ";

}

btSomar.onclick = function(){
    Somatoria();
}
