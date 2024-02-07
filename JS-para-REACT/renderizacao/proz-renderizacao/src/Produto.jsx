import styles from './Produto.module.css'

function Produto({ nome, estoque }) {
    //if (!estoque) return null

    return <div className={`${styles.container} ${estoque ? '' : styles.indisponivel}`}>
        <h3>Produto: {nome}</h3>
        <p>
            Estoque: {estoque > 0 ? `${estoque} item(s)` : 'Indisponivel'}
        </p>
    </div>

}

export default Produto;