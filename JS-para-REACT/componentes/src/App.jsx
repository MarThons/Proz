import InputComLabel from "./inputComLabel.jsx"
import { Botao } from "./inputComLabel.jsx"


function App() {
  return <>
    <h1>Componentes</h1>
    <InputComLabel idString="nome" textoLabel="Nome">
      <p>Isso é um exemplo de children</p>
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
  </>
}

export default App
