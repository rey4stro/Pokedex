import { PokemonAtributo } from "./PokemonAtributo";
import styles from "./css/PokemonStats.module.css";


export function PokemonStats({name,valor}) {
  
    

    return (
    <div>
      <div className={styles.contenedorStat}>
        <h1>{name}</h1>
        <h2>{valor}</h2>
        <div className={styles.contenedorBarra}>
          <PokemonAtributo tipo={name} elemento={valor} />
        </div>
      </div>
    </div>
  );
}
