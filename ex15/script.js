function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados digitados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-H.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-H.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-H.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-H.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'foto-bebe-M.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-M.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-M.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-M.png')
            }
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }


}