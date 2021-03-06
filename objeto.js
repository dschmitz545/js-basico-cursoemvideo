// array - retorna do tipo objeto
let amigo = []
//console.log(typeof (amigo))

// objeto - tambem retorna do tipo objeto
let vizinho = {
    nome: 'Jose',
    sexo: 'Masculino',
    peso: 89.4,
    engordar(p = 0) {
        console.log('Engordou')
        this.peso += p

    }
}
//console.log(typeof (vizinho))
//console.log(vizinho)
vizinho.engordar(4)
console.log(`${vizinho.nome} pesa ${vizinho.peso}kg`)