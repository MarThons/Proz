import styles from './InputComLabel.module.css'

function InputComLabel({ idString, textoLabel, children }) {
    return <>
        <label className={styles.texto} htmlFor={idString}>{textoLabel}</label>
        {children}
        <input  type="text" id={idString} nome={idString} />
        <br />
    </>
}


export default InputComLabel
