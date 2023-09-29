let calculadora = {
    //pode ser arrow function
    soma: (a, b) => a + b,
    //e função comum também
    subtracao: function (a, b) {
        return a - b;
    },
};
console.log(`2 + 3 = ${calculadora.soma(2, 3)}`);
console.log(`2 - 3 = ${calculadora.subtracao(2, 3)}`);