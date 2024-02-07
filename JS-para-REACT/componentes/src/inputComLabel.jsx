function InputComLabel({ idString, textoLabel, children }) {
    return <>
        <label htmlFor={idString}>{textoLabel}</label>
        {children}
        <input type="text" id={idString} nome={idString} />
        <br />
    </>
}

function Botao({textoBotao}){
    return <button>
        {textoBotao}
    </button>
}

export default InputComLabel  
export {Botao} 