/*Função que utiliza 2 números e retorna o
maior entre eles
*/

//variável que recebe dois números que serão os parâmetros da função.
let maiorValor = max(23,15); {
    console.log(maiorValor);
}

//A função recebe os dois parâmetros e compara qual deles é o maior.
function max (numero1,numero2) {
    if (numero1 > numero2)
        return numero1;
    else return numero2;
}

