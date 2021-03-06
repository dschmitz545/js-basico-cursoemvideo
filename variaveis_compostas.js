let numero = [05, 08, 04, 02, 09]
let a = 1
let b = 5
numero[4] = 41  //adiciona o valor 41 na posição 4 do vetor
numero[5] = 50  //adiciona o valor 50 na posição 5 do vetor
numero[6] = 56  //adiciona o valor 56 na posição 6 do vetor
numero[9] = 112  //adiciona o valor 56 na posição 6 do vetor
console.log(numero)

// tamanho do vetor
console.log(numero.length)

// ordena o vetor
console.log(numero.sort())

// funciona em formato de pilha
// FIFO
numero.push(7) //adiciona mais um indice no vetor, e adiciona o valor 7
numero.push(1) //adiciona mais um indice no vetor, e adiciona o valor 1

// remove o ultimo elemento do vetor e o seu valor
numero.pop(1)
numero.pop(7)
numero.pop(56)
numero.pop(50)
console.log(numero)

// for padrão da maioria das linguagens
let abc = [36, 56, 48, 4, 2, 21]
abc.sort()
console.log(typeof(abc))
console.log(abc.toString())
console.log(typeof(abc))

for (let pos = 0; pos < abc.length; pos++) {
    console.log(`valores ${abc[pos]}`)

}

// padrao novo do for da ecma
let cdf = [5, 23, 45, 89, 43, 44, 7, 4, 3, 2, 1, 0]
//cdf.sort()
for (let nov in cdf) {
    console.log(`Posição de novo ${cdf[nov]}`)

}

// procurar o valor 4 dentro de um vetor e retorna o numero do indice
console.log(cdf.indexOf(4))