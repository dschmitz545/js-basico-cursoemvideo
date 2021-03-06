//condição simples
//var vel = window.prompt('Qual velocidade?')
var vel = 72
console.log(`A velocidade do seu carro é ${vel}KM/h`)

if (vel > 60) {
    console.log(`Você ultrapassou a velocidade permitida. MULTADO!`)
}
console.log(`Dirija sempre usando cinto de segurança!`)

// condição composta
var pais = 'Brasil'

if (pais == 'Brasil') {
    console.log('Você é Brasileiro')
} else {
    console.log('Você é estrangeiro')
}