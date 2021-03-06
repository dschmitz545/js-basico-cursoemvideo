// diz se é par ou impar
function parimp(n) {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'impar'

    }
}

// soma dois numeros
// precaução, caso nao seja passado um parametro
function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}

// jogar uma funcao em uma variavel
let v = function (x) {
    return x * 2
}


// fatorial de um numero
function fatorial(m) {
    let fat = 1
    for (let c = m; c > 1; c--) {
        fat *= c
    }

    return fat
}

// recursividade
// fatorial recursivo
function fatrec(bn) {
    if (bn == 1 ) {
        return 1
    } else {
        return bn * fatrec(bn-1)
    }
}

let res = parimp(21)
console.log(res)

let lun = soma(7,)
console.log(lun)

console.log(v(33))
console.log(fatorial(5))
console.log(fatrec(5))