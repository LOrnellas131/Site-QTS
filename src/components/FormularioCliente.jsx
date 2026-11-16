import "../styles/FormularioCliente.css";

export default function FormularioCliente({
  estudante,
  onEstudante,
  idade,
  onIdade,
}) {
  return (
    <>
      <label className="campo">
        <input
          type="checkbox"
          checked={estudante}
          onChange={(e) => onEstudante(e.target.checked)}
        />
        É estudante?
      </label>

      <label className="campo">
        Idade
        <input
          type="number"
          min="0"
          max="120"
          value={idade}
          onChange={(e) => onIdade(e.target.value)}
        />
      </label>
    </>
  );
}
