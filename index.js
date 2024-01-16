let nome = "Jack"
let xp = 3000
let nivel = ""

if (xp <= 1000) {
    nivel = "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
  } else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
  } else if (xp >= 10001) {
    nivel = "Radiante";
  }

  switch (nivel) {
    case "Ferro":
        console.log("(Sua jornada apenas começou, siga em frente!)");
        break;
    case "Bronze":
        console.log("(Acabou de dar o segundo passo, ainda há muito a explorar.)");
        break;
    case "Prata":
        console.log("(Continue, continue, continue!)");
        break;
    case "Ouro":
        console.log("(É isso aí, aproveite esse patamar dourado e siga em frente!)");
        break;
    case "Platina":
        console.log("(Você está brilhando, mas ainda pode alcançar muito mais.)");
        break;
    case "Ascendente":
        console.log("(A sua ascensão ainda não está completa, prossiga.)");
        break;
    case "Imortal":
        console.log("(Você superou o patamar dos mortais, só resta mais um passo a seguir.)");
        break;   
    case "Radiante":
        console.log("(Parabéns! Você evoluiu além do inimaginável, sinta-se orgulhoso.)");
        break;
}
console.log("O herói " + nome + ", está no nível " + nivel + ". ")