import { useEffect } from "react"
import styles from "./css/PokemonAtributo.module.css";


export function PokemonAtributo( { tipo , elemento} ){

    
    useEffect(()=> {
        let porcentaje = (elemento*100)/255

        document.getElementById(tipo).style.width = porcentaje + "%";
    })

    return(
        <div className={styles[tipo]} id={tipo}> </div>
    )

}