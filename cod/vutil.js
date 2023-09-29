const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex",
    "Cristina"];
const apenasComA = nomes.filter((n) => n.startsWith("A"));
console.log(apenasComA);
const res = nomes.map((nome) => nome.charAt(0));
console.log(res);
const todosComecamComA = nomes.every((n) =>
    n.startsWith("A"));
console.log(todosComecamComA);
const valores = [1, 2, 3, 4];
const soma = valores.reduce((ac, v) => ac + v);
console.log(soma);