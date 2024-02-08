import styles from './App.module.css'
import { useState } from 'react'

function Busca({busca, setBusca}) {
    
    return <>
    <label htmlFor="busca">Busca</label>
    <input 
    type="text" id="busca" name="busca" 
    className={styles.inputBusca} 
    value={busca}
    onChange={(e) => setBusca(e.target.value)}
    />
    </>
}

export default Busca