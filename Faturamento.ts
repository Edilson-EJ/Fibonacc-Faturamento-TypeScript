// Faturamento diário e análise

const faturamentoMensal = [
  { dia: 1, valor: 1500 },
  { dia: 2, valor: 0 },
  { dia: 3, valor: 1800 },
  { dia: 4, valor: 1200 },
  { dia: 5, valor: 0 },
  { dia: 6, valor: 1900 },
  { dia: 7, valor: 2000 },
];

function analisarFaturamento(dados: { dia: number; valor: number }[]) {
  const diasComFaturamento = dados.filter((d) => d.valor > 0);

  const menor = Math.min(...diasComFaturamento.map((d) => d.valor));
  const maior = Math.max(...diasComFaturamento.map((d) => d.valor));

  const mediaMensal =
    diasComFaturamento.reduce((acc, d) => acc + d.valor, 0) /
    diasComFaturamento.length;

  const diasAcimaMedia = diasComFaturamento.filter(
    (d) => d.valor > mediaMensal
  ).length;

  return { menor, maior, diasAcimaMedia };
}

const resultado = analisarFaturamento(faturamentoMensal);
console.log("Menor faturamento:", resultado.menor);
console.log("Maior faturamento:", resultado.maior);
console.log("Dias acima da média:", resultado.diasAcimaMedia);
