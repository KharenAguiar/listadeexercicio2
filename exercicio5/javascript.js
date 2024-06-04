let resultado = document.querySelector("#resultado");
let preco = document.querySelector("#preco");
let pago = document.querySelector("#pago");
let btSomar = document.querySelector("#btSomar");

function Somatoria(){
    let valorPreco = Number(preco.value);
    let valorPago = Number(pago.value);

    let litros =  (valorPago/valorPreco);

    resultado.innerHTML = 
    "Com o preço de "+ valorPreco + " Reais <br> E com o valor pago de " + valorPago + " Reais. <br> Conseguiu abastecer: " + litros + "L por apenas "+ valorPago +" Reais";

}

btSomar.onclick = function(){
    Somatoria();
}
