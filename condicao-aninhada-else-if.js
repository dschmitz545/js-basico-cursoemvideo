/*var idade = 17
if(idade < 16) {
    console.log('Não vota')
} else {
    if(idade > 16 && idade < 18) {
        console.log('Voto opcional')
    } else {
        console.log('Voto Obrigatório!')
    }
}*/

var idade = 89
if(idade < 16){
    console.log('Não Vota')
} else if (idade < 18 || idade > 65){
    console.log('Voto Opcional')
} else {
    console.log('Voto Obrigatório')
}