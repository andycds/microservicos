function eAgora() {
    let cont = 1;
    function f1() {
        console.log(cont);
    }
    cont++;
    function f2() {
        console.log(cont);
    }
    //JSON contendo as duas funções
    return { f1, f2 }
}

let eAgoraResult = eAgora();

/* neste momento, a funcao eAgora já
executou por completo e a variável
cont já foi incrementada. Seu valor final
é mantido e, assim, ambas f1 e f2 exibirão 2.
*/
eAgoraResult.f1();
eAgoraResult.f2();