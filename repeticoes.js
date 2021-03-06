
var con = 1
var don = 1


while (con <= 50) {
    console.log(`Olá,${con}`)
    con++
}

do {
    console.log(`Tudo bem,${don}`)
    don++
} while (don <= 50)

for (var bom = 1; bom <= 20; bom++) {
    console.log(`Testando o for, ${bom}`)
}

let cdf = [5, 23, 45, 89, 43, 44, 7, 4, 3, 2, 1, 0]
// padrao novo do for da ecma
for (let nov in cdf) {
    console.log(`Posição de novo ${cdf[nov]}`)

}

// for padrão da maioria das linguagens
let abc = [36, 56, 48, 4, 2, 21]
//abc.sort()
//console.log(typeof(abc))
//console.log(abc.toString())
//console.log(typeof(abc))

for (let pos = 0; pos < abc.length; pos++) {
    console.log(`valores ${abc[pos]}`)

}