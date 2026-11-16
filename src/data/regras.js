// Condições: C1 assento ocupado? | C2 é estudante? | C3 idade <= 10?
// null = "tanto faz" (a condição não altera o resultado)
export const REGRAS = [
  {
    id: "R1",
    ocupado: true,
    estudante: null,
    crianca: null,
    acao: "Recusar: assento indisponível",
    preco: null,
  },
  {
    id: "R2",
    ocupado: false,
    estudante: null,
    crianca: true,
    acao: "Ingresso infantil",
    preco: 10,
  },
  {
    id: "R3",
    ocupado: false,
    estudante: true,
    crianca: false,
    acao: "Meia-entrada",
    preco: 15,
  },
  {
    id: "R4",
    ocupado: false,
    estudante: false,
    crianca: false,
    acao: "Ingresso inteira",
    preco: 30,
  },
];
