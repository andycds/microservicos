// async function hello(nome) {
//     return "Oi, " + nome;
// }
// const boasVindas = hello("João");
// console.log(boasVindas);
// boasVindas.then((res) => console.log(res));

function fatorial(n) {
    if (n < 0) return Promise.reject("Valor não pode ser negativo");
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return Promise.resolve(res);
}

// function chamadaComThenCatch() {
//     fatorial(5)
//         .then((res) => console.log(res))
//         .catch((res) => console.log(res));

//     fatorial(-1)
//         .then((res) => console.log(res))
//         .catch((res) => console.log(res));

// }
// chamadaComThenCatch();

//para usar await tem que ser async
async function chamadaComAwait() {
    //note que não há paralelismo implícito
    //somente haverá paralelismo se a função chamada utilizar explicitamente
    const f1 = await fatorial(5);
    console.log(f1);
    try {
        const f2 = await fatorial(-1);
        console.log(f2);
    } catch (error) {
        console.log(error);
    }
}
chamadaComAwait();