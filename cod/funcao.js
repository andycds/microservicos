function hello(nome) {
    console.log('Hello, ' + nome)
}
hello('Pedro')

function hello() {
    console.log('Oi')
}
hello()
//cuidado, aqui redefinimos a função sem parâmetros
function soma(a, b) {
    return a + b;
}
const res = soma(2, 3)
console.log(res)