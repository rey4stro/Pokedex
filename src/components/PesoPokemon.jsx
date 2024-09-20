import styles from "./css/PesoPokemon.module.css";

export function PesoPokemon({pokemon}) {
    let peso = ""
    let pesoTotal = ""

    if(pokemon !== ""){
        peso = pokemon.weight;
        pesoTotal = peso / 10
    }else{
        pesoTotal = 999
    }

    return(
        <div className={styles.peso}>
            <h1>{pesoTotal} kg</h1>
        </div>
    )

}