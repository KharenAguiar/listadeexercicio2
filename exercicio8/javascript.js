let resultado = document.querySelector("#resultado");
let pequena = document.querySelector("#pequena");
let media = document.querySelector("#media");
let grande = document.querySelector("#grande");
let btSomar = document.querySelector("#btSomar");

function Somatoria(){
    let quantidadecamisaP = Number(pequena.value);
    let quantidadecamisaM = Number(media.value);
    let quantidadecamisaG = Number(grande.value);

    let camisaPequena = Number(pequena.value * 10);
    let camisaMedia = Number(media.value * 12);
    let camisaGrande = Number(grande.value * 15);

    let totalCamisas = camisaPequena+camisaMedia+camisaGrande;

    resultado.innerHTML = 
    "Foi pego então, "+ quantidadecamisaP +" camisa pequena (P), R$10.00 <br>"+
    "Foi pego então, "+ quantidadecamisaM +" camisa média (M), R$12.00 <br>"+
    "Foi pego então, "+ quantidadecamisaG +" camisa grande (G), R$15.00 <br>"+
    "Que o valor total deu: "+ totalCamisas + " Reais. ";

}

btSomar.onclick = function(){
    Somatoria();
}
