export interface Indicadores {
  nome: string,
  valor: number
}

export interface Simulacoes {
    tipoIndexacao: string,
    tipoRendimento: string,
    valorFinalBruto: number,
    aliquotaIR: number,
    valorPagoIR: number,
    valorTotalInvestido: number,
    valorFinalLiquido: number,
    ganhoLiquido: number,
    graficoValores: {
        comAporte: object,
        semAporte: object
    }
}

export interface SimulacoesBusca {
  tipoIndexacao: string,
  tipoRendimento: string,
}
