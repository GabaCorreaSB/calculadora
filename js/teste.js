function conta(){
    let a = document.getElementById("numero_1");
    let b = document.getElementById("numero_2");
    let operador = document.getElementById("operador");
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
    
    var operadores = ['+', '-', '/', '*', 'x'];
    var operator = operador.value;
    const isInArray = operadores.includes(operator)


    if (!(isInArray)){
        alert("Operador inválido, coloque um dos operadores válidos ' +, -, *, x ou / ' Obrigado !");
        return;
    }

    if (operator == "+"){
        conta = value_a + value_b
    } else if (operator == '-'){
        conta = value_a - value_b
    } else if (operator == '/'){
        if (value_b == 0){
            alert('Não é possivel divisão por zero !')
        } else {
            conta = value_a / value_b
        }
    } else if (operator == '*' || operator == 'x'){
        conta = value_a * value_b
    }

    var check = conta - Math.floor(conta) !== 0;

    if (check){
        resposta.value = conta.toFixed(2);
    } else {
        resposta.value = conta;
    }
    
}