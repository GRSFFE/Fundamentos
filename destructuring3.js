const pessoa = {
    nome: 'Eliezer Via Infinda',
    idade: 24,
    endereço: {
        rua: 'Camdem Town',
        numero: 1000
    }
}

const { nome: n, idade: i } = pessoa
console.log(n, i)