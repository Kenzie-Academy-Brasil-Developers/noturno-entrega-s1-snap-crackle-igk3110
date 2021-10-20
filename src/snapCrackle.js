//  Tarefa


// x 1 - (Function) Escreva uma função chamada snapCrackle que leva um parâmetro denominado: maxValue. 

// x 2 - (For) Esta função deve fazer um loop de 1 até maxValue (inclusive) e montar uma string com as seguintes condições para cada número:

// x 3 - (if) Se o número for ímpar, no lugar dele, concatenar "Snap" no final da string.

// x 4 - (else if) Se o número for múltiplo de 5, no lugar dele, concatenar "Crackle" no final da string.

// x 5 - (else if) Se o número for tanto ímpar quanto múltiplo de 5, no lugar dele, concatenar "SnapCrackle" no final da string.

// x 6 - (else) Se número não for nem ímpar e nem múltiplo de 5, concatenar o próprio número no final da string.

// x Seus itens devem ser separados sempre por vírgula e espaço (veja o exemplo).

// x 7 - (return) Esta função deve retornar a string obtida

// Ao ser usada a função snapCrackle(12) verá que deve nos retorna a string:

// Snap, 2, Snap, 4, SnapCrackle, 6, Snap, 8, Snap, Crackle, Snap, 12


function snapCrackle(maxValue){

    let elemento1 = ""

    for(let contador = 1; contador <= maxValue; contador++){


        if(contador % 2 !==0 && contador % 5 === 0 ){

            elemento1 += "SnapCrackle"

        } else if(contador % 2 !==0){
            elemento1 += "Snap"

        } else if(contador % 5 === 0){
            elemento1 += "Crackle"

        } else{
            elemento1 += contador
        }

        if(contador < maxValue){
            elemento1 += ", "

        }
    


    }return elemento1

}

console.log(snapCrackle(12))