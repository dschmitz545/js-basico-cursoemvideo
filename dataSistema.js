var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var seg = agora.getSeconds()


/*var hora = 00
var min = 5
var seg = 2
*/
console.log(`Agora são exatamente ${hora} horas,${min} minutos e ${seg} segundos`)
if (hora < 5) {
    console.log('Boa madrugada!')
} else if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora < 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}