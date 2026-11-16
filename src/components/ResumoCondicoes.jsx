import { rotulo } from "../utils/decisao.js";
import "../styles/ResumoCondicoes.css";

export default function ResumoCondicoes({ assento, condicoes }) {
  return (
    <ul className="condicoes">
      <li>
        Assento ocupado?{" "}
        <b>{assento ? rotulo(condicoes.ocupado) : "escolha um assento"}</b>
      </li>
      <li>
        É estudante? <b>{rotulo(condicoes.estudante)}</b>
      </li>
      <li>
        Idade ≤ 10? <b>{rotulo(condicoes.crianca)}</b>
      </li>
    </ul>
  );
}
