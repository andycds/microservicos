const dobro = function (n) {
    return n * 2;
};
const res = dobro(4);
console.log(res);
//valor padrão para o parâmetro
const triplo = function (n = 5) {
    return 3 * n;
};
console.log(triplo());
console.log(triplo(10));