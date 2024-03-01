const faturamentoMensal = {
    Janeiro: [
      { dia: 1, valor: 1000 },
      { dia: 2, valor: 1500 },
      { dia: 3, valor: 1200 },
      { dia: 4, valor: 1800 },
      { dia: 5, valor: 1100 },
      { dia: 6, valor: 2200 },
      { dia: 7, valor: 12400 },
      { dia: 8, valor: 1600 },
      { dia: 9, valor: 12070 },
      { dia: 10, valor: 1200 },
      { dia: 11, valor: 1240 },
      { dia: 12, valor: 2200 },
      { dia: 13, valor: 4200 }
      // Adicione os dados de faturamento para cada dia do mês
    ]
    // Adicione os dados para cada mês
  }
  
  function calcularFaturamento(faturamento) {
    let menorValor = Infinity
    let maiorValor = -Infinity
    let somaFaturamento = 0
    let diasAcimaDaMedia = 0
  
    // Calcular soma e encontrar menor e maior valor
    for (const mes in faturamento) {
      for (const dia of faturamento[mes]) {
        if (dia.valor < menorValor) {
          menorValor = dia.valor
        }
        if (dia.valor > maiorValor) {
          maiorValor = dia.valor
        }
        somaFaturamento += dia.valor
      }
    }
  
    // Calcular média mensal
    const diasNoMes = Object.values(faturamento).reduce(
      (total, mes) => total + mes.length,
      0
    )
    const mediaMensal = somaFaturamento / diasNoMes
  
    // Contar dias acima da média
    for (const mes in faturamento) {
      for (const dia of faturamento[mes]) {
        if (dia.valor > mediaMensal) {
          diasAcimaDaMedia++
        }
      }
    }
  
    return {
      menorValor,
      maiorValor,
      diasAcimaDaMedia
    }
  }
  
  const resultado = calcularFaturamento(faturamentoMensal)
  console.log('Menor valor de faturamento:', resultado.menorValor)
  console.log('Maior valor de faturamento:', resultado.maiorValor)
  console.log('Número de dias acima da média:', resultado.diasAcimaDaMedia)