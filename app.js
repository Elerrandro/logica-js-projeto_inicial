alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = prompt("Escolha um número máximo para o jogo.");
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 0;

// enquanto chute for diferente do numeroSecreto continue repetindo o bloco de código
while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e " + numeroMaximo);
    tentativas++ // É a mesma coisa que tentativas = tentativas + 1
    
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else if (chute > numeroSecreto) {
        alert("O número secreto é menor que (" + chute + ")");
    } else if (chute < numeroSecreto) {
        alert("O número secreto é maior que (" + chute + ")");
    };
};

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert("Isso ai! Você descobriu o número secreto (" + numeroSecreto + ")" + " com (" + tentativas + ") " + palavraTentativa); // Concatenização

// if (tentativas > 1) {
//     alert("Isso ai! Você descobriu o número secreto (" + numeroSecreto + ")" + " com (" + tentativas + ") tentativas."); // Concatenização
// } else {
//     alert("Isso ai! Você descobriu o número secreto (" + numeroSecreto + ")" + " com (" + tentativas + ") tentativa.");
// };