function calculoDemorado(numero) {
    return new Promise(function (resolve, reject) {
        let res = 0;
        for (let i = 1; i <= numero; i++) {
            res += i;
        }
        resolve(res);
    });
}
// calculoDemorado(10).then((resultado) => {
//     console.log(resultado)
// })

function calculoRapidinho(numero) {
    return numero >= 0
        ? Promise.resolve((numero * (numero + 1)) / 2)
        : Promise.reject("Somente valores positivos, por favor");
}

calculoRapidinho(10)
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((err) => {
        console.log(err);
    });
calculoRapidinho(-1)
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((err) => {
        console.log(err);
    });
console.log("esperando...");