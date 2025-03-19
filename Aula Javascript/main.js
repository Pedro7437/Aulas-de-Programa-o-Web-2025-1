function calcula(operador){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if(isNaN(num1) || isNaN(num2)){
        document.getElementById('resultado').textContent = "Erro: um valor que não é numero foi passado.";
        return;
    }

    let resultado;

    switch(operador){

        case '+':
            resultado = num1 + num2;
            break;

        case '-':
            resultado = num1 - num2;
            break;

        case '*':
            resultado = num1 * num2;
            break;

        case '/':
            if(num2 === 0){
                document.getElementById('resultado').textContent = "Erro: Não pode dividir por zero.";
                return;
            }
            resultado = num1 / num2;
            break;
    }

    document.getElementById('resultado').textContent = "Resultado: " + resultado;

    return resultado;
}