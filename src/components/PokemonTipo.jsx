import styles from "./css/PokemonTipo.module.css";


export function PokemonTipo( {tipo} ){
    return(
        <div className={styles[tipo]}>
            <h1>{tipo}</h1>
        </div>
    )
}