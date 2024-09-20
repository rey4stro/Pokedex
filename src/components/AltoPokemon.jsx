import styles from "./css/AltoPokemon.module.css";

export function AltoPokemon({pokemon}){

    let alto = ""
    let altoTotal = ""

    if(pokemon !== ""){
        alto = pokemon.height;
        altoTotal = alto / 10;
    }else{
        altoTotal = 999;
    }


    return(
        <div className={styles.alto}>
            <h1>{altoTotal} m</h1>
        </div>
    )
}