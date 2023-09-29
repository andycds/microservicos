function demorada(tempo) {
    console.log(`demorada ${tempo}`);
    const atualMaisTempo = new Date().getTime() + tempo;
    //não esqueça do ;, única instrução no corpo do while
    while (new Date().getTime() <= atualMaisTempo);
    const d = 8 + 4;
    return d;
}
setTimeout(function () { demorada(2000) }, 2000);
setTimeout(function () { demorada(1000) }, 1000);
console.log("chegou ao fim do script principal");