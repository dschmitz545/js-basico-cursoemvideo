function contar() {
    var inicio = document.getElementById('txtinic')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpass')
    var res = document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert('[Erro], Falta informar dados')
        res.innerHTML = 'Impossível Contar'
    } else {
        res.innerHTML = 'Contando: ... </br>'

        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        // se digitado passo 0
        if (p <= 0) {
            res.innerHTML = 'Passo inválido, Considerando passo 1 </br>'
            p = 1
        }

        //contagem crescente e decresente
        if (i < f) {
            // crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += (`${c} \u{1F449}`)
            }

        } else {
            //decrescente
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += (`${c} \u{1F449}`)

            }
        }

        res.innerHTML += `\u{1F3C1}`

    }


}