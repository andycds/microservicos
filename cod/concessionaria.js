let concessionaria = {
    cnpj: "00011122210001-45",
    endereco: {
        logradouro: "Rua A",
        numero: 10,
        bairro: "Vila J",
    },
    veiculos: [
        {
            marca: "Ford",
            modelo: "Ecosport",
            anoDeFabricacao: 2018,
        },
        {
            marca: "Chevrolet",
            modelo: "Onix",
            anoDeFabricacao: 2020,
        },
        {
            marca: "Volkswagen",
            modelo: "Nivus",
            anoDeFabricacao: 2020,
        },
    ],
};
console.log('CNPJ:' + concessionaria.cnpj);
console.log(concessionaria.endereco.bairro)
console.log('\n');
for (let veiculo of concessionaria.veiculos) {
    console.log(`Marca: ${veiculo.marca}`);
    console.log(`Modelo: ${veiculo.modelo}`);
    console.log(`Ano de Fabricação: ${veiculo.anoDeFabricacao}\n`);
}