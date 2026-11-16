import { useState } from "react";
import { OCUPADOS } from "../data/assentos.js";
import { decidir } from "../utils/decisao.js";

export function useIngresso() {
  const [assento, setAssento] = useState(null);
  const [estudante, setEstudante] = useState(false);
  const [idade, setIdade] = useState(25);

  const condicoes = {
    ocupado: assento ? OCUPADOS.includes(assento) : false,
    estudante,
    crianca: idade !== "" && Number(idade) <= 10,
  };

  const regra = assento ? decidir(condicoes) : null;

  return {
    assento,
    setAssento,
    estudante,
    setEstudante,
    idade,
    setIdade,
    condicoes,
    regra,
  };
}
