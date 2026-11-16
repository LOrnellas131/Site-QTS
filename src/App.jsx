import "./styles/variables.css";
import "./styles/global.css";
import "./App.css";

import { useIngresso } from "./hooks/useIngresso";
import Header from "./components/Header";
import Poltronas from "./components/Poltronas";
import FormularioCliente from "./components/FormularioCliente";
import ResumoCondicoes from "./components/ResumoCondicoes";
import ResultadoIngresso from "./components/ResultadoIngresso";
import TabelaDecisao from "./components/TabelaDecisao";

export default function App() {
  const {
    assento,
    setAssento,
    estudante,
    setEstudante,
    idade,
    setIdade,
    condicoes,
    regra,
  } = useIngresso();

  return (
    <main className="app">
      <Header />

      <div className="colunas">
        <section className="painel">
          <h2>1. Escolha o assento</h2>
          <Poltronas selecionado={assento} onSelecionar={setAssento} />
        </section>

        <section className="painel">
          <h2>2. Dados do cliente</h2>
          <FormularioCliente
            estudante={estudante}
            onEstudante={setEstudante}
            idade={idade}
            onIdade={setIdade}
          />

          <h2>3. Respostas às condições</h2>
          <ResumoCondicoes assento={assento} condicoes={condicoes} />
          <ResultadoIngresso regra={regra} assento={assento} />
        </section>
      </div> 

      <section className="painel">
        <h2>Tabela de decisão</h2>
        <TabelaDecisao ativa={regra} />
      </section>
    </main>
  );
}
