import Produto from "./Produto"

const listaInstrumentos = [
  { nomeInstrumento: 'Violino', estoqueInstrumento: 15 },
  { nomeInstrumento: 'Flauta', estoqueInstrumento: 28 },
  { nomeInstrumento: 'Guitarra', estoqueInstrumento: 0 },
  { nomeInstrumento: 'Guitarra', estoqueInstrumento: 10 },
  { nomeInstrumento: 'Piano', estoqueInstrumento: 5 },
  { nomeInstrumento: 'Saxofone', estoqueInstrumento: 20 },
  { nomeInstrumento: 'Bateria', estoqueInstrumento: 12 },
  { nomeInstrumento: 'Trompete', estoqueInstrumento: 36 },
  { nomeInstrumento: 'Cello', estoqueInstrumento: 0 },
  { nomeInstrumento: 'Teclado', estoqueInstrumento: 25 },
  { nomeInstrumento: 'Baixo', estoqueInstrumento: 16 }
]

function App() {
  return  <>
      <h1>Renderização</h1>
      {/* <Produto nome="Guitarra" />
      <Produto nome="Bateria" estoque={10} />
      <Produto nome="Banjo" estoque={0} /> */
      }

    {
      listaInstrumentos.map((elemento, indice) => {
        return <Produto
        key={indice}
        nome={elemento.nomeInstrumento} 
        estoque={elemento.estoqueInstrumento} 
        />
      })
    }       
    </>
  
}

export default App
