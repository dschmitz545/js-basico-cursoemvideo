var agora = new Date()
var diaSemana = agora.getDay()

switch (diaSemana) {
    case diaSemana = 0:
        console.log('Domingo')
        break
    case diaSemana = 1:
        console.log('Segunda')
        break
    case diaSemana = 2:
        console.log('Terça')
        break
    case diaSemana = 3:
        console.log('Quarta')
        break
    case diaSemana = 4:
        console.log('Quinta')
        break
    case diaSemana = 5:
        console.log('Sexta')
        break
    case diaSemana = 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO], Dia inválido')
        break
}