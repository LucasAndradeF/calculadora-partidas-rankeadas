const rankingJogador = {
  vitorias: 599,
  derrotas: 300
};

function saldoVitorias() {
  return rankingJogador.vitorias - rankingJogador.derrotas;
};

function nivel() {
   switch (true) {
    case saldoVitorias() < 10:
      return "Ferro";
    case saldoVitorias() >= 11 && saldoVitorias() <= 20:
      return "Bronze";
    case saldoVitorias() >= 21 && saldoVitorias() <= 50:
      return "Prata";
    case saldoVitorias() >= 51 && saldoVitorias() <= 80:
      return "Ouro";
    case saldoVitorias() >= 81 && saldoVitorias() <= 90:
      return "Diamante";
    case saldoVitorias() >= 91 && saldoVitorias() <= 100:
      return "Lendário";
    default:
      return "Imortal";
    }
}
  console.log(`O Herói tem saldo de **${saldoVitorias()}** está no nível de **${nivel()}**`);
