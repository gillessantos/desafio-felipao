// desafio classificador de nível de Herio
//o que deve ser utilizado
//variaveis, operadores,  laços de repetição, estrutura de decisões
// OBJETIVO
//crie variaveis para  armazenar o nome e a quantidade de experiencia, depois utilize  uma estrutura de decisões  para apresentar alumas ensagens abaixo
//Se XP for menor que 1000 ferro ; entre 1001 e 2000 bronze, 2001 e 5000 prata, 5001 e 7000 ouro, 
//7001 e 8000 Platina , 8001 e 9000 Ascendente, 9001 a 10000 imortal e maior que 100001 Radiante
// ao final deverá mostrar a mensagem "o Herou de nome  X esta no nivel xx" 

let nome = "PatoLouco"
let xp = 1.515
let nivel = "ZERO"


if (xp <= 1.000){
    nivel = "Ferro";
}else if(xp <=2.000){
    nivel = "Bronze";
}else if(xp <= 5.000){
    nivel = "Prata";
}else if (xp <= 7.000){
    nivel = "Ouro";
}else if (xp <= 8.000){
    nivel = "Platina";
}else if (xp <= 9.000){
    nivel = "Ascendente";
}else if (xp <= 10.000){
    nivel = "Imortal";
}else if (xp >10.000){
    nivel = "Radiante"
}


console.log("O Heroi de nome " + nome + " está no nível " + nivel)