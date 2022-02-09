function soma(){

    let a = document.getElementById("numero_1");
    let b = document.getElementById("numero_2");
    let resposta = document.getElementById("resultado");
     
    let conta = "";
    let value_a = Number(a.value);
    let value_b = Number(b.value);
    
    
    // && AND
    // || OR
    // != é diferente
    // !== é diferente e verifico o tipo
    // = change evry
    // == igual
    // === igual e verfic type

    if (Number.isNaN(value_a) || Number.isNaN(value_b)) {
        alert("Não é um número, favor coloque um número ai bro !");
        return;
    }
    

    conta = value_a + value_b
 
    var check = conta - Math.floor(conta) !== 0;

    if (check){
        resposta.value = conta.toFixed(2);
    } else {
        resposta.value = conta;
    }
    
    }

function minus(){

    let a = document.getElementById("numero_1");
    let b = document.getElementById("numero_2");
    let resposta = document.getElementById("resultado");
     
    let conta = "";
    let value_a = Number(a.value);
    let value_b = Number(b.value);
    
    
    // && AND
    // || OR
    // != é diferente
    // !== é diferente e verifico o tipo
    // = change evry
    // == igual
    // === igual e verfic type

    if (Number.isNaN(value_a) || Number.isNaN(value_b)) {
        alert("Não é um número, favor coloque um número ai bro !");
        return;
    }
    

    conta = value_a - value_b
 
    var check = conta - Math.floor(conta) !== 0;

    if (check){
        resposta.value = conta.toFixed(2);
    } else {
        resposta.value = conta;
    }
    
    }

function times(){

    let a = document.getElementById("numero_1");
    let b = document.getElementById("numero_2");
    let resposta = document.getElementById("resultado");
     
    let conta = "";
    let value_a = Number(a.value);
    let value_b = Number(b.value);
    
    
    // && AND
    // || OR
    // != é diferente
    // !== é diferente e verifico o tipo
    // = change evry
    // == igual
    // === igual e verfic type

    if (Number.isNaN(value_a) || Number.isNaN(value_b)) {
        alert("Não é um número, favor coloque um número ai bro !");
        return;
    }
    

    conta = value_a * value_b
 
    var check = conta - Math.floor(conta) !== 0;

    if (check){
        resposta.value = conta.toFixed(2);
    } else {
        resposta.value = conta;
    }
    
    }

function divide(){

    let a = document.getElementById("numero_1");
    let b = document.getElementById("numero_2");
    let resposta = document.getElementById("resultado");
     
    let conta = "";
    let value_a = Number(a.value);
    let value_b = Number(b.value);
    
    
    // && AND
    // || OR
    // != é diferente
    // !== é diferente e verifico o tipo
    // = change evry
    // == igual
    // === igual e verfic type

    if (Number.isNaN(value_a) || Number.isNaN(value_b)) {
        alert("Não é um número, favor coloque um número ai bro !");
        return;
    }
    
    value_b === 0 ? alert("Não pode dividir por zero!") : conta = value_a / value_b
 
    var check = conta - Math.floor(conta) !== 0;

    if (check){
        resposta.value = conta.toFixed(2);
    } else {
        resposta.value = conta;
    }
    
    }


