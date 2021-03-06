function gerarTabuada() {
    var num = document.getElementById('txtnum')
    var tabu = document.getElementById('seltab')
    var res = document.querySelector('div#res')

    if (num.value.length == 0) {

        res.innerHTML = 'Digite um número'

    } else {
        var n = Number(num.value)
        var c = 1
        tabu.innerHTML = ''

        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            item.value = `tab${c}`
            tabu.appendChild(item)
            res.innerHTML = ''
            c++
        }

    }

}