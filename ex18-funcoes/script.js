var num = document.querySelector('input#txtnum')
var lista = document.querySelector('select#resnum')
var res = document.querySelector('div#res')
num.focus()
res.innerHTML = ''

var valores = []

function isNumero(param) {
    if (Number(param) >= 1 && Number(param) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(param1, param2) {
    if (param2.indexOf(Number(param1)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    // se é um numero e ainda não foi adicionado
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        // adicionando os valores digitados no vetor
        valores.push(Number(num.value))

        // criando um elemento html do tipo option
        let item = document.createElement('option')

        // definindo o que sera escrito no select
        item.text = `valor ${num.value} adicionado`

        // adicionando o elemento criado ao elemento do tipo select do html
        lista.appendChild(item)

    } else {
        res.innerHTML = 'valor inválido ou já adicionado na lista'
    }
    num.value = ''
    num.focus()
}

function validar() {
    // validando se a lista não está vazia
    if (valores.length == 0) {
        res.innerHTML = 'Adicione valores antes de finalizar'
    } else {

        // pegando a quantidade de elementos do vetor
        let tot = valores.length

        // pegando o maior valor digitado
        let maior = valores[0]
        let menor = valores[0]

        //somando todos os valores
        let soma = 0

        // duas formas de usar o for

        for (let pos in valores) {

            // se o maior valor digitado for maior que o valor ja definido anteriormente
            if (valores[pos] > maior)
                // adiciona esse novo valor como sendo o maior valor digitado
                maior = valores[pos]
                 // tambem vai somando os valore
                soma += valores[pos]
            // se o menor valor digitado for menor que o valor ja definido anteriormente
            if (valores[pos] < menor)
                // adiciona esse novo valor como sendo o menor valor digitado
                menor = valores[pos]
        }

        /*for (let pos = 0; pos < valores.length; pos ++) {
            // se o maior valor digitado for maior que o valor ja definido anteriormente
            if (valores[pos] > maior)
                // adiciona esse novo valor como sendo o maior valor digitado
                maior = valores[pos]
                // tambem vai somando os valore
                soma += valores[pos]
            // se o menor valor digitado for menor que o valor ja definido anteriormente
            if (valores[pos] < menor)
                // adiciona esse novo valor como sendo o menor valor digitado
                menor = valores[pos]
        }*/

        //média de todos os valores
        let media = 0
        media = soma / tot

        // apresentando tudo na tela
        res.innerHTML = ''
        res.innerHTML += `<p>Temos ${tot} elementos adicionados.</p>`
        res.innerHTML += `<p>O maior valor digitado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor digitado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os elementos é: ${soma}</p>`
        res.innerHTML += `<p>A média de todos os elementos é: ${media.toFixed(2).replace('.', ',')}</p>`
    }

}