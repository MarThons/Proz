import { useState } from 'react'
import styles from './App.module.css'
import { usuarios } from './Lista'
import Detalhes from './Detalhes';
import Busca from './Busca';

function App() {
  let [selecionado, setSelecionado] = useState(null);
  const [busca, setBusca] = useState('');


  return <>
    <h1>Hooks Básicos</h1>

    <Busca busca={busca} setBusca={setBusca} />

    <div className={styles.container}>
      <div className={styles.lista}>
        <h2>Usuários</h2>
        <ul>
          {
            usuarios
            .filter((elemento) => elemento.nome.includes(busca))
            .map((elemento, indice) => {
              return <li key={indice} onClick={() => setSelecionado(elemento)}>
                {elemento.nome}
              </li>
            })
          }
        </ul>
      </div>
      <Detalhes selecionado={selecionado}/>
    </div>
  </>
}

export default App
