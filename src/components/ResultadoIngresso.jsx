import "../styles/ResultadoIngresso.css";

export default function ResultadoIngresso({ regra, assento }) {
  if (!regra) {
    return (
      <div className="resultado">
        <strong>Escolha um assento para ver o resultado.</strong>
      </div>
    ); 
  }

  return (
    <div className={`resultado ${regra.preco ? "" : "erro"}`}>
      <small>Regra {regra.id}</small>
      <strong>{regra.acao}</strong>
      {regra.preco && (
        <span>
          R$ {regra.preco},00 · assento {assento}
        </span>
      )}
    </div>
  );
}
