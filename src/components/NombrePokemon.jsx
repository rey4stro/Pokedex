import styles from "./css/NombrePokemon.module.css"

export function NombrePokemon({pokemon}){
    
    let nombre = "";
    let id=""
    if(pokemon !== ""){
        nombre = pokemon.name;
        id=pokemon.id;
    }else{
        nombre = "missingno";
        id="desconocido";
    }
    
    
    return(
        <div className={styles.nombrePokemon}>
            <h1>{nombre}</h1>
            <h1>{id}</h1>
        </div>
    )
}