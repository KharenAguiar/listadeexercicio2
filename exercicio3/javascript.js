let resultado = document.querySelector("#resultado");
let pao = document.querySelector("#pao");
let broa = document.querySelector("#broa");
let btSomar = document.querySelector("#btSomar");

function Somatoria(){
    let lucroPao = parseFloat(pao.value * 0.12);
    let lucroBroa = parseFloat(broa.value * 1.50);
    let total = lucroBroa + lucroPao;
    let valorGuardado = total * 0.1;

    resultado.innerHTML = 
    "<br>" + "Lucro apenas do pão: " + lucroPao + 
    "<br>" + "Lucro apenas da Broa: " + lucroBroa +  
    "<br>" + "lucro Total: " + total +  
    "<br>" + "Valor guardado: " + valorGuardado;

}

btSomar.onclick = function(){
    Somatoria();
}
