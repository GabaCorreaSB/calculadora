function soma(){

    let a = Number(document.getElementById("numero_1").value.replace(',', '.'));
    let b = Number(document.getElementById("numero_2").value.replace(',', '.'));
    let resposta = document.getElementById("resultado");
    
    var conta = "";

    if (Number.isNaN(a) || Number.isNaN(b)) {
        alert("Não é um número, favor coloque um número ai bro !");
        return;
    }
    

    conta = a + b
 
    var check = conta - Math.floor(conta) !== 0;

    if (check){
        resposta.value = conta.toFixed(2);
    } else {
        resposta.value = conta;
    }
    
    }

function minus(){

    let a = Number(document.getElementById("numero_1").value.replace(',', '.'));
    let b = Number(document.getElementById("numero_2").value.replace(',', '.'));
    let resposta = document.getElementById("resultado");
     
    let conta = "";

    if (Number.isNaN(a) || Number.isNaN(b)) {
        alert("Não é um número, favor coloque um número ai bro !");
        return;
    }
    

    conta = a - b
 
    var check = conta - Math.floor(conta) !== 0;

    if (check){
        resposta.value = conta.toFixed(2);
    } else {
        resposta.value = conta;
    }
    
    }

function times(){

    let a = Number(document.getElementById("numero_1").value.replace(',', '.'));
    let b = Number(document.getElementById("numero_2").value.replace(',', '.'));
    let resposta = document.getElementById("resultado");
     
    let conta = "";

    if (Number.isNaN(a) || Number.isNaN(b)) {
        alert("Não é um número, favor coloque um número ai bro !");
        return;
    }
    
    conta = a * b
 
    var check = conta - Math.floor(conta) !== 0;

    if (check){
        resposta.value = conta.toFixed(2);
    } else {
        resposta.value = conta;
    }
    
    }

function divide(){

    let a = Number(document.getElementById("numero_1").value.replace(',', '.'));
    let b = Number(document.getElementById("numero_2").value.replace(',', '.'));
    let resposta = document.getElementById("resultado");
     
    let conta = "";
    
    if (Number.isNaN(a) || Number.isNaN(b)) {
        alert("Não é um número, favor coloque um número ai bro !");
        return;
    }
    
    b === 0 ? alert("Não pode dividir por zero!") : conta = a / b
 
    var check = conta - Math.floor(conta) !== 0;

    if (check){
        resposta.value = conta.toFixed(2);
    } else {
        resposta.value = conta;
    }
    
    }


