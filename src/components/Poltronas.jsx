import { FILEIRAS, COLUNAS, OCUPADOS } from "../data/assentos.js";
import "../styles/Poltronas.css";

export default function Poltronas({ selecionado, onSelecionar }) {
  return (
    <div className="sala" role="group" aria-label="Mapa de assentos">
      <div className="tela">Tela</div>

      {FILEIRAS.map((fileira) => (
        <div className="fileira" key={fileira}>
          <span className="letra">{fileira}</span>
          {COLUNAS.map((coluna) => {
            const id = fileira + coluna;
            const ocupado = OCUPADOS.includes(id);
            const ativo = selecionado === id;
            return (
              <button
                key={id}
                className={`poltrona ${ocupado ? "ocupada" : ""} ${ativo ? "ativa" : ""}`}
                onClick={() => onSelecionar(id)}
                aria-pressed={ativo}
                aria-label={`Assento ${id}${ocupado ? ", ocupado" : ""}`}
              >
                {coluna}
              </button>
            );
          })}
        </div>
      ))}

      <div className="legenda">
        <span>
          <i className="poltrona mini" /> Livre
        </span>
        <span>
          <i className="poltrona mini ocupada" /> Ocupado
        </span>
        <span>
          <i className="poltrona mini ativa" /> Escolhido
        </span>
      </div>
    </div>
  );
}
