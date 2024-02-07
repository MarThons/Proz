import InputComLabel from "./inputComLabel.jsx"
import Botao from "./botao.jsx"
import './App.css'


function App() {
  const estiloBotao = {
    color: "darkblue",
    backgroundColor: "red",
    borderRadius: '1rem',
    padding: '8px'
  }

  return <>
    <h1>Componentes</h1>
    <InputComLabel idString="nome" textoLabel="Nome">
      <p>Isso é um exemplo de children</p>
      <div>Isto é uma div</div>
      <a href="">Proz</a>
    </InputComLabel>
    <InputComLabel
      idString="idade"
      textoLabel="Idade" />

    <InputComLabel
      idString="endereço"
      textoLabel="Endereço" />

    <Botao
      textoBotao="SIM" />

    <Botao
      textoBotao="NÂO" />
    <br />
    <p></p>
    <button style={estiloBotao}>Botão avulso</button>
  </>
}

export default App
