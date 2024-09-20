import styles from "./css/PokemonTipos.module.css";
import { PokemonTipo } from "./PokemonTipo";

export function PokemonTipos({ pokemon }) {
  let cantTipos = "";

  if (pokemon !== "") {
    cantTipos = pokemon.types.length;
    if (cantTipos === 1) {
      return (
        <div className={styles.unTipo}>
          <PokemonTipo tipo={pokemon.types[0].type.name} />
        </div>
      );
    } else if (cantTipos === 2) {
      return (
        <div className={styles.dosTipos}>
          <PokemonTipo tipo={pokemon.types[0].type.name} />
          <PokemonTipo tipo={pokemon.types[1].type.name} />
        </div>
      );
    }
  } else {
    return (
      <div className={styles.unTipo}>
       <PokemonTipo tipo={"missingno"}/>
      </div>
    );
  }
}
