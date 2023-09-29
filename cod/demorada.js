function demorada() {
    const atualMais2Segundos = new Date().getTime() + 2000
    //não esqueça do ;, única instrução no corpo do while
    while (new Date().getTime() <= atualMais2Segundos);
    const d = 8 + 4
    return d
}
const a = 2 + 3
const b = 5 + 9
//função será executada depois de, pelo menos, 500 milissegundos
setTimeout(function () {
    const d = demorada()
    console.log(d)
}, 0)

//enquanto isso, essas linhas prosseguem executando
//sem ficar esperando
const e = a + b
console.log(e)