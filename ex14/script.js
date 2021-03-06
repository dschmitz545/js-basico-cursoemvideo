function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundo = data.getSeconds()
    //var hora = 22
    


    msg.innerHTML = `Hora Agora: ${hora}:${minutos}:${segundo}`
    msg.innerHTML += '<p></p>'

    if(hora >= 0 && hora < 12) {

        img.src = 'fotomanha.png'
        document.body.style.background = '#ece0d4'
        msg.innerHTML += '<p>Bom dia!</p>'

    } else if (hora >= 12 && hora <= 18) {

        img.src = 'fototarde.png'
        document.body.style.background = '#f99949'
        msg.innerHTML += '<p>Boa Tarde!</p>'

    } else {

        img.src = 'fotonoite.png'
        document.body.style.background = '#1a0e22'
        msg.innerHTML += '<p>Boa Noite!</p>'
    }
}