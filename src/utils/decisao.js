import { REGRAS } from "../data/regras.js";

// Implementa a tabela de decisão: devolve a regra que se aplica
export function decidir({ ocupado, estudante, crianca }) {
  return REGRAS.find(
    (r) =>
      r.ocupado === ocupado &&
      (r.estudante === null || r.estudante === estudante) &&
      (r.crianca === null || r.crianca === crianca),
  );
}

// Texto para exibir um valor de condição
export const rotulo = (v) => (v === null ? "—" : v ? "Sim" : "Não");
